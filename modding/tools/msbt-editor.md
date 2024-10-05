The MSBT Editor is an open-source C# project created by [@AeonSake](https://gitlab.com/AeonSake), that provides an interactive text editor for **MSBT** and **BMG** files. Style and functionality is heavily inspired by [Visual Studio Code](https://code.visualstudio.com/) and uses [Monaco Editor](https://microsoft.github.io/monaco-editor/) as the base text editor.

## Features
- Opening, editing, and saving of MSBT and BMG files
- Full support for all known MSBT/BMG sections, big and little endian, and all encoding formats
- Editor syntax highlighting for MSBT and BMG files
- Opening and saving modified content of ARC, SARC, UMSBT and ZIP archives
- Opening and saving of compressed LZ77, Yaz0, and ZSTD files
- Support for ZSTD compression dictionaries
- Use of custom function maps

## Setup
1. Download the latest version of `MSBT Editor` and `ACNH.mfm` (both are updated frequently, so always check for updates!)
  - **[MSBT Editor](https://gitlab.com/AeonSake/msbt-editor/-/releases/permalink/latest)**
  - **[ACNH.mfm](https://gitlab.com/AeonSake/msbt-editor/-/blob/master/maps/ACNH.mfm)**
2. Extract the zip file and open `MsbtEditor.exe` for the first time. It will generate the folder where you gonna put your `ACNH.mfm` file. 
3. Put `ACNH.mfm` inside the folder called `maps` (inside the .exe folder) - **Don't need to close the editor!**
4. In **MSBT Editor**, locate the `Data` drop-down menu (at the very top) and click on `Change Function Map`, it will pop-up a menu asking a *function map to choose*, select `ACNH` (you can click reload if it doesn't show in the options).
5. Your editor should be ready to use!

> You can learn more about the tool on these official pages:
> [GitLab Page](https://gitlab.com/AeonSake/msbt-editor) | [Official Docs](https://gitlab.com/AeonSake/msbt-editor/-/tree/master/doc)
