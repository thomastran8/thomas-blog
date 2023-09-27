---
title:  "Pathfinding Simulator"
date:   2021-10-10 10:00:00 '-0700'
post-image: /images/pathfinding_1.png
---

<div id="lightgallery">
    <a href="/images/pathfinding_1.png" data-sub-html="Generated A* path in yellow" class="img-ctn large-image">
        <div class="img-wrap">
            <img src="/images/pathfinding_1.png">
            <i class="fas fa-search"></i>
        </div>
    </a>
    <a href="/images/pathfinding_2.png" data-sub-html="Generated high-rise building" class="img-ctn">
        <div class="img-wrap">
            <img src="/images/pathfinding_2.png">
            <i class="fas fa-search"></i>
        </div>
    </a>
</div>

This simulator implements the A* pathfinding algorithm for AI bots to navigate a city environment consisting of high-rise buildings.

## The gridmap
The first step I did was to create a simple 2D gridmap. I made my gridmap green so it looks like grass :). Don't ask me why I choose grass for this city landscape.

Next I randomly filled the map with blocks. These will be our temporary obstacles to test the A* algorithm. I want to make sure the A* algorithm can handle varying situations of map instances and odd edge cases.

To list a few edge cases:
- Find path to a point that is completely enclosed in obstacles
- Find a path without jumping across a diagonal corner of two obstacles
- Find a path without cutting a obstacle corner

## The A* algorithm
Luckily, Godot Engine has an A* pathfinding class built in. All I had to do is specify the nodes for the A* object to keep track. So I matched it with my gridmap but removed any node points where an obstacle was randomly generated.

Testing the algorithm for the first time, I saw that the Bot was cutting diagonal corners and between pinched corners of two obstacles.

To fix this I added a check when generating the nodemap. It checks whether to connect a path diagonally if there exists a wall on its x-axis or z-axis to its target node. If it is, then do not connect the path.
Now the AI bot respects map obstacles and routes around them but still be able to traverse diagonally on open space.

One edge case I did not account for was that the AI bot was navigating diagonals paths faster than side-to-side paths. Since I was using an interpolation function, I had to implement diagonals be traversed 1.4 times slower.

## Generating the buildings
Now that we know the randomly generated blocks work, we can add buildings.

Another part of this pathfinding simulator is to create high-rise buildings. I want the AI bot to go up elevators in these buildings to get to higher floors.

This introduces a bit more edge cases:
- Generate random building with varying foundation sizes, there is a min and max
- Generate buildings without their foundations from going off the map
- Generate random elevator locations inside the building

## Implement AI patrol and search logic using state machines
Here I randomly set two points on the map for an AI bot to patrol using the A* algorithm. If a player gets close enough, the AI bot will follow the player. If the bot loses sight of the player, the bot will search the last known node point in a 10 tile radius in 5 random locations before going back to patrol.

