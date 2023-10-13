---
sidebar_position: 3
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

```

:::info Introduction
Script for planting, harvesting, processing and selling drugs. Easy !
:::

## Get it now!

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
}} href="https://forum.cfx.re/t/esx-sqz-unijob-advanced-system-for-easy-adding-jobs/2100467" target="_blank"> <img src="/img/fivem.png" alt="FIVEM ICON" style={{
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
}} href="https://sqz.tebex.io/package/4287812" target="_blank"> <img src="/img/tabex.webp" alt="TABEX ICON" style={{
    width: 60,
    height: 60,
    borderRadius: 30,
}} />Tabex Store</a>

<a style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    margin: "0 12px"
}} href="https://youtu.be/QuDHKCbdMK4" target="_blank">
<img src="/img/ytb.webp" alt="YOUTUBE ICON" style={{
    width: 60,
    height: 60,
    borderRadius: 30,
}} />
Youtube Showcase</a>

</div>


```

## Configuration

1. Put the script named `sqz_drugs` to your resources folder and `ensure sqz_drugs` to your server.cfg or any other start cfg file
2. Run the SQL provided file
3. Oviously configure your config by your likings 😜

## Adding plantable drug

1. Take the part bellow and duplicate it and increase its index (the number in [] )
2. You need to put the items to the database, items are located in Items table
3. The 2 props can be changed as the plant grows -> It can change its prop after the process status
4. RewardItemCount is count of item you will receive if the status and quality are 100%

```js
    [1] = {

        PlantLocation = {
            Position = vector3(2852.8599,4631.1924,48.9308),
            Radius = 150.0,
            CanPlantAnyWhereInArea = true, -- If true, player can plant the defined item anyhwere in the area (especially for fields). If false, player can not plant anywhere, he must stay near ant of prop defined in the table bellow (and he will plant into that prop)
            AllowedPropsToPlantIn = {
                [GetHashKey("prop_table_03b")] = 0.4 -- List of props that you need to stay in front of them to plant in them, the number after "=" is x offset that the entity will be planted with (to prevent bugging in prop)
                -- Here you can add other
                -- And other
                -- And way more others
            },
        },

        CopsNumbers = {
            Plant = 1,
            Harvest = 1
        },

        Animations = {
            Plant = {
                AnimDict = "amb@world_human_gardener_plant@male@base", -- The animation dictionary that is used/shown when planting plant
                AnimName = "base", -- The animation name that is used when planting a plant
                Duration = 4000, -- Set to 0 to disable animations
                blendInSpeed = 8.0,
                blendOutSpeed = 8.0,
                AnimFlag = 1,
                MythicProggbarLabel = "Planting Weed"
            },
            Pickup = {
                AnimDict = "mini@repair",
                AnimName = "fixing_a_ped",
                Duration = 4000, -- Set to 0 to disable animations
                blendInSpeed = 8.0,
                blendOutSpeed = 8.0,
                AnimFlag = 1,
                MythicProggbarLabel = "PickingUP Weed"
            }
        },

        StatusAddNumber = 5, -- A number that is added to the plant Status on every cycle
        WaterRemoveOnCycle = 50, -- The number of water is remove on every cycle (if the plant has lower number of WaterStatus, then the value is decreased by IfNotMoreThenWaterRemoveOnCycle)
        IfNotMoreThenWaterRemoveOnCycle = 20, -- The number of water is removed when the plant WaterStatus is lower then "WaterRemoveOnCycle" (line above).
        -- Also it is a value that the plant must have to pass the loop to fertilizer (if the plantWater is lower then the value above, the plant won't get any quality aldo it has a fertilizer)
        Statuses = {
            [1] = {
                MinimalFertilizerStatus = 90, -- The plant fertilizer value that a plant must have to be affected by this value
                SetFertilizerStatusTo = 60, -- The value that the fertilizer status is set to.
                QualityPointsAdd = 5, -- The quality points that are added to the Plant Status
            },
            [2] = {
                MinimalFertilizerStatus = 70, -- The plant fertilizer value that a plant must have to be affected by this value
                SetFertilizerStatusTo = 40, -- The value that the fertilizer status is set to.
                QualityPointsAdd = 4, -- The quality points that are added to the Plant Status
            },
            [3] = {
                MinimalFertilizerStatus = 50, -- The plant fertilizer value that a plant must have to be affected by this value
                SetFertilizerStatusTo = 10, -- The value that the fertilizer status is set to.
                QualityPointsAdd = 3, -- The quality points that are added to the Plant Status
            },
            [4] = {
                MinimalFertilizerStatus = 30, -- The plant fertilizer value that a plant must have to be affected by this value
                SetFertilizerStatusTo = 10, -- The value that the fertilizer status is set to.
                QualityPointsAdd = 2, -- The quality points that are added to the Plant Status
            }
        },

        Items = {

            PlantItemName = "weed_seed", -- Item need to plant a weed in current zone
            PlantWaterItem = "water", -- Item need to water a weed in current zone
            PlantFertilizeItem = "fertilizer", -- Item needed to fertilize a weed in current zone
            RewardItemName = "weed", -- The name of a item you will get after harvesting a weed plant
            RewardItemCount = 200, -- The Number of item a player will get after harvesting a plant with 100% status and 100% Quality
            --QualityReduce = 1.05, -- *Explained bellow (removed for now, since it is not needed)
            -- StatusReduce = 1.05 -- **Explained bellow  (removed for now, since it is not needed)

        },

        Props = {
            SmallProp = "prop_weed_02", -- The obejct name of the plant that will be crated after a plant is planted
            BigProp = "prop_weed_01", -- The object name of the plant that the first (SmalProp) will be replaced for after it reaches the ChangePropsAfterStatus
            ChangePropsAfterStatus = 50 -- The amount of status points from 100% that if a plant reaches then the plant prop (SmallProp) will be replaced to BigProp (Set it to -1 to never replace a prop for this location)
        },

        FertilizerAddAmount = 10.0, -- The number of fertilizer points that will be added on every cycle
        WaterAddAmount = 10.0 -- The number of water points that will be added on every cycle
    },
```

## Adding "classic" drug

1. The `Config.Drugs.joint` - joint - is the item name that must be in the database and is the main product
2. In the zones, there are 2 types: Collect/Process, you can add them as much as you want to, just change the table index, type is specified in the `Action`
3. Make sure you have all the items in your databases, maily the one in 1. step, `GiveItem` and the items from `RequiredItems`

