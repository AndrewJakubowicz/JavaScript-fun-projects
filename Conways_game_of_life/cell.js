/**
 * Created by Spyr1014 on 29/06/2016.
 */


// Create a grid object with 4 states.
// 1: alive
// Dies with less than 2 neighbours
// Dies with more than 3 neighbours
// 2: dying
// 3: dead
// Exactly 3 neighbours = life.
// 4: returning to life.

// Notes:
  // treat dying cells as alive.
  // treat returning to life as dead.

// -------------- Checking code -----------
// takes an int of neighbours. Changes state.




/**
 * Cell has the following methods
 *  clicked() for user interaction;
 *  neighbours(neighbours : integer) to check neighbours.
 *  tickUpdate() must run on every cell after the array is checked.
 * @constructor
 */
var Cell = function(){
  // private attributes.

  var state = 3;

  // private methods

  /**
   * isAlive checks if a cell is alive.
   * @returns {boolean}
   */
  this.isAlive = function(){
    if (state == 1 || state == 2) {
      return true;
    } else {
      return false;
    }
  };


  /**
   * Function that triggers when the cell is clicked.
   */
  this.clicked = function() {
    console.log("Cell you clicked has status of ", state);
    if (this.isAlive()){
      state = 3;
    } else {
      state = 1;
    }
    console.log("changed state to ", state)
  };

  this.neighbours = function(neighbours){
    if (this.isAlive()){
      if (neighbours < 2 || neighbours > 3){
        state = 2;
      }
    } else {
      if (neighbours == 3){
        state = 4;
      }
    }
  };

  /**
   * Runs after the whole array is checked.
   */
  this.tickUpdate = function(){
    if (state == 2){
      state = 3;
    } else if (state == 4){
      state = 1;
    }
  };
}