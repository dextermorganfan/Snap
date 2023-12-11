# Snap

The public main of the Snap class.

## `.Init(data)`

Initialize information about the grids/plots in your game.

### Parameters:

- `data` (table): Contains essential data for initializing the Snap class.
    - `gridSize` (number): The size of the grid.
    - `plotSize` (number): The size of the plot.
    - `buildingPieces` (Folder): Folder where all of your  building pieces are.
    - `buildingData` (Module): Data defining the dimensions of building pieces, along with other informations (optional)
    - `key_1` (string): Key identifier for checking where placement started
    - `key_2` (string): Key identifier for checking occupied cells.

### Usage:

```lua
local data = {
    gridSize = 10,
    plotSize = 50,
    buildingPieces = buildingPieces,
    buildingData = buildingData,
    key_1 = "isStructure",
    key_2 = "isOccupied",
}

Snap.Init(data)
```

:::tip
You must define your building data with all your buildings pieces and an empty dimensions table beforehand or it will error
:::