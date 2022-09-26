---
id: database-backups
title: Back up & restore database
sidebar_label: Back up & restore database
---

import {HeaderBadgesWidget} from '@site/src/components/HeaderBadgesWidget.js';

<HeaderBadgesWidget />

This section outlines how to perform database backups for your Agora node and validator client. Both services expose an **HTTP backup endpoint** which is the **safest way** to trigger a database backup.

:::danger Doing manual folder backups is not safe
If you perform backups by manually copying the validator database while the client is running, you risk copying a corrupted database! You might be copying the folder right when the validator is in the middle of writing data to the database, and could end up with a bad backup. For this reason, HTTP backups are the way to go.
:::

## Beacon node

Both the Agora node and validator use an embedded key-value store as a database called [BoltDB](https://github.com/boltdb/bolt) to store all important information. Backing up your Agora node database is a good practice, although **not critical** to being able to validate in Ethereum consensus. if you want to perform a backup, here's the safest way to do it.

:::danger Backing up the database can lead to OOM for large databases.
In event your system memory is insufficient performing a backup can lead to an out of memory exception. The webhook performs the backup in-memory by copying all the separate buckets from the source database to the backup database. If the source database is large, performing the backup might take too long and lead to an inconsistent backup database. In the event the source database is large ( > 20 Gb), as in mainnet right now, it is recommended to not perform the backup via the webhook. Instead manual backups should be utilised where the Agora node is stopped and then the database file is copied via the filesystem.
:::

### Backing up the Database via a Webhook

As the note above describes, we highly recommend performing manual backups of the database while your Agora node and validator are stopped rather than using a webhook. Due to performance limitations, it is safer to take a manual approach while your software is stopped.

Add the following flags to your Agora node:

- `--enable-db-backup-webhook`: Serve an http server to initiate database backups. The handler is served on the Agora node's monitoring host and port. Default endpoint is `http://127.0.0.1:8080/db/backup` if the flag is enabled.
- `--db-backup-output-dir`: Folder path to where backups will be output to, such as `/path/to/mybackups`. If the directory exists, make sure the permissions for that directory is `0700`.

Now, your Agora node will expose an HTTP endpoint `http://monitoringhost:monitoringport/db/backup`, which is `http://127.0.0.1:8080/db/backup` by default. You can hit this endpoint using curl or any other tool you prefer, and a backup will initiate which will be output to your `--db-backup-output-dir` path.

### Restoring from a backup

Ensure your Agora node is turned off if restoring a backup. You can restore a beacon chain DB from a backup file with the following command:

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

```sh
agora-cl.sh beacon-chain db restore --restore-source-file=/path/to/backup --restore-target-dir=/path/to/desired/datadir
```

**Using Bazel**

```sh
bazel run //beacon-chain -- db restore --restore-source-file=/path/to/backup --restore-target-dir=/path/to/desired/datadir
```

</TabItem>
<TabItem value="win">

**Using the Agora-cl installation script**

```sh
agora-cl.bat beacon-chain db restore --restore-source-file=\path\to\backup --restore-target-dir=\path\to\desired\datadir
```

</TabItem>
<TabItem value="mac">

**Using the Agora-cl installation script**

```sh
agora-cl.sh beacon-chain db restore --restore-source-file=/path/to/backup --restore-target-dir=/path/to/desired/datadir
```

**Using Bazel**

```sh
bazel run //beacon-chain -- db restore --restore-source-file=/path/to/backup --restore-target-dir=/path/to/desired/datadir
```

</TabItem>
<TabItem value="arm">

**Using the Agora-cl installation script**

```sh
agora-cl.sh beacon-chain db restore --restore-source-file=/path/to/backup --restore-target-dir=/path/to/desired/datadir
```

**Using Bazel**

```sh
bazel run //beacon-chain -- db restore --restore-source-file=/path/to/backup --restore-target-dir=/path/to/desired/datadir
```

</TabItem>
</Tabs>

## Validator client

### Add the backup webhook flags to your validator client

Add the following flags to your validator client:

- `--enable-db-backup-webhook`: Serve an http server to initiate database backups. The handler is served on the validator client's monitoring host and port. Default endpoint is `http://127.0.0.1:8081/db/backup` if the flag is enabled.
- `--db-backup-output-dir`: Folder path to where backups will be output to, such as `/path/to/mybackups`.

Now, your validator client will expose an HTTP endpoint `http://monitoringhost:monitoringport/db/backup`, which is `http://127.0.0.1:8081/db/backup` by default. You can hit this endpoint using curl or any other tool you prefer, and a backup will initiate which will be output to your `--db-backup-output-dir` path.


### Restoring from a backup

Ensure your validator client is turned off if restoring a backup. You can restore a validator DB from a backup file with the following command:

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

```sh
agora-cl.sh validator db restore --restore-source-file=/path/to/backup --restore-target-dir=/path/to/desired/datadir
```

**Using Bazel**

```sh
bazel run //validator -- db restore --restore-source-file=/path/to/backup --restore-target-dir=/path/to/desired/datadir
```

</TabItem>
<TabItem value="win">

**Using the Agora-cl installation script**

```sh
agora-cl.bat validator db restore --restore-source-file=\path\to\backup --restore-target-dir=\path\to\desired\datadir
```

</TabItem>
<TabItem value="mac">

**Using the Agora-cl installation script**

```sh
agora-cl.sh validator db restore --restore-source-file=/path/to/backup --restore-target-dir=/path/to/desired/datadir
```

**Using Bazel**

```sh
bazel run //validator -- db restore --restore-source-file=/path/to/backup --restore-target-dir=/path/to/desired/datadir
```

</TabItem>
<TabItem value="arm">

**Using the Agora-cl installation script**

```sh
agora-cl.sh validator db restore --restore-source-file=/path/to/backup --restore-target-dir=/path/to/desired/datadir
```

**Using Bazel**

```sh
bazel run //validator -- db restore --restore-source-file=/path/to/backup --restore-target-dir=/path/to/desired/datadir
```

</TabItem>
</Tabs>


import {RequestUpdateWidget} from '@site/src/components/RequestUpdateWidget.js';

<RequestUpdateWidget />
