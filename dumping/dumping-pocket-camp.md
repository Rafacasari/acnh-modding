This tutorial will cover how to dump assets from **Animal Crossing: Pocket Camp**.

:warning: **You need to complete the tutorial so it downloads all assets!** :warning: 

1. After finishing tutorial and downloading all assets; get your files in `/storage/emulated/0/Android/data/com.nintendo.zaca` (you may need a rooted android) and move the content to your PC somehow (I'll not cover this cause there is a lot of ways of doing it)

2. In your PC, create a folder (any name) and put the following items:\
↳ `input` (new folder)\
↳ `output` (new folder)\
↳ `__main__.py` (<a href="./downloads/__main__.py">download</a>)\
\
![alt text](/example-files.png)

3. Put all the content you got from your phone (step 1) into the **input** folder.
4. Using [python](<https://www.python.org/downloads/>), run the script (You can double-click the file or use `python __main__.py` command)\
4-1. Wait for `Processing complete! Check the output folder.` appear in the console, **do not close the window!** \
↳ This can take some time (*1~2 minutes*) but will decrypt every file that needs decryption.

5. Go to: <https://github.com/aelurum/AssetStudio/releases/latest>\
5-1. Download AssetStudioMod**CLI** (make sure you are downloading the **CLI** version!)\
5-2. Extract it\
5-3. Open a terminal in the extracted folder and run this command:\
`AssetStudioModCLI.exe "<your-path>" -o "acpc-assets" -m splitObjects`

!> Change **\<your-path\>** with the output folder that you just created in **Step 2**\
*e.g.* `AssetStudioModCLI.exe "C:/MyStuff/ACPC/output" <...>`

This command will finally extract all **.fbx** and textures! (in a folder called `acpc-assets`, in the extracted folder)

**Additional notes:** 
- When importing a `.fbx` in Blender it can be VERY small, you can either scale it up manually (in blender) or append this argument `--fbx-scale-factor 10` to scale all `.fbx` files in 10x (or more, just change the number)

### Extracting other files
```
AssetStudioModCLI.exe "<your-path>" -o "output" -t <types-with-comma>

# Valid -t (type) arguments: 
# tex2d, tex2dArray, sprite, textAsset, monoBehaviour, font, shader, movieTexture, audio, video, mesh
# e.g. AssetStudioModCLI.exe "<your-path>" -o "output" -t mesh,tex2d,audio
```
> You can remove the `-t` argument completely if you want to export **\*everything\***\
> *e.g.* `AssetStudioModCLI.exe "<your-path>" -o "output"`

> Note: `mesh` will export meshes as `.obj` and not `.fbx`;  for fbx files use the default command.\
> *(Check [AssetStudioMod GitHub](https://github.com/aelurum/AssetStudio) for more commands)*