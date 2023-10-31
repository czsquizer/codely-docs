---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info Introduction
A lot of resources drain your CPU usage by using "old" ways of checking distance between coords. The solution is easy!
:::

# Optimalization

#### If you will follow these steps you will be fine

1. Use Lua math, functions ... instead of FiveM natives/functions
2. Use FiveM functions/Natives instead of your framework functions
3. Use your framework functions

How does that work? It is easy, just go 1 - 3, if you can not use 1., use the 2., if you can not use the point 3. Why? The first is the faster one and the 3. is the slowest one in the most cases. Why to use framework function if raw Lua can do it?

## Counting Distance about 2 points

This seems to be the biggest problem on most servers? Why? It is so f\*ckin' easy to optimise getting distance between 2 places.

<Tabs>
  <TabItem value="heaviest" label="The Heaviest for CPU" default>

```lua
Citizen.CreateThread(function ()
  while true do
    Wait(0)

    local coords = GetEntityCoords(GetPlayerPed(-1))

    for k,v in pairs(Config.Zones) do
      if(v.Type ~= -1 and GetDistanceBetweenCoords(coords, v.Pos.x, v.Pos.y, v.Pos.z, true) < Config.DrawDistance) then
        DrawMarker(v.Type, v.Pos.x, v.Pos.y, v.Pos.z, 0.0, 0.0, 0.0, 0, 0.0, 0.0, v.Size.x, v.Size.y, v.Size.z, v.Color.r, v.Color.g, v.Color.b, 100, false, true, 2, false, false, false, false)
      end
    end
  end
end)

-- Lets say that we have defined all the locations and the Config with DrawDistance
-- It is incorrect, because "GetDistanceBetweenCoords" is "slow" in comparison with lua math
```

</TabItem>
<TabItem value="better_Way" label="Better way">

```lua
Citizen.CreateThread(function ()
  while true do
    Wait(0)

    local coords = GetEntityCoords(GetPlayerPed(-1))

    for k,v in pairs(Config.Zones) do
      if(v.Type ~= -1 and #(coords, vector3(v.Pos.x, v.Pos.y, v.Pos.z)) < Config.DrawDistance) then
        DrawMarker(v.Type, v.Pos.x, v.Pos.y, v.Pos.z, 0.0, 0.0, 0.0, 0, 0.0, 0.0, v.Size.x, v.Size.y, v.Size.z, v.Color.r, v.Color.g, v.Color.b, 100, false, true, 2, false, false, false, false)
      end
    end
  end
end)

-- This is way more optimized, because it uses Lua math in stead of FiveM native
-- But it is still not a lot optimised
```

</TabItem>
<TabItem value="best_way" label="The Best way">

```lua
Citizen.CreateThread(function ()
  while true do
    Wait(0)

    local coords = GetEntityCoords(PlayerPedId())
    local sleep = true
    for k,v in pairs(Config.Zones) do
      if(v.Type ~= -1 and #(coords, vector3(v.Pos.x, v.Pos.y, v.Pos.z)) < Config.DrawDistance) then
        sleep = false
        DrawMarker(v.Type, v.Pos.x, v.Pos.y, v.Pos.z, 0.0, 0.0, 0.0, 0, 0.0, 0.0, v.Size.x, v.Size.y, v.Size.z, v.Color.r, v.Color.g, v.Color.b, 100, false, true, 2, false, false, false, false)
      end
    end
    if sleep then
      Wait(500)
    end
  end
end)
-- This should be way more optimized and run at 0.01ms without any performance impacts
```

</TabItem>
</Tabs>
