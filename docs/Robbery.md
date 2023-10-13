---
sidebar_position: 6
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

```

:::info Introduction
Squizer's advanced robbery system that allows you to rob ATMs, Houses, Shops (2 types of vaults + cash registers), vangelico, set bodyguards do defend places & MUCH MORE!
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
}} href="https://forum.cfx.re/t/release-sqz-robbery-advanced-robbery-script/4773035" target="_blank"> <img src="/img/fivem.png" alt="FIVEM ICON" style={{
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
}} href="https://sqz.tebex.io/package/4728369" target="_blank"> <img src="/img/tabex.webp" alt="TABEX ICON" style={{
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
}} href="https://youtu.be/TRRBTv-zeuo" target="_blank">
<img src="/img/ytb.webp" alt="YOUTUBE ICON" style={{
    width: 60,
    height: 60,
    borderRadius: 30,
}} />
Youtube Showcase</a>

</div>


```

## Instalation

1. Put ensure sqz_robbery to your start config and resource called sqz_robbery into your resources folder
2. Configure config.lua & locales.lua
3. Change the items that are needed for a robbery or put them into the database, if they are not here already
4. Run the provided SQL file _(sql.sql)_
5. Download the dependencies: mhacking, progressBars, utk_fingerprint
   Config Files

## Config Files

```mdx-code-block

<Tabs>
  <TabItem value="config" label="config" default>
```

