import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Install latest docker client for your OS following the instructions at https://docs.docker.com/engine/install/

<div>
<Tabs groupId="network" defaultValue="mainnet" values={[
        {label: 'Mainnet', value: 'mainnet'},
        {label: 'Testnet', value: 'testnet'}
    ]}>
  <TabItem value="mainnet">
Download mainnet zip file and extract

```
wget https://github.com/bosagora/agora-chain/archive/refs/heads/mainnet.zip
unzip agora-chain-mainnet.zip
```

This will result in the following folder structure:
```
📂 agora-chain-mainnet
  ┣  📂 root
    ┣ 📂 config
      ┣ 📂 el
      ┣ 📂 cl
```

  <p>Navigate to your <code>agora-chain-mainnet</code> directory:</p>

```
cd agora-chain-mainnet
```
  </TabItem>

  <TabItem value="testnet">
Download mainnet zip file and extract

```
wget https://github.com/bosagora/agora-chain/archive/refs/heads/testnet.zip
unzip agora-chain-testnet.zip
```

This will result in the following folder structure:
```
📂 agora-chain-testnet
  ┣  📂 root
    ┣ 📂 config
      ┣ 📂 el
      ┣ 📂 cl
```

  <p>Navigate to your <code>agora-chain-testnet</code> directory:</p>

```
cd agora-chain-testnet
```

  </TabItem>
</Tabs>
</div>
