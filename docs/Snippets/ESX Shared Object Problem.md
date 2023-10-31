---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info Introduction
A new es_extended version might be incompatible with some "old" scripts
:::

# esx:getSharedObject deprecated

- If you get error in F8 that `getSharedObject` is deprecated and you should replace it, follow these steps to fix it. You can choose between these options

#### If you will follow these steps you will be fine

1. Add `'@es_extended/imports.lua'` to fxmanifest.lua of your script into client_scripts/sever_scripts/shared_scripts variable

  <Tabs>
    <TabItem value="before" label="Before" default>

```lua
fx_version 'cerulean'

game 'gta5'
version '1.0.0'
lua54 'yes'
shared_scripts { '@es_extended/locale.lua', 'locales/*.lua', 'config.lua' }
server_scripts { '@oxmysql/lib/MySQL.lua', 'server/*.lua' }
client_scripts { 'client/*.lua' }
```

  </TabItem>
  <TabItem value="after" label="After">

```lua
fx_version 'cerulean'
game 'gta5'
version '1.0.0'
lua54 'yes'
shared_scripts { '@es_extended/imports.lua', '@es_extended/locale.lua', 'locales/*.lua', 'config.lua' }
server_scripts { '@oxmysql/lib/MySQL.lua', 'server/*.lua' }
client_scripts { 'client/*.lua' }
```

  </TabItem>
  </Tabs>
2. Replace `getSharedObject` for export `es_extended['es_extended']:getSharedObject()` (works for both client & server side)

  <Tabs>
    <TabItem value="before" label="Before" default>

```lua
TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
```

  </TabItem>
  <TabItem value="after" label="After">

```lua
ESX = exports['es_extended']:getSharedObject()
```

  </TabItem>
  </Tabs>
3. (NOT RECOMMENDED, but works also) In es_extended/server/common.lua & es_extended/client/common.lua replace esx:getSharedEvent as described bellow

<Tabs>
<TabItem value="before" label="Before" default>

  ```lua
  AddEventHandler("esx:getSharedObject", function()
    local Invoke = GetInvokingResource()
    print(("[^1ERROR^7] Resource ^5%s^7 Used the ^5getSharedObject^7 Event, this event ^1no longer exists!^7 Visit https://documentation.esx-framework.org/tutorials/tutorials-esx/sharedevent for how to fix!"):format(Invoke))
  end)
  ```

    </TabItem>
    <TabItem value="after" label="After">

  ```lua
  AddEventHandler('esx:getSharedObject', function(cb)
    cb(ESX)
  end)
  ```

</TabItem>
</Tabs>
