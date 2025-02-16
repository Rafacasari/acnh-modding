The MSBT Editor is an open-source C# project created by [@AeonSake](https://gitlab.com/AeonSake), that provides a modern text editor for **MSBT** and **BMG** files. Style and functionality is heavily inspired by [Visual Studio Code](https://code.visualstudio.com/) and uses [Monaco Editor](https://microsoft.github.io/monaco-editor/) as the base text editor.

## Features
- Opening, editing, and saving of MSBT and BMG files
- Full support for all known MSBT/BMG sections, big and little endian, and all encoding formats
- Editor syntax highlighting for MSBT and BMG files
- Opening and saving modified content of ARC, DARC, NARC, RARC, SARC, UMSBT and ZIP archives
- Opening and saving of compressed LZ10, LZ11, LZ77, Yay0, Yaz0, ZLib, and ZSTD files
- Support for ZSTD compression dictionaries
- Use of custom game configs

## Setup
1. Download the latest version of `MSBT Editor` and `ACNH.gcf` (both are updated frequently, so always check for updates!)
  - **[MSBT Editor](https://gitlab.com/AeonSake/msbt-editor/-/releases/permalink/latest)**
  - **[ACNH.gcf](https://gitlab.com/AeonSake/msbt-editor/-/blob/master/configs/ACNH.gcf)**
2. Extract the zip file and open `MsbtEditor.exe` for the first time. It will generate the folder where you put your `ACNH.gcf` file.
3. Put `ACNH.gcf` inside the folder called `configs` (inside the .exe folder) - **No need to close the editor!**
4. In **MSBT Editor**, locate the `Data` drop-down menu (at the very top) and click on `Change Game Config...`. It will pop-up a menu asking for a *game config to use*. Select `Animal Crossing: New Horizons` (you can click `Reload configs` if it doesn't show in the list).
5. Your editor should be ready to use!

> You can learn more about the tool on these official pages:
> [GitLab Page](https://gitlab.com/AeonSake/msbt-editor) | [Official Docs](https://gitlab.com/AeonSake/msbt-editor/-/tree/master/doc)
