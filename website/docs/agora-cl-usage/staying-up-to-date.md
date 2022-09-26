---
id: staying-up-to-date
title: Stay up to date
sidebar_label: Stay up to date
---

import {HeaderBadgesWidget} from '@site/src/components/HeaderBadgesWidget.js';

<HeaderBadgesWidget />

This section outlines the step-by-step process for how to keep Agora-cl up to date, how to downgrade versions, and some security recommendations for stakers regarding updates.

## Installing Agora-cl

There are three main ways of installing Agora-cl:

* [Using the Agora-cl installation script (Recommended)](/docs/install/install-with-script)
* [Using Docker](/docs/install/install-with-docker)
* [Building from source with Bazel (Advanced)](/docs/install/install-with-bazel)

## Recommended versions

Regardless of your installation method, we always recommend you are running the latest version in our [releases page](https://github.com/zeroone-boa/agora-cl/releases) on Github, specified in [semver](https://semver.org/) format such as `v1.0.0-beta.1`. You can check your Agora-cl version by running your beacon node or validator with the `--version` flag. For example, if using `agora-cl.sh` to run the beacon node, you would run:

```
agora-cl.sh beacon-chain --version
```

You should see a message that says `Using agora-cl version` and prints the version number. If you have set environment variable `USE_PRYSM_VERSION` to a specific version, the agora-cl.sh script will not automatically update your client. Unset the environment variable or set it to a recent version, then restart your processes with agora-cl.sh.

:::warning Double Check Running Processes
Running `agora-cl.sh beacon-chain --version` may not reflect the version of the currently running process. After verifying the version with `agora-cl.sh`, be sure to check that your process was restarted recently to pick up the latest version. Alternatively, you can query the `/metrics` page for the `prysm_version` value on port `8080` or `8081` for the beacon-chain node and validator node, respectively.
:::

:::info Always Run a Stable Release
If you are running docker or building from source, we **never** recommend running from the `:latest` docker tag nor the `master` branch of Agora-cl. we always recommend using `:stable` if running Docker, or using a specific version tag from our latest releases. Likewise for Bazel, we recommend doing a `git checkout COMMIT_HASH` where COMMIT_HASH is for our latest release version
:::

## How to subscribe for updates

Agora-cl has two official channels for release updates: our [Discord](https://discord.gg/prysmaticlabs) and our [mailing list](https://groups.google.com/g/agora-cl-dev). All releases will be notified via those channels, and we always recommend reading our release notes on Github in case there are **breaking changes** to running a node. Our team avoids breaking changes whenever possible, and we will make it clear in our release notes or in releases ahead of time that breaking changes are coming.

## How to securely upgrade Agora-cl

Updating in Agora-cl can incur a few seconds downtime depending on your installation method. Every validator will attest once per epoch (every 6.4 minutes on average), while proposals are more rare. To check your next assigned slot to attest or propose, we recommend checking your validator on [beaconcha.in](https://beaconcha.in). Although missing a single validator duty is not a big deal, you can wait to update right after you attest or propose for optimal performance.

:::tip Missing a single validator duty is not a big deal
Missing a single duty is really not a big deal for your validator profitability. Unless you want to be at the top of the [leaderboard](https://beaconcha.in/validators/leaderboard), do not worry too much. You will be profitable again in no time once your validator is up next epoch.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="operating-systems"
  defaultValue="lin"
  values={[
    {label: 'Linux', value: 'lin'},
    {label: 'Windows', value: 'win'},
    {label: 'MacOS', value: 'mac'},
    {label: 'Arm64', value: 'arm'},
  ]
}>
<TabItem value="lin">

**Using the Agora-cl installation script**

If you are running `agora-cl.sh`, all it takes to upgrade to the latest release is to stop your beacon node and validator (wait for the process to close down gracefully). Then, restart it with the same command you used to start the process. The script will automatically downloaded our latest release for you.

**Using Docker**

To update your Agora-cl with Docker, we recommend just pulling our `:stable` tag, which will always point to our latest release.

```text
docker pull gcr.io/zeroone-boa/agora-cl/beacon-chain:stable
docker pull gcr.io/zeroone-boa/agora-cl/validator:stable
```

**Using Bazel**

To run our latest release with Bazel, you can look up our [releases page](https://github.com/zeroone-boa/agora-cl/releases), look at the commit hash of the latest release, then do `git checkout COMMIT_HASH`. Afterwards, you can re-run your beacon chain and validator as you ran them earlier with Bazel.

</TabItem>
<TabItem value="win">

**Using the Agora-cl installation script**

If you are running `agora-cl.bat`, all it takes to upgrade to the latest release is to stop your beacon node and validator (wait for the process to close down gracefully). Then, restart it with the same command you used to start the process. The script will automatically downloaded our latest release for you.

**Using Docker**

To update your Agora-cl with Docker, we recommend just pulling our `:stable` tag, which will always point to our latest release.

```text
docker pull gcr.io/zeroone-boa/agora-cl/beacon-chain:stable
docker pull gcr.io/zeroone-boa/agora-cl/validator:stable
```

</TabItem>
<TabItem value="mac">

**Using the Agora-cl installation script**

If you are running `agora-cl.sh`, all it takes to upgrade to the latest release is to stop your beacon node and validator (wait for the process to close down gracefully). Then, restart it with the same command you used to start the process. The script will automatically downloaded our latest release for you.

**Using Docker**

To update your Agora-cl with Docker, we recommend just pulling our `:stable` tag, which will always point to our latest release.

```text
docker pull gcr.io/zeroone-boa/agora-cl/beacon-chain:stable
docker pull gcr.io/zeroone-boa/agora-cl/validator:stable
```

**Using Bazel**

To run our latest release with Bazel, you can look up our [releases page](https://github.com/zeroone-boa/agora-cl/releases), look at the commit hash of the latest release, then do `git checkout COMMIT_HASH`. Afterwards, you can re-run your beacon chain and validator as you ran them earlier with Bazel.


</TabItem>
<TabItem value="arm">

**Using the Agora-cl installation script**

If you are running `agora-cl.sh`, all it takes to upgrade to the latest release is to stop your beacon node and validator (wait for the process to close down gracefully). Then, restart it with the same command you used to start the process. The script will automatically downloaded our latest release for you.

**Using Docker**

To update your Agora-cl with Docker, we recommend just pulling our `:stable` tag, which will always point to our latest release.

```text
docker pull gcr.io/zeroone-boa/agora-cl/beacon-chain:stable
docker pull gcr.io/zeroone-boa/agora-cl/validator:stable
```

</TabItem>
</Tabs>

## How to securely downgrade Agora-cl

Sometimes, a new version might not work best for you and could impact your profitability negatively if there is an unforeseen issue in the software. To downgrade, there are a few important steps to keep in mind.

### Downgrading between patch versions (v1.0.x)

If you are downgrading between **patch versions**, which means only the last number in the version changed, such as `v1.0.5` to `v1.0.4`, then follow the instructions below:

<Tabs
  groupId="operating-systems"
  defaultValue="lin"
  values={[
    {label: 'Linux', value: 'lin'},
    {label: 'Windows', value: 'win'},
    {label: 'MacOS', value: 'mac'},
    {label: 'Arm64', value: 'arm'},
  ]
}>
<TabItem value="lin">

**Using the Agora-cl installation script**

If you are running `agora-cl.sh`, all it takes to downgrade to a previous release is to stop your beacon node and validator (wait for the process to close down gracefully).

Then, find the Agora-cl version you wish to run from our [releases page](https://github.com/zeroone-boa/agora-cl/releases), such as v1.0.5, then run the command `export USE_PRYSM_VERSION=v1.0.5`.

Then, restart it with the same command you used to start the process. The script will automatically use the release you specified.

**Using Docker**

To run a previous Agora-cl version with Docker, choose the release you want to run, then change all your docker run commands to use that version tag. For example, instead of `docker run gcr.io/zeroone-boa/agora-cl:stable`, do `docker run gcr.io/zeroone-boa/agora-cl:v1.0.5` if you want to run version v1.0.5.

**Using Bazel**

To run our latest release with Bazel, you can look up our [releases page](https://github.com/zeroone-boa/agora-cl/releases), look at the release tag you want to run, such as v1.0.5, then do `git checkout v1.0.5`. Afterwards, you can re-run your beacon chain and validator as you ran them earlier with Bazel.

**Using Systemd**

Edit the systemd files for both validator (`/etc/systemd/system/validator.service`) and beacon (`/etc/systemd/system/beacon.service`). The filename  depends on what you used when you installed, if you forgot the name, just `ls` that directory (`/etc/systemd/system/`) and edit them both. Add the `Environment` key under the `[Service]` group to have `Environment     =  USE_PRYSM_VERSION=v2.0.2`

Example for the beacon chain:
```
[Unit]
Description     = Ethereum Beacon Chain Service
Wants           = network-online.target
After           = network-online.target

[Service]
Type            = simple
User            = eth
ExecStart       = /home/eth/agora-cl/agora-cl.sh beacon-chain --config-file=/etc/agora-cl/beacon-chain.yaml
Restart         = on-failure
TimeoutStopSec  = 900
Environment     = USE_PRYSM_VERSION=v2.0.2

[Install]
WantedBy    = multi-user.target
```

After you finish editing both of the files, you need to reload the service unit
```
sudo systemctl daemon-reload
```

Once you do that, the agora-cl beacon and validator are locked in that version, so you need to always update it. If you want to go back to the automatic upgrades after reboot, you just need to remove the `Environment` key.

</TabItem>
<TabItem value="win">

**Using the Agora-cl installation script**

If you are running `agora-cl.bat`, all it takes to downgrade to a previous release is to stop your beacon node and validator (wait for the process to close down gracefully).

Then, find the Agora-cl version you wish to run from our [releases page](https://github.com/zeroone-boa/agora-cl/releases), such as v1.0.5, then run the command `set USE_PRYSM_VERSION=v1.0.5`.

Then, restart it with the same command you used to start the process. The script will automatically use the release you specified.

**Using Docker**

To run a previous Agora-cl version with Docker, choose the release you want to run, then change all your docker run commands to use that version tag. For example, instead of `docker run gcr.io/zeroone-boa/agora-cl:stable`, do `docker run gcr.io/zeroone-boa/agora-cl:v1.0.5` if you want to run version v1.0.5.

</TabItem>
<TabItem value="mac">

**Using the Agora-cl installation script**

If you are running `agora-cl.sh`, all it takes to downgrade to a previous release is to stop your beacon node and validator (wait for the process to close down gracefully).

Then, find the Agora-cl version you wish to run from our [releases page](https://github.com/zeroone-boa/agora-cl/releases), such as v1.0.5, then run the command `export USE_PRYSM_VERSION=v1.0.5`.

Then, restart it with the same command you used to start the process. The script will automatically use the release you specified.

**Using Docker**

To run a previous Agora-cl version with Docker, choose the release you want to run, then change all your docker run commands to use that version tag. For example, instead of `docker run gcr.io/zeroone-boa/agora-cl:stable`, do `docker run gcr.io/zeroone-boa/agora-cl:v1.0.5` if you want to run version v1.0.5.

**Using Bazel**

To run our latest release with Bazel, you can look up our [releases page](https://github.com/zeroone-boa/agora-cl/releases), look at the release tag you want to run, such as v1.0.5, then do `git checkout v1.0.5`. Afterwards, you can re-run your beacon chain and validator as you ran them earlier with Bazel.

</TabItem>
<TabItem value="arm">

**Using the Agora-cl installation script**

If you are running `agora-cl.sh`, all it takes to downgrade to a previous release is to stop your beacon node and validator (wait for the process to close down gracefully).

Then, find the Agora-cl version you wish to run from our [releases page](https://github.com/zeroone-boa/agora-cl/releases), such as v1.0.5, then run the command `set=USE_PRYSM_VERSION=v1.0.5`.

Then, restart it with the same command you used to start the process. The script will automatically use the release you specified.

**Using Docker**

To run a previous Agora-cl version with Docker, choose the release you want to run, then change all your docker run commands to use that version tag. For example, instead of `docker run gcr.io/zeroone-boa/agora-cl:stable`, do `docker run gcr.io/zeroone-boa/agora-cl:v1.0.5` if you want to run version v1.0.5.

</TabItem>
</Tabs>

### Downgrading between minor versions (v1.x)

If you are downgrading between **minor versions**, meaning the middle number in the version has changed, such as `v1.1.0` to `v1.0.x`, then follow the instructions below carefully:

<Tabs
  groupId="operating-systems"
  defaultValue="lin"
  values={[
    {label: 'Linux', value: 'lin'},
    {label: 'Windows', value: 'win'},
    {label: 'MacOS', value: 'mac'},
    {label: 'Arm64', value: 'arm'},
  ]
}>
<TabItem value="lin">

**Using the Agora-cl installation script**

If you are running `agora-cl.sh`, first stop your beacon node and validator (wait for the process to close down gracefully).

Next, we recommend backing up any important important folders such as your beacon node data directory and the validator wallet is important. You can simply make copies of the directories and keep them safe in case the downgrade process goes wrong.

Next up, run our database rollback command to make sure your database is going to be compatible with your new version. Find the folder where your `validator.db` file lives (it is in your wallet directory under a folder called `direct` or `derived`), then run:

```
agora-cl.sh validator db migrate down --datadir=/path/to/folder
```

Then, find the Agora-cl version you wish to run from our [releases page](https://github.com/zeroone-boa/agora-cl/releases), such as v1.0.5, then run the command `set=USE_PRYSM_VERSION=v1.0.5`.

Then, restart it with the same command you used to start the process. The script will automatically use the release you specified.

**Using Docker**

To run a previous Agora-cl version with Docker, choose the release you want to run, such as v1.0.5.

Next, we recommend backing up any important important folders such as your beacon node data directory and the validator wallet is important. You can simply make copies of the directories and keep them safe in case the downgrade process goes wrong.

Next up, run our database rollback command to make sure your database is going to be compatible with your new version. Find the folder where your `validator.db` file lives (it is in your wallet directory under a folder called `direct` or `derived`), then run:

```
docker run -v /path/to/folder:/data gcr.io/zeroone-boa/agora-cl/validator:stable db migrate down --datadir=/data
```

Then change all your docker run commands to use that version tag. For example, instead of `docker run gcr.io/zeroone-boa/agora-cl:stable`, do `docker run gcr.io/zeroone-boa/agora-cl:v1.0.5` if you want to run version v1.0.5.

**Using Bazel**

To run our latest release with Bazel, you can look up our [releases page](https://github.com/zeroone-boa/agora-cl/releases), look at the release tag you want to run, such as v1.0.5.

Next, we recommend backing up any important important folders such as your beacon node data directory and the validator wallet is important. You can simply make copies of the directories and keep them safe in case the downgrade process goes wrong.

Next up, run our database rollback command to make sure your database is going to be compatible with your new version. Find the folder where your `validator.db` file lives (it is in your wallet directory under a folder called `direct` or `derived`), then run:

```
bazel run //validator:validator -- db migrate down --datadir=/path/to/folder
```

Then do `git checkout v1.0.5`. Afterwards, you can re-run your beacon chain and validator as you ran them earlier with Bazel.

</TabItem>
<TabItem value="win">

**Using the Agora-cl installation script**

If you are running `agora-cl.bat`, first stop your beacon node and validator (wait for the process to close down gracefully).

Next, we recommend backing up any important important folders such as your beacon node data directory and the validator wallet is important. You can simply make copies of the directories and keep them safe in case the downgrade process goes wrong.

Next up, run our database rollback command to make sure your database is going to be compatible with your new version. Find the folder where your `validator.db` file lives (it is in your wallet directory under a folder called `direct` or `derived`), then run:

```
agora-cl.bat validator db migrate down --datadir=\path\to\folder
```

Then, find the Agora-cl version you wish to run from our [releases page](https://github.com/zeroone-boa/agora-cl/releases), such as v1.0.5, then run the command `set USE_PRYSM_VERSION=v1.0.5`.

Then, restart it with the same command you used to start the process. The script will automatically use the release you specified.

**Using Docker**

To run a previous Agora-cl version with Docker, choose the release you want to run, such as v1.0.5.

Next, we recommend backing up any important important folders such as your beacon node data directory and the validator wallet is important. You can simply make copies of the directories and keep them safe in case the downgrade process goes wrong.

Next up, run our database rollback command to make sure your database is going to be compatible with your new version. Find the folder where your `validator.db` file lives (it is in your wallet directory under a folder called `direct` or `derived`), then run:

```
docker run -v \path\to\folder:/data gcr.io/zeroone-boa/agora-cl/validator:stable db migrate down --datadir=/data
```

Then change all your docker run commands to use that version tag. For example, instead of `docker run gcr.io/zeroone-boa/agora-cl:stable`, do `docker run gcr.io/zeroone-boa/agora-cl:v1.0.5` if you want to run version v1.0.5.

</TabItem>
<TabItem value="mac">

**Using the Agora-cl installation script**

If you are running `agora-cl.sh`, first stop your beacon node and validator (wait for the process to close down gracefully).

Next, we recommend backing up any important important folders such as your beacon node data directory and the validator wallet is important. You can simply make copies of the directories and keep them safe in case the downgrade process goes wrong.

Next up, run our database rollback command to make sure your database is going to be compatible with your new version. Find the folder where your `validator.db` file lives (it is in your wallet directory under a folder called `direct` or `derived`), then run:

```
agora-cl.sh validator db migrate down --datadir=/path/to/folder
```

Then, find the Agora-cl version you wish to run from our [releases page](https://github.com/zeroone-boa/agora-cl/releases), such as v1.0.5, then run the command `export USE_PRYSM_VERSION=v1.0.5`.

Then, restart it with the same command you used to start the process. The script will automatically use the release you specified.

**Using Docker**

To run a previous Agora-cl version with Docker, choose the release you want to run, such as v1.0.5.

Next, we recommend backing up any important important folders such as your beacon node data directory and the validator wallet is important. You can simply make copies of the directories and keep them safe in case the downgrade process goes wrong.

Next up, run our database rollback command to make sure your database is going to be compatible with your new version. Find the folder where your `validator.db` file lives (it is in your wallet directory under a folder called `direct` or `derived`), then run:

```
docker run -v /path/to/folder:/data gcr.io/zeroone-boa/agora-cl/validator:stable db migrate down --datadir=/data
```

Then change all your docker run commands to use that version tag. For example, instead of `docker run gcr.io/zeroone-boa/agora-cl:stable`, do `docker run gcr.io/zeroone-boa/agora-cl:v1.0.5` if you want to run version v1.0.5.

**Using Bazel**

To run our latest release with Bazel, you can look up our [releases page](https://github.com/zeroone-boa/agora-cl/releases), look at the release tag you want to run, such as v1.0.5.

Next, we recommend backing up any important important folders such as your beacon node data directory and the validator wallet is important. You can simply make copies of the directories and keep them safe in case the downgrade process goes wrong.

Next up, run our database rollback command to make sure your database is going to be compatible with your new version. Find the folder where your `validator.db` file lives (it is in your wallet directory under a folder called `direct` or `derived`), then run:

```
bazel run //validator:validator -- db migrate down --datadir=/path/to/folder
```

Then do `git checkout v1.0.5`. Afterwards, you can re-run your beacon chain and validator as you ran them earlier with Bazel.

</TabItem>
<TabItem value="arm">

**Using the Agora-cl installation script**

If you are running `agora-cl.sh`, first stop your beacon node and validator (wait for the process to close down gracefully).

Next, we recommend backing up any important important folders such as your beacon node data directory and the validator wallet is important. You can simply make copies of the directories and keep them safe in case the downgrade process goes wrong.

Next up, run our database rollback command to make sure your database is going to be compatible with your new version. Find the folder where your `validator.db` file lives (it is in your wallet directory under a folder called `direct` or `derived`), then run:

```
agora-cl.sh validator db migrate down --datadir=/path/to/folder
```

Then, find the Agora-cl version you wish to run from our [releases page](https://github.com/zeroone-boa/agora-cl/releases), such as v1.0.5, then run the command `set=USE_PRYSM_VERSION=v1.0.5`.

Then, restart it with the same command you used to start the process. The script will automatically use the release you specified.

**Using Docker**

To run a previous Agora-cl version with Docker, choose the release you want to run, such as v1.0.5.

Next, we recommend backing up any important important folders such as your beacon node data directory and the validator wallet is important. You can simply make copies of the directories and keep them safe in case the downgrade process goes wrong.

Next up, run our database rollback command to make sure your database is going to be compatible with your new version. Find the folder where your `validator.db` file lives (it is in your wallet directory under a folder called `direct` or `derived`), then run:

```
docker run -v /path/to/folder:/data gcr.io/zeroone-boa/agora-cl/validator:stable db migrate down --datadir=/data
```

Then change all your docker run commands to use that version tag. For example, instead of `docker run gcr.io/zeroone-boa/agora-cl:stable`, do `docker run gcr.io/zeroone-boa/agora-cl:v1.0.5` if you want to run version v1.0.5.

</TabItem>
</Tabs>

### Downgrading between major version bumps

For **major version bumps** such as from `v1.0.0` to `v2.0.0`, you cannot downgrade as these are meant to be backwards incompatible changes.


import {RequestUpdateWidget} from '@site/src/components/RequestUpdateWidget.js';

<RequestUpdateWidget />
