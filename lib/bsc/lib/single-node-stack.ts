import * as cdk from "aws-cdk-lib";
import * as cdkConstructs from "constructs";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as iam from "aws-cdk-lib/aws-iam";
import * as s3Assets from "aws-cdk-lib/aws-s3-assets";
import * as path from "path";
import * as fs from "fs";
import * as nodeCwDashboard from "./assets/node-cw-dashboard"
import * as cw from 'aws-cdk-lib/aws-cloudwatch';
import * as constants from "../../constructs/constants";
import { SingleNodeConstruct } from "../../constructs/single-node"
import * as configTypes from "./config/bscConfig.interface";
import { BscNodeSecurityGroupConstructs } from "./constructs/bsc-node-security-group"
import * as nag from "cdk-nag";

export interface BscSingleNodeStackProps extends cdk.StackProps, configTypes.BscBaseNodeConfig {
}

export class BscSingleNodeStack extends cdk.Stack {
    constructor(scope: cdkConstructs.Construct, id: string, props: BscSingleNodeStackProps) {
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
            bscNetwork,
            nodeConfiguration,
            snapshotsUrl,
            dataVolume,
            downloadSnapshot,
        } = props;

        // Using default VPC
        const vpc = ec2.Vpc.fromLookup(this, "vpc", { isDefault: true });

        // Setting up the security group for the node from Ethereum-specific construct
        const instanceSG = new BscNodeSecurityGroupConstructs (this, "security-group", {
            vpc: vpc,
        })

        // Making our scripts and configis from the local "assets" directory available for instance to download
        const asset = new s3Assets.Asset(this, "assets", {
            path: path.join(__dirname, "assets"),
        });

        // Getting the snapshot bucket name and IAM role ARN from the common stack
        const importedInstanceRoleArn = cdk.Fn.importValue("BscNodeInstanceRoleArn");

        const instanceRole = iam.Role.fromRoleArn(this, "iam-role", importedInstanceRoleArn);

        // Making sure our instance will be able to read the assets
        asset.bucket.grantRead(instanceRole);

        // Setting up the node using generic Single Node constract
        const node = new SingleNodeConstruct(this, "single-node", {
            instanceName: STACK_NAME,
            instanceType,
            dataVolumes: [dataVolume],
            machineImage: new ec2.AmazonLinuxImage({
                generation: ec2.AmazonLinuxGeneration.AMAZON_LINUX_2,
                kernel:ec2.AmazonLinuxKernel.KERNEL5_X,
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
        const userData = fs.readFileSync(path.join(__dirname, "assets", "user-data", "node.sh")).toString();

        const dataVolumeSizeBytes = dataVolume.sizeGiB * constants.GibibytesToBytesConversionCoefficient;

        const modifiedUserData = cdk.Fn.sub(userData, {
            _AWS_REGION_: REGION,
            _ASSETS_S3_PATH_: `s3://${asset.s3BucketName}/${asset.s3ObjectKey}`,
            _STACK_NAME_: STACK_NAME,
            _BSC_SNAPSHOTS_URI_: snapshotsUrl,
            _STACK_ID_: STACK_ID,
            _NODE_CF_LOGICAL_ID_: node.nodeCFLogicalId,
            _BSC_NODE_TYPE_: nodeConfiguration,
            _DATA_VOLUME_TYPE_: dataVolume.type,
            _DATA_VOLUME_SIZE_: dataVolumeSizeBytes.toString(),
            _BSC_DOWNLOAD_SNAPSHOT_: downloadSnapshot.toString(),

            _BSC_NETWORK_: bscNetwork,
            _LIFECYCLE_HOOK_NAME_: constants.NoneValue,
            _AUTOSCALING_GROUP_NAME_: constants.NoneValue,
        });

        // Adding modified userdata script to the instance prepared fro us by Single Node constract
        node.instance.addUserData(modifiedUserData);

        // Adding CloudWatch dashboard to the node
        const dashboardString = cdk.Fn.sub(JSON.stringify(nodeCwDashboard.SyncNodeCWDashboardJSON), {
            INSTANCE_ID:node.instanceId,
            INSTANCE_NAME: STACK_NAME,
            REGION: REGION,
        })

        new cw.CfnDashboard(this, 'single-cw-dashboard', {
            dashboardName: `${STACK_NAME}-${node.instanceId}`,
            dashboardBody: dashboardString,
        });

        new cdk.CfnOutput(this, "single-instance-id", {
            value: node.instanceId,
        });

        // Adding suppressions to the stack
        nag.NagSuppressions.addResourceSuppressions(
            this,
            [
                {
                    id: "AwsSolutions-IAM5",
                    reason: "Need read and write access to the S3 bucket",
                },
            ],
            true
        );
    }
}