```js
Config = {}
--=================================================--
--===================MAIN PART=====================--
--=================================================--
Config.CustomEvents = {
    ['esx:getSharedObject'] = 'esx:getSharedObject',
    ['esx:setJob'] = 'esx:setJob'
}

--=================================================--
--===============CASH ROBBERIES PART===============--
--=================================================--
Config.CashRegisterTime = 10000 * 1000 -- Time between the cash registers reset
Config.CashRegisterMoney = {
    Min = 10,
    Max = 50,
    RobRounds = 21
}
Config.CashRegisterMinCops = 1 -- Min cops to start cash register robbery

--=================================================--
--====================MISCS PART===================--
--=================================================--
Config.Locale = 'en' -- Locale of the whole script
Config.DrawDistance = 5
Config.PoliceJobNames = { -- List of players that will count as online cops
    ['police'] = true,
    ['sheriff'] = true
}
Config.UseOnlyTimers = false -- If we should use for the vaults timers that all the timers would have all the time same amount of money or FALSE to give the vault money each time period
Config.VaultsResetTime = 1000 -- The timer until you will be again able to rob the vault that has been robbed || Or how often the money will be added to the safe if you have the previous option disabled

--=================================================--
--===============MAIN ROBBERIES PART===============--
--=================================================--

Config.Vaults = {
    {
        Type = 'code', -- code / lock
        Loc = vector3(28.1998,-1338.7881,29.577), -- Location of the vault
        MinCops = 0,
        Robbed = false, -- It is good to not touch it
        Money = {
            Max = 25000,
            Min = 3000,

            -- Refilling part:
            Timer = 1000,
            Money = 800,
            CurrentMoney = 5000, -- The money that the shop will have

        },
        Items = {
            {'flashdisk', 1},
            {'laptop', 2}
        },
        Detonate = {
            ItemName = 'bomb', -- The item name you would need for detonating
        },

        BombAnimation = {
            Heading = 359.0,
            BombPos = vector3(28.1715,-1338.9655,29.017)
        }
    },
    {
        Type = 'code', -- code / lock
        Loc = vector3(-43.445,-1748.3655,29.421), -- Location of the vault
        MinCops = 0,
        Robbed = false, -- It is good to not touch it
        Money = {
            Max = 15000,
            Min = 2000,

            -- Refilling part:
            Timer = 1000,
            Money = 650,
            CurrentMoney = 5000, -- The money that the shop will have

        },
        Items = {
            {'keys', 1},
            {'clip', 2}
        },
        Detonate = {
            ItemName = 'bomb', -- The item name you would need for detonating
        },

        BombAnimation = {
            Heading = 29.42,
            BombPos = vector3(-43.6715,-1748.2133,28.941)
        }
    },
    {
        Type = 'lock', -- code / lock
        Loc = vector3(-1220.7699,-916.0138,11.3263), -- Location of the vault
        MinCops = 0,
        Robbed = false, -- It is good to not touch it
        Money = {
            Max = 5000,
            Min = 2000,

            -- Refilling part:
            Timer = 1000,
            Money = 650,
            CurrentMoney = 5000, -- The money that the shop will have

        },
        Items = {
            {'bread', 1},
            {'phone', 2}
        },
        Detonate = {
            ItemName = 'bomb', -- The item name you would need for detonating
        },

        BombAnimation = {
            Heading = 123.9,
            BombPos = vector3(-1221.0244,-916.1847,11.3263)
        }
    },
    {
        Type = 'lock', -- code / lock
        Loc = vector3(1126.9186,-980.1438,45.4158), -- Location of the vault
        MinCops = 0,
        Robbed = false, -- It is good to not touch it
        Money = {
            Max = 19000,
            Min = 2000,

            -- Refilling part:
            Timer = 1000,
            Money = 650,
            CurrentMoney = 5000, -- The money that the shop will have

        },
        Items = {
            {'phone', 1}
        },
        Detonate = {
            ItemName = 'bomb', -- The item name you would need for detonating
        },

        BombAnimation = {
            Heading = 1.17,
            BombPos = vector3(1126.7133,-979.8168,45.0558)
        }
    },
    {
        Type = 'code', -- code / lock
        Loc = vector3(-709.7255,-904.0894,19.2156), -- Location of the vault
        MinCops = 0,
        Robbed = false, -- It is good to not touch it
        Money = {
            Max = 25000,
            Min = 3000,

            -- Refilling part:
            Timer = 1000,
            Money = 800,
            CurrentMoney = 5000, -- The money that the shop will have

        },
        Items = {
            {'flashdisk', 1},
            {'laptop', 2}
        },
        Detonate = {
            ItemName = 'bomb', -- The item name you would need for detonating
        },

        BombAnimation = {
            Heading = 92.84,
            BombPos = vector3(-710.0529,-904.2296,18.6156)
        }
    },
    {
        Type = 'lock', -- code / lock
        Loc = vector3(-1478.9451,-375.4349,39.1634), -- Location of the vault
        MinCops = 0,
        Robbed = false, -- It is good to not touch it
        Money = {
            Max = 19000,
            Min = 2000,

            -- Refilling part:
            Timer = 1000,
            Money = 650,
            CurrentMoney = 5000, -- The money that the shop will have

        },
        Items = {
            {'phone', 1}
        },
        Detonate = {
            ItemName = 'bomb', -- The item name you would need for detonating
        },

        BombAnimation = {
            Heading = 224.0,
            BombPos = vector3(-1478.8337,-375.5812,38.6834)
        }
    },
    {
        Type = 'code', -- code / lock
        Loc = vector3(1159.4976,-314.1253,69.2051), -- Location of the vault
        MinCops = 0,
        Robbed = false, -- It is good to not touch it
        Money = {
            Max = 25000,
            Min = 3000,

            -- Refilling part:
            Timer = 1000,
            Money = 800,
            CurrentMoney = 5000, -- The money that the shop will have

        },
        Items = {
            {'flashdisk', 1},
            {'laptop', 2}
        },
        Detonate = {
            ItemName = 'bomb', -- The item name you would need for detonating
        },

        BombAnimation = {
            Heading = 98.18,
            BombPos = vector3(1159.337,-314.1523,68.6051)
        }
    },
    {
        Type = 'code', -- code / lock
        Loc = vector3(378.1759,333.3954,103.5664), -- Location of the vault
        MinCops = 0,
        Robbed = false, -- It is good to not touch it
        Money = {
            Max = 300,
            Min = 5000,

            -- Refilling part:
            Timer = 1000,
            Money = 800,
            CurrentMoney = 7500, -- The money that the shop will have

        },
        Items = {
            {'flashdisk', 1},
            {'laptop', 2}
        },
        Detonate = {
            ItemName = 'bomb', -- The item name you would need for detonating
        },

        BombAnimation = {
            Heading = 342.96,
            BombPos = vector3(378.1842,333.5868,103.0864)
        }
    },
    {
        Type = 'code', -- code / lock
        Loc = vector3(2549.2434,384.9183,108.6229), -- Location of the vault
        MinCops = 0,
        Robbed = false, -- It is good to not touch it
        Money = {
            Max = 20000,
            Min = 5000,

            -- Refilling part:
            Timer = 1000,
            Money = 800,
            CurrentMoney = 4500, -- The money that the shop will have

        },
        Items = {
            {'flashdisk', 1},
            {'laptop', 2}
        },
        Detonate = {
            ItemName = 'bomb', -- The item name you would need for detonating
        },

        BombAnimation = {
            Heading = 88.55,
            BombPos = vector3(2548.9436,384.9243,108.023)
        }
    },
    {
        Type = 'code', -- code / lock
        Loc = vector3(-1829.2214,798.7365,138.1924), -- Location of the vault
        MinCops = 0,
        Robbed = false, -- It is good to not touch it
        Money = {
            Max = 20000,
            Min = 2000,

            -- Refilling part:
            Timer = 1000,
            Money = 800,
            CurrentMoney = 3500, -- The money that the shop will have

        },
        Items = {
            {'flashdisk', 1},
            {'laptop', 2}
        },
        Detonate = {
            ItemName = 'bomb', -- The item name you would need for detonating
        },

        BombAnimation = {
            Heading = 134.56,
            BombPos = vector3(-1829.3315,798.6214,137.6522)
        }
    },
    {
        Type = 'lock', -- code / lock
        Loc = vector3(-2959.582,387.1539,14.0433), -- Location of the vault
        MinCops = 0,
        Robbed = false, -- It is good to not touch it
        Money = {
            Max = 25000,
            Min = 2000,

            -- Refilling part:
            Timer = 1000,
            Money = 800,
            CurrentMoney = 4000, -- The money that the shop will have

        },
        Items = {
            {'flashdisk', 1},
            {'laptop', 2}
        },
        Detonate = {
            ItemName = 'bomb', -- The item name you would need for detonating
        },

        BombAnimation = {
            Heading = 180.54,
            BombPos = vector3(-2959.5791,386.7993,13.4433)
        }
    },
    {
        Type = 'lock', -- code / lock
        Loc = vector3(-3047.8455,585.7594,7.9089), -- Location of the vault
        MinCops = 0,
        Robbed = false, -- It is good to not touch it
        Money = {
            Max = 25000,
            Min = 2000,

            -- Refilling part:
            Timer = 1000,
            Money = 800,
            CurrentMoney = 4000, -- The money that the shop will have

        },
        Items = {
            {'flashdisk', 1},
            {'laptop', 2}
        },
        Detonate = {
            ItemName = 'bomb', -- The item name you would need for detonating
        },

        BombAnimation = {
            Heading = 109.09,
            BombPos = vector3(-3048.0991,585.5559,7.2489)
        }
    },
    {
        Type = 'code', -- code / lock
        Loc = vector3(-3249.9912,1004.4037,12.8307), -- Location of the vault
        MinCops = 0,
        Robbed = false, -- It is good to not touch it
        Money = {
            Max = 23000,
            Min = 2000,

            -- Refilling part:
            Timer = 1000,
            Money = 800,
            CurrentMoney = 3800, -- The money that the shop will have

        },
        Items = {
            {'flashdisk', 1},
            {'laptop', 2}
        },
        Detonate = {
            ItemName = 'bomb', -- The item name you would need for detonating
        },

        BombAnimation = {
            Heading = 85.33,
            BombPos = vector3(-3250.3118,1004.368,12.0507)
        }
    },
    {
        Type = 'code', -- code / lock
        Loc = vector3(546.417,2662.8401,42.1565), -- Location of the vault
        MinCops = 0,
        Robbed = false, -- It is good to not touch it
        Money = {
            Max = 21000,
            Min = 2000,

            -- Refilling part:
            Timer = 1000,
            Money = 800,
            CurrentMoney = 3700, -- The money that the shop will have

        },
        Items = {
            {'flashdisk', 1},
            {'laptop', 2}
        },
        Detonate = {
            ItemName = 'bomb', -- The item name you would need for detonating
        },

        BombAnimation = {
            Heading = 181.71,
            BombPos = vector3(546.4929,2662.6619,41.4965)
        }
    },
    {
        Type = 'lock', -- code / lock
        Loc = vector3(1169.3201,2717.8064,37.1577), -- Location of the vault
        MinCops = 0,
        Robbed = false, -- It is good to not touch it
        Money = {
            Max = 20000,
            Min = 1000,

            -- Refilling part:
            Timer = 1000,
            Money = 800,
            CurrentMoney = 3500, -- The money that the shop will have

        },
        Items = {
            {'flashdisk', 1},
            {'laptop', 2}
        },
        Detonate = {
            ItemName = 'bomb', -- The item name you would need for detonating
        },

        BombAnimation = {
            Heading = 269.08,
            BombPos = vector3(1169.4701,2717.804,36.5577)
        }
    },
    {
        Type = 'code', -- code / lock
        Loc = vector3(1169.3201,2717.8064,37.1577), -- Location of the vault
        MinCops = 0,
        Robbed = false, -- It is good to not touch it
        Money = {
            Max = 22000,
            Min = 2000,

            -- Refilling part:
            Timer = 1000,
            Money = 800,
            CurrentMoney = 3600, -- The money that the shop will have

        },
        Items = {
            {'flashdisk', 1},
            {'laptop', 2}
        },
        Detonate = {
            ItemName = 'bomb', -- The item name you would need for detonating
        },

        BombAnimation = {
            Heading = 66.9,
            BombPos = vector3(2672.5547,3286.7773,54.3905)
        }
    },
    {
        Type = 'code', -- code / lock
        Loc = vector3(1959.2516,3748.8276,32.3437), -- Location of the vault
        MinCops = 0,
        Robbed = false, -- It is good to not touch it
        Money = {
            Max = 35000,
            Min = 4000,

            -- Refilling part:
            Timer = 1000,
            Money = 800,
            CurrentMoney = 4500, -- The money that the shop will have

        },
        Items = {
            {'flashdisk', 1},
            {'laptop', 2}
        },
        Detonate = {
            ItemName = 'bomb', -- The item name you would need for detonating
        },

        BombAnimation = {
            Heading = 29.7,
            BombPos = vector3(1959.1027,3749.0879,31.8637)
        }
    },
    {
        Type = 'code', -- code / lock
        Loc = vector3(1734.7697,6420.8428,35.0372), -- Location of the vault
        MinCops = 0,
        Robbed = false, -- It is good to not touch it
        Money = {
            Max = 18000,
            Min = 750,

            -- Refilling part:
            Timer = 1000,
            Money = 800,
            CurrentMoney = 1000, -- The money that the shop will have

        },
        Items = {
            {'flashdisk', 1},
            {'laptop', 2}
        },
        Detonate = {
            ItemName = 'bomb', -- The item name you would need for detonating
        },

        BombAnimation = {
            Heading = 338.19,
            BombPos = vector3(1734.9073,6421.1587,34.4372)
        }
    },
}

--=================================================--
--================VANGELICO ROBBERY================--
--=================================================--

Config.Vangelico = {
    {
        StartPos = vector3(-629.8461,-236.568,37.1571), -- Start position of the vangelico
        MinCops = 1, -- Min cops to start the robbery
        showcases = {
            {pos = vector3(-626.735, -238.545, 38.057), robbed= false}, -- Locations of the show cases
            {pos = vector3(-625.697, -237.877, 38.057), robbed= false},
            {pos = vector3(-626.825, -235.347, 38.057), robbed= false},
            {pos = vector3(-625.77, -234.563, 38.057), robbed= false},
            {pos = vector3(-627.957, -233.918, 38.057), robbed= false},
            {pos = vector3(-624.433, -231.161, 38.057), robbed= false},
            {pos = vector3(-623.045, -232.969, 38.057), robbed= false},
            {pos = vector3(-620.265, -234.502, 38.057), robbed = false},
            {pos = vector3(-619.225, -233.677, 38.057), robbed= false},
            {pos = vector3(-620.025, -233.354, 38.057), robbed= false},
            {pos = vector3(-617.487, -230.605, 38.057), robbed= false},
            {pos = vector3(-618.304, -229.481, 38.057), robbed= false},
            {pos = vector3(-619.741, -230.32, 38.057), robbed= false},
            {pos = vector3(-619.686, -227.753, 38.057), robbed= false},
            {pos = vector3(-620.481, -226.59, 38.057), robbed= false},
            {pos = vector3(-621.098, -228.495, 38.057), robbed= false},
            {pos = vector3(-623.855, -227.051, 38.057), robbed= false},
            {pos = vector3(-624.977, -227.884, 38.057), robbed= false},
            {pos = vector3(-624.056, -228.228, 38.057), robbed= false},
        },
        Loot = {
            Items = {
                {name = 'jewels', count = {max = 5, min = 3}}, -- The loot from 1 show case
                {name = 'rolex-watch', count = {max = 2, min = 1}}
            },
        },
        robbed = false -- This is fine to not touch
    }
}

--=================================================--
--=================House Robberies=================--
--=================================================--

Config.Houses = {
    {
        MinCops = 1, -- Min cops needed to start the robbery
        StartPos = vector3(1386.0764,-593.4464,73.5855), -- Start location of the burglary
        HouseInCoords = vector3(346.52, -1013.19, -100.1), -- Position of teleport in house
        IsOpened = false, -- Good to not touch
        Locations = {
            {Pos = vector3(346.1058,-1001.6822,-100.0962), Items = { -- Location of robable place
                {Name = 'laptop', Amount = 1}, -- Amounts + Items in that place, supports weapons + items
                {Name = 'jewels', Amount = 10}
            }, Money = 150, Robbed = false}, -- Money is money and Robbed is enought to not touch
            {Pos = vector3(339.2252,-1003.3469,-100.0962), Items = {
                {Name = 'phone', Amount = 2},
            }, Money = 500, Robbed = false},
        }
    }
}

--=================================================--
--====================BODYGUARDS===================--
--=================================================--

Config.Bodyguards = {
    {
        Pos = vector3(-624.3985,-225.2342,38.057), -- Position of spawned bodyguard
        Heading = 151.87, -- Heading of the bodygurad
        spawned = false, -- Those 3 variables are fine to not be touched
        hp = 100.0,
        armour = 100.0
    },
    {
        Pos = vector3(-617.6118,-235.7391,38.057),
        Heading = 50.6,
        spawned = false,
        hp = 100,
        armour = 100.0
    }
}

--=================================================--
--=======================ATMS======================--
--=================================================--
Config.ATMs = {
    RespawnTimer = 10 * 60 * 60 * 1000, -- Respawn timer of each ATM to be able get again robbed
    ItemNeededForOpening = 'oxcutter', -- Item needed for opening ATM using force (if you fail cracking it)
    Money = {
        Max = 20000, -- Max money you can get from the ATM
        Min = 10000,
        TakeMax = 10, -- The money per 1 grab you take maximal-y
        TakeMin = 5, -- THe money per 1 grab you can take minimally
    },
    MinCops = 1 -- Min Cops to start ATM robbery
}
Config.DisableAtmRobbery = false -- Will completely disable ATM robbery part
--=================================================--
--================DISPATCH SETTINGS================--
--=================================================--
Config.Dispatch = {
    ['vaults'] = {
        BlipSprite = 119,
        BlipColour = 48,
        BlipFlashes = true,
        BlipTimeout = 60000,
        BlipName = 'Vault robbery',
        Notification = 'Someone is is not behaving in the shop and is trying to get to the vault. Go and check it.'
    },
    ['cashRobberies'] = {
        BlipSprite = 119,
        BlipColour = 48,
        BlipFlashes = true,
        BlipTimeout = 60000,
        BlipName = 'Cash register Robbery',
        Notification = 'Someone is is not behaving in the shop and is trying to open the cash register. Go and check it.'
    },
    ['houses'] = {
        BlipSprite = 557,
        BlipColour = 46,
        BlipFlashes = true,
        BlipTimeout = 60000,
        BlipName = 'Burglary',
        Notification = 'Neighbours reported opened doors of couple that is on holiday. There is something suspicious'
    },
    ['atms'] = {
        BlipSprite = 472,
        BlipColour = 27,
        BlipFlashes = true,
        BlipTimeout = 60000,
        BlipName = 'Breaking into ATM',
        Notification = 'The security system of ATM has detected a malware in ATM. Get the money secured.'
    },
    ['vangelico'] = {
        BlipSprite = 354,
        BlipColour = 11,
        BlipFlashes = true,
        BlipTimeout = 60000,
        BlipName = 'Robbery in vangelico',
        Notification = 'Someone is shooting in vangelico. I am worried the bodyguards will not be enough force to stop them.'
    },
}
```

