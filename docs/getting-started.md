# Getting Started

### Step 1:

First, require Snap like this

```lua
local Snap = require(game.ReplicatedStorage.Snap)
```

### Step 2:
Then, setup the info for all the plots in your game

```lua
local buildingData = 'PATH'
local buildingPieces = 'PATH'

locaL setupInfo = {
   plotSize = 64, -- The size of the plots in your game
   gridSize = 15, -- The grid size for plots in your game
   buildingData = buildingData,
   buildingPieces = buildingPieces,
   key_1 = "isStructure",
   key_2 = "isOccupied"
}
```

### Step 3:
Pass that info into the Snap init function

```lua
Snap.init(setupInfo)
```

### Step 4:
Create a plot info then create a new instance from Snap

```lua
local part = 'PATH'
local plotInfo = {
   plot = part,
}
local plot = Snappit.new(plotInfo)
```

### Step 4:
Set the the plots owner

```lua
plot:SetOwner(player)
```