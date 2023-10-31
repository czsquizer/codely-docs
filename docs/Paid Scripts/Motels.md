---
sidebar_position: 9
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

```

:::info Introduction
Motels script which allows you to do various actions like storing items, accessing wardrobe, lockpicking
:::

## Get it now! _(coming soon)_

```mdx-code-block
<div
style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
}}
>

<a style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    margin: "0 12px"
}} href="/"> <img src="/img/fivem.png" alt="FIVEM ICON" style={{
    width: 60,
    height: 60,
    borderRadius: 30,
}} />FiveM Post</a>

<a style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    margin: "0 12px"
}} href="/"> <img src="/img/tabex.webp" alt="TABEX ICON" style={{
    width: 60,
    height: 60,
    borderRadius: 30,
}} />Tebex Store</a>

<a style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    margin: "0 12px"
}} href="/">
<img src="/img/ytb.webp" alt="YOUTUBE ICON" style={{
    width: 60,
    height: 60,
    borderRadius: 30,
}} />
Youtube Showcase</a>

</div>


```

## Installation

1. Put `ensure codely_motel` your start config and resource called `codely_motel` into your resources folder
2. Configure config.lua & locales.lua
3. Run the provided SQL file (sql.sql)
4. Add items to your inventory/database: (`lockpick`, `motelkey`, `breakcharge`)
```mdx-code-block
<Tabs>
  <TabItem value="ox_inventory" label="OX Inventory">
``` 
- data/items.lua:
```lua
['motelkey'] = {
    label = 'Motel Key',
    weight = 1,
    stack = false,
    close = true,
    description = nil
},

['lockpick'] = {
    label = 'Lockpick',
    weight = 160,
    consume = 0,
    client = {
        anim = { dict = 'anim@amb@clubhouse@tutorial@bkr_tut_ig3@', clip = 'machinic_loop_mechandplayer' },
        disable = { move = true, car = true, combat = true },
        usetime = 5000,
        cancel = true
    }
},

['breakcharge'] = {
    label = 'Police charge',
    weight = 1,
    stack = false,
    close = true,
    description = 'A police breach charge with 15 seconds timer'
},
```
```mdx-code-block
  </TabItem>
</Tabs>
```
## Exports

1. Generate a new motel room for certain player
    - `exports['codely_motel']:GenerateMotel(playerId, motelType, roomIndex)`
        - motelType is motel index from your config (e.g. Pink Cage Motel)
        - roomIndex is room type (e.g. Low end)