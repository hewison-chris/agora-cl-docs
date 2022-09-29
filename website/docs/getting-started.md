---
id: getting-started
title:  Table of contents
sidebar_label: Table of contents
---


[Agora-cl](https://github.com/zeroone-boa/agora-cl) is an Agora consensus layer client based on [Ethereum](https://ethereum.org/en/developers/docs/intro-to-ethereum/) [proof-of-stake](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/) [Prysm client](https://github.com/prysmaticlabs/prysm) written in [Go](https://golang.org). You can use Agora-cl to participate in Agora's [decentralized economy](https://ethereum.org/en/developers/docs/web2-vs-web3/) by [running a node](./install/install-with-script.md) and, if you have [40,000 BOA to stake](https://docs.bosagora.org/en/validator-start/becoming-a-validator/staking-deposit-contract), a [validator](./install/install-with-script.md#step-6-run-a-validator-using-agora-cl). If you're new to Agora and are not familiar with Ethereum, you may enjoy the beginner-friendly [Nodes and networks](./concepts/nodes-networks.md) explainer.

The following table of contents provides a descriptive overview of Agora-cl's documentation:

<div class='panel'>
<a href='install/install-with-script'>Quickstart: Run a node and (optionally) stake BOA using Agora-cl</a>
<p><strong>New Agora-cl users</strong> can follow this guidance to get started with Agora-cl.</p>
</div>
<div class='panel'>
<a href='prepare-for-merge'>Prepare for The Merge</a>
<p><strong>Current Agora-cl users</strong> can follow this guidance to prepare their nodes and validators for <a href='https://docs.bosagora.org/en/updates/agora-merge-update'>The Merge</a>, an ongoing event that transitions Agora from proof-of-authority to proof-of-stake.</p>
</div>
<div class='panel'>
<a href='security-best-practices'>Security best practices</a>
<p>Learn how to <strong>minimize risk</strong> as a validator. The guidelines provided in this document are client-agnostic (they apply to Agora-cl and other clients, too).</p>
</div>
<div class='panel'>
<a href='agora-cl-usage/parameters'>Command-line options</a>
<p>Learn how to configure Agora-cl's Agora node client, validator client, and more through its <strong>command-line interface</strong>.</p>
</div>
<div class='panel'>
<a href='troubleshooting/issues-errors'>Troubleshooting</a>
<p>Review common troubleshooting scenarios and solutions.</p>
</div>
<div class='panel'>
<a href='faq'>Frequently asked questions</a>
<p>Review frequently asked questions and answers.</p>
</div>
<div class='panel section-title'>

## Advanced installation guides

<p>This section contains alternatives to the script-based installation guidance provided within our <a href='install/install-with-script'>Quickstart</a>.</p>
</div>
<div class='panel'>
<a href='install/install-with-docker'>Install using Docker</a>
<p>Learn how to install Agora-cl using preconfigured Docker images that ship with every Agora-cl release.</p>
</div>
<div class='panel'>
<a href='install/install-with-bazel'>Build from source</a>
<p>Learn how to build Agora-cl from source using Bazel.</p>
</div>
<div class='panel section-title'>

## How-tos

<p>This section contains procedural documentation that walks you through <strong>specific tasks related to Agora-cl</strong>.</p>
</div>
<div class='panel'>
<a href='execution-node/fee-recipient'>Configure Fee Recipient</a>
<p>Learn how to specify a Fee Recipient wallet address that allows validators to earn <strong>transaction fee tips</strong> post-Merge.</p>
</div>
<div class='panel'>
<a href='execution-node/authentication'>Configure JWT authentication</a>
<p>After The Merge, Agora-cl will need to securely connect to a local execution node. This how-to shows you how to form this secure connection using a JWT token.</p>
</div>
<div class='panel'>
<a href='execution-node/authentication'>Configure execution node</a>
<p>After The Merge, Agora-cl will need to securely connect to a local execution node. This how-to shows you how to configure Geth, Besu, or Nethermind.</p>
</div>
<div class='panel'>
<a href='agora-cl-usage/staying-up-to-date'>Update and downgrade Agora-cl</a>
<p>Learn how to <strong>keep Agora-cl updated</strong>, how to downgrade Agora-cl, and how to use release candidates.</p>
</div>
<div class='panel'>
<a href='agora-cl-usage/checkpoint-sync'>Sync from a checkpoint</a>
<p>Syncing from a checkpoint significantly reduces the time it takes for Agora-cl's Agora node to sync by piggypacking off of another fully-synced node.</p>
</div>
<div class='panel'>
<a href='monitoring/checking-status'>Check node and validator status</a>
<p>Learn how to check the status of your execution node, Agora node, and validator.</p>
</div>
<div class='panel'>
<a href='agora-cl-usage/slasher'>Run a slasher</a>
<p>Learn how to run a slasher, an optional Agora node process that detects and reports slashable offenses on the Agora proof-of-stake network.</p>
</div>
<div class='panel'>
<a href='advanced/agora-cl_node_api'>Run an archival node</a>
<p>Learn how to run your Agora node as an archival node. Archival nodes are like regular beacon nodes that are configured to store more blockchain data locally, increasing data retrieval performance in exchange for increased data storage requirements.</p>
</div>
<div class='panel secondary-panel section-title'>

### Backups and migrations

<p>This subsection contains how-tos that help you back up and migrate Agora-cl's data.</p>
</div>
<div class='panel'>
<a href='agora-cl-usage/database-backups'>Back up & restore database</a>
<p>Learn how to back up and restore your Agora node and validator databases so you can minimize downtime in the event of a system failure.</p>
</div>
<div class='panel'>
<a href='wallet/slashing-protection'>Import & export slashing protection history</a>
<p>Learn how to import and export your <strong>slashing protection history database</strong>, a special-purpose database that protects your validator from slashable events.</p>
</div>
<div class='panel'>
<a href='advanced/migrating-keys'>Move to a new machine</a>
<p>Learn how to migrate from one host system to another while minimizing risk of slashing and downtime.</p>
</div>
<div class='panel'>
<a href='advanced/switch-clients'>Switch to a new client</a>
<p>Learn how to migrate from one client to another while minimizing risk of slashing and downtime.</p>
</div>
<div class='panel secondary-panel section-title'>

### Validator and wallet management

<p>This subsection contains how-tos that help you manage your validator and associated keys/wallets.</p>
</div>
<div class='panel'>
<a href='wallet/deterministic'>Create a Agora-cl wallet</a>
<p>Learn how to create a wallet using Agora-cl.</p>
</div>
<div class='panel'>
<a href='wallet/nondeterministic'>Import keys into a Agora-cl wallet</a>
<p>Learn how to import EIP-2335 keystore files into Agora-cl, such as those generated by the Agora deposit CLI.</p>
</div>
<div class='panel'>
<a href='advanced/maintaining-uptime'>Maintain validator uptime with systemd or Docker</a>
<p>Learn how to minimize validator downtime by running your validator as a background service through either Docker or <code>systemd</code>. </p>
</div>
<div class='panel'>
<a href='wallet/web3signer'>Use Web3Signer</a>
<p>Learn how to use <a href='https://github.com/ConsenSys/web3signer'>Web3Signer</a>, an open-source remote signing service that allows you to store your validator keys remotely instead of locally.</p>
</div>
<div class='panel'>
<a href='agora-cl-usage/graffiti-file'>Add graffiti to blocks</a>
<p>Learn how to configure your validator to add graffiti to the blocks that it proposes.</p>
</div>
<div class='panel'>
<a href='wallet/exiting-a-validator'>Exit your validator</a>
<p>Learn how to voluntarily exit your validator from Agora's consensus layer network.</p>
</div>
<div class='panel secondary-panel section-title'>

### Monitoring, metrics, and alerts

<p>This subsection contains how-tos that help you configure monitoring and alerts for Agora-cl.</p>
</div>
<div class='panel'>
<a href='monitoring/is-everything-fine'>Monitor Agora-cl for expected behavior</a>
<p>Learn how to assess the health of your Agora-cl Agora node and/or validator by analyzing output logs.</p>
</div>
<div class='panel'>
<a href='agora-cl-usage/individual-validator-monitoring'>Monitor validators by index</a>
<p>Learn how to use Agora-cl to monitor block proposals, attestations, slashings, and more for any number of validators.</p>
</div>
<div class='panel'>
<a href='agora-cl-usage/monitoring/grafana-dashboard'>Configure dashboarding and alerts with Prometheus and Grafana</a>
<p>Learn how to configure dashboarding and alerts for your node, validator, and slasher using Prometheus (to aggregate data) and Grafana (to display it within a dashboard).</p>
</div>
<div class='panel'>
<a href='agora-cl-usage/client-stats'>Collect metrics with client-stats</a>
<p>Learn how to collect Agora node and validator metrics using Agora-cl's <code>client-stats</code> utility. This can be used to relay metrics data to the beaconcha.in stats service.</p>
</div>
<div class='panel'>
<a href='agora-cl-usage/web-interface'>Use Agora-cl's Web UI</a>
<p>Agora-cl's Web UI can be used to monitor and configure your Agora node and validator on <code>localhost</code> using an app-like interface.</p>
</div>
<div class='panel secondary-panel section-title'>

### Managing connections

<p>This subsection contains how-tos that will help you manage your gRPC and P2P connectivity.</p>
</div>
<div class='panel'>
<a href='agora-cl-usage/secure-grpc'>Secure gRPC connections</a>
<p>Learn how to create and configure TLS certificates that enable secure gRPC connections to your Agora node.</p>
</div>
<div class='panel'>
<a href='agora-cl-usage/p2p-host-ip'>Configure ports and firewalls for improved network connectivity</a>
<p>Learn how to configure ports and firewalls so your node can build stronger connections with more peers.</p>
</div>
<div class='panel section-title'>

## Concepts

<p>This section contains beginner-friendly <strong>conceptual guidance</strong> authored for readers who are new to Agora.</p>
</div>
<div class='panel'>
<a href='concepts/nodes-networks'>Nodes and networks</a>
<p>Learn about the various node types, networks, network layers, and how it all relates.</p>
</div>
<div class='panel'>
<a href='wallet/introduction'>Keys, wallets, and accounts</a>
<p>Learn how keys, wallets, and accounts relate to each other within the context of Agora.</p>
</div>
<div class='panel'>
<a href='concepts/slashing'>Slashing</a>
<p>Learn about slashing, a mechanism that incentivizes Agora nodes to detect and punish malicious actors in the Agora network.</p>
</div>
<div class='panel section-title'>

## Developer wiki

<p>This section contains documents targeted at developers who want to contribute to Agora-cl's codebase.</p>
</div>
<div class='panel'>
<a href='contribute/contribution-guidelines'>Contribute to Agora-cl's codebase</a>
</div>
<div class='panel'>
<a href='contribute/golang-principles'>Golang principles</a>
</div>
<div class='panel'>
<a href='reading/golang'>Golang resources</a>
</div>
<div class='panel'>
<a href='reading/bazel'>About Bazel</a>
</div>
<div class='panel secondary-panel section-title'>

### APIs

</div>
<div class='panel'>
<a href='how-agora-cl-works/ethereum-public-api'>Beacon node API</a>
</div>
<div class='panel'>
<a href='how-agora-cl-works/agora-cl-public-api'>Agora-cl-specific API</a>
</div>
<div class='panel'>
<a href='how-agora-cl-works/keymanager-api'>Keymanager API</a>
</div>
<div class='panel secondary-panel section-title'>

### Developer concepts

</div>
<div class='panel'>
<a href='devtools/init-state'>Initial synchronization</a>
</div>
<div class='panel'>
<a href='devtools/net-design'>Network design</a>
</div>
<div class='panel'>
<a href='devtools/extending-apis'>Extending APIs</a>
</div>
<div class='panel'>
<a href='how-agora-cl-works/architecture-overview'>Architecture overview</a>
</div>
<div class='panel'>
<a href='how-agora-cl-works/optimistic-sync'>Optimistic sync</a>
</div>
<div class='panel'>
<a href='how-agora-cl-works/agora-cl node'>Beacon node</a>
</div>
<div class='panel'>
<a href='how-agora-cl-works/agora-cl-validator-client'>Validator client</a>
</div>
<div class='panel'>
<a href='how-agora-cl-works/validator-lifecycle'>Validator lifecycle</a>
</div>
<div class='panel'>
<a href='how-agora-cl-works/validator-deposit-contract'>Validator deposit contract</a>
</div>
<div class='panel'>
<a href='how-agora-cl-works/database-backend-boltdb'>BoltDB database</a>
</div>
<div class='panel'>
<a href='how-agora-cl-works/p2p-networking'>P2P networking</a>
</div>
<div class='panel'>
<a href='how-agora-cl-works/bls-cryptography'>BLS cryptography</a>
</div>
<div class='panel'>
<a href='devtools/end-to-end'>End-to-end tests</a>
</div>
<div class='panel section-title'>

## Misc

</div>
<div class='panel'>
<a href='audits/phase0'>Security audits</a>
</div>
<div class='panel'>
<a href='licenses/prysmatic-labs'>Agora-cl license</a>
</div>
<div class='panel'>
<a href='reading/eth2'>Ethereum learning resources</a>
</div>
<div class='panel'>
<a href='reading/testnet-postmortems'>Testnet postmortems</a>
</div>
<div class='panel'>
<a href='devtools/block-explorers'>Block explorers</a>
</div>
<div class='panel'>
<a href='terminology'>Glossary</a>
</div>
<div class='panel'>
<a href='contribute/bugreports'>File a bug report</a>
</div>

<br/>

## Need assistance?

Join our [Telegram](https://t.me/bosagora_eng) server - a member of the team or our community will be happy to help.


import {RequestUpdateWidget} from '@site/src/components/RequestUpdateWidget.js';

<RequestUpdateWidget />