```mdx-code-block
</TabItem>
<TabItem value="locales" label="locales">
```

```js
Locales['en'] = {
    ['not_armed'] = 'You are not armed, how do you want to open the cash register?',
    ['e_to_rob_vault'] = 'Press [~g~E~s~] to rob this vault',
    ['not_min_cops'] = 'To rob without cops will not give you anything to life. To enjoy it the most you would need at least %s cops in the city.',
    ['already_robbed_vault'] = 'This vault is marked as police as robbed. Please wait until they will investigate it and open again the safe.',
    ['no_money_remaining'] = 'There are no money remaining in this vault',
    ['shoot_to_rob_vangelico'] = 'Shoot to show off and build some respect.',
    ['e_to_break_showcase'] = '~INPUT_PICKUP~ To break this showcase',
    ['e_to_lockpick'] = '~INPUT_PICKUP~ To lockpick the house',
    ['e_to_enter'] = '~INPUT_PICKUP~ To enter the house',
    ['e_to_leave'] = '~INPUT_PICKUP~ To leave the house',
    ['e_to_rob'] = '~INPUT_PICKUP~ To rob',
    ['robbery_aborted'] = 'You have aborted the robbery',
    ['cracking_failed'] = 'You failed to get to the vault without violence',
    ['cracking_succ'] = 'You have successfuly opened the safe',

    -- Progress bars --
    ['connecting_to_lock_pin'] = 'You are connecting to the lock',
    ['planting_bomb'] = 'You are planting the bomb',
    ['taking_money_from_vault'] = 'You are taking money from vault',


    -- Draw Texts
    ['detonate_vault?'] = '~o~Do you want to exit or detonate the vault?~s~',
    ['detonate_vault_yes'] = '~g~[E]~s~ - Detonate the vault',
    ['detonate_vault_no'] = '~r~[x]~r~ - Leave it be and leave',
    ['take_money_from_vault'] = '[~g~E~s~] Take pack of money from vault, remaining: %s',

    ['atm_open_using_force'] = 'You are trying to get into the ATM using force',
    ['take_money_from_atm'] = '[E] Take money from ATM, remaining: %s$',
    ['break_atm'] = '[E] Break Into ATM',
    ['atm_broken'] = 'This ATM is broken',
    ['get_to_atm_force'] = '~o~Do you want to open the safe using force? 50 percent chance of unsuccess~s~',
    ['atm_yes'] = '~g~[E]~s~ - Yes',
    ['atm_no'] = '~r~[x]~r~ - No',
    ['atm_rob_failed'] = 'The ATM was not successfuly robbed and no longer is possible to get into it',
    ['atm_rob_success'] = 'The ATM has been successfuly opened and now you can take money',
    ['stop_tasking_money'] = '~INPUT_VEH_DUCK~ To stop robbing the ATM',
    ['not_have_needed_item'] = 'You do not have the required item for breaking to the ATM'
}
```

```mdx-code-block

</TabItem>
</Tabs>
```
