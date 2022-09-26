---
id: parameters
title: Command-line options
sidebar_label: Command-line options
---

import {FetchCLIHelp} from '../../src/fetchCliHelp.js';

import {HeaderBadgesWidget} from '@site/src/components/HeaderBadgesWidget.js';


This section lists the various flags used to customise the startup process of Agora-cl.

## Beacon Node Configuration

Below are all the available configuration parameters for the Agora-cl Agora node grouped by functionality. All information is retrieved from the latest Agora-cl release.

<FetchCLIHelp prysmComponent={"beacon-chain"}/>

## Validator Configuration

Below are all the available configuration parameters for Agora-cl validator client grouped by functionality. All information is retrieved from the latest Agora-cl release.

:::tip Graffiti
You can use the `--graffiti` validator flag to add a string to your proposed blocks, which will be seen on the block explorer. I.e; `<startup command> --graffiti "Agora-cl is awesome!"`
:::

<FetchCLIHelp prysmComponent={"validator"}/>

## Client Stats Configuration

Below are all the available configuration parameters for Agora-cl client stats software: an optional service that can report process metrics to third-parties such as block explorers. You can read more about this [here](/docs/agora-cl-usage/client-stats).

<FetchCLIHelp prysmComponent={"client-stats"}/>

## Loading Parameters via a .YAML File

:::info
Loading parameters via .YAML file is optional.
:::

Agora-cl now supports loading flag values from a specified `.yaml` file. Defining parameters in this way cuts back on terminal clutter and allows unique startup profiles to be saved independently.

The below steps show how place a common Agora-cl flag into a YAML file and how to specify it at start up.

### GNU\Linux, Mac, ARM64
1. In your Agora-cl working directory, create a `.yaml` file and open it in a text editor.

2. Add the following lines to the file before closing and saving:
```sh
datadir: '/data'
```

3. Start the Agora-cl beacon chain as normal, while specifying the location of the `.yaml` like so:
```sh
./agora-cl.sh beacon-chain --config-file=/path/to/file.yaml
```
or for a validator like so:
```sh
./agora-cl.sh validator --config-file=/path/to/file.yaml
```

### Windows
1. In your Agora-cl working directory, create a `.yaml` file and open it in a text editor.

2. Add the following lines to the file before closing and saving:
```sh
datadir: 'c:\agora-cl'
```

3. Start the Agora-cl beacon chain as normal, while specifying the location of the `.yaml` like so:
```sh
.\agora-cl.bat beacon-chain --config-file=c:\path\to\file.yaml
```
or for a validator like so:
```sh
.\agora-cl.bat validator --config-file=c:\path\to\file.yaml
```

It is possible to provide additional flags alongside the `.yaml` file, though if conflicting flags are provided, the flag defined in the`.yaml` file will take priority. For example, if the flag `--datadir=/data2` is specified and `datadir: "/data1"` is in the `.yaml` file, Agora-cl would prioritise writing to `/data1`.


import {RequestUpdateWidget} from '@site/src/components/RequestUpdateWidget.js';

<RequestUpdateWidget />
