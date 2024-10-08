> This page still in production. Expect changes and more info to be added.

## What is BCSV?
BCSV (**B**inary **C**omma-**S**eparated **V**alues) is a file format used in **Animal Crossing: New Horizons**, BCSV is a binary variant of CSV (comma-separated values) that have headers encrypted in **CRC32**.

> **BCSV** files can be edited with [Heaven Tool](https://github.com/Rafacasari/HeavenToolACNH)

## Header
| Offset | Size | Name | Description |
| ------ | ---- | ---- | ----------- |
| 0x0  | 4 | Row Count | Quantity of [Rows](#row-structure) |
| 0x4  | 4 | Row Size | Size of each [Row](#row-structure) |
| 0x8  | 2 | Column Count |  Quantity of [Columns](#column-structure) |
| 0xA  | 1 | HasExtendedHeader | If **1** will have more data, more info below |
| 0xB  | 2 | Unknown | |

### If `HasExtendedHeader` is `1` 

| Offset | Size | Name | Description |
| ------ | ---- | ---- | ----------- |
| 0xC  | 4 | Header | Backwards BCSV - `VSCB` |
| 0x10 | 2 | Version | Version |
| 0x12 | 10 | Padding | 10-byte padding |

## Column Structure
Column are stored in a array, comes after the Header and the array size is determined by "Column Count" ([0x8](#header)).

| Offset | Size | Description | 
| ------ | ---- | ----------- |
| 0x0 | 4 | CRC32 Hash |
| 0x4 | 4 | Offset to this column in a [row](#row-structure) |

## Row Structure
| Offset | Size | Description | 
| ------ | ---- | ----------- |
| 0x0 | 4 | Offset (Position in the file) |
| 0x4 | * | Data |

</br>

### Special Thanks ❤️
This page have been updated with some info collected by @kinnay in [this page](https://nintendo-formats.com/games/acnh/bcsv.html).
