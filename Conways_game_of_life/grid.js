/**
 * Created by Spyr1014 on 29/06/2016.
 */


var Game = function (width, height){
  var grid = new Array(height);
  for (var i = 0; i < grid.length; i++){
    grid[i] = new Array(width);
    for (var j = 0; j < grid[i].length; j ++){
      grid[i][j] = new Cell();
    }
  }


  console.log("Checking init went well.");
  console.log(grid);

  var findNeighbours = function(row, column){
    // row = i , column = j
    var total = 0;

    for (var i = column - 1; i <= column + 1; i++) {
      try {
        if (grid[row - 1][i].isAlive()) total++;
      } catch (err) {
        console.log("Caught error" + ": " + err);
        console.log(row + " : " + column);
      }
    }

    for (var i = column - 1; i <= column + 1; i++){
      try {
        if (grid[row + 1][i].isAlive()) total++;
      } catch(err){
        console.log(err + " : this is an edge block");
      }
    }

    try {
      if (grid[row][column - 1].isAlive()) total++;
    } catch(err){
      console.log(err + " : this is an edge block");
    }
    try {
      if (grid[row][column + 1].isAlive()) total ++;
    } catch(err){
      console.log(err + " : this is an edge block");
    }

    return total;
  };

  // Method to input all the neighbours.
  this.runTick = function(){
    var numNeighbour = 0;
    for (var i = 0; i < grid.length; i++){
      // This goes down the height.
      for (var j = 0; j < grid[i].length; j++){
        numNeighbour = 0;
        numNeighbour = findNeighbours(i, j);
        console.log(numNeighbour);
        grid[i][j].neighbours(numNeighbour);
      }
    }

    // Now update every cell
    for (var i = 0; i < grid.length; i++) {
      // This goes down the height.
      for (var j = 0; j < grid[i].length; j++) {
      grid[i][j].tickUpdate();
      }
    }
  };

  this.getGrid = function(){
    return grid;
  };

  this.clickOnCell = function(height, width){
    grid[height][width].clicked();
  };
};