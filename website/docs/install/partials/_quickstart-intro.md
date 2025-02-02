import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info Already running a node?

This guidance is targeted at new users. If you're already running a node, see [Prepare for The Merge](../../prepare-for-merge.md).

:::


## Select a configuration

If you're looking for the simplest configuration, select `Agora-el` and `IPC`:

import MultidimensionalContentControlsPartial from '@site/docs/partials/_multidimensional-content-controls-partial.md';

<MultidimensionalContentControlsPartial />

## Introduction

Agora-cl is an implementation of the [Ethereum proof-of-stake consensus specification](https://github.com/ethereum/consensus-specs). In this quickstart, you’ll use Agora-cl to run an Agora-cl node and optionally a validator. This will let you stake 40,000 BOA using hardware that you manage.

This is a beginner-friendly guide. Familiarity with the command line is expected, but otherwise this guide makes no assumptions about your technical skills or prior knowledge.

At a high level, we'll walk through the following flow:

 1. Configure an **Agora execution node** using Agora-el, an execution-layer client.
 2. Configure an **Agora consensus node** using Agora-cl, a consensus-layer client.
 3. Configure an **Agora validator** and stake BOA using Agora-validator (optional).

<br />

:::info Knowledge Check

**Not familiar with nodes, networks, and related terminology?** Consider reading [Nodes and networks](../../concepts/nodes-networks.md) before proceeding.

:::
