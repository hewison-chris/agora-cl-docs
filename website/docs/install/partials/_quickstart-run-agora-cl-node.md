import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<p>Run the following command to run the consensus layer client:</p>

<Tabs groupId="os" defaultValue="others" values={[
      {label: 'Windows', value: 'win'},
      {label: 'Linux, MacOS, Arm64', value: 'others'}
      ]}>
<TabItem value="others">

```
./agora.sh cl-node run
```
</TabItem>

<TabItem value="win">

```
./agora.bat cl-node run
```
</TabItem>
</Tabs>

<div>
If you're running a validator, specifying a <code>suggested-fee-recipient</code> wallet address will allow you to earn what were previously miner transaction fee tips. See [How to configure Fee Recipient](../../execution-node/fee-recipient.md) for more information about this feature.

Your Agora node will now begin syncing. This could take minutes, hours or even days depending on your network and hardware specs.

<p>Congratulations - you’re now running a <strong>full, Merge-ready Agora node</strong>. To check the status of your node see [Check node and validator status]('/docs/monitoring/checking-status').</p>
</div>
