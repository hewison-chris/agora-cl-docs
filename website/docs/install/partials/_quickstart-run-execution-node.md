import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="execution-clients" defaultValue="agora-el" values={[
    {label: 'Agora-el', value: 'agora-el'}
    ]}>
  <TabItem value="Agora-el">
    <p class='hidden-in-jwt-guide hidden-in-mergeprep-guide'>Download and run the latest 64-bit stable release of the <strong>Agora-el installer</strong> for your operating system from the <a href='https://agora-el.bosagora.org/downloads/'>Agora execution layer client downloads page</a>.</p>
    <p class='hidden-in-jwt-guide hidden-in-mergeprep-guide'>Navigate to your <code>execution</code> directory and run the following command to start your execution node:</p>
    <Tabs groupId="network" defaultValue="mainnet" values={[
        {label: 'Mainnet', value: 'mainnet'},
        {label: 'Testnet', value: 'testnet'}
    ]}>
      <TabItem value="mainnet">
        <Tabs className='tabs-hidden-in-jwt-guide'  groupId="protocol" defaultValue="jwt" values={[
            {label: 'JWT', value: 'jwt'},
            {label: 'IPC', value: 'ipc'}
            ]}>
                <TabItem value="jwt"><pre><code>geth --http --http.api eth,net,engine,admin --authrpc.jwtsecret /path/to/jwt.hex </code></pre></TabItem>
                <TabItem value="ipc"><pre><code>geth --http --http.api eth,net,engine,admin </code></pre></TabItem>
            </Tabs>
      </TabItem>
      <TabItem value="testnet">
        <Tabs className='tabs-hidden-in-jwt-guide'  groupId="protocol" defaultValue="jwt" values={[
            {label: 'JWT', value: 'jwt'},
            {label: 'IPC', value: 'ipc'}
            ]}>
                <TabItem value="jwt"><pre><code>geth --goerli --http --http.api eth,net,engine,admin --authrpc.jwtsecret /path/to/jwt.hex </code></pre></TabItem>
                <TabItem value="ipc"><pre><code>geth --goerli --http --http.api eth,net,engine,admin </code></pre></TabItem>
            </Tabs>
      </TabItem>
    </Tabs>
    <p>See Geth's <a href='https://docs.bosagora.org/en/agora-el/command-line-options'>command-line options</a> for parameter definitions.</p>
  </TabItem>
</Tabs>

Syncing can take a long time - from hours to days. <span class='hidden-in-jwt-guide hidden-in-execution-guide'>You can proceed to the next step while your execution node syncs.</span>
