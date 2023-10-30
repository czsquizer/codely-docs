---
sidebar_position: 5
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

```

:::info Introduction
An Advanced duty system that allows you to check in via command/on certain places and tracks your time in-duty, boss of your society can review your time on-duty.
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
}} href="https://forum.cfx.re/t/release-sqz-duty-advanced-duty-script/3354791" target="_blank"> <img src="/img/fivem.png" alt="FIVEM ICON" style={{
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
}} href="https://sqz.tebex.io/package/4527068" target="_blank"> <img src="/img/tabex.webp" alt="TABEX ICON" style={{
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
}} href="https://www.youtube.com/watch?v=zW2Qk9QjnRo" target="_blank">
<img src="/img/ytb.webp" alt="YOUTUBE ICON" style={{
    width: 60,
    height: 60,
    borderRadius: 30,
}} />
Youtube Showcase</a>

</div>


```

## Instalation

1. Put `ensure sqz_duty` to your start config and resource called `sqz_duty` into your resources folder
2. Run the SQL file
3. Configure s_config.lua & sh_config.lua

## Optional modifications

1. To add the duty element to your boss menu:
```mdx-code-block
<Tabs>
  <TabItem value="ESX" label="ESX" default>
```

_(small snippet [https://pastebin.com/E2PedQtn](https://pastebin.com/E2PedQtn))_
- All the changes are done in client/main.lua
Change this:
1. Replace n esx_society/client/main.lua:77 
    ```lua
    local elements = {}
    ```
    for
    ```lua
    local elements = {
        {label = 'Show Duty Time of employees', value = 'dutyTime'}
    }
    ```

2. Add the part bellow to line 168 (the end of the if condition)

    ```lua
    elseif data.current.value == 'dutyTime' then
        TriggerServerEvent('sqz_duty:GetEmployes', ESX.PlayerData.job.name)
    ```


```mdx-code-block
</TabItem>
<TabItem value="QBCore" label="QBCore">
```
For QB Core:

_(small snippet [https://pastebin.com/E2PedQtn](https://pastebin.com/9iuN9rSD))_
- All the changes are done in client/cl_boss.lua
1. At the end of `RegisterNetEvent('qb-bossmenu:client:OpenMenu', function()` event, into bossMenu locale paste:
    ```lua
            {
                header = "Employees Duty",
                txt = "Shows Duty time of your employes",
                icon = "fa-solid fa-sack-dollar",
                params = {
                    event = "qb-bossmenu:client:DutyTime",
                }
            },
    ```

2. At the end of the file add:
    ```lua
    RegisterNetEvent('qb-bossmenu:client:DutyTime', function()
        TriggerServerEvent('sqz_duty:GetEmployes', PlayerJob.name)
    end)
    ```

```mdx-code-block

</TabItem>
</Tabs>
```

## Events used

1. `TriggerServerEvent('sqz_duty:GetEmployes', ESX.PlayerData.job.name)` Event for opening boss menu with time of players. Make sure you provide the job which maches xPlayer.job.name on server
2. `TriggerServerEvent('sqz_duty:ResetTime', identifier, ESX.PlayerData.job.name)` Event for reseting player time spent on server in the job, identifier should match targets xPlayer.identifier and the second argument is job name.
3. `TriggerServerEvent('sqz_duty:ChangeJob')` Event for changing job (mainly off <=> non off and if you have special job in Config, it will count on it with it.)

## Configs

```mdx-code-block

<Tabs>
  <TabItem value="server config" label="server config" default>
```

```lua
SConfig = {}

SConfig.Webhooks = { -- Webhooks for jobs to send daily report
    ['police'] = 'https://discord.com/api/webhooks/xxxxx',
    ['sheriff'] = 'https://discord.com/api/webhooks/xxxxx',
    ['ambulance'] = 'https://discord.com/api/webhooks/xxxxx'
}

SConfig.AutoInsert = true -- If the script should check for all the jobs written in the config if all of them have off duty variable
SConfig.UsetxAdmin = true -- If you do not use txAdmin, disable this and the employees will be saved every 6 hours.

Config.Items = { -- Those items and jobs will be affected when going on/off duty

    police = { -- Name of the job
        Add = {'badge', 'radio'}, -- Table of items that will be added (each will be added once, so you can make: 'badge', 'badge' to add it twice)
        Remove = {}
    },
    offpolice = {
        Add = {},
        Remove = {'badge', 'radio'} -- Those items will be removed, all in count that the player has -> If you have 7 radios, 7 will be removed
    },
    ambulance = {
        Add = {'radio', 'medikit'},
        Remove = {}
    },
    offambulance = {
        Add = {},
        Remove = {'radio', 'medikit'}
    }
}
```

```mdx-code-block
</TabItem>
<TabItem value="shared config" label="shared config">
```

```lua
Config = {}


Config.CustomEvents = {
    ['esx:getSharedObject'] = 'esx:getSharedObject',
    ['esx:setJob'] = 'esx:setJob'
}

Config.Locale = 'en' -- Language [en / cs]
Config.DrawDistance = 1.5 -- Distance from which will be the point visible
Config.AllowReportInEveryWhere = true -- If players can use /duty command everywhere on the map

Config.Points = { -- Locations where the players will be able to go on/off duty

    {
        Loc = vector3(450.1802,-987.6061,30.6896),
        Jobs = { -- List of jobs that can use this point
            ['police'] = true, -- Police officers can use this point
            ['offpolice'] = true -- Police officers off duty can use this point
        }
    },

    {
        Loc = vector3(312.3144,-597.6319,43.2842),
        Jobs = {
            ['ambulance'] = true,
            ['offambulance'] = true
        }
    },

    {
        Loc = vector3(1851.98,3691.2664,34.2669),
        Jobs = {
            ['sheriff'] = true,
            ['offsheriff'] = true
        }
    }

}

Config.TrackedJobs = { -- Time of players with these jobs will be counted to the database + Discord daily report
    ['police'] = true,
    ['sheriff'] = true,
    ['ambulance'] = true
}

Config.SpecialJobs = { -- List of jobs that will go to other job
    ['mafia'] = 'ballas' -- For example, if you are mafia, you will go to ballas if this is enabled
}
```

```mdx-code-block

</TabItem>
<TabItem value="locales" label="locales" >
```

````lua
Locales['en'] = {
    ['loyalEmployee'] = 'No breaks, you have a loyal worker!',
    ['embedTitle'] = '**SQZ_DUTY: New Duty Report** %s',
    ['embedDescription'] = 'Employer has ended his today duty, his name is:\n ```yaml\n %s```\n He took breaks in times: ```yaml\n%s```In total time in duty:\n ```yaml\n%s```\n His first join | last leave from job:\n ```yaml\n%s``` Job: ```yaml\n%s```',
    ['no_spam'] = 'You must wait a little bit before reporting in. No need to spam',
    ['name'] = 'Name',
    ['job_grade'] = 'JobGrade',
    ['duty_time'] = 'Total Time In Duty',
    ['last_duty'] = 'Last Duty',
    ['reset_time'] = 'Reset Time',
    ['not_here'] = 'Employee not here?',
    ['not_legit'] = 'The worker is not legit!',
    ['not_worked'] = 'He has not worked yet!',
    ['blame'] = 'Blame him!',
    ['report_in'] = '~INPUT_PICKUP~ Report in',
    ['off_duty'] = '~INPUT_PICKUP~ Go off-duty',
    ['report'] = '%s [%s] StartTime: %s\n    EndTime: %s\n',
    ['in_duty'] = 'Now you are on-duty',
    ['logged_off_duty'] = 'You have logged off-duty'
}

Locales['cs'] = {
    ['loyalEmployee'] = 'Zaměstnanec pracoval bez přestávek, dobrá práce!',
    ['embedTitle'] = '**SQZ_DUTY: Nový záznam* %s',
    ['embedDescription'] = 'Zaměstnanec ukončil jeho dnešní šichtu, jeho jméno:\n ```yaml\n %s```\n Odpočíval v době: ```yaml\n%s```Čas strávený v práci:\n ```yaml\n%s```\n Příchod do práce | Odchod z práce:\n ```yaml\n%s``` Hodnost: ```yaml\n%s```',
    ['no_spam'] = 'Hoď se do pohody, spamovat to není třeba',
    ['name'] = 'Jméno & Příjmení',
    ['job_grade'] = 'Hodnost',
    ['duty_time'] = 'Celkový čas strávený ve službě',
    ['last_duty'] = 'Naposledy ve službě',
    ['reset_time'] = 'Obnovit čas',
    ['not_here'] = 'Zaměstnanec zde není?',
    ['not_legit'] = 'Tu je něco špatně!',
    ['not_worked'] = 'Tento zaměstnanec ještě nepracoval!',
    ['blame'] = 'Vyřeš to!',
    ['report_in'] = '~INPUT_PICKUP~ Jít do služby',
    ['off_duty'] = '~INPUT_PICKUP~ Jít mimo službu',
    ['report'] = '%s [%s] Začátek: %s\n     Konec: %s\n',
    ['in_duty'] = 'Přihlásil ses do služby',
    ['logged_off_duty'] = 'Odhlásil ses ze služby'
}
````

```mdx-code-block
</TabItem>
<TabItem value="server_edit" label="server_edit" >
```

```lua
if SConfig.UsetxAdmin then

    AddEventHandler('txAdmin:events:scheduledRestart', function(eventData)
        if eventData.secondsRemaining == 60 then
            CreateThread(function()
                Wait(45000)
                print("[^2sqz_duty^0]: ^215 seconds before restart... saving all player duty data!")
                TriggerEvent('sqz_duty:saveEmployes')
            end)
        end
    end)

else

    Citizen.CreateThread(function()

        while true do
            Wait(6 * 60 * 60 * 1000) -- 6 hours
            print("[^2sqz_duty^0]: ^2Saving all player data and sending messages to Discord!")
            TriggerEvent('sqz_duty:saveEmployes')
        end
    end)

end
```

```mdx-code-block
</TabItem>
<TabItem value="client_edit" label="client_edit" >

```

```lua
RegisterNetEvent('sqz_duty:ShowNotification', function(msg)
    ESX.ShowNotification(msg)
end)

RegisterNetEvent('sqz_duty:ToggleDuty', function(duty)
    -- THis event is called every time player goes on/off duty
    if duty then
        print('Player is now on-duty')
    else
        print('Player is now off-duty')
    end
end)
```

```mdx-code-block
</TabItem>
</Tabs>
```

## Common issues

- I can not see duty times in the boss menu
  - If you use txAdmin, it saves (by default) on every scheduled restart
  - If you do not use txAdmin, you have to trun that option off in your config and it will be saved every 6 hours (by default)
    - It is due to prevetion of spam of Discord messages
- I keep getting message: "You SHOULD restart your server now" even after restarting your server
  - One of the jobs in Config.Points Jobs is missing in your database. Then delete all the off jobs that were party inserted and then restart the script
