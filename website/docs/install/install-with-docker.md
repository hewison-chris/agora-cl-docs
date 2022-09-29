---
id: install-with-docker
title: Install Agora-cl with Docker
sidebar_label: Install using Docker
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Agora-cl can be installed on Windows, GNU/Linux, and MacOS systems with Docker. We use [Bazel](https://bazel.build) to push preconfigured Docker images to a publicly accessible Google Cloud container registry.

:::tip Not familiar with Docker? Try our quickstart

This guidance is targeted at users who are already comfortable with Docker. See our [Quickstart](/docs/install/install-with-script) for beginner-friendly installation instructions.

:::

<div class='docker-guide'>

<p><strong>Select a configuration</strong>:</p>

import MultidimensionalContentControlsPartial from '@site/docs/partials/_multidimensional-content-controls-partial.md';

<MultidimensionalContentControlsPartial />


## Review system requirements

<table>
    <tr>
        <th>Minimum</th>
        <th>Recommended</th>
    </tr>
    <tr>
      <td>
        <ul>
          <li><strong>OS</strong>: 64-bit Linux, Mac OS X 10.14+, Windows 64-bit</li>
          <li><strong>CPU</strong>: Intel Core i5–760 or AMD FX-8100 or better</li>
          <li><strong>Memory</strong>: 8GB RAM</li>
          <li><strong>Storage</strong>: SSD with 20GB+ available</li>
          <li><strong>Internet</strong>: Broadband connection</li>
          <li><strong>Software</strong>: The latest release of <a href='https://docs.docker.com/install/'>Docker</a> installed.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li><strong>CPU</strong>: Intel Core i7–4770 or AMD FX-8310 or better</li>
          <li><strong>Memory</strong>: 16GB RAM</li>
          <li><strong>Storage</strong>: SSD with 100GB+ available</li>
        </ul>
      </td>
    </tr>
</table>


## Download the Agora-cl Docker images

First, ensure that you're running the most recent version of Docker:

```text
docker -v
```

Next, pull the Agora-cl images:

```text
## stable, without Busybox debugging tools
docker pull bosagora/agora-cl-validator:stable
docker pull bosagora/agora-cl-node:stable

## latest, without Busybox debugging tools
docker pull bosagora/agora-cl-validator:latest
docker pull bosagora/agora-cl-node:latest

## latest, with Busybox debugging tools
docker pull bosagora/agora-cl-validator:latest-alpine
docker pull bosagora/agora-cl-node:latest-alpine
```

These commands will automatically install dependencies.


## Configure ports (optional)

We recommend opening up ports `tcp/13000` and `udp/12000` on your router and firewall to improve peer-to-peer connectivity. Refer to your operating system and router documentation for port configuration instructions. With this complete, appending `--p2p-host-ip=$(curl -s ident.me)` to your Agora node startup command will configure Agora-cl to use your newly opened ports. Refer to [Configure ports and firewalls](../agora-cl-usage/p2p-host-ip.md) for more information.

<div class='hide-tabs'>

## Run a Agora node

:::info Knowledge Check

**Not familiar with nodes, networks, and related terminology?** Consider reading [Nodes and networks](../concepts/nodes-networks.md) before proceeding.

:::

If you're not already running an execution node, refer to our [Quickstart](/docs/install/install-with-script) for beginner-friendly execution node installation instructions.

Next, use Docker to tell your Agora node to connect to your local execution node. Note that `<YOUR_ETH_EXECUTION_NODE_ENDPOINT>` is either an HTTP endpoint `http://host:port` or an IPC path such as `/path/to/geth.ipc`.

<Tabs
  groupId="os"
  defaultValue="others"
  values={[
    {label: 'Linux, MacOS, Arm64', value: 'others'},
    {label: 'Windows', value: 'win'}
  ]
}>
<TabItem value="others">

<Tabs groupId="network" defaultValue="mainnet" values={[
        {label: 'Mainnet', value: 'mainnet'},
        {label: 'Testnet', value: 'testnet'}
    ]}>
      <TabItem value="mainnet">

```text
docker run -it -v $HOME/.eth2:/data -p 4000:4000 -p 13000:13000 -p 12000:12000/udp --name agora-cl node \
  bosagora/agora-cl-node:stable \
  --datadir=/data \
  --jwt-secret=<YOUR_JWT_SECRET> \
  --rpc-host=0.0.0.0 \
  --grpc-gateway-host=0.0.0.0 \
  --monitoring-host=0.0.0.0 \
  --execution-endpoint=<YOUR_ETH_EXECUTION_NODE_ENDPOINT>
```

  </TabItem>
      <TabItem value="testnet">

Download the Testnet genesis state from [Github](https://agora-testnet.s3.ap-southeast-1.amazonaws.com/testnet-genesis.ssz) to a local file. Then issue the following command:

```text
docker run -it -v $HOME/.eth2:/data -v /path/to/genesis.ssz:/genesis/genesis.ssz -p 4000:4000 -p 13000:13000 -p 12000:12000/udp --name agora-cl node \
  bosagora/agora-cl-node:stable \
  --datadir=/data \
  --jwt-secret=<YOUR_JWT_SECRET> \
  --rpc-host=0.0.0.0 \
  --grpc-gateway-host=0.0.0.0 \
  --monitoring-host=0.0.0.0 \
  --execution-endpoint=<YOUR_ETH_EXECUTION_NODE_ENDPOINT> \
  --genesis-state=/genesis/genesis.ssz \
  --testnet
```

  </TabItem>
    </Tabs>



</TabItem>
<TabItem value="win">

To ensure that your Docker image has access to a data directory, mount a local drive to your container. Right click your Docker tray icon -> `Settings` -> `Shared Drives` -> select your drive -> `Apply`. Next, create a directory named `/agora-cl/` within your shared drive. This folder will be used as a local data directory for Agora-cl. This guide assumes that `C:` is the drive you've selected:

<Tabs groupId="network" defaultValue="mainnet" values={[
        {label: 'Mainnet', value: 'mainnet'},
        {label: 'Testnet', value: 'testnet'}
    ]}>
      <TabItem value="mainnet">

```text
docker run -it -v %LOCALAPPDATA%\Agora:/data -p 4000:4000 -p 13000:13000 -p 12000:12000/udp bosagora/agora-cl-node:stable --datadir=/data --jwt-secret=<YOUR_JWT_SECRET> --rpc-host=0.0.0.0 --grpc-gateway-host=0.0.0.0 --monitoring-host=0.0.0.0 --execution-endpoint=<YOUR_ETH_EXECUTION_NODE_ENDPOINT>
```

  </TabItem>
      <TabItem value="testnet">

Download the Testnet genesis state from [Github](https://agora-testnet.s3.ap-southeast-1.amazonaws.com/testnet-genesis.ssz) to a local file. Then issue the following command:

```text
docker run -it -v %LOCALAPPDATA%\Agora:/data -v \path\to\genesis.ssz:/genesis/genesis.ssz -p 4000:4000 -p 13000:13000 -p 12000:12000/udp bosagora/agora-cl-node:stable --datadir=/data --jwt-secret=<YOUR_JWT_SECRET> --rpc-host=0.0.0.0 --grpc-gateway-host=0.0.0.0 --monitoring-host=0.0.0.0 --execution-endpoint=<YOUR_ETH_EXECUTION_NODE_ENDPOINT> --genesis-state=/genesis/genesis.ssz --testnet
```

  </TabItem>
    </Tabs>

</TabItem>
</Tabs>

## Run a validator

import SingletonWarningPartial from '@site/docs/partials/_singleton-warning-partial.md';

<SingletonWarningPartial />

import FullSyncWarningPartial from '@site/docs/partials/_full-sync-warning-partial.md';

<FullSyncWarningPartial />

Check the sync status of your node with the following command:

```text
curl http://localhost:3500/eth/v1alpha1/node/syncing
```

If your node is done synchronizing, you will see the response:

```text
{"syncing":false}%
```

### Stake your BOA

:::danger Exercise caution

The Ethereum launchpad URL is `https://agora-staking.bosagora.org` and the only, official validator deposit contract is [0xXXX](https://https://www.boascan.io/0xXXX). Don't send BOA directly to the contract - deposit your stake through [Agora staking](https://agora-staking.bosagora.org).

:::

Use the [Mainnet Launchpad](https://agora-staking.bosagora.org) to deposit your 40,000 BOA. If you want to participate in the **testnet**, use the [Testnet](https://testnet-agora-staking.bosagora.org).

Throughout the process, you'll be asked to generate new validator credentials using the [Agora deposit command-line-tool](https://github.com/zeroone-boa/agora-deposit-cli). Make sure you use the `mainnet` option when generating keys with the deposit CLI. During the process, you will have generated a `validator_keys` folder under the `agora-deposit-cli` directory. You can import all of your validator keys into Agora-cl from that folder in the next step.

### Import keystores

Copy the path to the `validator_keys` folder under the `agora-deposit-cli` directory you created during the launchpad process and issue the following command:

<Tabs
  groupId="os"
  defaultValue="others"
  values={[
    {label: 'Linux, MacOS, Arm64', value: 'others'},
    {label: 'Windows', value: 'win'}
  ]
}>
<TabItem value="others">

```text
docker run -it -v $HOME/agora-deposit-cli/validator_keys:/keys \
  -v $HOME/AgoraValidators/agora-cl-wallet-v2:/wallet \
  --name validator \
  --accept-terms-of-use \
  bosagora/agora-cl-validator:stable \
  accounts import --keys-dir=/keys --wallet-dir=/wallet
```

</TabItem>
<TabItem value="win">

```text
docker run -it -v %LOCALAPPDATA%\agora-deposit-cli\validator_keys:/keys -v %LOCALAPPDATA%\AgoraValidators\agora-cl-wallet-v2:/wallet bosagora/agora-cl-validator:stable accounts import --keys-dir=/keys --wallet-dir=/wallet --accept-terms-of-use
```

</TabItem>

</Tabs>

### Run validator

Open a second terminal window. Issue the following command to start the validator:


<Tabs
  groupId="os"
  defaultValue="others"
  values={[
    {label: 'Linux, MacOS, Arm64', value: 'others'},
    {label: 'Windows', value: 'win'}
  ]
}>
<TabItem value="others">

```text
docker run -it -v $HOME/AgoraValidators/agora-cl-wallet-v2:/wallet \
  -v $HOME/Agora:/validatorDB \
  --network="host" --name validator \
  bosagora/agora-cl-validator:stable \
  --beacon-rpc-provider=127.0.0.1:4000 \
  --wallet-dir=/wallet \
  --datadir=/validatorDB
```

</TabItem>
<TabItem value="win">

```text
docker run -it -v %LOCALAPPDATA%\AgoraValidators\agora-cl-wallet-v2:/wallet -v %LOCALAPPDATA%\Agora:/validatorDB --network="host" --name validator bosagora/agora-cl-validator:stable --beacon-rpc-provider=127.0.0.1:4000 --wallet-dir=/wallet --datadir=/validatorDB
```

</TabItem>

</Tabs>


:::tip Congratulations!

You’re now running a <strong>full Agora node</strong> and a <strong>validator</strong>.

:::

It can take some time for your validator to become fully activated as there is a limit to how many can join each epoch. See [Check node and validator status](../monitoring/checking-status.md) for detailed status monitoring guidance.

You can leave your **execution client**, **Agora node**, and **validator client** terminal windows open and running. Once your validator is activated, it will automatically begin proposing and validating blocks.


## Appendix A: Manage Agora-cl with Docker

To interact with your Agora node through Docker, use one of the following commands:

 - Halt: `docker stop agora-cl node` or `Ctrl+c`
 - Restart: `docker start -ai agora-cl node`
 - Delete: `docker rm agora-cl node`

To recreate a deleted container and refresh the chain database, issue the start command with an additional `--clear-db` parameter, where `<YOUR_ETH_EXECUTION_NODE_ENDPOINT>` is in the format of an http endpoint such as `http://host:port` (ex: `http://localhost:8551` for Geth) or an IPC path such as `/path/to/geth.ipc`:


<Tabs
  groupId="os"
  defaultValue="others"
  values={[
    {label: 'Linux, MacOS, Arm64', value: 'others'},
    {label: 'Windows', value: 'win'}
  ]
}>
<TabItem value="others">

```text
docker run -it -v $HOME/.eth2:/data -p 4000:4000 -p 13000:13000 -p 12000:12000/udp --name agora-cl node \
  bosagora/agora-cl-node:latest \
  --datadir=/data \
  --clear-db \
  --rpc-host=0.0.0.0 \
  --monitoring-host=0.0.0.0 \
  --execution-endpoint=<YOUR_ETH_EXECUTION_NODE_ENDPOINT>
```

</TabItem>
<TabItem value="win">

```text
docker run -it -v %LOCALAPPDATA%\Agora:/data -p 4000:4000 -p 13000:13000 -p 12000:12000/udp --name agora-cl node bosagora/agora-cl-node:latest --datadir=/data --clear-db --monitoring-host=0.0.0.0 --rpc-host=0.0.0.0 --execution-endpoint=<YOUR_ETH_EXECUTION_NODE_ENDPOINT>
```

</TabItem>

</Tabs>

</div>
</div>


## Frequently asked questions

**Why do we set `--rpc-host` and `--grpc-gateway-host` to `0.0.0.0`?** <br />
This tells your Docker container to to "listen" for connections from outside of your container, allowing you (and other services) to reach your RPC endpoint(s). See [Configure ports and firewalls](../agora-cl-usage/p2p-host-ip.md) for more information.


import {RequestUpdateWidget} from '@site/src/components/RequestUpdateWidget.js';

<RequestUpdateWidget />
