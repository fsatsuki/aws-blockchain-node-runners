"use strict";(self.webpackChunkaws_blockchain_node_runners=self.webpackChunkaws_blockchain_node_runners||[]).push([[950],{8116:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>x,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var s=n(4848),l=n(8453);function o(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components},{Details:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"sample-aws-blockchain-node-runner-app-for-scroll-nodes",children:"Sample AWS Blockchain Node Runner app for Scroll Nodes"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Contributed by"})})}),(0,s.jsx)(t.tbody,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"https://github.com/alickmail",children:"@alickmail"})})})})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.scroll.io/en/getting-started/overview/",children:"Scroll"}),' is a "Layer 2" scaling solution for Ethereum leveraging zero knowledge proofs. This blueprint helps to deploy Scroll nodes (L2Geth) on AWS as RPC nodes and use ',(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/ethereum-concepts.html",children:"Amazon Managed Blockchain Access Ethereum"}),' node for "Layer 1". It is meant to be used for development, testing or Proof of Concept purposes.']}),"\n",(0,s.jsx)(t.h2,{id:"overview-of-deployment-architectures-for-single-node-setups",children:"Overview of Deployment Architectures for Single Node setups"}),"\n",(0,s.jsx)(t.h3,{id:"single-node-setup",children:"Single node setup"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Single Node Deployment",src:n(5907).A+"",width:"1091",height:"351"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["A Scroll node deployed in the ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/vpc/latest/userguide/default-vpc.html",children:"Default VPC"})," continuously synchronizes with the rest of nodes on ",(0,s.jsx)(t.a,{href:"https://docs.scroll.com/clusters",children:"Scroll Clusters"})," through ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html",children:"Internet Gateway"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"The Scroll node is used by dApps or development tools internally from within the Default VPC. JSON RPC API is not exposed to the Internet directly to protect nodes from unauthorized access."}),"\n",(0,s.jsx)(t.li,{children:"You will need access to a fully-synced Ethereum Mainnet RPC endpoint before running l2geth."}),"\n",(0,s.jsx)(t.li,{children:"The Scroll node sends various monitoring metrics for both EC2 and Scroll nodes to Amazon CloudWatch."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"additional-materials",children:"Additional materials"}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:"Review the for pros and cons of this solution."}),(0,s.jsx)(t.h3,{id:"well-architected-checklist",children:"Well-Architected Checklist"}),(0,s.jsxs)(t.p,{children:["This is the Well-Architected checklist for Ethereum nodes implementation of the AWS Blockchain Node Runner app. This checklist takes into account questions from the ",(0,s.jsx)(t.a,{href:"https://aws.amazon.com/architecture/well-architected/",children:"AWS Well-Architected Framework"})," which are relevant to this workload. Please feel free to add more checks from the framework if required for your workload."]}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Pillar"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Control"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Question/Check"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Remarks"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Security"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Network protection"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Are there unnecessary open ports in security groups?"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Please note that ports 30303 (TCP/UDP) for Scroll are open to public to support P2P protocols. We have to rely on the protection mechanisms built into the Scroll software to protect those ports."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Traffic inspection"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"AWS WAF could be implemented for traffic inspection. Additional charges will apply."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Compute protection"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Reduce attack surface"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"This solution uses Ubuntu 20.04 LTS AMI. You may choose to run hardening scripts on it."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Enable people to perform actions at a distance"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"This solution uses AWS Systems Manager for terminal session, not ssh ports."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Data protection at rest"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Use encrypted Amazon Elastic Block Store (Amazon EBS) volumes"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"This solution uses encrypted Amazon EBS volumes."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Data protection in transit"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Use TLS"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"By design TLS is not used in Scroll RPC and P2P protocols because the data is considered public. To protect RPC traffic we expose the port only for internal use."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Authorization and access control"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Use instance profile with Amazon Elastic Compute Cloud (Amazon EC2) instances"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"This solution uses AWS Identity and Access Management (AWS IAM) role instead of IAM user."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Following principle of least privilege access"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:'In the node, root user is not used (using special user "ubuntu" instead).'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Application security"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Security focused development practices"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"cdk-nag is being used with documented suppressions."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Cost optimization"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Service selection"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Use cost effective resources"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Scroll nodes currently doesn't provide binaries for ARM architecture, so AMD-powered EC2 instance type for better cost effectiveness."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Cost awareness"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Estimate costs"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"One Scroll node on m6a.2xlarge and 1T EBS gp3 volume will cost around US$367.21 per month in the US East (N. Virginia) region. Additionally the AMB Access Ethereum on bc.m5.xlarge will cost additional ~US$202 per month in the US East (N. Virginia) region. Approximately the total cost will be US$367.21 + US$202 = US$569.21 per month."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Reliability"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Resiliency implementation"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Withstand component failures"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"This solution currently does not have high availability and is deployed to a single availability zone."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Data backup"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"How is data backed up?"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The data is not specially backed up. The node will have to re-sync its state from other nodes in the Scroll network to recover."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Resource monitoring"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"How are workload resources monitored?"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Resources are being monitored using Amazon CloudWatch dashboards. Amazon CloudWatch custom metrics are being pushed via CloudWatch Agent."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Performance efficiency"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Compute selection"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"How is compute solution selected?"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Compute solution is selected based on the recommendations the from Scroll community to provide stable and cost-effective operations."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Storage selection"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"How is storage solution selected?"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Storage solution is selected based on the recommendations the from Scroll community to provide stable and cost-effective operations."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Architecture selection"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"How is the best performance architecture selected?"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"In this solution we try to balance price and performance to achieve better cost efficiency, but not necessarily the best performance."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Operational excellence"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Workload health"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"How is health of workload determined?"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"We rely on the standard EC2 instance monitoring tool to detect stalled instances."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Sustainability"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Hardware & services"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Select most efficient hardware for your workload"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Scroll nodes currently doesn't provide binaries for ARM architecture, so AMD-powered EC2 instance type for better cost effectiveness."})]})]})]})]}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:"Recommended Infrastructure"}),(0,s.jsx)(t.h2,{id:"hardware-requirements",children:"Hardware Requirements"}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Minimum for Scroll node"})}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Instance type ",(0,s.jsx)(t.a,{href:"https://aws.amazon.com/ec2/instance-types/m6a/",children:"m6a.large"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"500GB EBS gp3 storage with at least 3000 IOPS."}),"\n"]}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Recommended for Scroll node"})}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Instance type ",(0,s.jsx)(t.a,{href:"https://aws.amazon.com/ec2/instance-types/m6a/",children:"m6a.2xlarge"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"500GB EBS gp3 storage with at least 3000 IOPS.`"}),"\n"]}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Amazon Managed Blockchain Ethereum L1"})}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Minimum instance type: ",(0,s.jsx)(t.a,{href:"https://aws.amazon.com/managed-blockchain/instance-types/",children:"bc.m5.xlarge"})]}),"\n",(0,s.jsxs)(t.li,{children:["Recommended instance type: ",(0,s.jsx)(t.a,{href:"https://aws.amazon.com/managed-blockchain/instance-types/",children:"bc.m5.2xlarge"})]}),"\n"]})]}),"\n",(0,s.jsx)(t.h2,{id:"setup-instructions",children:"Setup Instructions"}),"\n",(0,s.jsx)(t.h3,{id:"setup-cloud9",children:"Setup Cloud9"}),"\n",(0,s.jsxs)(t.p,{children:["We will use AWS Cloud9 to execute the subsequent commands. Follow the instructions in ",(0,s.jsx)(t.a,{href:"../../docs/setup-cloud9.md",children:"Cloud9 Setup"})]}),"\n",(0,s.jsx)(t.h3,{id:"clone-this-repository-and-install-dependencies",children:"Clone this repository and install dependencies"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"   git clone https://github.com/alickwong/aws-blockchain-node-runners\n   cd aws-blockchain-node-runners\n   npm install\n"})}),"\n",(0,s.jsx)(t.h3,{id:"deploy-single-node",children:"Deploy Single Node"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Make sure you are in the root directory of the cloned repository"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"If you have deleted or don't have the default VPC, create default VPC"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"aws ec2 create-default-vpc\n"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["NOTE:\nYou may see the following error if the default VPC already exists: ",(0,s.jsx)(t.code,{children:"An error occurred (DefaultVpcAlreadyExists) when calling the CreateDefaultVpc operation: A Default VPC already exists for this account in this region."}),". That means you can just continue with the following steps."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Configure your setup"}),"\n",(0,s.jsxs)(t.p,{children:["Create your own copy of ",(0,s.jsx)(t.code,{children:".env"})," file and edit it to update with your AWS Account ID and Region:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"# Make sure you are in aws-blockchain-node-runners/lib/scroll\ncd lib/scroll\nnpm install\npwd\ncp ./sample-configs/.env-sample-full .env\nnano .env\n"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["NOTE:\nExample configuration parameters are set in the local ",(0,s.jsx)(t.code,{children:".env-sample"})," file. You can find more examples inside ",(0,s.jsx)(t.code,{children:"sample-configs"})," directory."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Deploy common components such as IAM role"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"pwd\n# Make sure you are in aws-blockchain-node-runners/lib/scroll\nnpx cdk deploy scroll-common\n"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["IMPORTANT:\nAll AWS CDK v2 deployments use dedicated AWS resources to hold data during deployment. Therefore, your AWS account and Region must be ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/cdk/v2/guide/bootstrapping.html",children:"bootstrapped"})," to create these resources before you can deploy. If you haven't already bootstrapped, issue the following command:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"cdk bootstrap aws://ACCOUNT-NUMBER/REGION\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Deploy Amazon Managed Blockchain (AMB) Access Ethereum node and wait about 35-70 minutes for the node to sync"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"pwd\n# Make sure you are in aws-blockchain-node-runners/lib/scroll\nnpx cdk deploy scroll-ethereum-l1-node --json --outputs-file scroll-ethereum-l1-node.json\n"})}),"\n",(0,s.jsxs)(t.p,{children:["To watch the progress, open the ",(0,s.jsx)(t.a,{href:"https://console.aws.amazon.com/managedblockchain/home",children:"AMB Web UI"}),", click the name of your target network from the list (Mainnet, Goerly, etc.) and watch the status of the node to change from ",(0,s.jsx)(t.code,{children:"Creating"})," to ",(0,s.jsx)(t.code,{children:"Available"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Deploy Scroll Full Node and wait for another 10-20 minutes for it to sync"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"pwd\n# Make sure you are in aws-blockchain-node-runners/lib/scroll\nnpx cdk deploy scroll-single-node --json --outputs-file single-node-deploy.json\n"})}),"\n",(0,s.jsx)(t.p,{children:"After starting the node you will need to wait for the initial synchronization process to finish.To see the progress, you may use SSM to connect into EC2 first and watch the log like this:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"export INSTANCE_ID=$(cat single-node-deploy.json | jq -r '..|.node-instance-id? | select(. != null)')\necho \"INSTANCE_ID=\" $INSTANCE_ID\nexport AWS_REGION=us-east-1\naws ssm start-session --target $INSTANCE_ID --region $AWS_REGION\ntail -f /var/log/scroll/error.log\n"})}),"\n",(0,s.jsxs)(t.p,{children:["When the process complete, you will see ",(0,s.jsx)(t.code,{children:"L1 message initial sync completed"})," in the log:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"INFO [12-13|08:25:46.095] Syncing L1 messages                      processed=18,683,700 confirmed=18,775,938 collected=77348 progress(%)=99.509\nINFO [12-13|08:25:56.165] Syncing L1 messages                      processed=18,699,700 confirmed=18,775,938 collected=78100 progress(%)=99.594\nINFO [12-13|08:26:06.122] Syncing L1 messages                      processed=18,709,300 confirmed=18,775,938 collected=79042 progress(%)=99.645\nINFO [12-13|08:26:16.107] Syncing L1 messages                      processed=18,729,400 confirmed=18,775,938 collected=79585 progress(%)=99.752\nINFO [12-13|08:26:26.127] Syncing L1 messages                      processed=18,741,900 confirmed=18,775,938 collected=80688 progress(%)=99.819\nINFO [12-13|08:26:36.208] Syncing L1 messages                      processed=18,750,200 confirmed=18,775,938 collected=82535 progress(%)=99.863\nINFO [12-13|08:26:46.124] Syncing L1 messages                      processed=18,755,400 confirmed=18,775,938 collected=84176 progress(%)=99.891\nINFO [12-13|08:26:56.120] Syncing L1 messages                      processed=18,768,200 confirmed=18,775,938 collected=85240 progress(%)=99.959\nINFO [12-13|08:27:00.524] L1 message initial sync completed        latestProcessedBlock=18,775,938\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Test Scroll RPC API\nUse curl to query from within the node instance:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'export INSTANCE_ID=$(cat single-node-deploy.json | jq -r \'..|.node-instance-id? | select(. != null)\')\necho "INSTANCE_ID=" $INSTANCE_ID\nexport AWS_REGION=us-east-1\naws ssm start-session --target $INSTANCE_ID --region $AWS_REGION\n\ncurl -s -X POST -H "Content-Type: application/json" --data \'{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}\' http://localhost:8545\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"monitoring",children:"Monitoring"}),"\n",(0,s.jsx)(t.p,{children:"A script on the Scroll node publishes current block and blocks behind metrics to CloudWatch metrics every 5 minutes. When the node is fully synced the blocks behind metric should get to 0, which might take about 1.5 days. To see the metrics:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Navigate to CloudWatch service (make sure you are in the region you have specified for AWS_REGION)"}),"\n",(0,s.jsxs)(t.li,{children:["Open Dashboards and select ",(0,s.jsx)(t.code,{children:"scroll-single-node"})," from the list of dashboards."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"clear-up-and-undeploy-everything",children:"Clear up and undeploy everything"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Undeploy all Nodes and Common stacks"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"# Setting the AWS account id and region in case local .env file is lost\nexport AWS_ACCOUNT_ID=<your_target_AWS_account_id>\nexport AWS_REGION=<your_target_AWS_region>\n\npwd\n# Make sure you are in aws-blockchain-node-runners/lib/scroll\n\n# Undeploy Single Node\nnpx cdk destroy scroll-single-node\n\n# Undeploy AMB Etheruem node\nnpx cdk destroy scroll-ethereum-l1-node\n\n# Delete all common components like IAM role and Security Group\nnpx cdk destroy scroll-common\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Follow steps to delete the Cloud9 instance in ",(0,s.jsx)(t.a,{href:"../../doc/setup-cloud9.md",children:"Cloud9 Setup"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"faq",children:"FAQ"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"How to check the logs of the clients running on my Scroll node?"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," In this tutorial we chose not to use SSH and use Session Manager instead. That allows you to log all sessions in AWS CloudTrail to see who logged into the server and when. If you receive an error similar to ",(0,s.jsx)(t.code,{children:"SessionManagerPlugin is not found"}),", ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html",children:"install Session Manager plugin for AWS CLI"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"pwd\n# Make sure you are in aws-blockchain-node-runners/lib/scroll\n\nexport INSTANCE_ID=$(cat single-node-deploy.json | jq -r '..|.node-instance-id? | select(. != null)')\necho \"INSTANCE_ID=\" $INSTANCE_ID\nexport AWS_REGION=us-east-1\naws ssm start-session --target $INSTANCE_ID --region $AWS_REGION\nsudo journalctl -o cat -fu scroll\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"How to check the logs from the EC2 user-data script?"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"pwd\n# Make sure you are in aws-blockchain-node-runners/lib/scroll\n\nexport INSTANCE_ID=$(cat single-node-deploy.json | jq -r '..|.node-instance-id? | select(. != null)')\necho \"INSTANCE_ID=\" $INSTANCE_ID\nexport AWS_REGION=us-east-1\naws ssm start-session --target $INSTANCE_ID --region $AWS_REGION\nsudo cat /var/log/cloud-init-output.log\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"How can I restart the Scroll service?"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"export INSTANCE_ID=$(cat single-node-deploy.json | jq -r '..|.node-instance-id? | select(. != null)')\necho \"INSTANCE_ID=\" $INSTANCE_ID\nexport AWS_REGION=us-east-1\naws ssm start-session --target $INSTANCE_ID --region $AWS_REGION\nsudo systemctl status scroll.service\nsudo systemctl restart scroll.service\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Where to find the key l2geth directories?"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The directory with binaries is ",(0,s.jsx)(t.code,{children:"/home/ubuntu/l2geth-source"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["The data directory of l2geth agent is ",(0,s.jsx)(t.code,{children:"/home/ubuntu/l2geth-source/l2geth-datadir"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"You can now attach to l2geth?"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'sudo - ubuntu\ncd /home/ubuntu/l2geth-source/\nalias l2geth=./build/bin/geth\nl2geth attach "./l2geth-datadir/geth.ipc"\n\n> admin.peers.length\n14\n\n> eth.blockNumber\n10000\n'})}),"\n"]}),"\n"]})]})}function i(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}const r={sidebar_position:4,sidebar_label:"Scroll"},c="",d={id:"Blueprints/Scroll",title:"Scroll",description:"",source:"@site/docs/Blueprints/Scroll.md",sourceDirName:"Blueprints",slug:"/Blueprints/Scroll",permalink:"/aws-blockchain-node-runners/docs/Blueprints/Scroll",draft:!1,unlisted:!1,editUrl:"https://github.com/aws-samples/aws-blockchain-node-runners/website/docs/Blueprints/Scroll.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Scroll"},sidebar:"sidebar",previous:{title:"Solana",permalink:"/aws-blockchain-node-runners/docs/Blueprints/Solana"},next:{title:"Stacks",permalink:"/aws-blockchain-node-runners/docs/Blueprints/Stacks"}},a={},h=[{value:"Overview of Deployment Architectures for Single Node setups",id:"overview-of-deployment-architectures-for-single-node-setups",level:2},{value:"Single node setup",id:"single-node-setup",level:3},{value:"Additional materials",id:"additional-materials",level:2},{value:"Well-Architected Checklist",id:"well-architected-checklist",level:3},{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"Setup Instructions",id:"setup-instructions",level:2},{value:"Setup Cloud9",id:"setup-cloud9",level:3},{value:"Clone this repository and install dependencies",id:"clone-this-repository-and-install-dependencies",level:3},{value:"Deploy Single Node",id:"deploy-single-node",level:3},{value:"Monitoring",id:"monitoring",level:3},{value:"Clear up and undeploy everything",id:"clear-up-and-undeploy-everything",level:2},{value:"FAQ",id:"faq",level:2}];function u(e){const t={h1:"h1",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:""}),"\n","\n",(0,s.jsx)(i,{})]})}function x(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},5907:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/Architecture-SingleNode-v3-4ca96735208e72db2b1812366bcb18d0.jpg"},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var s=n(6540);const l={},o=s.createContext(l);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);