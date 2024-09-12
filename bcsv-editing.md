# BCSV

## What is BCSV?
BCSV (**B**inary **C**omma-**S**eparated **V**alues) is a file format used in **Animal Crossing: New Horizons**, BCSV is a binary variant of CSV (comma-separated values) that have headers encrypted in **CRC32**.

> BCSV files can be edited with [Heaven Tool](https://github.com/Rafacasari/HeavenToolACNH)

## Binary Structure
| Offset | Size | Description | Value |
| ------ | ---- | ----------- | ----- |
| 0x0  | 4 | UInt32 - Entries Count | * |
| 0x4  | 4 | UInt32 - Entry Size | * |
| 0x8  | 2 | UInt16 - Field Count | * |
| 0xA  | 2 | UInt16 - BCSV Version | 257 |
| 0xC  | 4 | File Header | "V", "S", "C", "B" |
| 0x10 | 4 | Unknown | 20100 |
| 0x14 | 4 | Unknown | 0 |
| 0x18 | 4 | Unknown | 0 |
| 0x1C | * | Array of [Field](#field-structure) | Field[\*fieldCount] |
| * | * | [List of Entry](#entry-list)| Entry[\*entryCount] |
> Note: *File Header is backwards, so "VSCB" is actually "BCSV"*

## Field Structure
Fields are stored in a array located at 0x1C position and have the size/count determined by "Field Count" ([0x8](#binary-structure)).

| Offset | Size | Description | 
| ------ | ---- | ----------- |
| 0x0 | 4 | Hash |
| 0x4 | 4 | Offset |

## Entry List
> Offset: *Comes after [Fields](#field-structure) or `0x1C + FieldCount * 8`*\
> List Size: *Determined by "Entries Count" ([0x0](#binary-structure))*

#### Determine the size of each entry

If it's **NOT** the last entry: *Use the offset for the next entry minus the current offset*\
If it's the last entry: *Use [Entry Size (0x4)](#binary-structure) minus the current offset.*