# Adding a new NPC <!-- {docsify-ignore} -->

This tutorial will go over what needs to be edited and added to the `.bcsv`, message and `StaticParam.pack` files for getting a new villager as a new entry, instead of [replacing an existing villager](villagers/replacing-a-villager).
We'll also go over some of the finer details, including their personality, hobby, favorite colors, what apparel they wear in certain conditions, and so on. 

!> This tutorial will **NOT** cover creating textures and models, as there are already quite a few tutorials for that.

### Needed Applications
- [Heaven Tool](https://gamebanana.com/wips/87003)
- [Switch Toolbox](https://github.com/KillzXGaming/Switch-Toolbox)
- [MSBT Editor](https://gitlab.com/AeonSake/msbt-editor)
- _Optional (but recommended):_ [Emuiibo](https://github.com/XorTroll/emuiibo) (and dependencies)

### Needed Files
- `romfs/Bcsv/AmiiboData.bcsv`
- `romfs/Bcsv/NmlNpcParam.bcsv`
- `romfs/Bcsv/ItemParam.bcsv` (**optional**, picture and poster of the villager)
- `romfs/Message/String_XXyy.sarc.zs` (Where `XXyy` is the target-language, in this case `USen`)
- `romfs/Message/TalkSys_XXyy.sarc.zs` (Where `XXyy` is the target-language, in this case `USen`)
- `romfs/Model/(your villager model)`
- `romfs/Pack/StaticParam.pack`

## Step 1
Determine what your villager's label name will be and hopefully don't overlap with other people's mod labels. You can see a villagers label on this [Data Spreadsheet for ACNH](https://docs.google.com/spreadsheets/d/13d_LAJPlxMa_DubPTuirkIV4DERBMXbrWQsmSh8ReK4/edit?gid=18432501#gid=18432501) for your convenience, it's on the far right of the sheet.

I'll use `Canyne` in this tutorial, and I named his file `NpcNmlWol13.Nin_NX_NVN.zs` as the highest wolf number is wol**12** for Audie. We'll be putting "wol13" into most of the files, so **make sure to remember it**. 

![image](https://github.com/user-attachments/assets/482f6e86-a1d3-4b93-ac9b-a7f7f716bd46)

## Step 2.1
### Editing `NmlNpcParam.bcsv`
We'll start with opening `NmlNpcParam.bcsv` in **Heaven Tool** and get the guts of the villager sorted out, I've extracted the line I made for wol13 so we can focus on each of the cells. It's a good idea to find a villager who's close to what you have in mind, export their line, reimport their line, and go from there. I originally chose Wolfgang(wol02) and changed him into Canyne(wol13).

Now let's go over the cells, we'll be moving from left to right and I'll be touching on only the cells I actively changed. A lot of columns are self explanatory, but I'll be talking about them anyway. Each of the images below these descriptions list all the possible entries in certain columns.

**a54f92fd** - Preferred clothing style by country of origin

| Value | Description |
| ---- | ----------- |
| `4` | Chinese |
| `9` | None |
| `10` | Japanese |

**5ef86f1f** - 1st preferred style of clothing

| Value | Description |
| ---- | ----------- |
| `1` | Simple |
| `2` | Gorgeous |
| `3` | Cool |
| `4` | Cute |
| `5` | Active |
| `6` | Elegant |

**195815cf** - 1st Preferred Style of Clothing

| Value | Description |
| ---- | ----------- |
| `1` | Simple |
| `2` | Gorgeous |
| `3` | Cool |
| `4` | Cute |
| `5` | Active |
| `6` | Elegant |

![image](https://github.com/user-attachments/assets/da01f0a6-cb2a-4205-8719-864b67677293)


| Name | Description |
| ---- | ----------- |
| **[Hobby](https://nookipedia.com/wiki/Hobby#In_New_Horizons)** | This handles what your villager likes to do. |
| **[NPCLooks](https://nookipedia.com/wiki/Villager#Personalities)** | This is the personality of the villager. |
| **[Social](https://doubutsu-no-mori.tumblr.com/post/640083435844681728/the-three-types-of-waves-villagers-give-when-you)** | This is how they wave goodbye to you when leaving their house and how often they respond to your reactions. |

![image](https://github.com/user-attachments/assets/4a0bfdae-f760-40a8-933d-7842026229e1)

| Name | Description |
| ---- | ----------- |
| **BromideItemID** | This is the photo they give you at max friendship. We'll cover making this in another tutorial for new item entries. |
| **PosterItemID** | This is the poster of the villager that you can buy from Nook Shopping. We'll cover making this in another tutorial for new item entries. |
| **[RainHat](https://docs.google.com/spreadsheets/d/13d_LAJPlxMa_DubPTuirkIV4DERBMXbrWQsmSh8ReK4/edit?gid=1322750305#gid=1322750305)** | This is what hat they wear while it's raining, you can choose any cap available. |
| **[RainWear](https://docs.google.com/spreadsheets/d/13d_LAJPlxMa_DubPTuirkIV4DERBMXbrWQsmSh8ReK4/edit?gid=745200922#gid=745200922)** | This is what coat they wear while it's raining, you can choose any top available. |
| **[Tops](https://docs.google.com/spreadsheets/d/13d_LAJPlxMa_DubPTuirkIV4DERBMXbrWQsmSh8ReK4/edit?gid=745200922#gid=745200922)** | This is what top they wear by default, and is probably going to be what they wear most of the time until you give them more clothing, you can choose any top available. |
| **[Umbrella](https://docs.google.com/spreadsheets/d/13d_LAJPlxMa_DubPTuirkIV4DERBMXbrWQsmSh8ReK4/edit?gid=684944066#gid=684944066)** | This is what umbrella they hold while it's raining, you can choose any umbrella available.
### The linked spreadsheets list the item number on the far right side of the sheet. |

![image](https://github.com/user-attachments/assets/60a9c8d7-0502-48f1-ba1f-a10af4562706)

| Name | Description |
| ---- | ----------- |
| **UniqueID** | This is just a unique ID used for villagers in certain recording actions. **You can choose any number above 419**. |
| **BirthMDay** | The day of the month that is their birthday |
| **BirthMonth** | The month that they were born in. |
| **Color1** | This is their first favorite color, this affects what clothing and items they like to receive as gifts. |
| **Color2** | This is their second favorite color, this affects what clothing and items they like to receive as gifts. This also affects what color they wear during Halloween. |

![image](https://github.com/user-attachments/assets/fa5f2fff-530d-4948-8796-a5d730dd5ca7)

| Name | Description |
| ---- | ----------- |
| **LabelID** | This is the ID we came up with in Step 1. For Canyne I chose wol13, but it's whatever you came up with. |
| **[NPCColor](https://docs.google.com/spreadsheets/d/13d_LAJPlxMa_DubPTuirkIV4DERBMXbrWQsmSh8ReK4/edit?gid=18432501#gid=18432501)** | This is the color of their name bubble when you're talking to them. Find a villager that you like the color of and copy their number. The linked spreadsheet shows their colors on the far right of the sheet. |
| **[NPCTalkType](https://doubutsu-no-mori.tumblr.com/post/640092652057100288/about-personality-a-and-b-subtypes-each-villager)** | This is the sub-personality, it's kind of up to you for what you want your villager to talk about more. |
| **ResName** | This is the first part of your model file name. So for me it was `NpcNmlWol13`. | 

![image](https://github.com/user-attachments/assets/6bd002bf-50a3-4635-8ad9-5e88005b69d7)

> **Important:** If, like in my example here, you've extracted one line to focus on, you'll need to save that, open `NmlNpcParam.bcsv` and import your saved villager line into this file, and save.


## Step 2.2
### Editing `AmiiboData.bcsv`
This is simply an identification list for what villager is being referenced upon scanning an Amiibo. 

### Automatic Method
This method will pretty much do **everything** for you, it will generate a `AmiiboData.bcsv` entry and a zip containing your **Emuiibo**.\
Use **Heaven Tool** to merge the generated BCSV file into your `AmiiboData.bcsv`, then replace `amiibo.png` in the `amiibo.zip` with a image of your choice.

<div class="amiibo-form">
    <form autocomplete="off" id="amiibo-form">
        Name
        <input autocomplete="off" type="text" required="true" id="npcName" onpaste="return false;" pattern="[a-zA-Z0-9]*"/></br>
        Label (e.g. <code>wo13</code>)
        <input autocomplete="off" type="text" required="true" id="npcLabel" maxlength="8"  onkeypress="AmiiboPlugin.NoSpecialChars(event)" onpaste="return false;" pattern="[a-zA-Z0-9]*"/></br>
        <button id="generateButton" onclick="AmiiboPlugin.ClickButton()">Generate</button>
    </form>
</div>

### Manual Method
| Name | Description |
| ---- | ----------- |
| **NumberID** | This is tied to the UniqueID from [Step 2.1](#step-21). |
| **NPCLabel** | This is your label that you should remember still, so I filled in wol13. |

**All other columns should just be copied from any other villager with a number in their label.**

Thanks to some info from @**LTGlambchop**, you can add new rows for your villager. The last CharacterID in the list is 663552, who is Faith with label kal07, simply add 256 to that number for the next available number in the sequence, 663808. It seems you can go as high as you want as long as you keep adding 256.

With that in mind, if we look at [Faith's amiibo card ammibo.json](https://drive.google.com/drive/folders/1ZpDLpOxPgv97BKDhx5-o2WwOoESnqRAd) we see that her game_character_id is 8202. Simply add 256 to this number as many times as you did to 663552 and that will be the corresponding number to put in amiibo.json to match your characterid in the amiibo.bcsv.

If you want to convert your characterid straight to the corresponding game_character_id [use the method described here](https://discord.com/channels/1291243062865039431/1291846660225241088/1292141518370373705) to convert your chosen increment of +256 to the resulting number to put in your amiibo.json, save and put that folder named after your villager into emuiibo and it should scan.


## Step 3
Now we'll get a name, saying and motto set up so the system knows who they are.
This will be the two files in romfs/Message.

This can be accomplished simply by:
1. Open your `romFs/Message` folder with **MSBT Editor**
2. Locate and expand `String_USen.sarc.zs` and inside of it, locate and expand `Npc` folder
3. Edit `STR_NNpcName.msbt` and `STR_NNpcPhrase.msbt` (Simply duplicate the last entry, which is Audie [wol12] and change out their name and phrase, which is what they say all the time while talking)
4. Now we find the `TalkSys_USen.sarc.zs` file to edit `SYS_Motto.msbt`, duplicate the last entry and edit it the same way you did before. This one is what dialog appears when interacting with the villager's picture item.

**Attention**: When duplicating entries, don't fon't to change the label! (for example `label: wol12` to your new label, which in my case is `label: wol13`)

![MsbtEditor_aKXAG5aCA8](https://github.com/user-attachments/assets/ac2d0e00-507d-45db-b394-fafd443b7c89)

5. Save both `String_USen.sarc.zs` and `TalkSys_USen.sarc.zs` by right-clicking them and hitting `Save` button

![image](https://github.com/user-attachments/assets/f0dc27d8-8eab-4ad6-ad6d-371198fcb4d0)

## Step 4
Now the "tricky" part, we'll be choosing what the exterior and interior of their houses will look like. Then we'll be making sure that the character itself knows how to hold items and such. [Use Nookpedia to see all the houses available](https://nookipedia.com/wiki/Villager_house/New_Horizons) and remember which villager label you need for the houses. For Canyne, I'll be using Croque's (`flg09`) exterior and Wart Jr's (`flg05`) interior.

## Step 4.1
Open `StaticParam.pack` in Switch Toolbox and you'll see that `NPCHouse(exterior)` is the first folder and `NPCRoom(interior)` is the third folder. Expand those and track down the villager you want to take their house from, extract them somewhere easy to find and name them after your label, in my case **wol13.byml**. 

> **Attention**: _Keep them in separate folders since they will have the same name._\
> **Example**: `NPCHouse/wol13.byml` and `NPCRoom/wol13.byml`

![image](https://github.com/user-attachments/assets/a4d1ffb8-dc6c-418e-b10e-274202bbeb6a)


Once they're both named after your label, go back into Switch Toolbox, right click on the folder that they came out of and choose "add file" and select the house for the NPCHouse and the room for the NPCRoom. After that find them at the bottom of each of those folders and double click the entry. Change to the **Text Editor** tab and press **Decompile** button.

Looking in the newly displayed text, we can see where it says `flg09` or `flg05` (under `root:`) and those are going to be replaced (in my case) with `wol13`. Once you've done that you can press Compile again to save that change.

![image](https://github.com/user-attachments/assets/ae3957b1-6932-4b9d-bb33-2acd9d508164)

**Optional part of NPCHouse:** If you look through the decompiled text, you'll see these: lines:
- [!h mWall:](https://docs.google.com/spreadsheets/d/13d_LAJPlxMa_DubPTuirkIV4DERBMXbrWQsmSh8ReK4/edit?gid=1735913386#gid=1735913386) - towards the top
- [!h mFloor:](https://docs.google.com/spreadsheets/d/13d_LAJPlxMa_DubPTuirkIV4DERBMXbrWQsmSh8ReK4/edit?gid=1642607665#gid=1642607665) - towards the bottom
- [!h mMusic:](https://docs.google.com/spreadsheets/d/13d_LAJPlxMa_DubPTuirkIV4DERBMXbrWQsmSh8ReK4/edit?gid=1450768169#gid=1450768169) - towards the bottom

To the right of these lines, you'll see item numbers, and yes they correspond to the item numbers in `ItemParam.bcsv`. So you can change their wallpaper, flooring, and their song while you're in there, to further customize them.

## Step 4.2
Now while we're still in `StaticParam.pack`, scroll further down and you'll find the "Gmo" folder. This contains personal info about where items are held on the model and other things. So just find the species that matches your villager, extract, rename, add file and that's all you need to do for that.

![image](https://github.com/user-attachments/assets/e39be26b-5785-41ff-a337-b87d8c934210)

## Done!
Congrats, that should be all you really need to do for this to work. Get all of your files into your ACNH `romFs` folder, boot up your Animal Crossing, and head over to resident services. Scan the Amiibo that you set up in [Step 2.2](#step-22) with Emuiibo in the Tesla Overlay and see if they appear!
