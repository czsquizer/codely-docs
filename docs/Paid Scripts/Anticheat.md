---
sidebar_position: 7
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

```

:::info Introduction
Anticheat with which you will have no problems with cheaters doing bad things on your server!
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
}} href="https://forum.cfx.re/t/anticheat-revolutionary-anticheat/4802102" target="_blank"> <img src="/img/fivem.png" alt="FIVEM ICON" style={{
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
}} href="https://sqz.tebex.io/package/4822548" target="_blank"> <img src="/img/tabex.webp" alt="TABEX ICON" style={{
    width: 60,
    height: 60,
    borderRadius: 30,
}} />Tebex Store</a>



</div>


```

## Features list

- On Screen Menu Detection
- Menu injectiom detection
- Admin menu
- Command injection detection
- Complex HeartBeat system
- Invisible entites detection
- Anti God mode
- Object / Vehicle / Ped spawning blacklist/whitelist
  - Limit amount of peds/vehicles/objects spawned in a certain time
  - Define specific vehicles for which spawn player should be banned (other blacklisted will be only deleted
  - Prevent mass spam of vehicles/objects/peds created on your server
- Radar on while not in vehicle detection
- No false positive bans
- Noob friendly installation
- No Ragdoll detection
- Resource stop detection
- Resource disable (not exactly a stop)
- Armor give detection
- Spectate detection
- Invisibility detection
- Player blips detection
  - When using ESX/QB, it is possible to add job whitelist
- Night vision detection
- See trough materials detection
- Blacklisted weapons detection
- Noclip detection
- Detection of fishy names
- Event protection
  - Set max value of events triggered
  - Add blacklisted value for event triggered (prevent jailing all the players, etc. …)
  - Event spam detection
- Built in ban system which automaticaly udpates identifiers of player
- Give Money ESX/QB detection
- Remove all weapons detection
- Give all weapons detection
- Kick players from vehicles detection
- Blacklisted particles detection
- Blacklisted weapons detection
- Blacklisted explosions detection
- Cypher malware detection
- Chocohax ban import system
- Aimbot detection
- Infinite ammo detection
- Noclip detection
- Weapon damage modifier detection

:::caution Attention
I suggesting you going through the docs and configs very carefully, if you do not configure the anticheat properly, it might cause some false positive detections.
:::

## Installation

The OCR, Image-Server are dependencies in order to use all the features of this Anticheat. They are not necessary, but the anticheat will work much better

:::info
The OCR is not needed. If you want to still use photos, you can just use a Discord webhook. The webhook is client sided and can be dumped by cheaters and abused, but you do not need to watch to channel of that webhook - so make it from channel you won't use!
:::

### OCR (used for photos and mod menu detection)

#### Windows

1. Download x32/x64 bit Tesseract from this link: https://github.com/UB-Mannheim/tesseract/wiki
2. Download using git clone https://github.com/czsquizer/ocr_python
3. Install Python 3 (https://www.python.org/downloads/windows/)
   1. Make sure to add the path of the python to the global environment. (It is a selectable option in installation wizard)
4. Run `pip3 install -r requirements.txt` and install all the requirements
5. Run from CMD `python app.py`

#### Linux

1.  apt install tesseract-ocr -y (It will install Tesseract)
    1. If you do not have git, run: `apt install git`
2.  `apt install python3.10` (it will install Python 3)

    1.  If you get issues "could not locate ...", use the commands listed bellow:

        ```sh
        sudo apt-get install software-properties-common
        ```

        ```sh
        sudo add-apt-repository ppa:deadsnakes/ppa
        ```

        ```sh
        sudo apt-get update
        ```

        ```sh
        sudo apt-get install python3.10
        ```

3.  `apt install python3-pip` (it will install pip3)
4.  Clone my repo somewhere into your Linux server
    ```sh
    git clone https://github.com/czsquizer/ocr_python
    ```
5.  Use `cd ocr_python` to get into your cloned folder
6.  `pip3 install -r requirements.txt` to install packages
    1. If you get errors during the installation, run this command: `pip3 install --upgrade setuptools` and then run command 5. again
7.  `python3 app.py` and start your OCR Python server
    1. If you use firewall, you need to allow the port
    2. To run the python3 script even after leaving the command line, I suggest using screen

If you are not sure how, there is a video for you: https://www.youtube.com/watch?v=CKXaNSPfr44

:::info

In both version, change to token to match the anticheat's token. It is a security things, I suggest changing it. It does not matter what it is.

:::

:::caution

If you are on Linux, you need to run this:
export TESSERACT_PATH=/usr/local/share/tessdata
if that directory does not exist, use:
export TESSERACT_PATH=/usr/share/tesseract-ocr/4.00/tessdata

:::

:::tip

I highly suggest downloading the tessdata_best (https://github.com/tesseract-ocr/tessdata_best) and putting it to the Tesseract directory
Linux: /usr/local/share/tessdata or/usr/share/tesseract-ocr/4.00/tessdata
Windows: C:\Program Files\Tesseract-OCR

:::

### Screenshot-basic

In order to make enable protection of screenshot-basic, you need to put this code into the `dist/client.js` file

```lua
onNet("sfiybfwuhyjbfaw:sfhuyjbfaxby", (key) => {
  emitNet("fsahybncaiqwbixb:yophawitSB", key);
});
```

### Script

1. Download sqz_anticheat + sqz_heartbeat from your keymaster account
2. Rename those resources to some common names (like banking, towing ...)
3. Remember the name you put to the sqz_heartbeat resource and change it in the main anticheat script
4. Change Token (it is useful to prevent other servers/players abusing your python server):
   1. Anticheat script server side
   2. Heartbeat script client side
   3. Python app.py
5. Obviously configure all the configs
6. To use the anticheat as much as possible, I suggest installing the antiinject data, check #Commands section

## Suggestion

Not all the features will perfectly work across all server. For example if you use esx_vehicleshop and it sets player invisible, anticheat will detect it. So you have to disable this feature to prevent false positive dections.

So to start I suggest you to do these steps:

1. In server config, set detection method to "info"
   1. Check what anticheat detects and then if something is false positive, disable it.
2. When you test all features, enable the banning method.
   1. Optionally in ban detections list set ban method only to detection types you are sure that on your server will be 100% accurate. Then little by little enable other ban detection methods.

## Commands

- `anticheat ban _(player id)_ _(reason)_` : Bans a player, the length will be forever
- `anticheat unban _(ban id)_` ⁣: Unbans a player
- `anticheat check _(ban id)_` ⁣: Shows details about a ban
- `refresh⁣—Will` : prevent player from being banned for restarting resource for 10 seconds
- `/adminMenu` : Opens in-game admin menu

## Importing Chocohax bans

1. Create folder `chocobans` in your anticheat directory (https://imgur.com/P2V4sYK)
2. Copy banData from chocohax to the `chocobans` directory (https://imgur.com/CbsXZZK)
3. In fxmanifest uncomment `files` part (https://imgur.com/ssr7WSC)
   1. Now the anticheat will automatically insert the bans to your bans.json
4. When you got message from the anticheat that bans have been imported, comment out `files` in your fxmanfiest (https://imgur.com/D1D1Ypi) and delete `chocobans` folder (https://imgur.com/UEvITz8)

## Exports

### Client side

- `exports['ANTICHEAT_NAME']:resetCommands()`

  Resets cached commands, recommended to use when a player loads, if you register some commands with delay.

### Server side

- `exports['ANTICHEAT_NAME']:BanPlayer(playerId, reason)`

  Example:

  ```lua
  exports['sqz_anticheat']:BanPlayer(1, 'Teleporting to player without a permission')
  ```

- `exports['ANTICHEAT_NAME']:whitelistPlayer(playerId, time)`

  Player will be whitelisted and won't be banned for a certain time, time is in ms

- `exports['ANTICHEAT_NAME']:addBanEvent`

  Example:

  ```lua
  exports['ANTICHEAT_NAME']:addBanEvent(function(playerId)
    print(GetPlayerName(playerId).." got banned!")
  end)
  ```
- `exports['ANTICHEAT_NAME']:WhitelistPlayerPermanent(playerId, bool)`

  *Use the second argument as `true` or `false` to whitelist player without time limit*
## F.A.Q.

- How can I prevent anticheat installing the files into another scripts?
  - The anticheat installs 1 file into 2 scripts and I really suggest keeping this on
  - If you still want to skip the installation, create a file .installed into the anticheat directory
- I am not sure how many players I my server can process at the same time
  - Check how many cores your virtual server has
  - Set it to number of cores -1
    - (If your server has 6 cores, set the number to 5)
- I keep getting false positive detections
  - Some scripts behave like cheats, for example setting player invisible by vehicle shop
    - This can happen. You can edit the config files or update your file.
  - If you get false positive detections for ClearPedTasksImmediately
    - Replace this native for ClearPedTasks
- I try to find what anticheat does and adapt our server, but I do not want to be logged to the Discord
  - Add set sqz_anticheat_test true into your server.cfg
- How can I add admins to the anticheat?
  - Admins are people who won't be detected, who can use anticheat command and won't be taken in account while running server checks
  - Add player ace: sqz_ac.bypass, example: add_ace identifier.discord:123"sqz_ac.bypass" allow
  - To give access to player to /adminMenu command, without framework permissions, use: sqz_ac.admin ace permission, same as with permission above
- Can I test the anticheat with executors?
  - NO!
    - It is not allowed to use cheats to test this anticheat, I do not allow using any cheats in any meaning.

## Common issues

- I keep getting IMAGE NOT FOUND in the Discord file
  - Make sure your Python server is running
  - If you renamed the `sqz_heartbeat` , you must change the name of the resource also in the anticheat file
  - Make sure you have inserted the IP (eventually the token) to the sqz_heartbeat resource, it must be public IP of the Python server, not 0.0.0.0
- Images are not loading/They are loading too slow
  - The number `SConfig.MaxiThreads` is too high. The max number must be number of your CPU Cores - 1
    - If you have 6 CPU cores, the `SConfig.MaxiThreads` should be 5 or lower, not higher
