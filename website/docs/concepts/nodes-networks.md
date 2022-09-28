---
id: nodes-networks
title: Nodes and networks
sidebar_label: Nodes and networks
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ClientStackPng from '@site/static/img/client-stack.png';
import NetworkPng from '@site/static/img/network.png';
import NetworkLayersPng from '@site/static/img/network-layers.png';


Agora is a decentralized **network** of **nodes** that communicate via peer-to-peer connections. These connections are formed by computers running Agora's specialized client software:

<img style={{maxWidth: 461 + 'px'}} src={NetworkPng} />


## Nodes

An Agora **node** is a running instance of Agora's client software. This software is responsible for running the Agora blockchain.

There are two primary types of nodes in Agora: **execution nodes** and **consensus nodes**. Colloquially, a "node" refers to an execution node and a consensus node working together. Nodes establish connections with other nodes running on other computers, forming a decentralized peer-to-peer network that processes Agora blocks and transactions.

When users stake 40,000 BOA to participate in Agora's proof-of-stake consensus mechanism, they use a separate piece of software called a **validator client**, which connects to their Agora-cl Agora node. This is special piece of software that manages validator keys and duties such as producing new blocks and voting on others' proposed blocks. Validator clients connect to the Agora network through consensus nodes, which depend on execution nodes:

<br />

<img src={ClientStackPng} />

<br />

<table>
    <tr>
        <th style={{minWidth: 170 + 'px'}}>Component</th>
        <th>Description</th>
    </tr>
    <tr>
      <td><strong>Agora node</strong><br />aka "Node"</td>
      <td>An Agora node is an <strong>execution node</strong> and <strong>Agora node</strong> working together. Agora nodes communicate peer-to-peer to secure the Agora network, and require both <strong>execution-layer client software</strong> and <strong>consensus-layer client software</strong>.</td>
    </tr>
    <tr>
      <td><strong>Execution node</strong></td>
      <td>Execution nodes use execution client software to process transactions and smart contracts in Agora's <strong>execution layer</strong>. Agora-el is the current execution client software.<br /> <br />An execution node will talk to other execution nodes via peer-to-peer networking, and to a local Agora node.</td>
    </tr>
    <tr>
      <td><strong>Beacon node</strong></td>
      <td>Agora nodes use Agora-cl consensus client software to coordinate Agora's proof-of-stake consensus.<br /> <br />An Agora node will talk to other Agora nodes via peer-to-peer networking, to a local execution node, and (optionally) to a local validator.</td>
    </tr>
    <tr>
      <td><strong>Validator</strong></td>
      <td>Validator clients are specialized software that let people stake 40,000 BOA as collateral within Agora's <strong>consensus layer</strong>. Validators are responsible for proposing blocks within Agora's proof-of-stake consensus mechanism, and will fully replace proof-of-work miners after <a href='https://bosagora.org/en/upgrades/merge/'>The Merge</a>. <br /> <br />A validator will talk only to a local Agora node. A validator's Agora node tells the validator what work to do, and broadcasts the validator's work to the Agora network as the validator performs its duties.</td>
    </tr>
</table>


## Networks

The Agora network that hosts real-world applications is referred to as **Agora Mainnet**. Agora Mainnet is the live, **production** instance of Agora that mints and manages real Agora (BOA) and holds **real** monetary value.

There are other live, **test** instances of Agora that mint and manage **test** Agora. Each test network is compatible with (and only with) its own type of test BOA. These test networks let developers, node runners, and validators test new functionality before using real BOA on Mainnet.

Every Agora network is divided into two layers: **execution layer** (EL) and **consensus layer** (CL):

<img src={NetworkLayersPng} />

<br />

Every Agora node contains software for both layers: **execution-layer** client software (like Nethermind, Besu, Geth, and Erigon), and **consensus-layer** client software (like Agora-cl, Teku, Lighthouse, Nimbus, and Lodestar).

Every network's execution layer works with (and only with) its corresponding "partner" consensus layer. EL-CL network pairs work together to run Agora proof-of-stake.

<br />

<table>
    <tr>
        <th style={{minWidth: 160 + 'px'}}>EL network</th>
        <th style={{minWidth: 160 + 'px'}}>CL network</th>
        <th>Description</th>
    </tr>
    <tr>
      <td>Mainnet</td>
      <td>Mainnet</td>
      <td>When people refer to Agora, they're usually referring to Agora Mainnet, which refers to a pair of networks: execution-layer (EL) Mainnet and consensus-layer (CL) Mainnet. CL Mainnet is commonly referred to as the Beacon Chain.<br/><br/>This network pair mints and manages real <strong>BOA</strong>.</td>
    </tr>
    <tr>
      <td>Testnet</td>
      <td>Testnet</td>
      <td>This is the test network that most people use when learning how to configure their validator for the first time. <br/>This network mints and manages <strong>TBOA</strong>, a type of testnet BOA used exclusively within this network.</td>
    </tr>
</table>



## Frequently asked questions

**Can I run an execution node without running a Agora node?** <br/>
No. Although this is possible pre-Merge, all Agora network participants will need to run both an execution node and a consensus node.

**What happened to miners?** <br/>
The concept of mining exists only in the domain of proof-of-authority consensus. After The Merge, Agora's consensus will be managed by a proof-of-stake mechanism, which replaces miners with validators.

**Where do slashers come into play?** <br/>
Slashers, like validators, use specialized pieces of consensus-layer client software to fulfill a critical responsibility for the Agora network. Slashers attempt to detect and punish malicious validators. Learn more by reading our [Slasher documentation](../agora-cl-usage/slasher.md).

**How do I get testnet BOA?** <br/>
We recommend using [Paradigm's MultiFaucet](https://faucet.paradigm.xyz/). If that doesn't work, you can ask the community for testnet BOA on either the [Bosagora Telegram](https://t.me/bosagora_eng) or on [r/ethstaker](https://www.reddit.com/r/ethstaker).


import {RequestUpdateWidget} from '@site/src/components/RequestUpdateWidget.js';

<RequestUpdateWidget />