```js
Config.Drugs.joint = { -- Make sure that the drug name is in lower, otherwise it will not work
    Zones = {
        Collect = {
            Location = vector3(1534.2247,3696.3442,34.5528), -- The location of pickup point
            Size = {x = 1.0, y = 1.0, z = 1.0}, -- Size of the marker
            Color = {r = 255, g = 255, b = 0}, -- Color of the marker
            MotionText = "[E] Pickup", -- Text that will be show when coming near in the DrawText3D section (if Draw3DText Enabled)
            Action = "Collect", -- Just for collecting leave it
            Marker = 22, -- Marker Id
            UseInovativeMarkers = false, -- If the help text should look "different", image in the forum
            DrawInovativeMarkersRadius = 5.0 -- The distance a player can see the marker from
        },
        Process = {
            Location = vector3(1534.2247,3696.3442,40.5528), -- The location for pickup points
            Size = {x = 1.0, y = 1.0, z = 1.0}, -- Size of the marker
            Color = {r = 255, g = 255, b = 0}, -- Color of the marker
            MotionText = "[E] Process", -- The text name that will be drawn on the screen if Drwa3D Text enabled
            Action = "Process", -- For Processing just leave it as it is
            Marker = 22, -- The marker ID
            UseInovativeMarkers = false, -- If the help text should look "different", image in the forum
            DrawInovativeMarkersRadius = 5.0 -- The distance a player can see the marker from
        },
    },

    Actions = {
        Collect = {
            MinCops = 1, -- The minimal count of cops that must be online to player can be able to collect a item
            RequiredItems = { -- Bellow will be listed items a player will need for Collecting
                {itemName = "water", count = 1, removeItem = false} -- itemName is the name from database, removeItem will remove the item from player inventory after fininished collecting
            },
            GiveItem = "weed", -- The item a player should get when he is done
            GiveItemCount = 1, -- The count of a item a player should get when he is done
            Animations = { -- Animation properties are listed bellow
                AnimDict = "mini@repair", -- The animation dictionary for Collecting animation
                AnimName = "fixing_a_ped", -- The animation name for Collectiong anitamtion
                Duration = 4000, -- Set to 0 to disable animations
                blendInSpeed = 8.0,
                blendOutSpeed = 8.0,
                AnimFlag = 1,
                MythicProggbarLabel = "Harvesting Drug" -- The label which will be shown in the mythic progres bar
            }
        },
        Process = {
            MinCops = 1, -- Minimal cops from processing
            RequiredItems = { -- Bellow you can list items a player will need for a processing
                {itemName = "ocb", count = 1, removeItem = true} -- itemName is a name of the item in database and the removeItem is if a player should get remove this item
            },
            GiveItem = "joint", -- The item a player should get
            GiveItemCount = 1, -- The amount of the item a player should get after finishing Proccesing
            Animations = { -- Bellow there will be listed animations
                AnimDict = "mini@repair", -- Animation Dictionary for processing
                AnimName = "fixing_a_ped", -- Animation name from processing
                Duration = 4000, -- Set to 0 to disable animations
                blendInSpeed = 8.0,
                blendOutSpeed = 8.0,
                AnimFlag = 1,
                MythicProggbarLabel = "Processing Drug" -- The label which should be displayed when processing
            }
        },
    },
    Effects = { -- Effects that current "drugs" should give
        GiveHP = 1.0, -- Set to 0.0 to give no additinal HP
        GiveArmour = 50.0, -- Set to 0.0 to not give armour
        SetInfiniteStamina = true, -- If a player should get unlimited stamina when using current drug
        SpeedMultiplier = 2.0, -- The speed multiplier that should be given to player when using this drug
        OnUseScenario = "WORLD_HUMAN_SMOKING_POT", -- The screnario played after using a item (the scenarios can be found there: https://pastebin.com/6mrYTdQv)
        MoveClipset = "MOVE_M@DRUNK@VERYDRUNK", -- The MoveClipset that will be aplied to player after using a item https://docs.fivem.net/natives/?_0xAF8A94EDE7712BEF
        MotionBlur = true, -- If a player should get a MotionBlur
        SetPedDrunk = true, -- If a player should be set as a drunk
        ClearTimeCycleModifier = true, -- IF the TimeCycleModifier should be reseted after the ResetAfter timeout is after
        TimeCycleModifier = "spectator5", -- The TimeCycleModifier that will be used https://pastebin.com/kVPwMemE
        ResetAfter = 5 -- Time in SECONDS when the stats should be reset
    },

    RemoveAfterUse = true -- Should be the drug removed on its use?
}
```

## Making drug sellable to NPC

With this part you will be able to type: `/sellItem [itemName] [itemCount]` and sell drugs to NPC. You can add as many drugs as you want to using the method bellow.

1. Duplicate the part bellow
2. Change the index, it is the name of the sold item (now it is marijuana )
3. Change all the properties of the item

```js
    marijuana = {
        GiveBlack = true, -- If true, player will get "black_money" account
        MinimalGiveMoney = 200, -- The minimal amount of money a player will receive after selling drugs
        MaximalGiveMoney = 500, -- The maximal amount of money a player will receive after selling drugs
        SellFromPoint = vector3(62.8466,-638.6946,44.2151), -- The center sell points where the distance will be counted from
        Radius = 500.0, -- THe radiuse from a SellFromPoint player can sell items
        RejectChance = 5, -- The chance that the ped will reject offer (100/RejectChance is the chance) (now it is 20%)
        MinItemSell = 2, -- The minimal item count that will be removed from the player (if player does not have anough item, he will be charged 1 item)
        MaxItemSell = 4, -- The maximal item count that a player can get removed (same as above)
        ShouldCallPoliceAfterRejecting = true, -- If true then a police jobs will be called after rejecting
        CallPoliceAfterRejectingChange = 3, -- The chance that a police jobs will be alterted after rejecting offer (100/CallPoliceAfterRejectingChange) (now it is 33%)
        ShouldKillInTheseAreasAfterRejecting = true, -- If true than if a player is in these areas (areas where are ussualy no people) will be killed if he does not have a friend to sell with
        -- (the ped will take out a gun and Stealth Kill the player (If the palyer is not stronger :D))
        -- To not be killed in these areas there must an other player at maximal distance of 3 gta units away
        KillAreas = {
            [1] = { -- First area
                Location = vector3(-45.442,-720.8846,44.2506), -- Location
                Radius = 5.0 -- Radius
            },
            [2] = {
                Location = vector3(2.0, 2.0, 2.0),
                Radius = 4.0
            }
            -- Below you can add as much as you want but make sure it is a sequenced table otherwise it will broke
        },
        CanSellToAllPeds = true, -- If true then a player can sell items to all types of peds
        PedPlayerCanSellTo = { -- If config above then a player can sell only to these types of peds
            [GetHashKey("a_f_m_fatbla_01")] = true,
            [GetHashKey("a_f_m_fatwhite_01")] = true,
            -- Below you can add as much ped types as you want, but make sure it is a hash
        },
        SellAnimation = {
            AnimDict = "mp_common", -- Animation directory for current animation
            AnimName = "givetake1_a", -- The animatino name
            Duration = 3000, -- Set to 0 to disable animations
            blendInSpeed = 8.0,
            blendOutSpeed = 8.0,
            AnimFlag = 1,
            MythicProggbarLabel = "Selling drug" -- The label which will be show in the progress bar
        }
    }
```

## Making drug sellable to "friends"

WIth this part you will be able to go to the phone cabin, choose how many drugs you wanna sell, then a friend will come for you and you will sell the drug for you -> the friend is NPC. You can add as much locations as you want to using the method bellow.

1. Add phone cabin to the config by duplicating the part bellow
2. Have all the drugs in the database
3. Set all the properties to your likings

## Making drug sellable by delivering

With this part you will be able to sell drugs using car and delivering drugs (items) to check points. You can add as much locations as you want to using the method bellow.

1. Duplicate the part bellow
2. Add as many delivery locations as you want to
3. Configure all the properties as you want to
4. Make sure all the items are in the database

```js
    {
        Locations = {
            {
                Pos = vector3(1293.5991,1384.7307,101.4545), -- First delivery location
                used = false, -- Do not touch this, you do not need to :)
                Min = 10, -- The minimal amount in math.random a player will deliver
                Max = 20 -- The maximal amount in math.random a player will deliver
            },
            {
                Pos = vector3(1201.006,1862.9187,77.0745), -- Second delivery location
                used = false, -- Do not touch this, you do not need to :)
                Min = 10, -- The minimal amount in math.random a player will deliver
                Max = 20 -- The maximal amount in math.random a player will deliver
            },
            {
                Pos = vector3(1110.6906,2098.6851,53.1546), -- Third delivery location
                used = false, -- Do not touch this, you do not need to :)
                Min = 10, -- The minimal amount in math.random a player will deliver
                Max = 20 -- The maximal amount in math.random a player will deliver
            }
        },
        Items = {'joint', 'water'}, -- The items allowed to be sold here
        MaxSellCount = {50, 15}, -- Max item sold count for each item (first item must be first count here)
        MinSellPrices = {10, 20}, -- Min price for currectly sold item (first item must be first number here)
        MaxSellPrices  = {15, 20}, -- Max price for each item (first item must be first number here)
        CarSpawnLoc = vector3(1367.5193,1138.7201,113.759), -- The spawn and return location of the vehicle
        CarSpawnHeading = 69.0, -- The heading of the spawned car
        CarProps = { -- Bellow you can set the vehicle properties which will be aplied to the vehicle
            plate = 'BURRITO',
            color1 = 27
        },
        CarModel = "burrito", -- Model name of the car
        PayForTruck = 100, -- The money a player will need to pay on the start (maybye for the car)
        ReturnTruck = 100, -- The money a player will receive when he returns the vehicle
        GiveBlack = true, -- If a player should get black money on delivery
        -- Start location
        MinCops = 1, -- Needed cops for start of the mission
        StartLocation = vector3(1390.1125,1132.0562,114.3345), -- The location you will see the marker
        -- Markers
        Size = {x = 1.0, y = 1.0, z = 1.0}, -- Size of the marker
        Color = {r = 255, g = 255, b = 0}, -- Color of the marker
        MotionText = "[E] Call", -- The label which will be shown on the Draw3DText
        Marker = 22, -- The marker ID
        UseInovativeMarkers = true, -- If the help text should look "different", image in the forum
        DrawInovativeMarkersRadius = 5.0, -- The distance a player can see the marker from
    }
```

