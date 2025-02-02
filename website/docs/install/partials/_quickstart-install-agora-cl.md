import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Create a folder called `agora` on your SSD, and then two subfolders within it: `consensus` and `execution`:

```
📂agora
┣ 📂consensus
┣ 📂execution
```

<Tabs groupId="os" defaultValue="others" values={[
    {label: 'Windows', value: 'win'},
    {label: 'Linux, MacOS, Arm64', value: 'others'}
]}>
  <TabItem value="win">
    <p>Navigate to your <code>consensus</code> directory and run the following commands:</p>

```
mkdir -p agora\consensus && cd agora\consensus
curl https://raw.githubusercontent.com/zeroone-boa/agora-cl/agora_v3.1.1/prysm.bat --output agora-cl.bat
reg add HKCU\Console /v VirtualTerminalLevel /t REG_DWORD /d 1
```

  <p>This will download the Agora-cl client and update your registry to enable verbose logging.</p>
  </TabItem>
  <TabItem value="others">
    <p>Navigate to your <code>consensus</code> directory and run the following commands:</p>

```
mkdir agora/consensus && cd agora/consensus
curl https://raw.githubusercontent.com/zeroone-boa/agora-cl/agora_v3.1.1/prysm.sh --output agora-cl.sh && chmod +x agora-cl.sh
```

  <p>This will download the Agora-cl client and make it executable.</p>
  </TabItem>
</Tabs>


<Tabs groupId="protocol" defaultValue="jwt" values={[
        {label: 'JWT', value: 'jwt'},
        {label: 'IPC', value: 'ipc'}
    ]}>
    <TabItem value="jwt">

<h3>Generate JWT Secret</h3>

import JwtGenerationPartial from '@site/docs/partials/_jwt-generation-partial.md';

<JwtGenerationPartial />

This guide assumes that you've placed your `jwt.hex` file in your `consensus` directory, but you can place it anywhere and revise the below commands as needed.

  </TabItem>
</Tabs>
