var ROWS = Number(prompt("Number of rows:", "45"));
var COLUMNS = Number(prompt("Number of columns:", "45"));
var SIZE = 10;
var SPACE = 0;
var tickInterval = 1;

var GAME = new Game(ROWS, COLUMNS);


var stage = document.querySelector("#stage");


for(var row = 0; row < ROWS; row++){
  for(var column = 0; column < COLUMNS; column++){
    //create a div HTML element called cell
    var cell = document.createElement("div");

    //set its CSS class to cell
    cell.setAttribute("class", "cell dead");
    // set its id to i-j
    cell.setAttribute("id", row + "-" + column);

    //add the div HTML element to the stage
    stage.appendChild(cell);

    //position the cell
    cell.style.top = row * (SIZE + SPACE) + "px";
    cell.style.left = column * (SIZE + SPACE) + "px";

    //handle click
    cell.addEventListener("click", clickHandler, false);
  }
}

function clickHandler(){
  var id = this.getAttribute("id");
  var array = id.split('-');
  var row = Number(array[0]);
  var column = Number(array[1]);
  console.log(array);
  GAME.clickOnCell(row, column);
  // draws new grid.
  draw();
}


// Create interface with graphics and GAME
function draw(){
  var displayCell;
  var id;
  var grid = GAME.getGrid();
  for (var i = 0; i < grid.length; i++){
    for (var j = 0; j < grid[i].length; j++){
      id = String(i) + '-' + String(j);
      displayCell = document.getElementById(id);
      console.log(displayCell);
      if (grid[i][j].isAlive()){
        console.log("cell alive");
        displayCell.style.backgroundColor = 'red';
      } else {
        console.log("cell dead");
        displayCell.style.backgroundColor = 'white';
      }
    }
  }
}


function tick(){
  setInterval(function(){
    GAME.runTick();
    draw();
  }, 200);

}