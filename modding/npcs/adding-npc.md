!> From our tests, Ryujinx crashes as soon as a modified `StaticParam.pack` is loaded, but we've been informed that there doesn't seem to be an issue with Yuzu. 

This tutorial will go over what needs to be edited and added to the `.bcsv`, message and `StaticParam.pack` files for getting a new villager as a new entry, instead of [replacing an existing villager](villagers/replacing-a-villager).
We'll also go over some of the finer details, including their personality, hobby, favorite colors, what apparel they wear in certain conditions, and so on. 

!> This tutorial will **NOT** cover creating textures and models, as there are already quite a few tutorials for that.

### Needed Applications:
- [Heaven Tool](https://gamebanana.com/wips/87003)
- [Switch Toolbox](https://github.com/KillzXGaming/Switch-Toolbox)
- [Kuriimu](https://github.com/IcySon55/Kuriimu) or [MSBT Editor](https://gitlab.com/AeonSake/msbt-editor)\
<sup>MSBT Editor don't let you save as it have duplicate attributes for adding new info, but Kuriimu still works.</sup>
- Optional but recommended: [Emuiibo](https://github.com/XorTroll/emuiibo) (and dependencies)

### Needed Files: 
- `romfs/Bcsv/AmiiboData.bcsv`
- `romfs/Bcsv/NmlNpcParam.bcsv`
- `romfs/Bcsv/ItemParam.bcsv` (**optional**, picture and poster of the villager)
- `romfs/Message/String_USen.sarc.zs`
- `romfs/Message/TalkSys_USen.sarc.zs`\
<sup>For the message files, make it the language you're using.</sup>
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

| Name | Description |
| ---- | ----------- |
| **NumberID** | This is tied to the UniqueID from [Step 2.1](#step-2.1). |
| **NPCLabel** | This is your label that you should remember still, so I filled in wol13. |

**All other columns should just be copied from any other villager with a number in their label.**

Thanks to some info from @**LTGlambchop**, you can add new rows for your villager. The last CharacterID in the list is 663552, who is Faith with label kal07, simply add 256 to that number for the next available number in the sequence, 663808. It seems you can go as high as you want as long as you keep adding 256.

With that in mind, if we look at [Faith's amiibo card ammibo.json](https://drive.google.com/drive/folders/1ZpDLpOxPgv97BKDhx5-o2WwOoESnqRAd) we see that her game_character_id is 8202. Simply add 256 to this number as many times as you did to 663552 and that will be the corresponding number to put in amiibo.json to match your characterid in the amiibo.bcsv.

If you want to convert your characterid straight to the corresponding game_character_id [use the method described here](https://discord.com/channels/1291243062865039431/1291846660225241088/1292141518370373705) to convert your chosen increment of +256 to the resulting number to put in your amiibo.json, save and put that folder named after your villager into emuiibo and it should scan.

## Step 3
Now we'll get a name, saying and motto set up so the system knows who they are.
This will be the two files in romfs/Message.

Open up `String_USen.sarc.zs` in Switch Toolbox and head to the NPC folder, we need to right click and extract `STR_NNpcName.msbt` and `STR_NNpcPhrase.msbt` somewhere easy to find. The Phrase file is what they say all the time while talking.
![image](https://github.com/user-attachments/assets/b81cf7be-6d2f-4886-a1f0-5158ee26bd1e)
