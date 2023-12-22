import {Match, Template} from "aws-cdk-lib/assertions";
import * as cdk from "aws-cdk-lib";
import * as dotenv from 'dotenv';

dotenv.config({path: './test/.env-test'});
import * as config from "../lib/config/baseConfig";
import {BaseSingleNodeStack} from "../lib/single-node-stack";

describe("BaseSingleNodeStack", () => {
  let app: cdk.App;
  let baseSingleNodeStack: BaseSingleNodeStack;
  let template: Template;
  beforeAll(() => {
    app = new cdk.App();

    // Create the BaseSingleNodeStack.
    baseSingleNodeStack = new BaseSingleNodeStack(app, "base-single-node", {
      stackName: `base-single-node-${config.baseConfig.accountId}`,
      env: {account: config.baseConfig.accountId, region: config.baseConfig.region},

      instanceType: config.baseNodeConfig.instanceType,
      instanceCpuType: config.baseNodeConfig.instanceCpuType,
      baseVersion: config.baseNodeConfig.baseVersion,
      nodeConfiguration: config.baseNodeConfig.nodeConfiguration,
      dataVolume: config.baseNodeConfig.dataVolume,
      baseNetworkId: config.baseNodeConfig.baseNetworkId
    });

    template = Template.fromStack(baseSingleNodeStack);
  });

  test("Check Security Group", () => {
    // Has EC2 instance security group.
    template.hasResourceProperties("AWS::EC2::SecurityGroup", {
      GroupDescription: Match.anyValue(),
      VpcId: Match.anyValue(),
      SecurityGroupEgress: [
        {
          "CidrIp": "0.0.0.0/0",
          "Description": "Allow all outbound traffic by default",
          "IpProtocol": "-1"
        }
      ],
      SecurityGroupIngress: [
        {
          "CidrIp": "0.0.0.0/0",
          "Description": "P2P",
          "FromPort": 9222,
          "IpProtocol": "tcp",
          "ToPort": 9222
        },
        {
          "CidrIp": "0.0.0.0/0",
          "Description": "P2P",
          "FromPort": 9222,
          "IpProtocol": "udp",
          "ToPort": 9222
        },
        {
          "CidrIp": "1.2.3.4/5",
          "Description": "Base Client RPC",
          "FromPort": 8545,
          "IpProtocol": "tcp",
          "ToPort": 8545
        }
      ]
    })
  });


  test("Check EC2 Settings", () => {
    // Has EC2 instance with node configuration
    template.hasResourceProperties("AWS::EC2::Instance", {
      AvailabilityZone: Match.anyValue(),
      UserData: Match.anyValue(),
      BlockDeviceMappings: [
        {
          DeviceName: "/dev/sda1",
          Ebs: {
            DeleteOnTermination: true,
            Encrypted: true,
            Iops: 3000,
            VolumeSize: 46,
            VolumeType: "gp3"
          }
        }
      ],
      IamInstanceProfile: Match.anyValue(),
      ImageId: Match.anyValue(),
      InstanceType: "m6a.2xlarge",
      Monitoring: true,
      PropagateTagsToVolumeOnCreation: true,
      SecurityGroupIds: Match.anyValue(),
      SubnetId: Match.anyValue(),
    });

    // // Has EBS data volume.
    template.hasResourceProperties("AWS::EC2::Volume", {
      AvailabilityZone: Match.anyValue(),
      Encrypted: true,
      Iops: 3000,
      MultiAttachEnabled: false,
      Size: 1000,
      Throughput: 700,
      VolumeType: "gp3"
    })

    // Has EBS data volume attachment.
    template.hasResourceProperties("AWS::EC2::VolumeAttachment", {
      Device: "/dev/sdf",
      InstanceId: Match.anyValue(),
      VolumeId: Match.anyValue(),
    })
  });

  test("Check CloudWatch Dashboard", () => {
    // Has CloudWatch dashboard.
    template.hasResourceProperties("AWS::CloudWatch::Dashboard", {
      DashboardBody: Match.anyValue(),
      DashboardName: `base-single-node-${config.baseConfig.accountId}`
    })
  });
});