## Adding blackshops

Again you can add as many blackshops as you want to. Here you will be able

1. Duplicate the part bellow
2. Configure the shop items. If it is weapon and you wanna add it as `xPlayer.addWeapon` , make sure you set `weapon = true`
3. Make sure all the items are in the database.

```js
    {
        Location = vector3(1390.0927,1162.0493,114.3345),
        -- Markers
        Size = {x = 1.0, y = 1.0, z = 1.0}, -- Size of the marker
        Color = {r = 255, g = 255, b = 0}, -- Color of the marker
        MotionText = "[E] Call", -- The label which will be shown on the Draw3DText
        Marker = 22, -- The marker ID
        UseInovativeMarkers = true, -- If the help text should look "different", image in the forum
        DrawInovativeMarkersRadius = 5.0, -- The distance a player can see the marker from
        -- Items
        ShopItems = {
            {item = 'joint', price = 550, label = 'Joint', weapon = false},
            {item = 'weed_seed', price = 50, label = 'Weed Seed', weapon = false},
            {item = 'WEAPON_ASSAULTRIFLE', price = 5000, label = 'Assault Rifle', weapon = true},
        },
        Ammo = 50, -- The number of ammo that the player will get when buying a weapon
        PayInBlack = false, -- If enabled, the player will be able to pay only in black, otherwise he will pay using a cash or a bank (automatic, if does not have cash, bank will be used)
        Blip = {
            Use = true, -- If the shop should have a blip on the map
            BlipLabel = "Illegal shop", -- Name of the blips on the map
            BlipColour = 40, -- Colour of the blips on the map
            BlipSprite = 51, -- Sprite of the blip on the map
            BlipDisplay = 4, -- Blip display on the map
            BlipScale = 1.0 -- Blip size on the map
        }
    }
```

## Adding simple sell points

This is for selling items just by clicking items in the menu, there is one simple animation, nothing "pog", you can sell items and weapons.

1. Duplicate the part bellow
2. Change the item properties, if it is weapon or not (if it is weapon, it is check if `xPlayer.hasWeapon`, not if `xPlayer.getInventoryItem`)
3. Set all the other parts to whatever you want to.

```js
    {
        Location = vector3(-1101.5736,4940.8838,218.354),
        -- Markers
        Size = {x = 1.0, y = 1.0, z = 1.0}, -- Size of the marker
        Color = {r = 255, g = 255, b = 0}, -- Color of the marker
        MotionText = "[E] Open Selling Menu", -- The label which will be shown on the Draw3DText
        Marker = 22, -- The marker ID
        UseInovativeMarkers = true, -- If the help text should look "different", image in the forum
        DrawInovativeMarkersRadius = 5.0, -- The distance a player can see the marker from
        -- Items
        SellItems = {
            {item = 'joint', price = {min = 10, max = 50}, weapon = false},
            {item = 'weed_seed', price = {min = 5, max = 10}, weapon = false},
            {item = 'WEAPON_PISTOL', price = {min = 4000, max = 5000}, weapon = true},
        },
        PayInBlack = false, -- If enabled, the player will receive money in black money
        MythicProggbarLabel = "Selling items", -- The label which will be show in the progress bar
        Blip = {
            Use = true, -- If the shop should have a blip on the map
            BlipLabel = "Selling point of illegal things", -- Name of the blips on the map
            BlipColour = 56, -- Colour of the blips on the map
            BlipSprite = 521, -- Sprite of the blip on the map
            BlipDisplay = 4, -- Blip display on the map
            BlipScale = 1.0 -- Blip size on the map
        }
    }
```

## Configs

```mdx-code-block

<Tabs>
  <TabItem value="client_edit" label="client_edit" default>
```

```js
Citizen.CreateThread(function()
	while ESX == nil do
		TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end) -- Change this event in case you are yousing custom ESX events
		Citizen.Wait(0)
	end

	while ESX.GetPlayerData().job == nil do
		Citizen.Wait(10)
	end

	ESX.PlayerData = ESX.GetPlayerData()

end)

function debugMessage(message)

    --print('^2[sqz_drugs]^0 '..message) -- Turned off by default
	-- Lines used to print debug in case of errors, if you want to, you can remove the print using --print(...)

end

function showNotification(message)

	ESX.ShowNotification(message)

	-- Default GTA es_extended notifications, change it fou want to use if differently

end

RegisterNetEvent('sqz_drugs:drugUsedCustom')
AddEventHandler('sqz_drugs:drugUsedCustom', function(drugName)

	-- This event is triggered on every use of drug (registered item (Config.Drugs))
	-- drugName is name of the drug, can be used as a index of the Config.DrugsTable
	-- You can call here whatever you want to

end)

RegisterNetEvent('sqz_drugs:drugSoldCustom')
AddEventHandler('sqz_drugs:drugSoldCustom', function(drugName, count)

	-- This event is triggered on every successfull sell of drug (registered item (Config.Drugs))
	-- drugName is name of the drug, can be used as a index of the Config.DrugsTable
	-- You can call here whatever you want to
	-- The count is obviously the count of drug sold

end)

function Draw3DText(x, y, z, text)
	SetTextScale(0.35, 0.35)
    SetTextFont(4)
    SetTextProportional(1)
    SetTextColour(255, 255, 255, 215)
    SetTextEntry('STRING')
    SetTextCentre(true)
    AddTextComponentString(text)
    SetDrawOrigin(x,y,z, 0)
    DrawText(0.0, 0.0)
    local factor = (string.len(text)) / 370
    DrawRect(0.0, 0.0+0.0125, 0.015+ factor, 0.03, 0, 0, 0, 85)
    ClearDrawOrigin()
end
```

```mdx-code-block
</TabItem>
<TabItem value="server_edit" label="server_edit">
```

```js
TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end) -- Change the event if you are using any other event for getting ESX (if you have changed events for example)

function debugMessage(message)

    print('^2[sqz_drugs]^0 '..message)

    -- These lines are used for simplied debug, you can remove the print line (--print(...))

end

function showNotification(playerId, message)

    local xPlayer = ESX.GetPlayerFromId(playerId)

    xPlayer.showNotification(message)
    -- The notification is triggered when sending a notification to a player
    -- Change it if you are using any custom notifications or using older es_extended

end

function CanCarryItem(playerId, item, count)

    local xPlayer = ESX.GetPlayerFromId(playerId)

    if xPlayer.canCarryItem(item, count) then
        return true
    else
        return false
    end

    -- Edit in case you are using item limit system

end

RegisterNetEvent('sqz_drugs:SellCustomNotification')
AddEventHandler('sqz_drugs:SellCustomNotification', function(playerId, coords, type)

    -- This event is triggered when you do not want to use predefined animations (for example if you are using any dispatch)
    -- The playerId is ID of seller player
    -- Coords is location when a player is selling
    -- Type is type of illegal activity
    --- 'itemSell' when player is selling drugs on the street

end)

RegisterNetEvent('sqz_drugs:sendDiscordNotification')
AddEventHandler('sqz_drugs:sendDiscordNotification', function(playerId, body, header)

    if SConfig.WebHookDiscord then
        if item_id then
            item_id = item_id
        else
            item_id = 'none'
        end

        local connect = {
            {
                ['color'] = 14177041,
                ['title'] = header,
                ['description'] = body,
                ['footer'] = {
                    ['text'] = os.date('%Y/%m/%d %X'),
                },
            }
        }
        PerformHttpRequest(SConfig.WebHookDiscord, function(err, text, headers) end, 'POST', json.encode({embeds = connect}), { ['Content-Type'] = 'application/json' })

    end

    -- This is part used for sending Discord webhooks, you can edit it by your likings :)

end)
```

```mdx-code-block

</TabItem>
<TabItem value="config_c" label="config_c" >
```

