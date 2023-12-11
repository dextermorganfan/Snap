# Example

Let's say our game has 1 plot for simplicity, and we set the owner to our player shortly after we join!

::: code-group

```lua [Server]
local Snap = require(game.ReplicatedStorage.Snap)
local buildingData = 'PATH'
local buildingPieces = 'PATH'


-- Setting up global info
local setupInfo = {
   plotSize = 64,
   gridSize = 15,
   buildingData = buildingData,
   buildingPieces = buildingPieces,
   key_1 = "isStructure",
   key_2 = "isOccupied"
}
Snappit.init(setupInfo)


-- Setting up 1 plots info
local part = workspace.Plot
local plotInfo = {
   plot = part
}
local plot = Snappit.new(plotInfo)

-- Setting the plot's owner to myself
task.wait(3)
plot:SetNetworkOwner(game.Players:FindFFirstChildOfClass("Player"))
```

```lua [Client]
local Snap = require(game.ReplicatedStorage.Snap)
local UserInputService = game:GetService("UserInputService")

UserInputService.InputBegan:Connect(function(input, gpe)
   if input.KeyCode == Enum.KeyCode.F then
      Snappit.EnterBuildMode() -- Enter build mode
   elseif input.KeyCode == Enum.KeyCode.R then
      Snappit.Rotate() -- Rotates the building piece you have out
   end
end)
```
