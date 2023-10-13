---
sidebar_position: 2
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

```

:::info Introduction
Script for creating jobs just by adding them to the config and database! Add your job now!

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

## Installation

1. Put `ensure sqz_unijob` to your server.cfg _(or any start cfg file)_ and put the resource named `sqz_unijob` -_maybe you will have to rename it_- into your `resources` folder.
2. Run the SQL file provided with the script
3. Obviously configure your config, locales 😜

## Creating a new job

1. Put the job to the `jobs` & `job_grades` to your database as usual
2. Insert the society to the `addon_account` to your database in format: `society_jobname`
3. Duplicate the whole table `Config.Jobs.sandy_mechanic` , change the `sandy_mechanic` to your job name and configure its properties

:::info

You do **NOT NEED** to put the job into the `addon_inventory` or datastore tables in your databases, `sqz_unijob` uses its own system.

:::

## Exports

### Get Player Handcuff state

- `exports['sqz_unijob']:IsHandcuffed()` - returns true/false
  - local isPlayerHandcuffed = exports['sqz_unijob']:IsHandcuffed()
- LocalPlayer.state.handcuffed - again, returns true/false/nil
  - local isPlayerHandcuffed = LocalPlayer.state.handcuffed

## Config Files

```mdx-code-block

<Tabs>
  <TabItem value="Config (server)" label="Config (server)" default>
```

```js
SConfig = {}

SConfig.Webhooks = {
    ['sandy_mechanic'] = 'https://discord.com/api/webhooks/851478685764157520/-QeBCcYOHLRPO0gFAqd71SH_QEg-cQ2tNXHy8Enb6QdFF4aYe-COLaDGleooSbOEWzJJ', -- List of jobs that should use the webhook, remove it if you do not want to use the webhook for Discord
}
```

```mdx-code-block
</TabItem>
<TabItem value="Config (client)" label="Config (client)">
```

```js
Config                            = {}
Config.Jobs						  = {}

Config.DrawDistance               = 5.0 -- Distance in GTA units you will see the markers
Config.DrawTextDistance			  = 2.0 -- Distance in GTA units from which you will see the DrawTex3D (if is enabled)
Config.Draw3DText = true -- If true, a 3D floating text will be displayed above the marker
Config.Locale                     = 'en'
Config.UseAnimations			  = true -- Enables/Diasbles animations for fixing vehicle, writing bills and etc. ...
Config.UseMythic_Progressbar	  = true -- Enables/Diasbles opening Mythic progress bar while doing an animation
Config.NeedItemCuffs			  = false -- Enables/Diasbles requirement of handcuffs as item
Config.UseLegacyFuel			  = false -- If true, your vehicle after taking it from garage will have 100% fuel (requires LegacyFuel script)
Config.ShowImpoundNotification	  = true -- Choose, if you want to play an animation while impounding a vehicle
Config.MenuAlign 				  = 'top-left' -- Position of ESX Menu
Config.CuffItemName				  = 'cuffs' -- The item name in database you need to have in your inventory to bee able to cuff somebody
Config.DiscordLoggingActionsMenu  = true -- If the actions from F6 menu should be logged to the Discord
Config.SocietyOwnedVehicles		  = false -- If true, vehicles will be fetched from the databae, make sure to have database:

--[[
	`plate`, `vehicle`, `stored`, `type` (air | car)
]]


-- Custom markers
Config.CustomMarkerDistance = 2.0 -- Distance in GTA units you need to be close to the marker to be drawn
Config.DefaultMarker = { -- The marker that will be shown when you are not close enough
	Size = {x = 0.7, y = 0.7, z = 0.7}, -- Size of the marke
	Color = {r = 255, g = 0, b = 0}, -- The color of the marker
	BouncingMarker = false, -- If the marker should go UP and Down
	RotatingMarker = true, -- If the marker should rotate
	Marker = 21, -- Type of the marker
}

Config.BossGrades = { -- Allowed grades to open the bossmenu
	['boss'] = true
}

Config.MotionTexts = { -- Texts that will be shown in the motion texts
	['Armory'] = '[E] Armory',
	['Vehicles'] = '[E] Vehicles',
	['Cloakroom'] = '[E] Cloakroom',
	['Craft'] = '[E] Crafting',
	['Selling'] = '[E] Selling',
	['BossActions'] = '[E] Boss Actions',
	['VehicleDeleter'] = '[E] Park Vehicle',
	['aircrafts_open'] = '[E] Aircrafts'
}

-- Custom events (edit in case you use any custom events)
Config.customEvents = {
    ['esx_billing:sendBill'] = 'esx_billing:sendBill', -- You can change the event if you for example use anticheats/you have editted event like esx_billing:sendSuperSecretEventSquizerBill
    ['esx_society:openBossMenu'] = 'esx_society:openBossMenu',
	['esx:setJob'] = 'esx:setJob',
	['esx_ambulancejob:revive'] = 'esx_ambulancejob:revive',
	['mythic_progressbar:client:progress'] = 'mythic_progbar:client:progress',
	['esx:getSharedObject'] = 'esx:getSharedObject'
}