```js
Config = {}

Config.Locale = 'en' -- Language you want to use (defined in locales folder) [cs/en/es]

Config.MaxPlantedWeedPlants = -1 -- Maximal number of weed plants that a user can plant, set to -1 to give him unlimited plants

-- Save Plants Command
Config.SavePlantsCommand = "savePlants" -- Name of command that will save plantedEntities
Config.SaveCommandAllowedGroups = {
    ["superadmin"] = true,
    ["admin"] = true
    -- You can add more groups that will be able to save plants using command to save plants
}

Config.MenuAlign = "right" -- ESX.Menu item align

Config.Materials = {
    PlantOnEveryMaterial = false, -- If true, player will be able to plant everywhere (even on roads, etc. ...)
    Allowed = { -- Player will be only allowed to plant on those materials if the option above is false
        [1333033863] = true, -- Grass
        [-1286696947] = true, -- Grass short
        [-461750719] = true, -- Grass long
        [-1833527165] = true, -- Hay
        [1109728704] = true, -- Field
    }
}

Config.customEvents = { -- Change events bellow to fit your event names
    ["mythic_progbar:client:progress"] = "mythic_progbar:client:progress",
    ["esx:playerLoaded"] = "esx:playerLoaded",
    ["esx:playerDropped"] = "esx:playerDropped",
    ["esx:setJob"] = "esx:setJob"
}

Config.PoliceJobs = { -- Define which jobs are counted as police jobs, to count active cops
    ["police"] = true,
    ["sheriff"] = true
    -- Bellow you can add as much as you want to
}


Config.TimeToDeleteOldPlants = 604800 -- Time in seconds to delete the plant if is old
Config.Plantables = {

    CycleTime = 1.2 * 60 * 60 * 1000, -- The time that the loop which checks the status of the plants run (now it is 1.2 hour - so every 1.2 it cheks and updates the status of the plant) (The plant should grow UP in 24 hours)

    [1] = {

        PlantLocation = {
            Position = vector3(2852.8599,4631.1924,48.9308),
            Radius = 150.0,
            CanPlantAnyWhereInArea = true, -- If true, player can plant the defined item anyhwere in the area (especially for fields). If false, player can not plant anywhere, he must stay near ant of prop defined in the table bellow (and he will plant into that prop)
            AllowedPropsToPlantIn = {
                [GetHashKey("prop_table_03b")] = 0.4 -- List of props that you need to stay in front of them to plant in them, the number after "=" is x offset that the entity will be planted with (to prevent bugging in prop)
                -- Here you can add other
                -- And other
                -- And way more others
            },
        },

        CopsNumbers = {
            Plant = 1,
            Harvest = 1
        },

        Animations = {
            Plant = {
                AnimDict = "amb@world_human_gardener_plant@male@base", -- The animation dictionary that is used/shown when planting plant
                AnimName = "base", -- The animation name that is used when planting a plant
                Duration = 4000, -- Set to 0 to disable animations
                AnimFlag = 1,
                MythicProggbarLabel = "Planting Weed"
            },
            Pickup = {
                AnimDict = "mini@repair",
                AnimName = "fixing_a_ped",
                Duration = 4000, -- Set to 0 to disable animations
                AnimFlag = 1,
                MythicProggbarLabel = "PickingUP Weed"
            }
        },

        StatusAddNumber = 5, -- A number that is added to the plant Status on every cycle
        WaterRemoveOnCycle = 50, -- The number of water is remove on every cycle (if the plant has lower number of WaterStatus, then the value is decreased by IfNotMoreThenWaterRemoveOnCycle)
        IfNotMoreThenWaterRemoveOnCycle = 20, -- The number of water is removed when the plant WaterStatus is lower then "WaterRemoveOnCycle" (line above).
        -- Also it is a value that the plant must have to pass the loop to fertilizer (if the plantWater is lower then the value above, the plant won't get any quality aldo it has a fertilizer)
        Statuses = {
            [1] = {
                MinimalFertilizerStatus = 90, -- The plant fertilizer value that a plant must have to be affected by this value
                SetFertilizerStatusTo = 60, -- The value that the fertilizer status is set to.
                QualityPointsAdd = 5, -- The quality points that are added to the Plant Status
            },
            [2] = {
                MinimalFertilizerStatus = 70, -- The plant fertilizer value that a plant must have to be affected by this value
                SetFertilizerStatusTo = 40, -- The value that the fertilizer status is set to.
                QualityPointsAdd = 4, -- The quality points that are added to the Plant Status
            },
            [3] = {
                MinimalFertilizerStatus = 50, -- The plant fertilizer value that a plant must have to be affected by this value
                SetFertilizerStatusTo = 10, -- The value that the fertilizer status is set to.
                QualityPointsAdd = 3, -- The quality points that are added to the Plant Status
            },
            [4] = {
                MinimalFertilizerStatus = 30, -- The plant fertilizer value that a plant must have to be affected by this value
                SetFertilizerStatusTo = 10, -- The value that the fertilizer status is set to.
                QualityPointsAdd = 2, -- The quality points that are added to the Plant Status
            }
        },

        Items = {

            PlantItemName = "weed_seed", -- Item need to plant a weed in current zone
            PlantWaterItem = "water", -- Item need to water a weed in current zone
            PlantFertilizeItem = "fertilizer", -- Item needed to fertilize a weed in current zone
            RewardItemName = "weed", -- The name of a item you will get after harvesting a weed plant
            RewardItemCount = 200, -- The Number of item a player will get after harvesting a plant with 100% status and 100% Quality
            RequiredItemsPlant = { -- Bellow will be listed items a player will need for planting this drug
                {itemName = "water", count = 1, removeItem = false} -- itemName is the name from database, removeItem will remove the item from player inventory while planting
            },
            RequiredItemsHarvest = { -- Bellow will be listed items a player will need for harvesting this drug
                {itemName = "water", count = 1, removeItem = false} -- itemName is the name from database, removeItem will remove the item from player inventory while harvesting
            },
        },

        Props = {
            SmallProp = "prop_weed_02", -- The obejct name of the plant that will be crated after a plant is planted
            BigProp = "prop_weed_01", -- The object name of the plant that the first (SmalProp) will be replaced for after it reaches the ChangePropsAfterStatus
            ChangePropsAfterStatus = 50 -- The amount of status points from 100% that if a plant reaches then the plant prop (SmallProp) will be replaced to BigProp (Set it to -1 to never replace a prop for this location)
        },

        FertilizerAddAmount = 10.0, -- The number of fertilizer points that will be added on every cycle
        WaterAddAmount = 10.0 -- The number of water points that will be added on every cycle
    },

    [2] = {

        PlantLocation = {
            Position = vector3(2040.8593,4908.0039,41.2919),
            Radius = 250.0,
            CanPlantAnyWhereInArea = true, -- If true, player can plant the defined item anyhwere in the area (especially for fields). If false, player can not plant anywhere, he must stay near ant of prop defined in the table bellow (and he will plant into that prop)
            AllowedPropsToPlantIn = {
                [GetHashKey("prop_table_03b")] = 0.4 -- List of props that you need to stay in front of them to plant in them, the number after "=" is x offset that the entity will be planted with (to prevent bugging in prop)
                -- Here you can add other
                -- And other
                -- And way more others
            }
        },

        CopsNumbers = {
            Plant = 1,
            Harvest = 1
        },

        Animations = {
            Plant = {
                AnimDict = "amb@world_human_gardener_plant@male@base",
                AnimName = "base",
                Duration = 4000, -- Set to 0 to disable animations
                AnimFlag = 1,
                MythicProggbarLabel = "Planting Weed"
            },
            Pickup = {
                AnimDict = "mini@repair",
                AnimName = "fixing_a_ped",
                Duration = 4000, -- Set to 0 to disable animations
                AnimFlag = 1,
                MythicProggbarLabel = "PickingUP Weed"
            }
        },

        StatusAddNumber = 5, -- A number that is added to the plant Status on every cycle
        WaterRemoveOnCycle = 50, -- The number of water is remove on every cycle (if the plant has lower number of WaterStatus, then the value is decreased by IfNotMoreThenWaterRemoveOnCycle)
        IfNotMoreThenWaterRemoveOnCycle = 20, -- The number of water is removed when the plant WaterStatus is lower then "WaterRemoveOnCycle" (line above).
        -- Also it is a value that the plant must have to pass the loop to fertilizer (if the plantWater is lower then the value above, the plant won't get any quality aldo it has a fertilizer)
        Statuses = {
            [1] = {
                MinimalFertilizerStatus = 90, -- The plant fertilizer value that a plant must have to be affected by this value
                SetFertilizerStatusTo = 60, -- The value that the fertilizer status is set to.
                QualityPointsAdd = 5, -- The quality points that are added to the Plant Status
            },
            [2] = {
                MinimalFertilizerStatus = 70, -- The plant fertilizer value that a plant must have to be affected by this value
                SetFertilizerStatusTo = 40, -- The value that the fertilizer status is set to.
                QualityPointsAdd = 4, -- The quality points that are added to the Plant Status
            },
            [3] = {
                MinimalFertilizerStatus = 50, -- The plant fertilizer value that a plant must have to be affected by this value
                SetFertilizerStatusTo = 10, -- The value that the fertilizer status is set to.
                QualityPointsAdd = 3, -- The quality points that are added to the Plant Status
            },
            [4] = {
                MinimalFertilizerStatus = 30, -- The plant fertilizer value that a plant must have to be affected by this value
                SetFertilizerStatusTo = 10, -- The value that the fertilizer status is set to.
                QualityPointsAdd = 2, -- The quality points that are added to the Plant Status
            }
        },

        Items = {

            PlantItemName = "weed_seed", -- Item need to plant a weed in current zone
            PlantWaterItem = "water", -- Item need to water a weed in current zone
            PlantFertilizeItem = "fertilizer", -- Item needed to fertilize a weed in current zone
            RewardItemName = "coke", -- The name of a item you will get after harvesting a weed plant
            RewardItemCount = 200, -- The Number of item a player will get after harvesting a plant with 100% status and 100% Quality
            RequiredItemsPlant = { -- Bellow will be listed items a player will need for planting this drug
                {itemName = "water", count = 1, removeItem = true} -- itemName is the name from database, removeItem will remove the item from player inventory while planting
            },
            RequiredItemsHarvest = { -- Bellow will be listed items a player will need for harvesting this drug
                {itemName = "water", count = 1, removeItem = false} -- itemName is the name from database, removeItem will remove the item from player inventory while harvesting
            },
        },

        Props = {
            SmallProp = "prop_weed_02", -- The obejct name of the plant that will be crated after a plant is planted
            BigProp = "prop_weed_01", -- The object name of the plant that the first (SmalProp) will be replaced for after it reaches the ChangePropsAfterStatus
            ChangePropsAfterStatus = 50 -- The amount of status points from 100% that if a plant reaches then the plant prop (SmallProp) will be replaced to BigProp (Set it to -1 to never replace a prop for this location)
        },

        FertilizerAddAmount = 10.0, -- The number of fertilizer points that will be added on every cycle
        WaterAddAmount = 10.0 -- The number of water points that will be added on every cycle
    }
    -- Bellow you can add more location, the index must be pervious index + 1
}


Config.DrawMarkerDistance = 5.0 -- The distance, from which you will see the markers (for performance reasons it is good to keep it bigger then 3DTextDistance)
Config.Draw3DTextDistance = 2.0
Config.Drugs = {}
Config.HelpStringForPickup = "~INPUT_PICKUP~ Pickup"
Config.HelpStringForProcess = "~INPUT_PICKUP~ Process"
Config.Drugs.joint = { -- Make sure that the drug name is in lower, otherwise it will not work
    Zones = {
        Collect = {
            Location = vector3(1534.2247,3696.3442,34.5528), -- The location of pickup point
            Size = {x = 1.0, y = 1.0, z = 1.0}, -- Size of the marker
            Color = {r = 255, g = 255, b = 0}, -- Color of the marker
            MotionText = "[E] Pickup", -- Text that will be show when coming near in the DrawText3D section (if Draw3DText Enabled)
            Action = "Collect", -- Just for collecting leave it
            Marker = 22, -- Marker Id
            UseInovativeMarkers = false, -- If the help text should look "different", image in the forum
            DrawInovativeMarkersRadius = 5.0 -- The distance a player can see the marker from
        },
        Process = {
            Location = vector3(1534.2247,3696.3442,40.5528), -- The location for pickup points
            Size = {x = 1.0, y = 1.0, z = 1.0}, -- Size of the marker
            Color = {r = 255, g = 255, b = 0}, -- Color of the marker
            MotionText = "[E] Process", -- The text name that will be drawn on the screen if Drwa3D Text enabled
            Action = "Process", -- For Processing just leave it as it is
            Marker = 22, -- The marker ID
            UseInovativeMarkers = false, -- If the help text should look "different", image in the forum
            DrawInovativeMarkersRadius = 5.0 -- The distance a player can see the marker from
        },
    },

    Actions = {
        Collect = {
            MinCops = 1, -- The minimal count of cops that must be online to player can be able to collect a item
            RequiredItems = { -- Bellow will be listed items a player will need for Collecting
                {itemName = "water", count = 1, removeItem = false} -- itemName is the name from database, removeItem will remove the item from player inventory after fininished collecting
            },
            GiveItem = "weed", -- The item a player should get when he is done
            GiveItemCount = 1, -- The count of a item a player should get when he is done
            Animations = { -- Animation properties are listed bellow
                AnimDict = "mini@repair", -- The animation dictionary for Collecting animation
                AnimName = "fixing_a_ped", -- The animation name for Collectiong anitamtion
                Duration = 4000, -- Set to 0 to disable animations
                AnimFlag = 1,
                MythicProggbarLabel = "Harvesting Drug" -- The label which will be shown in the mythic progres bar
            }
        },
        Process = {
            MinCops = 1, -- Minimal cops from processing
            RequiredItems = { -- Bellow you can list items a player will need for a processing
                {itemName = "ocb", count = 1, removeItem = true} -- itemName is a name of the item in database and the removeItem is if a player should get remove this item
                -- Also supports item called "money" and will use xPlayer.removeMoney, xPlayer.getMoney functions
            },
            GiveItem = "joint", -- The item a player should get
            GiveItemCount = 1, -- The amount of the item a player should get after finishing Proccesing
            Animations = { -- Bellow there will be listed animations
                AnimDict = "mini@repair", -- Animation Dictionary for processing
                AnimName = "fixing_a_ped", -- Animation name from processing
                Duration = 4000, -- Set to 0 to disable animations
                AnimFlag = 1,
                MythicProggbarLabel = "Processing Drug" -- The label which should be displayed when processing
            }
        },
    },
    Effects = { -- Effects that current "drugs" should give
        GiveHP = 1, -- Set to 0.0 to give no additinal HP
        GiveArmour = 10, -- Set to 0.0 to not give armour
        SetInfiniteStamina = true, -- If a player should get unlimited stamina when using current drug
        SpeedMultiplier = 2.0, -- The speed multiplier that should be given to player when using this drug
        OnUseScenario = "WORLD_HUMAN_SMOKING_POT", -- The screnario played after using a item (the scenarios can be found there: https://pastebin.com/6mrYTdQv)
        MoveClipset = "MOVE_M@DRUNK@VERYDRUNK", -- The MoveClipset that will be aplied to player after using a item https://docs.fivem.net/natives/?_0xAF8A94EDE7712BEF
        MotionBlur = true, -- If a player should get a MotionBlur
        SetPedDrunk = true, -- If a player should be set as a drunk
        ClearTimeCycleModifier = true, -- IF the TimeCycleModifier should be reseted after the ResetAfter timeout is after
        TimeCycleModifier = "spectator5", -- The TimeCycleModifier that will be used https://pastebin.com/kVPwMemE
        ResetAfter = 5 -- Time in SECONDS when the stats should be reset
    },

    RemoveAfterUse = true -- Should be the drug removed on its use?
}

Config.SellDrugsCommand = {
    name = "sellDrugs", -- The name of command that is used for selling items (drugs)
    helpString = "This command allows you sell defined amount of drugs", -- The help prompt that is showed in the chat
}

Config.SellDrugs = {
    joint = {
        MinCops = 1, -- Minimal number of cops to start selling
        GiveBlack = true, -- If true, player will get "black_money" account
        MinimalGiveMoney = 200, -- The minimal amount of money a player will receive after selling drugs
        MaximalGiveMoney = 500, -- The maximal amount of money a player will receive after selling drugs
        SellFromPoint = vector3(62.8466,-638.6946,44.2151), -- The center sell points where the distance will be counted from
        Radius = 500.0, -- THe radiuse from a SellFromPoint player can sell items
        RejectChance = 5, -- The chance that the ped will reject offer (100/RejectChance is the chance) (now it is 20%)
        MaxItemSell = 4, -- The maximal item count that a player can get removed, if player has less, the less amount will be taken
        ShouldCallPoliceAfterRejecting = true, -- If true then a police jobs will be called after rejecting
        CallPoliceAfterRejectingChange = 3, -- The chance that a police jobs will be alterted after rejecting offer (100/CallPoliceAfterRejectingChange) (now it is 33%)
        ShouldKillInTheseAreasAfterRejecting = true, -- If true than if a player is in these areas (areas where are ussualy no people) will be killed if he does not have a friend to sell with
        -- (the ped will take out a gun and Stealth Kill the player (If the palyer is not stronger :D))
        -- To not be killed in these areas there must an other player at maximal distance of 3 gta units away
        KillAreas = {
            [1] = { -- First area
                Location = vector3(-45.442,-720.8846,44.2506), -- Location
                Radius = 5.0 -- Radius
            },
            [2] = {
                Location = vector3(2.0, 2.0, 2.0),
                Radius = 4.0
            }
            -- Below you can add as much as you want but make sure it is a sequenced table otherwise it will broke
        },
        CanSellToAllPeds = true, -- If true then a player can sell items to all types of peds
        PedPlayerCanSellTo = { -- If config above then a player can sell only to these types of peds
            [GetHashKey("a_f_m_fatbla_01")] = true,
            [GetHashKey("a_f_m_fatwhite_01")] = true,
            -- Below you can add as much ped types as you want, but make sure it is a hash
        },
        SellAnimation = {
            AnimDict = "mp_common", -- Animation directory for current animation
            AnimName = "givetake1_a", -- The animatino name
            Duration = 3000, -- Set to 0 to disable animations
            AnimFlag = 1,
            MythicProggbarLabel = "Selling drug" -- The label which will be show in the progress bar
        }
    }
}

Config.PoliceDispatch = {

    itemSell = {
        Notification = "You have a new call, somebody is selling an illegal item.", -- The notification the police jobs will receive
        BlipId = 108, -- The sprite of the blip
        BlipColor = 59, -- Color of the blip
        DisplayType = 4, -- Blip Display Type
        Scale = 1.0, -- The scale of the blip
        BlipName = "Illegal item sale", -- Name of the blip
        HideAfterSecs = 5, -- Time in seconds that the blip will be removed after
    }

}

Config.PhoneCabbins = {
    {
        -- Other
        MinCops = 0, -- Minimal needed cops for starting the "mini-heist"
        GiveBlack = true, -- If player should get dirty money, otherwise he will receive cash
        AddBlipForFriend = true, -- IF a blip should be added for the NPC when it is spawned
        CabinCoords = vector3(-262.5074,-765.576,32.6092), -- The position of the phone
        SpawnPedCoords = vector3(-278.7723,-780.6352,31.5232), -- The coords when the ped souhld be spawned and deleted
        PedModel = "a_m_m_eastsa_01", -- The model of a ped which will be spawned
        Spawnheading = 50.0, -- The spawn heading of the ped
        Items = {'phone', 'cokepack'}, -- The items allowed to be sold here
        MaxSellCount = {10, 15}, -- Max item sold count for each item (first item must be first count here)
        MinSellPrices = {10, 20}, -- Min price for currectly sold item (first item must be first number here)
        MaxSellPrices  = {15, 20}, -- Max price for each item (first item must be first number here)
        -- Markers
        Size = {x = 1.0, y = 1.0, z = 1.0}, -- Size of the marker
        Color = {r = 255, g = 255, b = 0}, -- Color of the marker
        MotionText = "[E] Call", -- The label which will be shown on the Draw3DText
        Marker = 22, -- The marker ID
        UseInovativeMarkers = true, -- If the help text should look "different", image in the forum
        DrawInovativeMarkersRadius = 5.0, -- The distance a player can see the marker from
        --Animations
        SellAnimation = {
            AnimDict = "mp_common", -- Animation directory for current animation
            AnimName = "givetake1_a", -- The animatino name
            Duration = 3000, -- Set to 0 to disable animations
            AnimFlag = 1,
            MythicProggbarLabel = "Selling drug" -- The label which will be show in the progress bar
        }
    }
}

Config.PublicPhoneString = "~INPUT_PICKUP~ Call" -- The input string which will be shown when near a public phone
Config.AddBlipForPhoneCabins = {
    AddBlip = true, -- If for the PhoneCabins should be added blips on the map
    BlipLabel = "Public Phone", -- Name of the blips on the map
    BlipColour = 57, -- Colour of the blips on the map
    BlipSprite = 480, -- Sprite of the blip on the map
    BlipDisplay = 4, -- Blip display on the map
    BlipScale = 1.0 -- Blip size on the map
}


Config.StartDeliveryPrompt = "~INPUT_PICKUP~ Start Delivery"
Config.Deliveries = {
    {
        Locations = {
            {
                Pos = vector3(1293.5991,1384.7307,101.4545), -- First delivery location
                used = false, -- Do not touch this, you do not need to :)
                Min = 10, -- The minimal amount in math.random a player will deliver
                Max = 20 -- The maximal amount in math.random a player will deliver
            },
            {
                Pos = vector3(1201.006,1862.9187,77.0745), -- Second delivery location
                used = false, -- Do not touch this, you do not need to :)
                Min = 10, -- The minimal amount in math.random a player will deliver
                Max = 20 -- The maximal amount in math.random a player will deliver
            },
            {
                Pos = vector3(1110.6906,2098.6851,53.1546), -- Third delivery location
                used = false, -- Do not touch this, you do not need to :)
                Min = 10, -- The minimal amount in math.random a player will deliver
                Max = 20 -- The maximal amount in math.random a player will deliver
            }
        },
        Items = {'joint', 'water'}, -- The items allowed to be sold here
        MaxSellCount = {50, 15}, -- Max item sold count for each item (first item must be first count here)
        MinSellPrices = {10, 20}, -- Min price for currectly sold item (first item must be first number here)
        MaxSellPrices  = {15, 20}, -- Max price for each item (first item must be first number here)
        CarSpawnLoc = vector3(1367.5193,1138.7201,113.759), -- The spawn and return location of the vehicle
        CarSpawnHeading = 69.0, -- The heading of the spawned car
        CarProps = { -- Bellow you can set the vehicle properties which will be aplied to the vehicle
            plate = 'BURRITO',
            color1 = 27
        },
        CarModel = "burrito", -- Model name of the car
        PayForTruck = 100, -- The money a player will need to pay on the start (maybye for the car)
        ReturnTruck = 100, -- The money a player will receive when he returns the vehicle
        GiveBlack = true, -- If a player should get black money on delivery
        -- Start location
        MinCops = 1, -- Needed cops for start of the mission
        StartLocation = vector3(1390.1125,1132.0562,114.3345), -- The location you will see the marker
        -- Markers
        Size = {x = 1.0, y = 1.0, z = 1.0}, -- Size of the marker
        Color = {r = 255, g = 255, b = 0}, -- Color of the marker
        MotionText = "[E] Call", -- The label which will be shown on the Draw3DText
        Marker = 22, -- The marker ID
        UseInovativeMarkers = true, -- If the help text should look "different", image in the forum
        DrawInovativeMarkersRadius = 5.0, -- The distance a player can see the marker from
    }
}

Config.BlackShops = {
    {
        Location = vector3(1390.0927,1162.0493,114.3345),
        -- Markers
        Size = {x = 1.0, y = 1.0, z = 1.0}, -- Size of the marker
        Color = {r = 255, g = 255, b = 0}, -- Color of the marker
        MotionText = "[E] Call", -- The label which will be shown on the Draw3DText
        Draw3DText = false, -- If should draw 3d Text
        Marker = 22, -- The marker ID
        UseInovativeMarkers = true, -- If the help text should look "different", image in the forum
        DrawInovativeMarkersRadius = 5.0, -- The distance a player can see the marker from
        -- Items
        ShopItems = {
            {item = 'joint', price = 550, label = 'Joint', weapon = false},
            {item = 'weed_seed', price = 50, label = 'Weed Seed', weapon = false},
            {item = 'WEAPON_ASSAULTRIFLE', price = 5000, label = 'Assault Rifle', weapon = true},
        },
        Ammo = 50, -- The number of ammo that the player will get when buying a weapon
        PayInBlack = false, -- If enabled, the player will be able to pay only in black, otherwise he will pay using a cash or a bank (automatic, if does not have cash, bank will be used)
        Blip = {
            Use = true, -- If the shop should have a blip on the map
            BlipLabel = "Illegal shop", -- Name of the blips on the map
            BlipColour = 40, -- Colour of the blips on the map
            BlipSprite = 51, -- Sprite of the blip on the map
            BlipDisplay = 4, -- Blip display on the map
            BlipScale = 1.0 -- Blip size on the map
        }
    }
}
Config.JobShopString = "~INPUT_PICKUP~ Illegal shop"

Config.SimpleSellPoints = {
    {
        Location = vector3(-1101.5736,4940.8838,218.354),
        -- Markers
        Size = {x = 1.0, y = 1.0, z = 1.0}, -- Size of the marker
        Color = {r = 255, g = 255, b = 0}, -- Color of the marker
        MotionText = "[E] Open Selling Menu", -- The label which will be shown on the Draw3DText
        Draw3DText = false, -- If should draw 3d Text
        Marker = 22, -- The marker ID
        UseInovativeMarkers = true, -- If the help text should look "different", image in the forum
        DrawInovativeMarkersRadius = 5.0, -- The distance a player can see the marker from
        -- Items
        SellItems = {
            {item = 'joint', price = {min = 10, max = 50}, weapon = false},
            {item = 'weed_seed', price = {min = 5, max = 10}, weapon = false},
            {item = 'WEAPON_PISTOL', price = {min = 4000, max = 5000}, weapon = true},
        },
        PayInBlack = false, -- If enabled, the player will receive money in black money
        MythicProggbarLabel = "Selling items", -- The label which will be show in the progress bar
        Blip = {
            Use = true, -- If the shop should have a blip on the map
            BlipLabel = "Selling point of illegal things", -- Name of the blips on the map
            BlipColour = 56, -- Colour of the blips on the map
            BlipSprite = 521, -- Sprite of the blip on the map
            BlipDisplay = 4, -- Blip display on the map
            BlipScale = 1.0 -- Blip size on the map
        }
    }
}
Config.SellPointsString = "~INPUT_PICKUP~ Open Sell Point"
```

