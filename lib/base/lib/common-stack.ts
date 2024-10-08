import * as cdk from "aws-cdk-lib";
import * as cdkConstructs from "constructs";
import * as iam from 'aws-cdk-lib/aws-iam';
import * as nag from "cdk-nag";

export interface BaseCommonStackProps extends cdk.StackProps {

}

export class BaseCommonStack extends cdk.Stack {
  AWS_STACKNAME = cdk.Stack.of(this).stackName;
  AWS_ACCOUNT_ID = cdk.Stack.of(this).account;

  constructor(scope: cdkConstructs.Construct, id: string, props: BaseCommonStackProps) {
    super(scope, id, props);

    const region = cdk.Stack.of(this).region;

    const instanceRole = new iam.Role(this, `node-role`, {
      assumedBy: new iam.ServicePrincipal("ec2.amazonaws.com"),
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName("AmazonSSMManagedInstanceCore"),
        iam.ManagedPolicy.fromAwsManagedPolicyName("CloudWatchAgentServerPolicy"),
      ],
    });

    instanceRole.addToPolicy(new iam.PolicyStatement({
      // Can't target specific stack: https://github.com/aws/aws-cdk/issues/22657
      resources: ["*"],
      actions: ["cloudformation:SignalResource"],
    }));

    instanceRole.addToPolicy(new iam.PolicyStatement({
      resources: [`arn:aws:autoscaling:${region}:${this.AWS_ACCOUNT_ID}:autoScalingGroup:*:autoScalingGroupName/base-*`],
      actions: ["autoscaling:CompleteLifecycleAction"],
    }));

    instanceRole.addToPolicy(
      new iam.PolicyStatement({
          resources: [
            "arn:aws:s3:::base-snapshots-*-archive",
				    "arn:aws:s3:::base-snapshots-*-archive/*"
          ],
          actions: ["s3:*Object"],
    }));

    new cdk.CfnOutput(this, "Instance Role ARN", {
      value: instanceRole.roleArn,
      exportName: "BaseNodeInstanceRoleArn",
    });

    /**
     * cdk-nag suppressions
     */

    nag.NagSuppressions.addResourceSuppressions(
      this,
      [
        {
          id: "AwsSolutions-IAM4",
          reason: "AmazonSSMManagedInstanceCore and CloudWatchAgentServerPolicy are restrictive enough",
        },
        {
          id: "AwsSolutions-IAM5",
          reason: "Can't target specific stack: https://github.com/aws/aws-cdk/issues/22657",
        },
      ],
      true
    );
  }
}
