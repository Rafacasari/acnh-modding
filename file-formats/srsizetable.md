> This is a work-in-progress page.

# What is `srsizetable`?
Files with `.srsizetable` extension, in Animal Crossing, is a **Resource Size Table** and as the suggests, it contain information about game resource file sizes. The game uses this table to determine how much memory should be allocated when laoding a specific file, to prevent crashes or weird behaviour.

In **Animal-Crossing: New Horizons**, its used a variation of [RSTB](https://github.com/leoetlino/botw-re-notes/blob/master/resource_system.md#resource-size-table), the `RSTC`, it can be identified by the `.srsizetable` extension and is compressed with **Yaz0 compression**, just like the RSTB. But the main difference compared to RSTB is the **addition of 4 more bytes** to each entry, which seems to be a **uint** for the `DLC ID`.

## Technical information
There is a lot of technical information about RSTB files [here](https://github.com/leoetlino/botw-re-notes/blob/master/resource_system.md#resource-size-table)

To calculate a size of an entry, we can use this method:
```csharp

if (fileName.EndsWith(".zs"))
  size = getZstdUncompressedSize(file);
else
  size = getFileSize(file);

// Round value to the next multiple of 32
size = (size + 31) & -32;

if (fileName.EndsWith(".zs"))
  size += 9264; // Zstd constant
else
  size += 416; // Normal constant
```