Config.NonJobActions = { -- With these jobs you will be available to collect of other jobs without the job needed
	Enabled = false, -- If the non job actions should be enabled
	Jobs = {
		['sandy_mechanic'] = true -- Allowed jobs that are written in the Config.Jobs
	},
	AllowedActions = {
		['Selling'] = true, -- Marker types they are allowed, for now you can only disable these, not add any more
		['Collecting'] = true,
		['Craft'] = true
	}
}

Config.Blips = {
	sandy_mechanic = {
		BlipCoords = vector3(1729.84, 3700.28, 39.38), -- Coords for the blip
		Sprite = 104, -- Blips sprite (icon on the map)
		Scale = 1.0, -- Size of the blip
		Colour = 2, -- Color of the blip
		Name = 'Sandy Mechanic' -- Name of the blip
	}, --Lower you can add other blips, again as much as you want :-)
	sandy_mechanic_harvesting_point = {
		BlipCoords = vector3(-1893.0803222656,1920.0615234375,161.21453857422), -- Coords for the blip
		Sprite = 104, -- Blips sprite (icon on the map)
		Scale = 1.0, -- Size of the blip
		Colour = 2, -- Color of the blip
		Name = 'Harvesting point', -- Name of the blip
		Jobs = { -- Remove the whole Jobs table to make the blip public or eventualy set it to Jobs = 'none'
			['sandy_mechanic'] = true
		}
	}
}

Config.AntiDupe = {
	Enabled = true,
	Time = math.random(1000, 3000),
	AnimN = 'shakeoff_1',
	AnimDict = 'move_m@_idles@shake_off'
}

