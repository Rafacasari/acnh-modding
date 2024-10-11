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

## Part 0
Make sure you're using a model that already supports `ReBody` or `ReFabric` by looking at the model materials.

![image](https://github.com/user-attachments/assets/b2b225d2-dbc9-4cee-b42a-491218817382)

If your model do **not** support it, you'll need to find and copy a Model that supports and replace the Mesh with your desired Mesh (just like any other model, but without importing a Albedo texture)

## Part 1
Find the `Ftr{AssetName}ReBody0.Nin_NX_NVN.zs` or `Ftr{AssetName}ReFabric0.Nin_NX_NVN.zs` file of your model (or copy one from the same model that you used as base)
Open it with Switch Toolbox and replace the Albedo texture if your own Albedo texture. 

You can do the same with other `ReBody{Number}` files, where `0` (the one you just edited) is the default color and `1,2,3,4,5,6,7` are the re-color ones.

## Part 2.1

With **Heaven Tool**, open `ItemParam.bcsv` and find your model row; You can search by using `Edit > Search` (or **Ctrl + F**) and enter the model file name **without extension** (e.g. `FtrCandymachine`).\
Find the column **RemakeID** and assign a **unique number** (randomize a number **between** 2000 and 65535) to your file. You'll need this value later on, note it somewhere.\
Find the column **UniqueID** and copy the value of this field. You'll need this value later on, note it somewhere.

## Part 2.2
1. Open `ItemRemake.bcsv` with Heaven Tool
2. Click on `Edit` > `New Entry` (or use **Ctrl + N**)
3. In the newly added entry, make sure everything is properly configured as you want
   
| Name | Description |
| ---- | ----------- |
| **ItemReFabricType** | Whether this item allows for sable or custom patterns (`None`, `MyDesign` or `CommonAndMyDesign`) |
| **RebodyPattern0LightColor** - **RebodyPattern7LightColor** | Light color of this ReBody variant (`0` to `10`) |
| **RefabricPattern0LightColor** - **RefabricPattern7LightColor** | Light color of this ReFabric variant (`0` to `10`) |
| **RemakeLotType** | `Normal` or `ForceOriginal` | 
| **ItemUniqueID** |  Matches the **ItemParam.bcsv** `UniqueID` (the previous copied value) |
| **RemakeKitNum** | Number of customization kits required | 
| **UniqueID** | A random number between **2000** and **65535** (the same used on `RemakeID` in Part 2.1) |
| `d4f43b0b` | Can be customized (non-DIY only) (`0` or `1`) | 

## Part 3
It is time to add some texts!

1. Open `String_USen.sarc.zs` with **MSBT Editor**

We gonna edit these files:
- `Item/STR_ItemName_00_Ftr.msbt`
- `Remake/STR_Remake_BodyParts.msbt`
- `Remake/STR_Remake_BodyColor.msbt`

2. Open `Item/STR_ItemName_00_Ftr.msbt` 
Scroll-down to the very end of the file and add a new entry to it, using your ItemParam.`UniqueID`:

```msbt
---
label: Ftr_{YourUniqueIdHere}
attribute: 
---
{{wordInfo gender="0" indefArticle="1" defArticle="3"}}Furniture name here
```

3. Open `Remake/STR_Remake_BodyParts.msbt`
We gonna do the same as the previous step, but now with some name like `Color`, `Paint Color`, `Material` or however you want to name it

```msbt
---
label: Ftr_{YourUniqueIdHere}
attribute: 
---
Color
```

4. Open `Remake/STR_Remake_BodyColor.msbt`
This step is **very important**!

We gonna do something similar to the previous steps, but adding as much entries do you want (there is a limit of `7` customizations)
Where `Ftr_{YourUniqueId}_0` is the original/default one and `Ftr_{YourUniqueId}_{1-7}` are the customization names.

e.g. 

```msbt
---
label: Ftr_{YourUniqueId}_0
attribute: 
---
Original

---
label: Ftr_{YourUniqueId}_1
attribute: 
---
Recolor 1

---
label: Ftr_{YourUniqueId}_2
attribute: 
---
Recolor 2
```

5. Save everything and we are done!

### Conclusion
To finish everything you just need to put everything inside your RomFs and test it!
