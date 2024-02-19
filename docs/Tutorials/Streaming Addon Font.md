---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info Introduction
It is useful to have a custom font streamed if you want to use your custom font for non-html actions
:::

## Converting our font
1. Find the font you want to in .ttf format *I use [Google Fonts](https://fonts.google.com/)*
2. Find a tool for conversion *I recommend [gfx-font-converter](https://github.com/antond15/gfx-font-converter/tree/main)*
    - 1. Put your .ttf font into tools/ folder
    - 2. In /tools/input.xml change FontName for whatever the Font Name is (e.g. Roboto) and also the input file
    - 3. Run the conver.ps1 PowerShell script
    - 4. Rename the .gfx font in output tool for the name we used. (Roboto in our case)
3. Put the .gfx (Roboto.gfx) into any stream/ folder of your FiveM scripts
4. Register your font in your script (must be client side):
```lua
RegisterFontFile('Roboto') 
local fontId = RegisterFontId('Roboto')
```
5. You can now use the font in 2 ways:
  <Tabs>
    <TabItem value="v1" label="SetTextFontId" default>

```lua
SetTextFontId(fontId)

-- Example from sqz_chatenhamancements
function DrawText3DsS(x,y,z, text)
    local onScreen,_x,_y=World3dToScreen2d(x,y,z)

    SetTextScale(0.30, 0.30)
    SetTextFont(fontId)
    SetTextProportional(1)
    SetTextColour(255, 255, 0, 200)
    SetTextEntry("STRING")
    SetTextCentre(1)
    AddTextComponentString(text)
    DrawText(_x,_y)
    local factor = (string.len(text)) / 350
    DrawRect(_x,_y+0.0115, 0.015+ factor, 0.03, 0, 0, 0, 90)
end
```

  </TabItem>
  <TabItem value="v2" label="Changing the string">

```lua
'<font face="Roboto">BLIP NAME</font>'

AddTextComponentString('<font face="Roboto">Ammunation</font>')
```

  </TabItem>
  </Tabs>

*I hope this helps to bring your FiveM server your own*