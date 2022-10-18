---
id: exiting-a-validator
title: Exit your validator
sidebar_label: Exit your validator
---

import {HeaderBadgesWidget} from '@site/src/components/HeaderBadgesWidget.js';

<HeaderBadgesWidget />

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To voluntarily exit your validator from the Ethereum network, you'll follow this procedure:

 1. Ensure that a Agora node is running locally.
 1. Issue the `voluntary-exit` command to your validator (examples provided below).
 2. Select the account(s) that should be exited. This step can be skipped by specifying the account(s) via the `--public-keys` flag when issuing the `voluntary-exit` command.
 3. Confirm your understanding of the consequences of exiting your validator by typing `Exit my validator` when prompted.

After providing confirmation, your validator node will initiate the voluntary exit by broadcasting your request through your Agora node. By default, your validator node will try to access a Agora node running on `127.0.0.1:4000`. Learn how to update this and other settings via the `--help` flag. Alternatively, visit our [Parameters documentation](../agora-cl-usage/parameters.md).

:::caution

Although validator nodes can voluntarily exit, you won't be able to withdraw your staked funds or re-enroll your validator until withdrawal functionality is implemented, which will likely happen soon after The Merge. Visit the [Agora Validator FAQ](https://agora-staking.bosagora.org/en/faq) to learn more.

:::

<Tabs
  groupId="operating-systems"
  defaultValue="lin"
  values={[
    {label: 'Linux', value: 'lin'},
    {label: 'Windows', value: 'win'},
    {label: 'MacOS', value: 'mac'},
  ]
}>
<TabItem value="lin">

**Using Docker**

```text
docker run -it -v $HOME/AgoraValidators/agora-cl-wallet-v2:/wallet \
  bosagora/agora-cl-validator:latest \
  accounts voluntary-exit --wallet-dir=/wallet
```

</TabItem>
<TabItem value="win">

**Using Agora-cl.bat**

```bash
agora-cl.bat validator accounts voluntary-exit
```

**Using Docker**

```text
docker run -it -v %LOCALAPPDATA%\AgoraValidators\agora-cl-wallet-v2:/wallet bosagora/agora-cl-validator:latest accounts voluntary-exit --wallet-dir=/wallet
```

</TabItem>
<TabItem value="mac">

**Using Docker**

```text
docker run -it -v $HOME/AgoraValidators/agora-cl-wallet-v2:/wallet \
  bosagora/agora-cl-validator:latest \
  accounts voluntary-exit --wallet-dir=/wallet
```

</TabItem>
</Tabs>

import {RequestUpdateWidget} from '@site/src/components/RequestUpdateWidget.js';

<RequestUpdateWidget />
