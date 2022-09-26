---
id: keymanager-api
title: Keymanager APIs
sidebar_label: Keymanager APIs
---

import {HeaderBadgesWidget} from '@site/src/components/HeaderBadgesWidget.js';

<HeaderBadgesWidget />

Agora-cl supports the official [Keymanager APIs](https://github.com/ethereum/keymanager-APIs), a REST API spec for validator clients to provide an alternative to CLI commands for onboarding and offboarding their validator keys on the consensus client.

All Agora-cl Validator Client APIs require the use of the `--web` flag.

Please refer to the "local keystores APIs" to manage locally stored validator keys.

Please refer to the "remote keystores APIs" to manage public key settings for Web3Signer; go to our Web3Signer docs page for more information. Agora-cl Web UI does not currently support this API.

## Authentication

A JWT token ( found on the second line of the auth-token file) will be generated in the agora-cl default wallet directory otherwise defined by `--wallet-dir` flag. the token will also be printed in the console:
```
[2022-04-15 14:07:39]  INFO rpc: http://127.0.0.1:7500/initialize?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.ck3J6tcvHcI74IiFjyJqcBH-MmNAq-fMr0ncyZkGvFM
```
The token needs to be copied and set in the header of the API request:
```
Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.ck3J6tcvHcI74IiFjyJqcBH-MmNAq-fMr0ncyZkGvFM`
```

## Other Agora-cl specific errors and usecases

Agora-cl comes with some client specific edge cases and usages. These cases will be documented on the [Keymanager API repos under flows](https://github.com/ethereum/keymanager-APIs/tree/master/flows/client-specific/agora-cl).


import {RequestUpdateWidget} from '@site/src/components/RequestUpdateWidget.js';

<RequestUpdateWidget />