Config.Jobs.sandy_mechanic = { -- This is name of job you have in your database, change to setjob name whatever you want to
	SocietyPayments = true, -- If society payments enabled, you will get pay and pay from your society
	PercentToSociety = 90, -- The percent of money that the society will get (the remaining money will be added to player pocket)
	NeededLockPickItem = true, -- If a player needs item for lockpinging a vehicle (if this is set to false, none of the two bellow are affected)
	LockPickItemName = 'lockpick', -- The name of the item needed to lockpick a vehicle
	RemoveLockPickAfterUse = true, -- If the lockpick should be removed after use

	Zones = {
		armory = {
			Pos = vector3(1734.0327,3710.3796,34.1545), -- Postion of the marker
			Size = {x = 0.7, y = 0.7, z = 0.7}, -- Size of the marke
			Color = {r = 204, g = 204, b = 0}, -- The color of the marker
			BouncingMarker = false, -- If the marker should go UP and Down
			RotatingMarker = true, -- If the marker should rotate
			Marker = 22, -- Type of the marker
			Type = 'Armory',
			BuyWeapon = true, -- This allows you to buy weapons in this Armory (if you have multiple armories and you do not want to have buy weapon in all of them, simply cahnge it to false
			BuyWeaponGrade = 0, -- This is the least grade you must have to be allowed to buy weapons ( grade 0, 1, 2, 3, 4, 5, ... is now able to buy weapons)
			GetWeaponGrade = 0, -- This is the least grade you must have to be able to withdraw weapons from the armory (at some servers I have see that somebody was stealing thing from armories :D ( grade 0, 1, 2, 3, 4, 5, ... is now able to witdraw weapons) (Everybody can deposit weapons)
			GetStockGrade = 0, -- This is the least grade you must have to be able to withdraw things from the armory (at some servers I have see that somebody was stealing thing from armories :D ( grade 0, 1, 2, 3, 4, 5, ... is now able to witdraw weapons) (Everybody can deposit weapons)
			BuyItems = true,
			ShopItems = {
				shared = { -- Each job grade will see these items
					{item = 'bread', price = 3, label = 'Bread'},
					{item = 'water', price = 2, label = 'Water'},
				},
				boss = { -- Only boss will see these items
					{item = 'phone', price = 150, label = 'Phone'},
				},
			},
		},
		Cloakroom = {
				Pos = vector3(1743.6895,3712.1201,34.1678), -- This is the place where you can change your saved clothes (you have to buy then in clotheshop)
				Size = {x = 0.7, y = 0.7, z = 0.7},
				Color = {r = 204, g = 204, b = 0},
				Marker = 22,
				Type = 'Cloakroom',
		},
		Crafting = {
				Pos = vector3(1743.176,3702.291,34.1996), -- This is the place where you can change your saved clothes (you have to buy then in clotheshop)
				Size = {x = 0.7, y = 0.7, z = 0.7},
				Color = {r = 204, g = 204, b = 0},
				Marker = 22,
				Type = 'Craft',
				Recipes = {
					[1] = {
						RequiredItems = { -- Bellow will be listed items a player will need for Collecting
							{itemName = "wrench", label = 'Wrench' , count = 1, removeItem = true}, -- itemName is the name from database, removeItem will remove the item from player inventory after fininished collecting
							{itemName = "adhesive_tape", label = 'Adhesive Tape', count = 2, removeItem = true}
						},
						GiveItem = "fixkit", -- The item a player should get when he is done
						GiveItemCount = 1, -- The count of a item a player should get when he is done
					}
				},
				Animations = { -- Animation properties are listed bellow
					AnimDict = "mini@repair", -- The animation dictionary for Collecting animation
					AnimName = "fixing_a_ped", -- The animation name for Collectiong anitamtion
					Duration = 4000, -- Set to 0 to disable animations
					blendInSpeed = 8.0,
					blendOutSpeed = 8.0,
					AnimFlag = 1,
					MythicProggbarLabel = "You are crafting a fixkit" -- The label which will be shown in the mythic progres bar
				}
			},

		Selling = {
			Pos = vector3(1732.0366,3716.2947,34.1135), -- This is the place where you can sell the stuff
			Size = {x = 0.7, y = 0.7, z = 0.7},
			Color = {r = 204, g = 204, b = 0},
			Marker = 22,
			Type = 'Selling',
			Item = "wrench", -- The name of sold item
			MinCash = 100, -- Min cash a player will get for selling items
			MaxCash = 500, -- Max cash a player will get for selling item
			Delay = 1000 -- The delay in which the item will be sold
		},
		BossActions = {
				Pos = vector3(1737.7152,3709.5378,34.1359), -- This is the place where you open BossMenu (only grade with name boss is allowed (depends on your esx_society edits)
				Size = {x = 0.7, y = 0.7, z = 0.7},
				Color = {r = 204, g = 204, b = 0},
				Marker = 22,
				Type = 'BossActions',
		},
		Vehicles = {
				Pos = vector3(1723.5073,3704.897,34.1602), -- This is the spawnpoint where you see menu with vehicles which you can spawn
				Size = {x = 0.7, y = 0.7, z = 0.7},
				Color = {r = 204, g = 204, b = 0},
				Marker = 36,
				Type = 'Vehicles',
				SpawnPoints = { -- Here you configure spawnpoints, where the vehicle will be spawned (Chcecks if the spawnpoint is clear), you can add as much as you want
					{coords = vector3(1722.02, 3713.56, 34.22), heading = 90.0, radius = 6.0},
					{coords = vector3(1726.88, 3716.97, 34.13), heading = 90.0, radius = 6.0}
				}
			},
		VehicleDeletePoint = { -- here you add vehicle deleter points. It can delete helicopters, car, bikes, boats...
				Pos = vector3(1728.0522,3709.8315,33.3353),
				Size = {x = 3.5, y = 3.5, z = 1.0},
				Color = {r = 255, g = 0, b = 0},
				Marker = 1,
				Type = 'VehicleDeleter',
			},
		HeliSpawn = { -- This is marker which opens you menu where you choose which plane you want to spawn.
			Pos = vector3(1721.3397,3709.4692,34.2845),
			Size = {x = 0.7, y = 0.7, z = 0.7},
			Color = {r = 204, g = 204, b = 0},
			Marker = 36,
			Type = 'Aircrafts',
			SpawnPoints = { -- Here you configure spawnpoints, where the vehicle will be spawned (Chcecks if the spawnpoint is clear), you can add as much as you want, smae as vehicles
				{coords = vector3(1730.611,3701.3523,39.3791), heading = 287.19, radius = 6.0}
			}
		},
	},

	CollectPoints = { -- Places where a player can pickup an item
		DrawDistance = 5.0, -- The distance a marker for pickup will be drawn from
		Marker = {
			Size = {x = 0.7, y = 0.7, z = 0.7}, -- Size of the marker
			Color = {r = 0, g = 255, b = 255}, -- The RGB color of the marker
			Marker = 22, -- Mrker ID
		},
		Animation = {
			AnimDict = "anim@amb@clubhouse@tutorial@bkr_tut_ig3@", -- The animation dictionary for Collecting animation
			AnimName = "machinic_loop_mechandplayer", -- The animation name for Collectiong anitamtion
			Duration = 1500, -- Set to 0 to disable animations
			blendInSpeed = 8.0,
			blendOutSpeed = 8.0,
			AnimFlag = 1,
			MythicProggbarLabel = "Collecting grapes" -- The label which will be shown in the mythic progres bar
		},
		ResetPointsTime = 5000, -- Time in mas which the locations of pickup will be reset in
		-- It MUST be a sequenced table
		{
			pos = vector3(-1892.914,1920.067,161.172), -- The position of the marker
			isUsed = false, -- Just do not touch it :)
			getMin = 2, -- The min count a player will get
			getMax = 4, -- The max item count a player will get
			getItem = "grapes" -- Item a player will get
		},
		{
			pos = vector3(-1901.691,1925.073,161.770),
			isUsed = false,
			getMin = 2,
			getMax = 4,
			getItem = "grapes"
		}
	},

	DefaultClothes = {
		ReloadSkin = 'Default clothes', -- Set to false to disallow changing clothes to previous one
		["Work Outfit"] = {
			JobGrades = 'all', -- You can set it to all to make it available to all the job grades
			--[[JobGrades = {
				["job_grade1"] = true,
				["job_grade2"] = true
			},]]

			male = { -- Set the clothes for male peds
				tshirt_1 = 0,  tshirt_2 = 0, -- You can remove or add any lines,
				torso_1 = 0,   torso_2 = 0, -- That your skinchanger script supports
				decals_1 = 0,   decals_2 = 0,
				arms = 0,
				pants_1 = 0,   pants_2 = 0,
				shoes_1 = 0,   shoes_2 = 0,
				helmet_1 = 0,  helmet_2 = 0,
				chain_1 = 0,    chain_2 = 0,
				ears_1 = 0,     ears_2 = 0
			},
			female = { -- Set the clothes for female peds
				tshirt_1 = 0,  tshirt_2 = 0,
				torso_1 = 0,   torso_2 = 0,
				decals_1 = 0,   decals_2 = 0,
				arms = 0,
				pants_1 = 0,   pants_2 = 0,
				shoes_1 = 0,   shoes_2 = 0,
				helmet_1 = 0,  helmet_2 = 0,
				chain_1 = 0,    chain_2 = 0,
				ears_1 = 0,     ears_2 = 0
			}

		}
	},

	-- End of zones and start of authorized vehicles
	AuthorizedVehicles = { -- Vehicles which be shown in the menu for the defined job
		shared = { -- These vehicles will have in garage every job rank
			{
				model = 'flatbed', -- Vehicle spawn model
				label = 'Flatbed', -- Vehicle menu label
				props = {plate = 'SQZ2', modXenon = false} -- Here you can add all vehicle mods you want, documentation can be found here: https://esx-framework.github.io/es_extended/client/functions/game/setvehicleproperties/#valid-table-content
			},
			{
				model = 'slamvan',
				label = 'Slamvan',
				props = {plate = 'SQZ1', modXenon = true} -- Here you can add all vehicle mods you want, documentation can be found here: https://esx-framework.github.io/es_extended/client/functions/game/setvehicleproperties/#valid-table-content
			}
		},
		boss = { -- These vehicles + Shared Vehicles will have Boss rank
			{
				model = 'adder',
				label = 'Adder',
				props = {plate = 'SQZ', modXenon = false} -- Here you can add all vehicle mods you want, documentation can be found here: https://esx-framework.github.io/es_extended/client/functions/game/setvehicleproperties/#valid-table-content
			}
		}
	},
	-- End of Authorized vehicles and start of Allowed Actions
	AllowedActions = {
		Billing = true, -- Adds "Billing" to the interaction menu, the society is society_*player_job_name* (players job is police -> society is society_police)
		HasBodyActions = true, -- Adds Body Action such as Cuffing, Dragging, Taking out of vehicle, Putting in vehicle ...
		HasMechanicActions = true, -- This allows vehicle interaction in F6 menu
		CanRevive = false, -- This adds revive possibility to F6 menu
		CanWash = true, -- This manages if the boss can wash dirty money in BossMenu
		Deposit = true, -- If the boss will be able to deposit
		Grades = true, -- If the boss will have access to grades menu
		Withdraw = true, -- If the boss will have access to withdraw
		Employees = true, -- If the boss will have access to the employyess menu
	},
	-- End of Authorized actions and start of authorized Weapons for the job
	AuthorizedWeapons = { -- There you configure weapons that can a job have
		shared = { -- These weapon can be bought by all the players in the job
			{weapon = 'WEAPON_APPISTOL', components = {0, 0, 1000, 4000, nil}, price = 10000},
			{weapon = 'WEAPON_KNUCKLE', price = 800},
		},
		boss = { -- This weapon can be bought only of the boss of the current job
			{weapon = 'WEAPON_KNIFE', price = 1500},
		}
	},
	-- End of authorized Weapons and Start of authorized AirCrafts
	AuthorizedAirCrafts = {
		shared = { -- These vehicles will have in garage every job rank
		}, -- These are empty, so you need to define for each rank or simply add vehicles to shared
		boss = { -- These vehicles + Shared Vehicles will have Boss rank
			{
				model = 'maverick',
				label = 'Maverick',
				props = {plate = 'SQZ1', modXenon = true} -- Here you can add all vehicle mods you want, documentation can be found here: https://esx-framework.github.io/es_extended/client/functions/game/setvehicleproperties/#valid-table-content
			}
		}
	},
}
```

```mdx-code-block
</TabItem>
<TabItem value="Loclaes" label="Loclaes">
```

```js
Locales['en'] = {
    ['player_clothes'] = 'Your Clothes',
    ['cloakroom_open'] = '[E] CloakRoom',
    ['armory_open'] = '[E] Armory',
    ['bossmenu_open'] = '[E] BossMenu',
    ['vehicles_open'] = '[E] VehicleSpawner',
    ['vehicles_open_park'] = '[E] Park Vehicle',
    ['loaded_outfit'] = 'Your have been dreesed to your outfit',
    ['job_actions_menu'] = 'Job Actions',
    ['billing'] = 'Billing',
    ['billing_amount'] = 'Billing Amount',
    ['billing_label'] = 'Billing Label',
    ['billing_label_empty'] = 'Billing label can not be empty',
    ['billing_ammount_empty'] = 'Billing value can not be empty',
    ['bill_sent'] = 'You have sent the bill',
    ['no_players_near'] = 'There is/are no player(s) near',
    ['no_cuffs'] = 'You do not have HandCuffs',
    ['received_cuffs'] = 'You have uncuffed player and got HandCuffs',
    ['un_hadncuff'] = 'UnHandCuff person',
    ['fix_vehicle'] = 'Repair vehicle',
    ['clean_vehicle'] = 'Clean Vehicle',
    ['impound'] = 'Impound vehicle',
    ['vehicle_impounded'] = 'Vehicle Impounded',
    ['must_seat_driver'] = 'You must be a driver in order to impound the vehicle',
    ['must_near'] = 'You must be near a vehicle in order to impound the vehicle',
    ['dep_vehicle'] = 'Attach vehicle',
    ['lock_pick_vehicle'] = 'LockPick vehicle',
    ['vehicle_interaction'] = 'Vehicle Interaction',
    ['not_in_veh'] = 'You can not be in a vehicle',
    ['vehicle_opened'] = 'Vehicle has been unlocked',
    ['revive'] = 'Revive',
    ['unlocking_vehicle'] = 'Unlocking Vehicle',
    ['repaired_veh'] = 'Vehicle has been repaired',
    ['veh_clean'] = 'Vehicle has been cleared',
    ['cleaning_vehicle'] = 'CLEANING A VEHICLE',
    ['repairing_vehicle'] = 'REPAIRING VEHICLE',
    ['revive'] = 'Revive a person',
    ['no_veh_near'] = 'There is no vehicle near',
    ['veh_attached'] = 'Vehicle attached',
    ['can_not_self_veh'] = 'You can not attach your own vehicle',
    ['vehicle_blocked'] = 'There is no free spawnpoint for vehicles',
    ['armory'] = 'Armory',
    ['buy_weapon'] = 'Buy Weapon',
    ['get_weapon'] = 'Get weapon',
    ['get_stock'] = 'Get stock',
    ['put_weapon'] = 'Put weapon',
    ['deposit_object'] = 'Deposit stock',
    ['armory_free'] = 'free',
    ['armory_item'] = '$%s',
    ['citizen_interaction'] = 'Citizen Interaction',
    ['armory_weapontitle'] = 'armory - Buy weapon',
    ['armory_weapontitle'] = 'armory - Buy weapon',
    ['armory_componenttitle'] = 'armory - Weapon attatchments',
    ['armory_bought'] = 'you bought an ~y~%s~s~ for ~g~$%s~s~',
    ['armory_money'] = 'you cannot afford that weapon',
    ['armory_hascomponent'] = 'you have that attatchment equiped!',
    ['armory_owned'] = 'owned',
    ['quantity_invalid'] = 'Invalid quantity',
    ['stock'] = 'Stock',
    ['quantity'] = 'Quantity',
    ['put_weapon_menu'] = 'Deposit weapon',
    ['vehicle_menu'] = 'Vehicle Menu',
    ['get_weapon_menu'] = 'Get weapon',
    ['helicopter_menu'] = 'Helicopter menu',
    ['aircrafts_open'] = '[E] AirCrafts',
    ['search'] = 'search',
    ['being_searched'] = 'you are being ~y~searched~s~ by the ~b~Police~s~',
    ['guns_label'] = '--- Guns ---',
    ['inventory_label'] = '--- Inventory ---',
    ['license_label'] = ' --- Licenses ---',
    ['confiscate'] = 'confiscate %s',
    ['confiscate_weapon'] = 'confiscate %s with %s bullets',
    ['confiscate_inv'] = 'confiscate %sx %s',
    ['confiscate_dirty'] = 'confiscate dirty money: <span style="color:red;">$%s</span>',
    ['you_confiscated'] = 'you confiscated ~y~%sx~s~ ~b~%s~s~ from ~b~%s~s~',
    ['got_confiscated'] = '~y~%sx~s~ ~b~%s~s~ were confiscated by ~y~%s~s~',
    ['you_confiscated_account'] = 'you confiscated ~g~$%s~s~ (%s) from ~b~%s~s~',
    ['got_confiscated_account'] = '~g~$%s~s~ (%s) was confiscated by ~y~%s~s~',
    ['you_confiscated_weapon'] = 'you confiscated ~b~%s~s~ from ~b~%s~s~ with ~o~%s~s~ bullets',
    ['got_confiscated_weapon'] = 'your ~b~%s~s~ with ~o~%s~s~ bullets was confiscated by ~y~%s~s~',
    ['open_bossmenu'] = 'press ~INPUT_CONTEXT~ to open the menu',
    ['have_withdrawn'] = 'you have withdrawn ~y~%sx~s~ ~b~%s~s~',
    ['have_deposited'] = 'you have deposited ~y~%sx~s~ ~b~%s~s~',
    ['quantity'] = 'quantity',
    ['inventory'] = 'inventory',
    ['handcuff'] = 'handcuff',
    ['drag'] = 'drag',
    ['put_in_vehicle'] = 'put in vehicle',
    ['out_the_vehicle'] = 'put out off the vehicle',
    ['buy_items'] = 'Buy Items',
    ['shop_item'] = '$%s',
    ['shop_confirm'] = 'buy %sx %s for $%s?',
    ['job_shop'] = 'Job Shop',
    ['no'] = 'No',
    ['yes'] = 'Yes',
    ['bought'] = 'you just bought ~y~%sx~s~ ~b~%s~s~ for ~r~$%s~s~',
    ['not_enough'] = 'you do not have ~r~enough~s~ money, you\'re ~y~missing~s~ ~r~$%s~s~!',
    ['not_enough_society'] = 'your society does not have ~r~enough~s~ money, it is missing ~y~missing~s~ ~r~$%s~s~!',
    ['player_cannot_hold'] = 'you do ~r~not~s~ have enough ~y~free space~s~ in your inventory!',
    ['searching_player'] = 'You are searching player!',
    ['stopped_searching_player'] = 'You have stopped searching a player',
    ['action_not_possible'] = 'Action is not possible !',
    ['took_from'] = 'This player has taken **%s** in count of **%s x** from the armory and his job is %s!',
    ['deposit_to'] = 'This player has deposited **%s** in count of **%s x** to the armory and his job is %s!',
    ['alert_mechanic'] = 'Someone needs your help, Lets GO!',
    ['alert_fib'] = 'Something bad had happened. Lets check it! Be fast',
    ['not_hands_up'] = 'Searched player does not have hands up/is not handcuffed or is not dead',
    ['proggbar_writing_bill'] = 'YOU ARE WRITING A BILL',
    ['no_more_account_money'] = "You do not have enough %s money, you must have at least %s to deposit.",
    ['e_to_pickup'] = "~INPUT_PICKUP~ Pickup",
    ['can_not_carry'] = "You can not carry this item.",
    ['crafting'] = "[E] Crafting",
    ['not_enough_items'] = "You do not have enough items for crafting",
    ['craft_items'] = "Player crafted an item %s in amount of %s and his location is %s, name is: %s, identifier %s",
    ['already_selling'] = "You are already selling and item",
    ['all_sold'] = 'You have sold all you have had on you',
    ['earned_money'] = "You have earned %s$",
    ['earned_money_society'] = "Your society has earned %s$",
    ['started_selling'] = "You have started selling an item.",
    ['armory_opened'] = 'This vault is already opened',
    ['already_searched'] = 'This player is already searched',
    ['no_lockpick'] = 'You do not have lockpick item',
    ['selling_point'] = 'Sell',
    ['preparing'] = 'You are preparing',
    ['not_your_vehicle'] = 'This vehicle is not yours'
}

Locales['cs'] = {
    ['player_clothes'] = 'Tvoje oblecnei',
    ['cloakroom_open'] = '[E] Satna',
    ['armory_open'] = '[E] Sklad',
    ['bossmenu_open'] = '[E] BossMenu',
    ['vehicles_open'] = '[E] Vzit vozidlo',
    ['vehicles_open_park'] = '[E] Ulozit vozidlo',
    ['loaded_outfit'] = 'Oblekl jsi se do sveho outfitu',
    ['job_actions_menu'] = 'Akce prace',
    ['billing'] = 'Fakturace',
    ['billing_amount'] = 'Castka faktury',
    ['billing_label'] = 'Fakturacni stitek',
    ['billing_label_empty'] = 'Fakturacni stitek nemuze byt prazdny',
    ['billing_ammount_empty'] = 'Castka faktury nemuze byt prazdna',
    ['bill_sent'] = 'Poslal jsi fakturu',
    ['no_players_near'] = 'Není poblíž/Nejsou poblíž zadni hraci',
    ['no_cuffs'] = 'Nemas pouta',
    ['received_cuffs'] = 'Odpoutal jsi hrace a dostal pouta',
    ['un_hadncuff'] = 'Odpoutat osobu',
    ['fix_vehicle'] = 'Opravit vozidlo',
    ['clean_vehicle'] = 'Vycistit vozidlo',
    ['impound'] = 'Odtahnout vozidlo',
    ['vehicle_impounded'] = 'Vozidlo odtazeno',
    ['must_seat_driver'] = 'Abyste mohli zabavit vozidlo, musite byt ridic',
    ['must_near'] = 'Abyste mohli vozidlo zabavit, musite byt v blizkosti vozidla',
    ['dep_vehicle'] = 'Pripojit vozidlo',
    ['lock_pick_vehicle'] = 'Vypacit vozidlo',
    ['vehicle_interaction'] = 'Interakce s vozidlem',
    ['not_in_veh'] = 'Nesmis byt ve vozidle',
    ['vehicle_opened'] = 'Vozidlo bylo odemceno',
    ['revive'] = 'Ozivit',
    ['unlocking_vehicle'] = 'Odemikani vozidla',
    ['repaired_veh'] = 'Vozidlo bylo opraveno',
    ['veh_clean'] = 'Vozidlo bylo vycisteno',
    ['cleaning_vehicle'] = 'PROBIHA CISTENI VOZIDLA',
    ['repairing_vehicle'] = 'PROBIHA OPRAVA VOZIDLA',
    ['revive'] = 'Ozivit osobu',
    ['no_veh_near'] = 'Pobliz neni zadne vozidlo',
    ['veh_attached'] = 'Vozidlo pripojeno',
    ['can_not_self_veh'] = 'Nemuzes pripojit sve vozidlo',
    ['vehicle_blocked'] = 'Neni zde volne misto pro spawn vozidla',
    ['armory'] = 'Zbrojnice',
    ['buy_weapon'] = 'Koupit zbran',
    ['get_weapon'] = 'Vzit zbran',
    ['get_stock'] = 'Vzit predmet',
    ['put_weapon'] = 'Vlozit zbran',
    ['deposit_object'] = 'Vlozit predmet',
    ['armory_free'] = 'volné',
    ['armory_item'] = '$%s',
    ['citizen_interaction'] = 'Interakce s obcany',
    ['armory_weapontitle'] = 'Zbrojnice - Koupit zbran',
    ['armory_weapontitle'] = 'Zbrojnice - Koupit zbran',
    ['armory_componenttitle'] = 'Zbrojnice - Doplnky na zbrane',
    ['armory_bought'] = 'Koupil jsi ~y~%s~s~ za ~g~$%s~s~',
    ['armory_money'] = 'Tuto zbran si nemuzes dovolit',
    ['armory_hascomponent'] = 'Doplnek jiz mate nasazen!',
    ['armory_owned'] = 'Vlastneno',
    ['quantity_invalid'] = 'Neplatne mnozstvi',
    ['stock'] = 'Sklad',
    ['quantity'] = 'Mnozstvi',
    ['put_weapon_menu'] = 'Vlozit zbran',
    ['vehicle_menu'] = 'Menu vozidla',
    ['get_weapon_menu'] = 'Ziskat zbran',
    ['helicopter_menu'] = 'Menu vrtulníku',
    ['aircrafts_open'] = '[E] Letadla',
    ['search'] = 'Prohledat',
    ['being_searched'] = 'Prave jsi ~y~prohledavan~s~ ~b~PD/SD~s~',
    ['guns_label'] = '--- Zbrane ---',
    ['inventory_label'] = '--- Inventar ---',
    ['license_label'] = ' --- Licence ---',
    ['confiscate'] = 'Zabaveno %s',
    ['confiscate_weapon'] = 'Zabaveno %s s %s Naboji',
    ['confiscate_inv'] = 'Zabaveno %sx %s',
    ['confiscate_dirty'] = 'Zabaveny spinave penize: <span style="color:red;">$%s</span>',
    ['you_confiscated'] = 'Zabavil jsi ~y~%sx~s~ ~b~%s~s~ od ~b~%s~s~',
    ['got_confiscated'] = '~y~%sx~s~ ~b~%s~s~ bylo zabaveno ~y~%s~s~',
    ['you_confiscated_account'] = 'Zabavil jsi ~g~$%s~s~ (%s) od ~b~%s~s~',
    ['got_confiscated_account'] = '~g~$%s~s~ (%s) bylo zabaveno ~y~%s~s~',
    ['you_confiscated_weapon'] = 'Zabavil jsi ~b~%s~s~ od ~b~%s~s~ s ~o~%s~s~ naboji',
    ['got_confiscated_weapon'] = 'Tvoje ~b~%s~s~ s ~o~%s~s~ naboji byla ukradena ~y~%s~s~',
    ['open_bossmenu'] = 'Zmackni ~INPUT_CONTEXT~ pro otevreni menu',
    ['have_withdrawn'] = 'Vybral jsi ~y~%sx~s~ ~b~%s~s~',
    ['have_deposited'] = 'Vlozil jsi ~y~%sx~s~ ~b~%s~s~',
    ['quantity'] = 'Mnozstvi',
    ['inventory'] = 'Inventar',
    ['handcuff'] = 'Pouta',
    ['drag'] = 'Vzit',
    ['put_in_vehicle'] = 'Vlozit do vozidla',
    ['out_the_vehicle'] = 'Vytahnout z vozidla',
    ['buy_items'] = 'Koupit polozku',
    ['shop_item'] = '$%s',
    ['shop_confirm'] = 'Koupit %sx %s za $%s?',
    ['job_shop'] = 'Job Shop',
    ['no'] = 'Ne',
    ['yes'] = 'Ano',
    ['bought'] = 'Prave jsi koupil ~y~%sx~s~ ~b~%s~s~ za ~r~$%s~s~',
    ['not_enough'] = 'Nemas ~r~dostatek~s~ penez, ~y~chybi ti~s~ ~r~$%s~s~!',
    ['player_cannot_hold'] = 'Mas ~r~nemas~s~ dostatek ~y~volneho mista~s~ ve svem inventari!',
    ['searching_player'] = 'Prohledavas hrace!',
    ['stopped_searching_player'] = 'Prestal jsi prohledavat osobu',
    ['action_not_possible'] = 'Akce neni mozna !',
    ['took_from'] = 'Tento hrac vzal **%s** v poctu **%s x** do zbrojnice a jeho ukolem je %s!',
    ['deposit_to'] = 'Tento hrac vlozil **%s** v poctu **%s x** do zbrojnice a jeho ukolem je %s!',
    ['alert_mechanic'] = 'Nekdo potrebuje tvou pomoc, Pojdme!',
    ['alert_fib'] = 'Stalo se neco spatneho. Bez to rychle zkontrolovat',
    ['not_hands_up'] = 'Prohledavany hrac nema ruce nahore/ neni spoutany, nebo omraceny',
    ['proggbar_writing_bill'] = 'VYPISUJES UCET',
    ['no_more_account_money'] = "Nemas dostatek %s penez, musite mit alespon %s ke vkladu.",
    ['e_to_pickup'] = "~INPUT_PICKUP~ Zvednout",
    ['can_not_carry'] = "Nemuzes vzit tuto polozku.",
    ['crafting'] = "[E] Vyroba",
    ['not_enough_items'] = "Nemas dostatek polozek na vyrobu",
    ['craft_items'] = "Hrac vytvoril polozku %s v hodnote %s jeji lokace je %s, jmeno je: %s, identifikátor %s",
    ['already_selling'] = "Jiz prodavate zbozi",
    ['all_sold'] = 'Jiz jsi prodal vse, co mas u sebe',
    ['earned_money'] = "Vydelal jsi %s$",
    ['earned_money_society'] = "Tvoje firma vydělala %s$",
    ['started_selling'] = "Zacal jsi prodavat item.",
    ['armory_opened'] = 'Tento trezor je jiz otevren',
    ['already_searched'] = 'Tento hrac byl jiz prohledan',
    ['not_enough_society'] = 'tvoje firma nemá ~r~dost~s~ penez, ~y~chybí~s~ jí ~r~$%s~s~!',
    ['no_lockpick'] = 'Nemáš lockpick',
    ['selling_point'] = 'Prodávat',
    ['preparing'] = 'Pripravujes se',
    ['not_your_vehicle'] = 'Toto není tvoje vozidlo'
}
```

```mdx-code-block
</TabItem>
  <TabItem value="client_edit" label="client_edit">
```

```js
RegisterNetEvent('sqz_unijob:sendClientNotify')
AddEventHandler('sqz_unijob:sendClientNotify', function(notify_text)
    ESX.ShowNotification(notify_text)
    -- Here you can replace the notification to your custom
end)

function DrawText3Ds(pos, text)
	local onScreen,_x,_y=World3dToScreen2d(pos.x,pos.y,pos.z + 0.4)
	local px,py,pz=table.unpack(GetGameplayCamCoords())

	SetTextScale(0.5, 0.35)
	SetTextFont(4)
	SetTextProportional(1)
	SetTextColour(255, 255, 255, 215)
	SetTextEntry("STRING")
	SetTextCentre(1)
	AddTextComponentString(text)
	DrawText(_x,_y)
	local factor = (string.len(text)) / 200
	DrawRect(_x,_y+0.0105, 0.003+ factor, 0.03, 0, 0, 0, 200)
end

function DrawScriptMarker(type, pos, size, color)
	DrawMarker(type, pos, 0, 0, 0, 0, 0, 0, size.x, size.y, size.z, color.r, color.g, color.b, color.a, false, true, 2, false, nil, nil, false)
end

-- KeyMapping, you can let it be as it is
RegisterKeyMapping('epressed', 'E pressed', 'keyboard', 'e')
RegisterKeyMapping('jobactions', 'Job Actions', 'keyboard', 'f6')
```

```mdx-code-block
</TabItem>
<TabItem value="server_edit" label="server_edit">
```

```js
TriggerEvent('esx_phone:registerNumber', 'fib', _U('alert_fib'), true, true) -- Just in case you want to have the job in phone Deffault Contacts

RegisterNetEvent('sqz_unijob:Server:CanPlayerCarryItem')
AddEventHandler('sqz_unijob:Server:CanPlayerCarryItem', function(callback, playerId, itemName, count)

    -- Here you can add check if the player can carry item -> If you use for example item.limit system
    -- If you do not how, check the docs: docs.squizer.cz
    local xPlayer = ESX.GetPlayerFromId(playerId)

    if xPlayer.canCarryItem(itemName, count) then
        callback(true)
    else
        TriggerEvent('sqz_unijob:Server:ShowNotification', playerId, _U('can_not_carry'))
        callback(false)
    end

end)

RegisterNetEvent('sqz_unijob:Server:ShowNotification')
AddEventHandler('sqz_unijob:Server:ShowNotification', function(playerId, message)

    local xPlayer = ESX.GetPlayerFromId(playerId)
    xPlayer.showNotification(message)

end)
```

```mdx-code-block
</TabItem>
</Tabs>
```

## Common Issues

- If you get error when depositing money, make sure that the society is in the database in table `addon_account`
- Getting error when taking items from the storage/buing items. It seems you are on version of es_extended that does not support xPlayer.canCarryItem and you must replace the event in the `server/edit.lua` to the one bellow
- If you are getting error, make sure your es_extended version supports xPlayer.showNotification, otherwise you must replace again an event in the `server/edit.lua`
- `nil ESX` it seems that you have changed events by anticheat so make sure to change them in your config files of the script
- `attempt to call a nil value (field 'showNotification')` - Replace Notification event in the `server/edit.lua` to one provided bellow.
- If search does not exist work, disable mythic probgress bar config option, because you do not use that script

```mdx-code-block

<Tabs>
  <TabItem value="CarryItem" label="CarryItem" default>
```

```js
RegisterNetEvent('sqz_unijob:Server:CanPlayerCarryItem')
AddEventHandler('sqz_unijob:Server:CanPlayerCarryItem', function(callback, playerId, itemName, count)
  local xPlayer = ESX.GetPlayerFromId(playerId)
  local xItem = xPlayer.getInventoryItem(itemName)

  if xItem.limit == -1 or (xItem.count + tonumber(count))  <= xItem.limit then
    callback(true)
  else
     TriggerEvent('sqz_unijob:Server:ShowNotification', playerId, _U('can_not_carry'))
     callback(false)
  end
end)
```

```mdx-code-block
</TabItem>
<TabItem value="notification" label="notification">
```

```js
RegisterNetEvent('sqz_unijob:Server:ShowNotification')
AddEventHandler('sqz_unijob:Server:ShowNotification', function(playerId, message)

    TriggerClientEvent('esx:showNotification', playerId, message)

end)
```

```mdx-code-block

</TabItem>
</Tabs>
```
