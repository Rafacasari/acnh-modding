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
You'll need to check if the model you're using already supports customization by looking at the model materials (`output.bfres` > `Models` > `{ModelName}` > `Materials`) and searching for `ReBody` or `ReFabric`.

If your model does **not** contain `mReBody` or `mReFabric` it means the this model don't support customizations, however, you can convert it with some additional steps:
1. Duplicate the model file (`Ftr{AssetName}.Nin_NX_NVN.zs`) naming it `Ftr{AssetName}ReBody0.Nin_NX_NVN.zs` or `Ftr{AssetName}ReFabric0.Nin_NX_NVN.zs` (depending on what you want, ReBody or ReFabric, you can have both if you want)
2. In the original model (`Ftr{AssetName}.Nin_NX_NVN.zs`) rename the material that you want to customize to `mReBody` or `mReFabric` (to have both materials you model need at least 2 materials)
3. Rename the materials from `mBody_*` to `mReBody_*` / `mReFabric_*` according to the material that you renamed
   
![image](https://github.com/user-attachments/assets/179a5043-e67a-4d84-9c66-0095879bbf67)

4. As you may noticed in the screenshot above, some textures like `mReBody_Alb`, `mReFabric_Alb`, `mBody_Mix` and `mBody_Nm` **have been removed** this happen cause you have to **delete the textures that are gonna be replaced in other files**, this will depend on what you want to change, so deleting `*_Alb`, `{Material}_Mix` if you gonna have custom mix textures for that material and `{Material}_Nm` if you gonna have custom normal maps for that material.
5. Now for the previously duplicated file (`Ftr{AssetName}ReBody0.Nin_NX_NVN.zs` or `Ftr{AssetName}ReFabric0.Nin_NX_NVN.zs`) you will need to remove the Model file (from the Models folder) and keep just the textures that you have deleted in the previous step (like `*_Alb`)

![image](https://github.com/user-attachments/assets/3f7c6397-deed-46f7-bcfc-58bb68e8560b)

> **Note:** `Ftr{AssetName}ReBody0.Nin_NX_NVN.zs` and `Ftr{AssetName}ReFabric0.Nin_NX_NVN.zs` (ending with 0) are the default textures for your model!

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
