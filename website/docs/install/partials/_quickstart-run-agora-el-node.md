import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

In this step, you'll install an execution-layer client that Agora's consensus client will connect to.

<p>Run the following command to initialize and run the execution layer client:</p>

<Tabs groupId="os" defaultValue="others" values={[
      {label: 'Windows', value: 'win'},
      {label: 'Linux, MacOS, Arm64', value: 'others'}
      ]}>
<TabItem value="others">

```text
./agora.sh el-node run
```

</TabItem>

<TabItem value="win">

```text
./agora.bat el-node run
```

</TabItem>
</Tabs>

<p>Syncing can take a long time - from minutes to hours depending on your network and hardware specification. You can proceed to the next step while your execution node syncs.</p>
