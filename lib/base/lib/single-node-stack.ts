import * as cdk from "aws-cdk-lib";
import * as cdkConstructs from "constructs";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as iam from "aws-cdk-lib/aws-iam";
import * as s3Assets from "aws-cdk-lib/aws-s3-assets";
import * as path from "path";
import * as fs from "fs";
import * as nodeCwDashboard from "./assets/node-cw-dashboard"
import * as cw from 'aws-cdk-lib/aws-cloudwatch';
import * as nag from "cdk-nag";
import { SingleNodeConstruct } from "../../constructs/single-node"
import * as configTypes from "./config/baseConfig.interface";
import * as constants from "../../constructs/constants";
import { BaseNodeSecurityGroupConstruct } from "./constructs/base-node-security-group";

export interface BaseSingleNodeStackProps extends cdk.StackProps {
    instanceType: ec2.InstanceType;
    instanceCpuType: ec2.AmazonLinuxCpuType;
    baseNetworkId: configTypes.BaseNetworkId;
    dataVolume: configTypes.BaseDataVolumeConfig;
}

export class BaseSingleNodeStack extends cdk.Stack {
    constructor(scope: cdkConstructs.Construct, id: string, props: BaseSingleNodeStackProps) {
        super(scope, id, props);

        // Setting up necessary environment variables
        const REGION = cdk.Stack.of(this).region;
        const STACK_NAME = cdk.Stack.of(this).stackName;
        const STACK_ID = cdk.Stack.of(this).stackId;
        const availabilityZones = cdk.Stack.of(this).availabilityZones;
        const chosenAvailabilityZone = availabilityZones.slice(0, 1)[0];

        // Getting our config from initialization properties
        const {
            instanceType,
            instanceCpuType,
            baseNetworkId,
            dataVolume,
        } = props;

        // Using default VPC
        const vpc = ec2.Vpc.fromLookup(this, "vpc", { isDefault: true });

        // Setting up the security group for the node from Base-specific construct
        const instanceSG = new BaseNodeSecurityGroupConstruct (this, "security-group", {
            vpc: vpc,
        })

        // Making our scripts and configis from the local "assets" directory available for instance to download
        const asset = new s3Assets.Asset(this, "assets", {
            path: path.join(__dirname, "assets"),
        });

        // Getting the IAM role ARN from the common stack
        const importedInstanceRoleArn = cdk.Fn.importValue("BaseNodeInstanceRoleArn");
        const ambEthereumNodeRpcUrlWithBillingToken = cdk.Fn.importValue("BaseAmbEthereumNodeRpcUrlWithBillingToken");

        const instanceRole = iam.Role.fromRoleArn(this, "iam-role", importedInstanceRoleArn);

        // Making sure our instance will be able to read the assets
        asset.bucket.grantRead(instanceRole);

        // Setting up the node using generic Single Node constract
        if (instanceCpuType === ec2.AmazonLinuxCpuType.ARM_64) {
            throw new Error("ARM_64 is not yet supported");
        }

        const node = new SingleNodeConstruct(this, "rpc-node", {
            instanceName: STACK_NAME,
            instanceType,
            dataVolumes: [dataVolume],
            rootDataVolumeDeviceName: "/dev/xvda",
            machineImage: new ec2.AmazonLinuxImage({
                generation: ec2.AmazonLinuxGeneration.AMAZON_LINUX_2,
                cpuType: instanceCpuType,
            }),
            vpc,
            availabilityZone: chosenAvailabilityZone,
            role: instanceRole,
            securityGroup: instanceSG.securityGroup,
            vpcSubnets: {
                subnetType: ec2.SubnetType.PUBLIC,
            },
        });

        // Parsing user data script and injecting necessary variables
        const nodeStartScript = fs.readFileSync(path.join(__dirname, "assets", "user-data", "node.sh")).toString();
        const dataVolumeSizeBytes = dataVolume.sizeGiB * constants.GibibytesToBytesConversionCoefficient;

        const modifiedInitNodeScript = cdk.Fn.sub(nodeStartScript, {
            _REGION_: REGION,
            _ASSETS_S3_PATH_: `s3://${asset.s3BucketName}/${asset.s3ObjectKey}`,
            _STACK_NAME_: STACK_NAME,
            _NODE_CF_LOGICAL_ID_: node.nodeCFLogicalId,
            _DATA_VOLUME_TYPE_: dataVolume.type,
            _DATA_VOLUME_SIZE_: dataVolumeSizeBytes.toString(),
            _NETWORK_ID_: baseNetworkId,
            _LIFECYCLE_HOOK_NAME_: constants.NoneValue,
            _AUTOSCALING_GROUP_NAME_: constants.NoneValue,
            _AUTOSTART_CONTAINER_: "true",
            _FORMAT_DISK_: "true",
            _L1_ENDPOINT_: ambEthereumNodeRpcUrlWithBillingToken,
        });

        node.instance.addUserData(modifiedInitNodeScript);

        // Adding CloudWatch dashboard to the node
        const dashboardString = cdk.Fn.sub(JSON.stringify(nodeCwDashboard.SyncNodeCWDashboardJSON), {
            INSTANCE_ID:node.instanceId,
            INSTANCE_NAME: STACK_NAME,
            REGION: REGION,
        })

        new cw.CfnDashboard(this, 'base-cw-dashboard', {
            dashboardName: STACK_NAME,
            dashboardBody: dashboardString,
        });

        new cdk.CfnOutput(this, "node-instance-id", {
            value: node.instanceId,
        });

        // Adding suppressions to the stack
        nag.NagSuppressions.addResourceSuppressions(
            this,
            [
                {
                    id: "AwsSolutions-IAM5",
                    reason: "Need read access to the S3 bucket with assets",
                },
            ],
            true
        );
    }
}