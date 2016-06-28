/**
 * Created by Spyr1014 on 27/06/2016.
 */
// State of board
  // Keeps track of what numbers the x and o is on.
var gameData = {};
gameData.O = new Set([]);
gameData.X = new Set([]);

// If nextMove is true = 'x' else 'o'
var nextMove = true;
// Global state of WON.
var WON = false;
// AI on or off
var AI = false;
var AImoving = false;


function aiOn() {
  AI = true;
  if (!nextMove){
    aiAction();
  }
}

function aiAction(){
  var winningMove;
  var randomNumber;
  // Freeze game for player...
  AImoving = true;
  winningMove = aiCheckPosition('O');
  blockingMove = aiCheckPosition('X');
  AImoving = false;
  if (winningMove != undefined){
    pressed(winningMove);
  } else if (blockingMove != undefined) {
    pressed(blockingMove)
  } else {
      while(!WON){
      randomNumber =getRandomInt(0, 8);
      console.log(randomNumber);
      if (pressed(randomNumber)){
        break;
      }
    }
  }
  return undefined;
}

function aiOff(){
  AI = false;
}

function aiCheckPosition(player){
  // Look at where to press
  var WIN = ['012', '345', '678', '036', '147', '258', '048', '246'];
  var winningMove;
  for (var i = 0; i < WIN.length; i++){
    winningMove = checkPos(WIN[i], player);
    if (winningMove != undefined) {
      return winningMove;
    }
  }

}

function checkPos(numbersString, player){
  var winnings = numbersString.split("");
  winnings = winnings.map(Number);
  var results = [3];
  for (var i = 0; i < winnings.length; i++) {
    if (gameData[player].has(winnings[i])) {
      results[0] -= 1;
    } else {
      results.push(winnings[i]);
    }
  }
  if (results[0] == 1 && !gameData.X.has(results[1]) && !gameData.O.has(results[1])){
    return results[1];
  } else {
    return undefined;
  }
}

function initGame(){
  var viewGrid = document.getElementById("table").getElementsByTagName('div');
  // Initialize the click function on each grid cell.
  for (var i = 0; i < viewGrid.length; i++){
    viewGrid[i].addEventListener("click", pressed.bind(null, i), false);
  }

  // Bind reset button
  document.getElementById('reset').addEventListener('click', resetGame);
}


// This basically checks all the winning conditions.
function winner(){
  var WIN = ['012', '345', '678', '036', '147', '258', '048', '246'];
  for (var i = 0; i < WIN.length; i++){
    if (checkWin(WIN[i])){
      return true;
    }
  }

  // Check Draw
  var totalMoves = gameData.O.size + gameData.X.size;
  if (totalMoves == 9 && !WON){
    alert("Game Draw");
    WON = true;
  }

  return false;
}

function checkWin(numbersString){
  var winnings = numbersString.split("");
  winnings = winnings.map(Number);
  var result = 3;

  // Check x then o.
  if (!nextMove){
    for (var i = 0; i < winnings.length; i++) {
      if (gameData.X.has(winnings[i])) {
        result -= 1;
      }
    }
  } else {
    for (var i = 0; i < winnings.length; i++) {
      if (gameData.O.has(winnings[i])) {
        result -= 1;
      }
    }
  }

  // PLAYER WINS!!!!
  if (result == 0){
    var player = !nextMove ? "Red" : "Blue";
    var resultString = player + " wins!";
    alert(resultString);
    WON = true;
    return true;
  }
}


// Runs when click on a box.
function pressed(id){
  if (WON || AImoving && !nextMove){
    return undefined;
  }
  // Grab table
  var viewGrid = document.getElementById("table").getElementsByTagName('div');
  // Grab cell
  var box = viewGrid[id];

  // Check box is empty
  if (!gameData.X.has(id) && !gameData.O.has(id)) {
    if (nextMove){
      box.style.backgroundColor = 'red';
      gameData.X.add(id);
    } else {
      box.style.backgroundColor = 'blue';
      gameData['O'].add(id);
    }
  } else {
    return undefined;
  }
  // Check win (order matters in these two lines) - side effects :(
  nextMove = !nextMove;
  winner(!nextMove);

  // Ai move after human
  if (AI && !nextMove) {
    aiAction();
  }

  // If everything was successful return true.
  return true;
}

// Reset Game
function resetGame(){
  // Clear set
  gameData.O = new Set([]);
  gameData.X = new Set([]);

  // Reset cell colours
  var viewGrid = document.getElementById("table").getElementsByTagName('div');
  var cell;
  for (var i = 0; i < viewGrid.length; i++){
    cell = viewGrid[i];
    if (i%2 == 1){
      cell.style.backgroundColor = "#bcbcbc";
    } else {
      cell.style.backgroundColor = "#e8e8e8";
    }

    // Reset game flags
    nextMove = true;
    WON = false;
  }

}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Play the game
initGame();