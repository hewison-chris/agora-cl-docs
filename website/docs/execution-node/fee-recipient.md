---
id: fee-recipient
title: Configure Fee Recipient
sidebar_label: Configure Fee Recipient
---
import FeeRecipientPng from '@site/static/img/fee-recipient-ui.png'

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


:::tip Configure this before The Merge

If you don't configure your fee recipient wallet address before The Merge, your priority fee earnings will be deposited into a [burn address](https://scan.bosagora.org/address/0x0000000000000000000000000000000000000000/coin-balances).

:::

**Fee Recipient** is a feature that lets you specify a priority fee recipient address on your validator client instance and Agora node.

Your fee recipient wallet address is a **standard Agora wallet address**, just like the wallet address used when sending and receiving tokens from Metamask. After [The Merge](https://docs.bosagora.org/en/updates/agora-merge-update), execution clients will begin depositing priority fees into this address whenever your validator client proposes a new block.

## Background

When users pay gas to submit transactions to the Agora network, they can specify a **priority fee**. Priority fees are like tips. End-users use priority fees to incentivize block proposers to prioritize the inclusion of particular transactions in the blocks that they propose.

Miners currently collect these priority fees. After The Merge, proof-of-authority will be replaced with proof-of-stake. At this point, validators will collect 70% of these priority fees and 30% will be added to the Commons Budget balance<a class="footnote" href='#footnote-1'>[1]</a>.

Priority fees are captured by execution clients in the execution layer <a class="footnote" href='#footnote-2'>[2]</a>, so validator clients need to tell execution clients where to forward the fees. This "forwarding address" is referred to as your **fee recipient** wallet address.


## Configure fee recipient

Your fee recipient wallet address can be configured on your **validator client instance** and on your **Agora node**. We recommend configuring it in both places. Your validator's configuration will override the Agora node configuration, while the Agora node configuration will be treated like a backup in the event that your validator configuration fails.


### Configure fee recipient via JSON/YAML

You can assign different wallet addresses to each of your validator public keys using JSON/YAML configuration. Fee recipient address assignments specified through JSON/YAML override those configured through the `--suggested-fee-recipient` flag. This method of configuration uses the following JSON/YAML schema:


<Tabs groupId="format" defaultValue="json" values={[
        {label: 'JSON', value: 'json'},
        {label: 'YAML', value: 'yaml'}
    ]}>
  <TabItem value="json">


```
{
  "proposer_config": {
    "<VALIDATOR PUBLIC KEY>": {
      "fee_recipient": "<WALLET ADDRESS>"
    },
    "<VALIDATOR PUBLIC KEY>": {
      "fee_recipient": "<WALLET ADDRESS>"
    }
  },
  "default_config": {
    "fee_recipient": "<WALLET ADDRESS>"
  }
}
```


   </TabItem>
   <TabItem value="yaml">


```
---
proposer_config:
  '<VALIDATOR PUBLIC KEY>':
    fee_recipient: '<WALLET ADDRESS>'
  '<VALIDATOR PUBLIC KEY>':
    fee_recipient: '<WALLET ADDRESS>'
default_config:
  fee_recipient: '<WALLET ADDRESS>'
```


   </TabItem>
</Tabs>

Property definitions are as follows:

 - `proposer_config`: An object containing key-value pairs, where member keys are validator public keys.
 - `<VALIDATOR PUBLIC KEY>`: A validator public key (98 characters long - not a wallet address) used as a JSON property key. Example: `0x0123456748ed887f6c4c6adf334070efcd75140eada5ac83a92506dd7a057816155ad77931185101128655c0191bd0214`.
 - `fee_recipient`: A fee recipient wallet address. Example: `0x52FfeB84540173B15eEC5a486FdB5c769F50400a`.
 - `default_config`: An object containing a default fee recipient wallet address. Validator public keys not specified in `proposer_config` will use this wallet address.


The above example demonstrates configuring two 1:1 mappings between `validator public key`:`fee_recipient` and a default `fee_recipient`. In this case, the `default_config` fee recipient address would apply to all validator public keys not specified in `proposer_config`, and will override any wallet address specified by the `--suggested-fee-recipient` flag.

Tell your validator to use the JSON/YAML configuration through one of the following flags:

 - `proposer-settings-file`: Points to a local JSON/YAML file.
 - `proposer-settings-url`: Points to a remote JSON/YAML configuration endpoint in URL format. JSON should be delivered as a JSON payload, not as a JSON file. Your client will issue a GET request and expects the response <code>Content-Type</code> header to be <code>application/json</code>



### Advanced: Configure MEV builder and gas limit

In the previous section, we reviewed a sample JSON/YAML file. The following file reveals additional properties that can optionally be included in order to configure MEV builder validator registration and gas limits:

<Tabs groupId="format" defaultValue="json" values={[
        {label: 'JSON', value: 'json'},
        {label: 'YAML', value: 'yaml'}
    ]}>
  <TabItem value="json">


```
{
  "proposer_config": {
    "<VALIDATOR PUBLIC KEY>": {
      "fee_recipient": "<WALLET ADDRESS>",
      "builder": {
        "enabled": true,
        "gas_limit": "30000000"
      }
    },
    "<VALIDATOR PUBLIC KEY>": {
      "fee_recipient": "<WALLET ADDRESS>",
      "builder": {
        "enabled": false,
        "gas_limit": "30000000"
      }
    }
  },
  "default_config": {
    "fee_recipient": "<WALLET ADDRESS>",
    "builder": {
      "enabled": true,
      "gas_limit": "30000000"
    }
  }
}
```


   </TabItem>
   <TabItem value="yaml">


```
---
proposer_config:
  '<VALIDATOR PUBLIC KEY>':
    fee_recipient: '<WALLET ADDRESS>'
    builder:
      enabled: true
      gas_limit: '30000000'
  '<VALIDATOR PUBLIC KEY>':
    fee_recipient: '<WALLET ADDRESS>'
    builder:
      enabled: true
      gas_limit: '30000000'
default_config:
  fee_recipient: '<WALLET ADDRESS>'
  builder:
      enabled: true
      gas_limit: '30000000'

```


   </TabItem>
</Tabs>


New property definitions are as follows:

 - `builder`: An object containing key-value pairs related to builder configuration. Applicable only when using custom block builders. If you don't run a builder, you can ignore this.
 - `enabled`: A boolean value that determines whether or not the MEV builder validator registration is enabled. Applicable only when using custom block builders. If you don't run a builder, you can ignore this. `false` by default.
 - `gas_limit`: A gas limit. Default limit is 30M gwei - `30000000`.




### Advanced: Configure fee recipient through the Web UI

<img style={{maxWidth: 700 + 'px'}} src={FeeRecipientPng} />

Your fee recipient wallet address can also be set through the <a href='../agora-cl-usage/web-interface'>Web UI</a> dashboard. The Web UI uses the <a href='../how-agora-cl-works/keymanager-api'>Key Manager APIs</a> to set the fee recipient.

:::warning Fee Recipient changes from UI/API don't persist on client restart

If you configure your fee recipient wallet address through the web UI or Keymanager APIs, your configuration **will not persist** if you restart your validator client.

Use the `--proposer-settings-file` or `--proposer-settings-url` flags for persistent validator settings until persistence is implemented.

:::


## Frequently asked questions

**How do I know if fee recipient was properly configured?** <br />
If you don't see any errors after issuing one of the above commands, your fee recipient address has been successfully configured.

**How do I ensure that builders receive my fee recipient wallet address?** <br />
When `enable-builder` is set to `true` on your validator, you can use either the `--suggested-fee-recipient` flag or the JSON/YAML configuration method to communicate your fee recipient wallet address to builders.

**When should I set my own `gas_limit`, and how do I know what to set?** <br />
This is an advanced configuration property related to custom builders (MEV) that most users won't have to think about. In general, large gas limits will result in you not being able to include many transactions in a block, while using low values won't be as profitable.  See [https://github.com/ethereum/builder-specs/issues/17](https://github.com/ethereum/builder-specs/issues/17) for related discussion.



------------------

Footnotes:

<strong id="footnote-1">1.</strong> The <a href='https://github.com/ethereum/consensus-specs/blob/master/specs/bellatrix/validator.md#block-proposal'>Bellatrix -- Honest Validator spec</a> contains Fee Recipient implementation details pertaining to validator clients. The <a href='https://github.com/ethereum/consensus-specs/blob/master/specs/bellatrix/beacon-chain.md#executionpayload'>Bellatrix -- The Beacon Chain spec</a> contains Fee Recipient implementation details pertaining to beacon nodes. <br /><br />

<strong id="footnote-1">2.</strong> See <a href='../concepts/nodes-networks'>Nodes and Networks</a> for a quick refresher on the fundamentals of Ethereum nodes. <br />


import {RequestUpdateWidget} from '@site/src/components/RequestUpdateWidget.js';

<RequestUpdateWidget />
