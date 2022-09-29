---
id: security-best-practices
title: Staking with Agora-cl - Security best practices
sidebar_label: Security best practices
---


Agora's transition to proof-of-stake is made possible by validators who each stake 40,000 BOA into the [validator deposit contract](/docs/how-agora-cl-works/validator-deposit-contract/). These validators accept the responsibility to uphold the integrity of the Agora network in exchange for staking rewards.

Validators are rewarded for maintaining highly available, trustworthy validator client instances. The security best practices in this guide will help you fulfill this responsibility by helping you minimize risk across a variety of security aspects. Within each aspect, you'll find **recommended**, **advanced**, and **Linux-specific** guidance.

Note that this document is subject to the [Bosagora Terms of Service](https://github.com/zeroone-boa/agora-cl/blob/master/TERMS_OF_SERVICE.md).


## Security principles
The following principles apply generally to staking security:

 - **Keep it simple**. Over-engineered solutions tend to increase risk.
 - **Stay up to date**. At a minimum, join the [Bosagora Telegram](https://t.me/bosagora_eng). Visit the [Learning Resources](#learning-resources) section at the end of this guide for a short list of resources that we recommend visiting periodically.
 - **Testnet first**. Harden your configuration using testnet before staking with real BOA on mainnet.
 - **Simulate risk events**. For each of the aspects within this document, simulate risk events and document your own risk mitigation plans. You can use the [risk mitigation worksheet](#mitigation-worksheet) located at the end of this guide.
 - **Proactively manage risk** You can't completely eliminate risk, but you can minimize it by following the best practices within this guide.
 - **If you’re not sure, ask**. The [Bosagora Telegram](https://t.me/bosagora_eng) are full of people who genuinely enjoy helping out.


## Uptime management
The security of the Agora blockchain relies on a **highly available** network of validators. Agora's proof-of-stake implementation incentivizes validators to remain online.

If your validator goes offline, you can lose some of your staked BOA. As long as you're online most of the time, you'll be profitable. Losses incurred from occasional downtime are negligible and are recovered in about the same ammount of time once back on line.

While it's possible to optimize your client instance architecture for high-availability and redundancy, we encourage validators to **keep it simple**. Complex validator architectures run the risk of accidentally engaging in slashable behavior. This can result in slashing, which is a far steeper price to pay than the occasional downtime penalty.

 - **Essential**: Ensure that you have adequate disk space. [We recommend having 100GB of SSD storage available](/docs/install/install-with-script#recommended-specifications). After [The Merge](https://docs.bosagora.org/en/updates/agora-merge-update), this recommendation will increase to 1-2 TB if you're also running an [execution client](/docs/execution-node/configuring-for-agora-cl) on the same computer.
 - **Essential**: Use SSDs, not spinning disks.
 - **Essential**: Periodically check your disk space to ensure that it's not being consumed by another application.
 - **Essential**: Use a network monitoring service to configure alerts when something isn't right with your validator.
 - **Advanced**: Use an uninterruptible power supply (UPS) to protect your computer from issues related to power outages.
 - **Advanced**: Configure automatic boot / AC auto-recovery in your BIOS.
 - **Advanced**: Ensure that your Agora node and/or validator automatically start running when you reboot your machine.
 - **Advanced**: Configure [Prometheus and Grafana](/docs/agora-cl-usage/monitoring/grafana-dashboard/) to help you visualize real-time validator metrics.
 - **Advanced**: Use a web-based uptime monitoring solution to monitor your validator's uptime with periodic ping-response checks.
 - **Advanced**: Configure your validator client's machine to periodically ping a secondary machine with your validator status. If the secondary machine doesn't receive an expected ping from your validator, raise an alert.

Linux-specific best practices:

 - **Essential**: If you’re not using a 1-2 TB SSD, monitor your disk space using [Disk Usage Analyzer](https://help.ubuntu.com/stable/ubuntu-help/disk-capacity.html.en). Agora-cl won’t rapidly consume your disk space, but periodically checking your available capacity can reduce the risk of surprises.
 - **Advanced**: Ubuntu users can use the [Startup Applications](https://help.ubuntu.com/stable/ubuntu-help/startup-applications.html.en) utility to auto-start beacon and validator services on boot.


## Slash avoidance
The Agora network penalizes malicious behavior with a slashing mechanism that burns staked BOA. Generally speaking, unless you deliberately act maliciously or over-engineer for redundancy, you won’t be slashed.

It’s very important for you to understand that **simple setups that occasionally experience downtime** are far better for you - and for the network - than complex highly-available architectures.

This is because **the easiest way to get slashed is to run your validating keys in two places at the same time**. This can happen if you don’t exercise extreme caution when configuring your validator client. This can also happen if you configure a “failover instance” that prematurely comes online, accidentally signaling malicious intent to the broader network.

Put simply: Agora gently discourages downtime with paper cuts. But it uses a ruthless banhammer to punish clones, and it doesn’t have any way to distinguish between accidental clones and real, malicious clones. So it’s best to keep it simple and expect some paper cuts.

 - **Essential**: Never run your validating keys in two places at the same time.
 - **Essential**: Avoid over-engineering your validator setup. Keep it simple so your validator doesn't accidentally behave maliciously.
 - **Essential**: If you migrate your validator client to another machine, don't migrate your keys without also [migrating your slashing protection history](/docs/wallet/slashing-protection/). If you lose your slashing protection history, we recommend waiting few epochs before starting your validator.



## Operational security
Operational security describes aspects of security related to your day-to-day procedures. Maintaining operational security is a critical component of risk management.

 - **Essential**: Dedicate your validator machine to validating, and use it for nothing else.
 - **Essential**: Use long, unique passwords for everything. Consider using a password manager.
 - **Essential**: Don’t use unsecured or public networks for anything related to validating.
 - **Essential**: Avoid advertising your holdings or disclosing your validator activities, especially on public forums and social media that link to your IRL identity. This information can make it easier for adversaries to target you.
 - **Essential**: Avoid disclosing metadata that links your validator index or public key back to your identity, like links to your validator’s performance in block explorers, or logs that contain sensitive information.
 - **Essential**: Mentally compartmentalize your validator activities into a separate identity, and establish a strict operational firewall between that identity and your primary identity. Ideally, nobody will ever be able to connect you to your validator.
 - **Advanced**: Assume adversaries are waiting for you to expose a vulnerability that they can exploit.
 - **Advanced**: Enumerate the things that you value most. Evaluate and maximize the security of those things to limit adversaries’ ability to gather leverage against you.


## Operating system security
We recommend applying the following security best practices to the operating system (OS) that your client runs on.

 - **Essential**: Install only what you need.
 - **Essential**: Install only trusted software.
 - **Essential**: Keep your OS updated with the latest firmware updates and security patches.
 - **Essential**: Ensure that your machine doesn't automatically shut down or restart.
 - **Essential**: Be present for all updates and restarts.
 - **Essential**: Enable your firewall and set it to the most restrictive configuration possible.
 - **Essential**: Reboot occasionally, but manually.
 - **Essential**: Start with a clean slate machine to minimize the risk of being exposed to malicious preloaded software.
 - **Essential**: Never run the client software under “administrator” accounts. The account that runs your client software should be granted the permissions it needs, and only the permissions it needs.

Linux-specific best practices:

 - **Essential**: Don't use `root` unless you need to. Don't run anything as `root`.
 - **Essential**: Configure time sync. The Agora staking Launchpad demonstrates this as part of their [validator checklist](https://agora-staking.bosagora.org/en/checklist).
 - **Essential**: Enable the UFW firewall.
 - **Advanced**: Disable the root account, root account login, and password-based login.
 - **Advanced**: Disable SSH password authentication. Use SSH keys only.

## Wallet and key management
You’ll be managing two types of keys: validator keys and withdrawal keys. Agora-cl only needs access to your validator keys. You can learn more about this [here on the Ethereum blog](https://blog.ethereum.org/2020/05/21/keys/) as Agora uses the same type of keys.

 - **Essential**: Keep your withdrawal keys secure, offline, and physically separated from your validator instance. Use your withdrawal keys only when withdrawing funds - otherwise these keys should never touch Agora-cl, or any other software.
 - **Essential**: Don't use external devices that you don't trust.
 - **Essential**: Keep your mnemonic phrase in a safe place, offline.
 - **Essential**: Generate your wallet and keys on trusted hardware with the internet turned off.
 - **Essential**: Review [Agora-cl’s security considerations](/docs/wallet/introduction#security-considerations) before generating your wallet and keys.
 - **Essential**: Keep your wallet mnemonic phrase and withdrawal keys physically separated from your validator client.
 - **Advanced**: Generate your wallet and keys using new, airgapped hardware that has never been - and will never be - connected to the internet.
 - **Advanced**: Use a metal wallet to protect your mnemonic phrase.
 - **Advanced**: Build the key generation software from source - don’t trust third-party binaries.
 - **Advanced**: Use a [Web3Signer](/docs/wallet/web3signer/) to maintain separation between your keys and client software.

## Troubleshooting
Agora and its client software are constantly improving. This constant change means that unexpected things may happen that require troubleshooting.

 - **Essential**: Expect unexpected things to happen.
 - **Essential**: Be prepared to engage with the [Bosagora Telegram](https://t.me/bosagora_eng) if you need help troubleshooting issues.
 - **Essential**: When sharing logs, be sure to redact personally identifiable information and metadata that can be used to identify your validator.
 - **Essential**: Learn how to [inspect Agora-cl's performance](/docs/monitoring/is-everything-fine).
 - **Essential**: Familiarize yourself with [Agora-cl's P2P connectivity guidance](/docs/agora-cl-usage/p2p-host-ip).
 - **Essential**: Review [the Agora-cl FAQ](/docs/faq).

## Migration security
Migrating your validator from one machine to another is a delicate process that requires attention to detail. Migrating between machines significantly increases the risk of slashing.

 - **Essential**: Review [Agora-cl's migration guidance](/docs/advanced/migrating-keys) for a detailed overview of the process and considerations.
 - **Essential**: Never run more than a single validator process with the same keys loaded.
 - **Essential**: Accept downtime as part of a successful migration.
 - **Essential**: Maintain and utilize slashing protection.

## Mitigation worksheet

| Risk event                                                                  | I'll proactively minimize risk by... | I'll notice when... | I'll respond by... |
|-----------------------------------------------------------------------------|--------------------------------------|---------------------|--------------------|
| My ISP goes offline.                                                        |                                      |                     |                    |
| There's a power outage.                                                     |                                      |                     |                    |
| My disks fail.                                                              |                                      |                     |                    |
| My computer's memory fails.                                                 |                                      |                     |                    |
| I forget everything.                                                        |                                      | n/a                 |                    |
| My OS crashes.                                                              |                                      |                     |                    |
| My disk runs out of space.                                                  |                                      |                     |                    |
| My client has a bug.                                                        |                                      |                     |                    |
| My validator instance transitions into an unexpected state.                 |                                      |                     |                    |
| Someone physically steals my validator machine.                             |                                      |                     |                    |
| I get locked out of my OS.                                                  |                                      |                     |                    |
| My validator keys are stolen or exposed.                                    |                                      |                     |                    |
| I have to migrate to another machine.                                       |                                      | n/a                 |                    |
| I suddenly have to pack up and leave, leaving my validator instance behind. |                                      | n/a                 |                    |
| I pass away.                                                                |                                      | n/a                 | n/a                |


## Learning resources

 - [Bosagora Telegram](https://t.me/bosagora_eng)
 - [Bosagora gitbook](https://docs.bosagora.org/en/agora/what-is-agora)

## Closing remarks
Participating as a validator can be a rewarding public service, but it's not without risk. Following these security best practices will help you minimize risk.

If you have any questions, feel free to visit our [Telegram](https://t.me/bosagora_eng).

-----------------------------------


import {RequestUpdateWidget} from '@site/src/components/RequestUpdateWidget.js';

<RequestUpdateWidget />
