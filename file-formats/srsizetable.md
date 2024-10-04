> This is a work-in-progress page.

# What is `srsizetable`?
Files with `.srsizetable` extension, also know as **RST**B/**RST**C files (**R**esource **S**ize **T**able), and as the suggests, contain information about game resource file sizes (and uncompressed size for files like `.zs`). The game uses this to determine how much memory should be allocated when laoding the resource.

> In **Animal-Crossing: New Horizons**, `.srsizetable` are compressed with **Yaz0 compression**, and when uncompressed is a **RSTC** file.

## Difference between RSTB and RSTC
The main difference between RSTB and RSTC is that RST**C** contains 4 more bytes, that seems to be a uint representing the DLC number.

# Binary Structure


