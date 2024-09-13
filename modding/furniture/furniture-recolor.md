# Introduction

First, we need a model compatible with Toolbox. It's recommended to have a single mesh for all textures. If your model has multiple meshes and textures, use the Material Combiner addon for Blender (instructions later).

The model and files from this tutorial will be available in the last section.

## What You'll Need
- [Blender](https://www.blender.org/download/)
- [Switch Toolbox](https://github.com/KillzXGaming/Switch-Toolbox/releases/latest)
- [Heaven Tool](https://github.com/Rafacasari/HeavenToolACNH/releases/latest)
- MSBT Editor
- Models and textures
- Ftr example file
- FtrReBody0 and FtrReBody1 example files

## Blender Part

Export your model as a `.DAE` file from Blender. If it doesn't work with Toolbox, export as `.OBJ`.

Steps:
1. File > Export > Collada DAE (Legacy)
2. If that doesn’t work, File > Export > Wavefront (OBJ)

Now, proceed to Toolbox.

## Toolbox Part

1. Open the Ftr model in Toolbox (*e.g. FtrMinecraftRabbit*).
2. Replace the model in "Ftr > Models > Ftr" and select your model file.
3. Use the Transform option if your model is too small.
4. Save and select "Compress File with ZSTD" when prompted.

For textures:
1. Open the FtrReBody0 model (main texture) and replace `mReBody_Alb` with your texture. Save and select "Compress File with ZSTD".
2. Open FtrReBody1 (customization texture) and replace `mReBody_Alb` with another texture (e.g., Gold Rabbit).

## Heaven Tool Part

Edit the following files:
- `ItemParam.BSCV`: Change "Label string50" and "ResName string64" to your model name. Modify "UniqueID u16" (e.g., 17777) and "ItemName string64".
- `ItemRemake.BSCV`: Set "ItemUnique u16" and "UniqueID u16" to match your values in ItemParam.

Optional: Set "RemakeKitNumber u16" (e.g., 1) for the number of customization kits.

## MSBT Editor Section

Edit these files in `String_USen.sarc.zs` using Toolbox:
1. `STR_ItemName_00_Ftr`: Create "Ftr_17777" and name your furniture.
2. `STR_Remake_BodyParts`: Create "Ftr_17777" and describe the parts (e.g., "Color").
3. `STR_Remake_BodyColor`: Create "Ftr_17777_0" (e.g., Brown) and "Ftr_17777_1" (e.g., Gold).

Replace these files in Toolbox and compress with ZSTD.

## Final Notes
If textures are not square (e.g., 64x64, 128x128), ReBody0 might not work.

Download the files: [Google Drive Link](https://drive.google.com/file/d/1w6jW--THTc5v9mjRJIvIAoo444tJCLJD/view?usp=drive_link)

---
Guide written by **@NixcelPix**