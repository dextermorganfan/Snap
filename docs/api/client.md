# Client

A Client-sided instance

## `.EnterBuildMode`

Enters building mode

## `.ExitBuildingMode`

Exits building mode

## `.Rotate`

Rotates the current building piece by 90 degrees

## `.Place`

Places the current building piece

## `.ChangeBuildingPiece`

Changes the building piece

### Parameters

- `name` (string): The name of the building piece to switch too

### Usage

```lua
Snap.ChangeBuildingPiece("Box")
```