```mdx-code-block
</TabItem>
<TabItem value="config_s" label="config_s" >
```

```js
SConfig = {}
SConfig.WebHookDiscord = "Discord_Webhook_URLS" -- The Discord webhook you want to send informations to, remove this line if you do not want to send informations to Discord
```

```mdx-code-block
</TabItem>
<TabItem value="locales" label="locales" >

```

```js
Locales['en'] = {
    ['max_weed_plants_reached'] = 'You have reached maximal number of weed plants every user can plant.',
    ['too_close_to_plant'] = 'You are too close to another plant.',
    ['no_close_plant'] = 'There is not weed plant to fertilize/water.',
    ['item_cannot_be_used_at_this_plant'] = 'This item can not be used for this plant.',
    ['this_item_cant_be_planted_here'] = 'This item cant be planted here.',
    ['not_admin'] = 'You can not save plants because you are not a admin.',
    ['not_console'] = 'You are not a console -> This command is executable from console.',
    ['no_close_item_found'] = 'We could not locate any near object',
    ['could_not_locate_entity'] = 'We could not locate any prop you could plant seed in.',
    ['not_enough_cops_connected'] = 'There are no enough cops connected, minimal cops connected: %s.',
    ['can_not_carry'] = 'You can not carry this item.',
    ['not_enough_items'] = 'You do not have all the items for this actions, please, try it again with the requeired items.',
    ['can_not_sell_this_item'] = 'You can not sell this item.',
    ['you_do_not_have_item_amount'] = 'You do not have the amount of item you want to sell.',
    ['press_e_to_sell'] = '[E] Sell %s',
    ['rejecting_offer'] = 'The ped rejected your offer.',
    ['cops_triggered'] = 'You have heard from the telephone that cops have been triggered.',
    ['new_call'] = 'You have a new call',
    ['item_sell_menu_heading'] = 'Which items do you want to sell?',
    ['quantity_invalid'] = 'The quantity you put is invalid',
    ['how_many_sell'] = 'How many of item do you want to sell?',
    ['dialing_progbar_label'] = 'You are dialing your old friend',
    ['your_friend_arrived'] = 'Your friend has arrived. He is behind the corner, wait for him.',
    ['your_friend'] = 'Your friend',
    ['go_for_next_point'] = 'New marker is signalized, go ahead!',
    ['delivery_point'] = 'Delivery Point',
    ['delivery_prompt'] = '~INPUT_PICKUP~ Finish Delivery',
    ['no_money_for_truck_caution'] = 'You do not have enough money to pay caution for the truck',
    ['return_truck'] = 'All deliveries finished. ~n~Head to the return point.',
    ['truck_delivery_point'] = 'Truck delivery point',
    ['must_be_in_vehicle'] = 'You must be siting in a vehicle',
    ['not_correct_veh'] = 'The vehicle you got is not the same you gave back, no money will be refunded',
    ['shop_item'] = '$%s',
    ['shop_confirm'] = 'Buy %sx %s for $%s?',
    ['illegal_shop'] = 'Illegal Shop',
    ['yes'] = 'Yes',
    ['no'] = 'No',
    ['bought'] = 'you just bought ~y~%sx~s~ ~b~%s~s~ for ~r~$%s~s~',
    ['not_enough'] = 'you do not have ~r~enough~s~ money, you\'re ~y~missing~s~ ~r~$%s~s~!',
    ['not_enough_black'] = 'you do not have ~r~enough~s~ dirty money, you\'re ~y~missing~s~ ~r~$%s~s~!',
    ['player_cannot_hold'] = 'you do ~r~not~s~ have enough ~y~free space~s~ in your inventory!',
    ['no_mission_point_free'] = 'There is no more spawn point free.',
    ['pickup_plant_string'] = '[E] - Pickup Weed plant',
    ['sell_items'] = 'Sell Items',
    ['sell_items_confirm'] = 'Sell %sx %s for $%s?',
    ['no_items_to_sell'] = 'You do not have any items to sell.',
    ['not_on_grass'] = 'You are not on a terrain you could plant on',
    ['sell_drugs_menu'] = 'Drug: %s, Amount: %s, Price per one: <FONT color="green">%s$</FONT> - <FONT color="green">%s$</FONT>',
    ['started_selling_drugs'] = 'You have started selling %s'
}

Locales['cs'] = {
    ['max_weed_plants_reached'] = 'Překročil jsi maximální počet zasazených sazenic.',
    ['too_close_to_plant'] = 'Jsi moc blízko další sazeničce. Notak, snad to znáš, takto to neporostě..',
    ['no_close_plant'] = 'Vidíš tu někde nějakou roslinku poblíž? To to budeš jen tak rozlévat?',
    ['item_cannot_be_used_at_this_plant'] = 'Nenene, toto sem ne. Sem přijdou jiné věcičky.',
    ['this_item_cant_be_planted_here'] = 'Tady to asi nezasadíš..',
    ['not_admin'] = 'Připadáš si jako admin? No vidíš, tak proč to zkoušíš?',
    ['not_console'] = 'Bohužel, nejsi server konzole, takže toto byla ztráta času.',
    ['no_close_item_found'] = 'Žádný objekt není poblíž',
    ['could_not_locate_entity'] = 'Nejsi u ničeho, do čeho bys to zasadil. Nebo snad jo?',
    ['not_enough_cops_connected'] = 'Bez policie to není adrenalin, musíš čelit minimálně: %s policistům.',
    ['can_not_carry'] = 'Nemáš dost místa na to, aby jsi to unesl.',
    ['not_enough_items'] = 'Jujx, něco nám chybí. Co to asi bude? Zkus zo příště se všemi potřebnými itemy.',
    ['can_not_sell_this_item'] = 'Toto chceš prodávat? Ne, fakt to nejde,',
    ['you_do_not_have_item_amount'] = 'Nemáš tolik, kolik toho chceš prodávat.',
    ['press_e_to_sell'] = '[E] Prodat %s',
    ['rejecting_offer'] = 'Nechce to. Asi nekvalitní a nebo moc drahé?',
    ['cops_triggered'] = 'Ajajaj, slyšel jsi, že teď osoba zavolala policii. Noo, hodně štěstí!',
    ['new_call'] = 'Máš nový call.',
    ['item_sell_menu_heading'] = 'Jaký item budeme prodávat?',
    ['quantity_invalid'] = 'To asi nejde. Zkus zadat platné číslo.',
    ['how_many_sell'] = 'Kolik toho chceš prodat?',
    ['dialing_progbar_label'] = 'Voláš starému dobrému kamarádovi.',
    ['your_friend_arrived'] = 'Už je, chviličku, jde za Tebou.',
    ['your_friend'] = 'Tvůj přítel',
    ['go_for_next_point'] = 'Další zastávka je zadána, šup tam!',
    ['delivery_point'] = 'Místo doručení',
    ['delivery_prompt'] = '~INPUT_PICKUP~ Dokončit doručování',
    ['no_money_for_truck_caution'] = 'Nemáš dost na zaplacení tohoto kamionu, no jo no, není to zadarmo.',
    ['return_truck'] = 'Všechno hotovo. ~n~Vrať se zpět. Good job!',
    ['truck_delivery_point'] = 'Místo doručení trucku',
    ['must_be_in_vehicle'] = 'Vracíš vozidlo, tak by jsi v nějakém mohl sedět.',
    ['not_correct_veh'] = 'Jaké intriky tu zkoušíme? Vrať to, co sis půjčil.',
    ['shop_item'] = '$%s',
    ['shop_confirm'] = 'Koupit %sx %s za $%s?',
    ['illegal_shop'] = 'Obchod s ilegálními předměty',
    ['yes'] = 'Ano',
    ['no'] = 'Ne',
    ['bought'] = 'Právě jsi koupil ~y~%sx~s~ ~b~%s~s~ za ~r~$%s~s~',
    ['not_enough'] = 'Nemáš ~r~dost~s~ peněz, ~y~chybí ti~s~ ~r~$%s~s~! To víš no, nic pro chudé.',
    ['not_enough_black'] = 'Nemáě ~r~dost~s~ špinavých peněz, ~y~chybí ti~s~ ~r~$%s~s~!',
    ['player_cannot_hold'] = 'nemáš ~r~dost volného~s~ ~y~místa v inventáři~s~! Kam to jako chceš dávat?',
    ['no_mission_point_free'] = 'To vypadá, že je všechno obježděné.',
    ['pickup_plant_string'] = '[E] - Sklidit rostlinku',
    ['sell_items'] = 'Prodat předměty',
    ['sell_items_confirm'] = 'Prodat %sx %s za $%s?',
    ['no_items_to_sell'] = 'Nemáš žádné předměty na prodej.',
    ['not_on_grass'] = 'Nejsi na povrchu, na kterém by se dala zasadit roslinka',
    ['sell_drugs_menu'] = 'Droga: %s, Počet: %s, Cena za jeden kus: <FONT color="green">%s$</FONT> - <FONT color="green">%s$</FONT>',
    ['started_selling_drugs'] = 'Začal jsi prodávat %s'
}

Locales['es'] = {
    ['max_weed_plants_reached'] = 'Has alcanzado el numero maximo de plantas que cada persona puede plantar',
    ['too_close_to_plant'] = 'Estas demasiado cerca de otra planta.',
    ['no_close_plant'] = 'No hay plantas para fertilizar/regar.',
    ['item_cannot_be_used_at_this_plant'] = 'Este articulo no se puede utilizar para esta planta.',
    ['this_item_cant_be_planted_here'] = 'Este articulo no se puede plantar aqui.',
    ['not_admin'] = 'No puedes guardar plantas porque no eres administrador.',
    ['not_console'] = 'No eres la consola -> Este comando se puede ejecutar desde la consola.',
    ['no_close_item_found'] = 'No pudimos localizar ningun objeto cercano',
    ['could_not_locate_entity'] = 'No pudimos ubicar ningun accesorio en el que pudieras plantar semillas.',
    ['not_enough_cops_connected'] = 'No hay suficientes policias conectados, minimo de policias conectados:%s. ',
    ['can_not_carry'] = 'No puedes llevar este articulo.',
    ['not_enough_items'] = 'No tienes todos los elementos para estas acciones, por favor, intentalo de nuevo con los elementos requeridos.',
    ['can_not_sell_this_item'] = 'No puedes vender este articulo.',
    ['you_do_not_have_item_amount'] = 'No tienes la cantidad del articulo que quieres vender.',
    ['press_e_to_sell'] = '[E] Vender %s',
    ['rejecting_offer'] = 'El ciudadano rechazó su oferta.',
    ['cops_triggered'] = 'Ha escuchado por telefono que se ha alertado a la policia.',
    ['new_call'] = 'Tienes una nueva llamada',
    ['item_sell_menu_heading'] = '¿Que articulos quieres vender?',
    ['quantity_invalid'] = 'La cantidad que pones no es valida',
    ['how_many_sell'] = '¿Cuántos articulos quieres vender?',
    ['dialing_progbar_label'] = 'Estas llamando a tu viejo amigo',
    ['your_friend_arrived'] = 'Ha llegado tu amigo. Esta detras de la esquina, esperalo.',
    ['your_friend'] = 'Tu amigo',
    ['go_for_next_point'] = 'Nuevo marcador esta señalizado, adelante!',
    ['delivery_point'] = 'Punto de entrega',
    ['delivery_prompt'] = '~INPUT_PICKUP~ Finalizar entrega',
    ['no_money_for_truck_caution'] = 'No tienes suficiente dinero para pagar la factura por el camion.',
    ['return_truck'] = 'Terminaste todas las entregas. ~n~Dirigete al punto de salida',
    ['truck_delivery_point'] = 'Punto de entrega de camiones',
    ['must_be_in_vehicle'] = 'Debes estar sentado en un vehiculo',
    ['not_correct_veh'] = 'El vehiculo que recibio no es el mismo que devolvio, no se reembolsara el dinero',
    ['shop_item'] = '%s€',
    ['shop_confirm'] = 'Compra x%s de %s por %s€?',
    ['illegal_shop'] = 'Tienda ilegal',
    ['yes'] = 'Si',
    ['no'] = 'No',
    ['bought'] = 'Acabas de comprar ~y~x%s~s~ ~b~%s~s~ por ~r~%s€~s~',
    ['not_enough'] = 'No tienes ~r~suficiente~s~ dinero, te ~y~falta~s~ ~r~%s€~s~!',
    ['not_enough_black'] = 'No tienes ~r~suficiente~s~ dinero negro, te ~y~falta~s~ ~r~%s€~s~!',
    ['player_cannot_hold'] = 'No ~r~tienes~s~ suficiente ~y~espacio~s~ en tu inventario!',
    ['no_mission_point_free'] = 'No hay mas puntos de generación libres.',
    ['pickup_plant_string'] = '[E] – Recogida de marihuana',
    ['sell_items'] = 'Ventas de articulos',
    ['sell_items_confirm'] = 'Vende x%s %s por %s€?',
    ['no_items_to_sell'] = 'No tienes ningun articulo para vender.',
    ['not_on_grass'] = 'No estás en el césped',
    ['sell_drugs_menu'] = 'Droga: %s, Número: %s, Precio por una pieza: <FONT color="green">%s$</FONT> - <FONT color="green">%s$</FONT>',
    ['started_selling_drugs'] = 'Has empezado a vender %s'
}
```

```mdx-code-block
</TabItem>
</Tabs>
```

## Common errors

- `nil ESX` it seems that you have changed events by anticheat so make sure to change them in your config files of the script -` attempt to call a nil value (field ‘canCarryItem’)` - most likely you are using old version of esx < 1.2. You need to change CanCarryItem function in server/edit.lua to the following
- `attempt to call a nil value (field 'showNotification')` - Replace showNotification function for the one provided bellow

```mdx-code-block

<Tabs>
  <TabItem value="CarryItem" label="CarryItem" default>
```

```js
function CanCarryItem(playerId, item, count)
    local xPlayer = ESX.GetPlayerFromId(playerId)
    local xItem = xPlayer.getInventoryItem(item)
    if xItem.limit == -1 or (xItem.count + tonumber(count))  <= xItem.limit then
        return true
    else
        return false
    end
end
```

```mdx-code-block
</TabItem>
<TabItem value="notification" label="notification">
```

```js
function showNotification(playerId, message)

    TriggerClientEvent('esx:showNotification', playerId, message)

end
```

```mdx-code-block

</TabItem>
</Tabs>
```