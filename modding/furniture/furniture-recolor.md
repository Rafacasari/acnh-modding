## Introduction

This tutorial will cover how to add or replace recolors to a model in-game. 
The files used on this tutorial will be available for everyone in the last section of this page.

### Needed Applications
- Blender (or a 3d editor of your choice)
- Switch Toolbox
- Heaven Tool
- MSBT Editor

### Needed Files
- `Ftr{AssetName}.Nin_NX_NVN.zs`.
- `Ftr{AssetName}ReBody0.Nin_NX_NVN.zs` or `Ftr{AssetName}ReFabric0.Nin_NX_NVN.zs`.
- `ItemParam.bcsv`
- `ItemRemake.bcsv`
  
Where `{AssetName}` is the name for your item/furniture.

!> This tutorial assumes you already know the basic of modding and know how to do model replacements.

## Step 0
Make sure you're using a model that already supports `ReBody` or `ReFabric` by looking at the model materials.

![image](https://github.com/user-attachments/assets/b2b225d2-dbc9-4cee-b42a-491218817382)

If your model do **not** support it, you'll need to find and copy a Model that supports and replace the Mesh with your desired Mesh (just like any other model, but without importing a Albedo texture)

## Step 1
Find the `Ftr{AssetName}ReBody0.Nin_NX_NVN.zs` or `Ftr{AssetName}ReFabric0.Nin_NX_NVN.zs` file of your model (or copy one from the same model that you used as base)
Open it with Switch Toolbox and replace the Albedo texture if your own Albedo texture. 

You can do the same with other `ReBody{Number}` files, where `0` (the one you just edited) is the default color and `1,2,3,4,5,6,7` are the re-color ones.

## Step 2.1
### Optional

#### If your model do **not** have a customizable option yet:
With **Heaven Tool**, open `ItemParam.bcsv` and find your model row; You can search by using `Edit > Search` (or **Ctrl + F**) and enter the model file name **without extension** (e.g. `FtrCandymachine`).\
Find the column **RemakeID** and assign a **unique number** (randomize a number **between** 2000 and 65535) to your file.\
Find the column **UniqueID** and copy the value of this field.\

## Step 2.2
Open `ItemRemake.bcsv` with Heaven Tool

!> The tutorial is being re-written.


Go to the section of "ItemUnique u16"
and edit with the same ID of your Furniture (My case was 17777)
and the `UniqueID` as example i use the number 1995 in the ItemParam
So edit in the ItemRemake file the "UniqueID u16" of your Number ID

Optional Step
The `RemakeKitNumber` is how much **Customization Kit** it needs to customize in game

Save the File and, we done for now!

- If you are using the Files in the Donwload Section -
You need to Import in the ItemParam and ItemRemake
go in Heaven Tool to "File > Import From File" and select its respective file for each file

You can Test the Furniture in game! You can get with ACNHPoker and test it in your game!
But there a problem! if appear without name, this is the next Section what we need to do!

- MSBT Editor Section -

You need the next file and use Toolbox again
"String_USen.sarc.zs"

Open it with toolbox and search the next 3 Files
"Item > STR_ItemName_00_Ftr"
"Remake > STR_Remake_BodyParts"
"Remake > STR_Remake_BodyColor"

Export those 3 Files as "Export Raw Data"
Open the First File
"STR_ItemName_00_Ftr"
If you remember the UniqueID of the ItemParam file (17777 in this tutorial)
Create a File with the "+" Green icon of the name "Ftr_17777"

Once is created in the edit part write the name of the Furniture
My example "minecraft rabbit " (Use a space in the final of any name)

File > save

"STR_Remake_BodyParts"
Create with the same Name "Ftr_17777"
and in the Edit part just write something like "Color", "Skin" or anything what you want

File > Save

"STR_Remake_BodyColor"

Create two files
"Ftr_17777_0" and "Ftr_17777_1" (Remember you can use 7 Customization because is the limit)

"Ftr_17777_0" is the main color or skin from the furniture so, mine case is "Brown"
and "Ftr_17777_1" my case is "Gold"

File > Save

We almost ready!
Now we need to go back to Toolbox and select the 3 Files and replace it with
Selecting the file and the option "Replace Raw Data"
Once the 3 Files are replaced, Save the file in Toolbox and again "Compress File with ZSTD" select the option "YES"

Well, we have the 3 Main Folders

"BSCV"
"Model"
and "Message"

In the Download Section i put the next files

"FtrMinecraftRabbit" with the ReBody0 and ReBody1 files (Models)
"STR_ItemName_00_Ftr", "STR_Remake_BodyParts" and "STR_Remake_BodyColor" for the "String_USen.sarc.zs" File (Msbt)
"ItemParamTutorialForEditandImport" for edit and import in ItemParam.bscv
and "ItemRemakeTutorialForEditandImport" for edit and import in ItemRemake.bscv

- Download Section -

https://drive.google.com/file/d/1w6jW--THTc5v9mjRJIvIAoo444tJCLJD/view?usp=drive_link

- Possible problems -
If your Textures is not a Square like 64 x 64, 128 x 128 or 256 x 256
Maybe the ReBody0 Textures cannot work and the File cannot be open again with Toolbox

Introduction

First of all we need a model compatible with Toolbox
Recommend the model only have a Mesh for all textures
If you have a Model with Different Mesh and different textures for different parts
I recommend Material Combiner addon for Blender, Later of this section i will explain how to use.

The Model and files on this tutorial will be avaible for everyone in the last Section of this page

What we need
- Blender (For Model Editing)
- Toolbox
- Models and Texture
- An Ftr of Example File
- An FtreBody0 and FtrReBody1 of Example File
- Heaven Tool (and a bit of Knowledge how is works)
- MSBT Editor

- Blender Part -

First of all, we need a .DAE File
If not works with this in toolbox or appear an error, can support .OBJ Files too!

If you have your model ready in Blender and if all the textures works
Go to the corner and select, File > Export > Collada Dae (Legacy)

If the Toolbox doesnt works with the .DAE Files, File > Export > Wavefront (OBJ)

Once exported the Model
Let's go to Toolbox Program

- Toolbox Part -

Open first the Ftr Model in the Toolbox
In my case FtrMinecraftRabbit

When the Model from the Base is open
You need to replace the Model in the "Ftr > Models > Ftr" and Select the Model File

Remember : the Model File don't need Textures

If your model is tiny, you can use the Tranform option in Toolbox for it

Save the Model if an windows of File Save appear and say "Compress File with ZSTD"
Select the Yes Option

For textures we need the FtrReBody0 Model what is the main texture of the Furniture
Open the File of FtrReBody0 and go to Textures Folder, and replace the mReBody_Alb with your Texture of the Model and save the File of the FtrReBody0
Save with "Compress File with ZSTD" Select Yes and...

Ta-Dah! You have the First Step of the Customization Model!

Next is FtrReBody1 what is the texture of Customization for ACNH
Open the File and remplace the mReBody_Alb texture with a different texture of the Model
In my case Gold Rabbit Textures of Minecraft


And Well done! You have the Second Step of Customization Model!

Let's go to the next Section

- Heaven Tool Part -
In this Section, we need 2 Files to edit and add

ItemParam.BSCV and ItemRemake.BSCV
The files for Edit and Import will be avaible in the Download Section of this Page

Edit the Next Part of the File of ItemParam
Go to the Section of "Label string50" and "ResName string64"
and edit the name with your Model name (My example "FtrMinecraftRabbit")

Now edit the "UniqueID u16" section and edit a number greater of 15000
My case 17777

Optional Step
Edit the "ItemName string64" my case "minecraftrabbit"

For now we are almost ready, We need to edit the "RemakeID s16"
My case is 1995, so we need to edit the next file

Open the ItemRemake File

Go to the section of "ItemUnique u16"
and edit with the same ID of your Furniture (My case was 17777)
and the "UniqueID u16" as example i use the number 1995 in the ItemParam
So edit in the ItemRemake file the "UniqueID u16" of your Number ID

Optional Step
The "RemakeKitNumber u16" is how Customization Kit need the Furniture to Customize in game
My case, I always use "1"

Save the File and, we done for now!

- If you are using the Files in the Donwload Section -
You need to Import in the ItemParam and ItemRemake
go in Heaven Tool to "File > Import From File" and select its respective file for each file

You can Test the Furniture in game! You can get with ACNHPoker and test it in your game!
But there a problem! if appear without name, this is the next Section what we need to do!

- MSBT Editor Section -

You need the next file and use Toolbox again
"String_USen.sarc.zs"

Open it with toolbox and search the next 3 Files
"Item > STR_ItemName_00_Ftr"
"Remake > STR_Remake_BodyParts"
"Remake > STR_Remake_BodyColor"

Export those 3 Files as "Export Raw Data"
Open the First File
"STR_ItemName_00_Ftr"
If you remember the UniqueID of the ItemParam file (17777 in this tutorial)
Create a File with the "+" Green icon of the name "Ftr_17777"

Once is created in the edit part write the name of the Furniture
My example "minecraft rabbit " (Use a space in the final of any name)

File > save

"STR_Remake_BodyParts"
Create with the same Name "Ftr_17777"
and in the Edit part just write something like "Color", "Skin" or anything what you want

File > Save

"STR_Remake_BodyColor"

Create two files
"Ftr_17777_0" and "Ftr_17777_1" (Remember you can use 7 Customization because is the limit)

"Ftr_17777_0" is the main color or skin from the furniture so, mine case is "Brown"
and "Ftr_17777_1" my case is "Gold"

File > Save

We almost ready!
Now we need to go back to Toolbox and select the 3 Files and replace it with
Selecting the file and the option "Replace Raw Data"
Once the 3 Files are replaced, Save the file in Toolbox and again "Compress File with ZSTD" select the option "YES"

Well, we have the 3 Main Folders

"BSCV"
"Model"
and "Message"

In the Download Section i put the next files

"FtrMinecraftRabbit" with the ReBody0 and ReBody1 files (Models)
"STR_ItemName_00_Ftr", "STR_Remake_BodyParts" and "STR_Remake_BodyColor" for the "String_USen.sarc.zs" File (Msbt)
"ItemParamTutorialForEditandImport" for edit and import in ItemParam.bscv
and "ItemRemakeTutorialForEditandImport" for edit and import in ItemRemake.bscv

- Download Section -

https://drive.google.com/file/d/1w6jW--THTc5v9mjRJIvIAoo444tJCLJD/view?usp=drive_link

- Possible problems -
If your Textures is not a Square like 64 x 64, 128 x 128 or 256 x 256
Maybe the ReBody0 Textures cannot work and the File cannot be open again with Toolbox

