# Server

A Server-sided instance

## `.new`
Create an instance of Snap

### Parameters

- `plotInfo`
   - `plot` (Instance): The plot part.
   - `canVisualize` (Boolean): Whether you can see the grid points or not.

### Usage:

```lua
local plotInfo = {
   plot = workspace.Plot,
   canVisualize = true
}
local plot = Snap.new(plotInfo)
```

## `:SetOwner`

### Parameters

- `player` (Player): The player who will own the plot.

### Usage:

```lua
plot:SetOwner(game.Players.astraIboy)
```