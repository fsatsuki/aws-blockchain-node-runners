"use strict";(self.webpackChunkaws_blockchain_node_runners=self.webpackChunkaws_blockchain_node_runners||[]).push([[730],{4451:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>x,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var s=n(5893),l=n(1151);function i(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{Details:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"sample-aws-blockchain-node-runner-app-for-ethereum-nodes",children:"Sample AWS Blockchain Node Runner app for Ethereum Nodes"}),"\n",(0,s.jsx)(t.h2,{id:"architecture-overview",children:"Architecture Overview"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Architecture",src:n(1307).Z+"",width:"1131",height:"631"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"An ongoing data synchronization process is configured with nodes in the Ethereum network with a sync node and RPC nodes."}),"\n",(0,s.jsx)(t.li,{children:"The sync node is used to create a copy of node's state data in Amazon S3 bucket."}),"\n",(0,s.jsx)(t.li,{children:"When new RPC nodes are provisioned, they copy state data from Amazon S3 bucket to speed up the initial sync process."}),"\n",(0,s.jsx)(t.li,{children:"Applications and smart contract development tools access highly available RPC nodes behind the Application Load Balancer."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"well-architected",children:"Well-Architected"}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"Review the for pros and cons of this solution."}),(0,s.jsx)(t.h3,{id:"well-architected-checklist",children:"Well-Architected Checklist"}),(0,s.jsxs)(t.p,{children:["This is the Well-Architected checklist for Ethereum nodes implementation of the AWS Blockchain Node Runner app. This checklist takes into account questions from the ",(0,s.jsx)(t.a,{href:"https://aws.amazon.com/architecture/well-architected/",children:"AWS Well-Architected Framework"})," which are relevant to this workload. Please feel free to add more checks from the framework if required for your workload."]}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Pillar"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Control"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Question/Check"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Remarks"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Security"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Network protection"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Are there unnecessary open ports in security groups?"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Please note that Erigon snap sync port remains open for non-erigon clients, i.e. Port 42069 (TCP/UDP)."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Traffic inspection"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"AWS WAF could be implemented for traffic inspection. Additional charges will apply."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Compute protection"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Reduce attack surface"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"This solution uses Amazon Linux 2 AMI. You may choose to run hardening scripts on it."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Enable people to perform actions at a distance"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"This solution uses AWS Systems Manager for terminal session, not ssh ports."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Data protection at rest"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Use encrypted Amazon Elastic Block Store (Amazon EBS) volumes"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"This solution uses encrypted Amazon EBS volumes."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Use encrypted Amazon Simple Storage Service (Amazon S3) buckets"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"This solution uses Amazon S3 managed keys (SSE-S3) encryption."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Data protection in transit"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Use TLS"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The AWS Application Load balancer currently uses HTTP listener. Create HTTPS listener with self signed certificate if TLS is desired."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Authorization and access control"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Use instance profile with Amazon Elastic Compute Cloud (Amazon EC2) instances"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"This solution uses AWS Identity and Access Management (AWS IAM) role instead of IAM user."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Following principle of least privilege access"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:'In sync node, root user is not used (using special user "ethereum" instead").'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Application security"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Security focused development practices"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"cdk-nag is being used with appropriate suppressions."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Cost optimization"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Service selection"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Use cost effective resources"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"AWS Graviton-based Amazon EC2 instances are being used, which are cost effective compared to Intel/AMD instances."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Cost awareness"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Estimate costs"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"One sync node with m7g.2xlarge for geth-lighthouse configuration (2048GB ssd) will cost around US$430 per month in the US East (N. Virginia) region. Additional charges will apply if you choose to deploy RPC nodes with load balancer."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Reliability"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Resiliency implementation"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Withstand component failures"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"This solution uses AWS Application Load Balancer with RPC nodes for high availability. If sync node fails, Amazon S3 backup can be used to reinstate the nodes."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Data backup"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"How is data backed up?"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Data is backed up to Amazon S3 using ",(0,s.jsx)(t.a,{href:"https://github.com/peak/s5cmd",children:"s5cmd"})," tool."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Resource monitoring"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"How are workload resources monitored?"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Resources are being monitored using Amazon CloudWatch dashboards. Amazon CloudWatch custom metrics are being pushed via CloudWatch Agent."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Performance efficiency"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Compute selection"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"How is compute solution selected?"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Compute solution is selected based on best price-performance, i.e. AWS Graviton-based Amazon EC2 instances."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Storage selection"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"How is storage solution selected?"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Storage solution is selected based on best price-performance, i.e. gp3 Amazon EBS volumes with optimal IOPS and throughput."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Architecture selection"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"How is the best performance architecture selected?"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"s5cmd tool has been chosen for Amazon S3 uploads/downloads because it gives better price-performance compared to Amazon EBS snapshots (including Fast Snapshot Restore, which can be expensive)."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Operational excellence"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Workload health"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"How is health of workload determined?"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Health of workload is determined via AWS Application Load Balancer Target Group Health Checks, on port 8545."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Sustainability"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Hardware & services"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Select most efficient hardware for your workload"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"This solution uses AWS Graviton-based Amazon EC2 instances which offer the best performance per watt of energy use in Amazon EC2."})]})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"solution-walkthrough",children:"Solution Walkthrough"}),"\n",(0,s.jsx)(t.h3,{id:"setup-cloud9",children:"Setup Cloud9"}),"\n",(0,s.jsxs)(t.p,{children:["We will use AWS Cloud9 to execute the subsequent commands. Follow the instructions in ",(0,s.jsx)(t.a,{href:"../../docs/setup-cloud9.md",children:"Cloud9 Setup"})]}),"\n",(0,s.jsx)(t.h3,{id:"clone-this-repository-and-install-dependencies",children:"Clone this repository and install dependencies"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"   git clone https://github.com/aws-samples/aws-blockchain-node-runners.git\n   cd aws-blockchain-node-runners\n   npm install\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"NOTE:"})," In this tutorial we will set all major configuration through environment variables, but you also can modify parameters in ",(0,s.jsx)(t.code,{children:"config/config.ts"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"prepare-to-deploy-nodes",children:"Prepare to deploy nodes"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Make sure you are in the root directory of the cloned repository"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"If you have deleted or don't have the default VPC, create default VPC"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"    aws ec2 create-default-vpc\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"NOTE:"})," You may see the following error if the default VPC already exists: ",(0,s.jsx)(t.code,{children:"An error occurred (DefaultVpcAlreadyExists) when calling the CreateDefaultVpc operation: A Default VPC already exists for this account in this region."}),". That means you can just continue with the following steps."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"NOTE:"})," The default VPC must have at least two public subnets in different Availability Zones, and public subnet must set ",(0,s.jsx)(t.code,{children:"Auto-assign public IPv4 address"})," to ",(0,s.jsx)(t.code,{children:"YES"})]}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsx)(t.li,{children:"Configure  your setup"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Create your own copy of ",(0,s.jsx)(t.code,{children:".env"})," file and edit it:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"   # Make sure you are in aws-blockchain-node-runners/lib/ethereum\n   cd lib/ethereum\n   pwd\n   cp .env-sample .env\n   nano .env\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"NOTE:"})," Example configuration parameters are set in the local ",(0,s.jsx)(t.code,{children:".env-sample"})," file. You can find more examples inside ",(0,s.jsx)(t.code,{children:"sample-configs"})," directory."]}),"\n",(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsx)(t.li,{children:"Deploy common components such as IAM role, and Amazon S3 bucket to store data snapshots"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"   pwd\n   # Make sure you are in aws-blockchain-node-runners/lib/ethereum\n   npx cdk deploy eth-common\n"})}),"\n",(0,s.jsx)(t.h3,{id:"option-1-single-rpc-node",children:"Option 1: Single RPC Node"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Deploy Single RPC Node"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"   pwd\n   # Make sure you are in aws-blockchain-node-runners/lib/ethereum\n   npx cdk deploy eth-single-node --json --outputs-file single-node-deploy.json\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"NOTE:"})," The default VPC must have at least two public subnets in different Availability Zones, and public subnet must set ",(0,s.jsx)(t.code,{children:"Auto-assign public IPv4 address"})," to ",(0,s.jsx)(t.code,{children:"YES"})]}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["After starting the node you need to wait for the inital syncronization process to finish. It may take from half a day to about 6-10 days depending on the client combination and the state of the network. You can use Amazon CloudWatch to track the progress. There is a script that publishes CloudWatch metrics every 5 minutes, where you can watch ",(0,s.jsx)(t.code,{children:"sync distance"})," for consensus client and ",(0,s.jsx)(t.code,{children:"blocks behind"})," for execution client. When the node is fully synced those two metrics shold show 0. To see them:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Navigate to ",(0,s.jsx)(t.a,{href:"https://console.aws.amazon.com/cloudwatch/",children:"CloudWatch service"})," (make sure you are in the region you have specified for ",(0,s.jsx)(t.code,{children:"AWS_REGION"}),")"]}),"\n",(0,s.jsxs)(t.li,{children:["Open ",(0,s.jsx)(t.code,{children:"Dashboards"})," and select ",(0,s.jsx)(t.code,{children:"eth-sync-node-<your-eth-client-combination>"})," from the list of dashboards."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Once the initial synchronization is done, you should be able to access the RPC API of that node from within the same VPC. The RPC port is not exposed to the Internet. Tun the following query against the private IP of the single RPC node you deployed:"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'   INSTANCE_ID=$(cat single-node-deploy.json | jq -r \'..|.node-instance-id? | select(. != null)\')\n   NODE_INTERNAL_IP=$(aws ec2 describe-instances --instance-ids $INSTANCE_ID --query \'Reservations[*].Instances[*].PrivateIpAddress\' --output text)\n\n    # We query token balance of Beacon deposit contract: https://etherscan.io/address/0x00000000219ab540356cbb839cbe05303d7705fa\n    curl http://$NODE_INTERNAL_IP:8545 -X POST -H "Content-Type: application/json" \\\n    --data \'{"method":"eth_getBalance","params":["0x00000000219ab540356cBB839Cbe05303d7705Fa", "latest"],"id":1,"jsonrpc":"2.0"}\'\n'})}),"\n",(0,s.jsx)(t.p,{children:"The result should be like this (the actual balance might change):"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'   {"jsonrpc":"2.0","id":1,"result":"0xe791d050f91d9949d344d"}\n'})}),"\n",(0,s.jsx)(t.h3,{id:"option-2-deploy-the-highly-available-rpc-nodes",children:"Option 2: Deploy the Highly Available RPC Nodes"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Deploy Sync Node"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"   pwd\n   # Make sure you are in aws-blockchain-node-runners/lib/ethereum\n   npx cdk deploy eth-sync-node --json --outputs-file sync-node-deploy.json\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"NOTE:"})," The default VPC must have at least two public subnets in different Availability Zones, and public subnet must set ",(0,s.jsx)(t.code,{children:"Auto-assign public IPv4 address"})," to ",(0,s.jsx)(t.code,{children:"YES"})]}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["After starting the node you need to wait for the inital syncronization process to finish. It may take from half a day to about 6-10 days depending on the client combination and the state of the network. You can use Amazon CloudWatch to track the progress. There is a script that publishes CloudWatch metrics every 5 minutes, where you can watch ",(0,s.jsx)(t.code,{children:"sync distance"})," for consensus client and ",(0,s.jsx)(t.code,{children:"blocks behind"})," for execution client. When the node is fully synced those two metrics shold show 0. To see them:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Navigate to ",(0,s.jsx)(t.a,{href:"https://console.aws.amazon.com/cloudwatch/",children:"CloudWatch service"})," (make sure you are in the region you have specified for ",(0,s.jsx)(t.code,{children:"AWS_REGION"}),")"]}),"\n",(0,s.jsxs)(t.li,{children:["Open ",(0,s.jsx)(t.code,{children:"Dashboards"})," and select ",(0,s.jsx)(t.code,{children:"eth-sync-node-<your-eth-client-combination>"})," from the list of dashboards."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Once synchronization process is over, the script will automatically stop both clients and copy all the contents of the ",(0,s.jsx)(t.code,{children:"/data"})," directory to your snapshot S3 bucket. That may take from 30 minutes to about 2 hours. During the process on the dashboard you will see lower CPU and RAM utilization but high data disc throughput and outbound network traffic. The script will automatically start the clients after the process is done."]}),"\n",(0,s.jsxs)(t.p,{children:["Note: the snapshot backup process will automatically run ever day at midnight time of the time zone were the sync node runs. To change the schedule, modify ",(0,s.jsx)(t.code,{children:"crontab"})," of the root user on the node's EC2 instance."]}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsx)(t.li,{children:"Configure and deploy 2 RPC Nodes"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"   pwd\n   # Make sure you are in aws-blockchain-node-runners/lib/ethereum\n   npx cdk deploy eth-rpc-nodes --json --outputs-file rpc-node-deploy.json\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsx)(t.li,{children:"Give the new RPC nodes about 30 minutes (up to 2 hours for Erigon) to initialize and then run the following query against the load balancer behind the RPC node created"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'    export ETH_RPC_ABL_URL=$(cat rpc-node-deploy.json | jq -r \'..|.alburl? | select(. != null)\')\n    echo $ETH_RPC_ABL_URL\n\n    # We query token balance of Beacon deposit contract: https://etherscan.io/address/0x00000000219ab540356cbb839cbe05303d7705fa\n    curl http://$ETH_RPC_ABL_URL:8545 -X POST -H "Content-Type: application/json" \\\n    --data \'{"method":"eth_getBalance","params":["0x00000000219ab540356cBB839Cbe05303d7705Fa", "latest"],"id":1,"jsonrpc":"2.0"}\'\n'})}),"\n",(0,s.jsx)(t.p,{children:"The result should be like this (the actual balance might change):"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'   {"jsonrpc":"2.0","id":1,"result":"0xe791d050f91d9949d344d"}\n'})}),"\n",(0,s.jsx)(t.p,{children:"If the nodes are still starting and catching up with the chain, you will see the following repsonse:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-HTML",children:"   <html>\n   <head><title>503 Service Temporarily Unavailable</title></head>\n   <body>\n   <center><h1>503 Service Temporarily Unavailable</h1></center>\n   </body>\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"NOTE:"})," By default and for security reasons the load balancer is available only from within the default VPC in the region where it is deployed. It is not available from the Internet and is not open for external connections. Before opening it up please make sure you protect your RPC APIs."]}),"\n",(0,s.jsx)(t.h3,{id:"clearing-up-and-undeploying-everything",children:"Clearing up and undeploying everything"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Undeploy RPC Nodes, Sync Nodes and Comon components"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"   # Setting the AWS account id and region in case local .env file is lost\n    export AWS_ACCOUNT_ID=<your_target_AWS_account_id>\n    export AWS_REGION=<your_target_AWS_region>\n\n   pwd\n   # Make sure you are in aws-blockchain-node-runners/lib/ethereum\n\n    # Undeploy Single RPC Node\n    cdk destroy eth-single-node\n\n   # Undeploy RPC Nodes\n    cdk destroy eth-rpc-nodes\n\n    # Undeploy Sync Node\n    cdk destroy eth-sync-node\n\n    # You need to manually delete an s3 bucket with a name similar to 'eth-snapshots-$accountid-eth-nodes-common' on the console,firstly empty the bucket,secondly delete the bucket,and then execute\n    # Delete all common components like IAM role and Security Group\n    cdk destroy eth-common\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsxs)(t.li,{children:["Follow steps to delete the Cloud9 instance in ",(0,s.jsx)(t.a,{href:"../../doc/setup-cloud9.md",children:"Cloud9 Setup"})]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"faq",children:"FAQ"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"How to check the logs of the clients running on my sync node?"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," In this tutorial we chose not to use SSH and use Session Manager instead. That allows you to log all sessions in AWS CloudTrail to see who logged into the server and when. If you receive an error similar to ",(0,s.jsx)(t.code,{children:"SessionManagerPlugin is not found"}),", ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html",children:"install Session Manager plugin for AWS CLI"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"   pwd\n   # Make sure you are in aws-blockchain-node-runners/lib/ethereum\n\n   export INSTANCE_ID=$(cat sync-node-deploy.json | jq -r '..|.sync-node-instance-id? | select(. != null)')\n   echo \"INSTANCE_ID=\" $INSTANCE_ID\n   aws ssm start-session --target $INSTANCE_ID --region $AWS_REGION\n   sudo su ethereum\n   # Execution client logs:\n   docker logs --tail 50 execution -f\n   # Consensus client logs:\n   docker logs --tail 50 consensus -f\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsx)(t.li,{children:"How to check the logs from the EC2 user-data script?"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"   pwd\n   # Make sure you are in aws-blockchain-node-runners/lib/ethereum\n\n   export INSTANCE_ID=$(cat sync-node-deploy.json | jq -r '..|.sync-node-instance-id? | select(. != null)')\n   echo \"INSTANCE_ID=\" $INSTANCE_ID\n   aws ssm start-session --target $INSTANCE_ID --region $AWS_REGION\n   sudo cat /var/log/cloud-init-output.log\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsx)(t.li,{children:"I'm running sync node with Ethereum and Prysm or Lighthouse and it gets stuck during syncing, what should I do?"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Usually restart helps Erigon client to re-connect with other nodes and continue syncing. To restart do the following:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"   pwd\n   # Make sure you are in aws-blockchain-node-runners/lib/ethereum\n\n   export INSTANCE_ID=$(cat sync-node-deploy.json | jq -r '..|.sync-node-instance-id? | select(. != null)')\n   echo \"INSTANCE_ID=\" $INSTANCE_ID\n   aws ssm start-session --target $INSTANCE_ID --region $AWS_REGION\n   sudo su ethereum\n   /usr/local/bin/docker-compose -f /home/ethereum/docker-compose.yml down\n   /usr/local/bin/docker-compose -f /home/ethereum/docker-compose.yml up -d\n"})})]})}function o(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}const r={sidebar_position:2,sidebar_label:"Ethereum"},c="",a={id:"Blueprints/Ethereum",title:"Ethereum",description:"",source:"@site/docs/Blueprints/Ethereum.md",sourceDirName:"Blueprints",slug:"/Blueprints/Ethereum",permalink:"/aws-blockchain-node-runners/docs/Blueprints/Ethereum",draft:!1,unlisted:!1,editUrl:"https://github.com/aws-samples/aws-blockchain-node-runners/website/docs/Blueprints/Ethereum.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Ethereum"},sidebar:"sidebar",previous:{title:"About blueprints",permalink:"/aws-blockchain-node-runners/docs/Blueprints/intro"},next:{title:"Solana",permalink:"/aws-blockchain-node-runners/docs/Blueprints/Solana"}},d={},h=[];function u(e){const t={h1:"h1",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:""}),"\n","\n","\n",(0,s.jsx)(o,{})]})}function x(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},1307:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/Architecture-cf2061ac2c66dd1dcfe70d817a2aa2d3.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var s=n(7294);const l={},i=s.createContext(l);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);