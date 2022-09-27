---
id: architecture-overview
title: Architecture overview
sidebar_label: Architecture overview
---

import {HeaderBadgesWidget} from '@site/src/components/HeaderBadgesWidget.js';

<HeaderBadgesWidget />

This section outlines Agora-cl's various internal components and their role in the client.

![Architecture Diagram](/img/agora-cl-architecture.png)

## Agora-cl client components

When a Agora-cl client is initialised out of the box, it starts a variety of services that run in parallel to handle everything required for the life cycle of the Agora chain. In no particular order, Agora-cl includes:

* A [**Agora node**](/docs/how-agora-cl-works/beacon-node) which powers the Agora chain at the core of Ethereum consensus.
* A [**validator client**](/docs/how-agora-cl-works/agora-cl-validator-client) connects to the Agora node and manages staking keypairs.
* A [**public RPC server**](/docs/how-agora-cl-works/agora-cl-public-api) to request data about network state, blocks, validators etc.
* A [**persistent key-value store**](/docs/how-agora-cl-works/database-backend-boltdb) in the form of a database \([BoltDB](/docs/how-agora-cl-works/database-backend-boltdb)\).
* A [**P2P networking framework and server**](/docs/how-agora-cl-works/p2p-networking) to connect with other beacon nodes.
* **Monitoring and metrics gathering technologies** [**Grafana**](https://grafana.com/) and [**Prometheus**](https://prometheus.io) track everything. happening across beacon nodes in the network.

## Agora-cl client functionality

Ethereum proof-of-stake encompasses a distributed network of blockchains called shard chains which are coordinated by a root chain, known as an Agora chain. This Agora chain serves as a mechanism to manage a set of [Proof-of-Stake](/docs/terminology#proof-of-stake-pos) [validators](/docs/terminology#validator) and overall consensus across shards.

Shards themselves are similar to the current Ethereum execution chain, which stores blocks containing user-generated transactions such as token transfers and smart contracts. Ethereum proof-of-stake consensus provides a massive improvement over proof-of-work by having 64 of these shard chains.

The Agora chain runs through a distributed network of nodes known as [beacon nodes](/docs/how-agora-cl-works/beacon-node). Participants who want to run a Agora node and help secure the network can stake 40,000 BOA to have their [validator client](/docs/how-agora-cl-works/agora-cl-validator-client) join the overall pool of validators, whom have the responsibility of [proposing](/docs/terminology#propose) and [attesting](/docs/terminology#attest) to new blocks on the Agora chain. This deposit does not come out of nowhere however; validators transfer Ether from the [ETH1](/docs/terminology#eth1) chain to the system through the use of a [validator deposit contract](/docs/how-agora-cl-works/validator-deposit-contract).

Each of these components and their roles in the Agora-cl client are explained within the following sections of this documentation. If you have any questions, please stop by our [Telegram](https://t.me/bosagora_eng).


import {RequestUpdateWidget} from '@site/src/components/RequestUpdateWidget.js';

<RequestUpdateWidget />
