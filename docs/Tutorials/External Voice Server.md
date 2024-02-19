---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info Introduction
You should consider runing an External Voice Server while runing server with a lot of players (80+) to save your server performance and prevent voice lags/cut offs
:::

## Runing External Server
1. Setup your second FXServer
    - You can use the default FXServer or with txAdmin [tutorial](https://docs.fivem.net/docs/server-manual/setting-up-a-server-vanilla/)
2. Download the [pma-voice](https://github.com/AvarianKnight/pma-voice) resource and use just this resource, no need any others
3. Add `set voice_externalDisallowJoin 1 ` to your second FXServer's server.cfg file
4. Make sure to set the same slot amount (or more) for your FXServer than your RP (main) server has
---
I suggest getting a VPS from [UniversalGG](https://universalgg.com) so it can handle your External Voice server for a fair price 😉

---
## Configuring your RP (main) server
- Use `MumbleSetServerAddress('123.456.789', 30120)` in your voice script to connect to the external server (if not using pma-voice)
- Add `setr voice_externalAddress '123.456.789'` & `setr voice_externalPort 30120` in your server's server.cfg (if using pma-voice)



*You can also change the server port using `endpoint_add_tcp` & `endpoint_add_udp`, but remember to change that also in your voice script`