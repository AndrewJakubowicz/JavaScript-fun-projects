/**
 * Created by Spyr1014 on 2/07/2016.
 */

(function (exports){
  function Board (){

    // 1 = x, 2 = o, 0 = empty
    var data = new Array(9).fill(0);

    var player = true;
    var won = false;

    var gameData = {
      p1 : new Set([]),
      p2 : new Set([])
    };

    var winConditions = {
      '012': false,
      '345': false,
      '678': false,
      '036': false,
      '147': false,
      '258': false,
      '246': false,
      '048': false

    };

    // ------------- Public methods ---------- //

    this.placeId = function(id){
      if ((checkEmpty(id) && !won) && (player && placeFirst(id) || placeSecond(id))) {


        cycleWinConditions();

        won && reportWin();

        player = !player;


      }

    };

    this.getData = function(){
      return data;
    };

    var placeFirst = function(id){
      data[id] = !data[id] ? 1 : data[id];
      return true;
    };

    var placeSecond = function(id){
      data[id] = !data[id] ? 5 : data[id];
      return true;
    };

    var checkEmpty = function(id){
      return !data[id];
    };

    var cycleWinConditions = function(){
      for (var winString in winConditions) {
        if (winConditions.hasOwnProperty(winString)) {
          winConditions.winString = updateWin(winString);
        }
      }
    };

    var updateWin = function(currentWinString){
      var indexToCheck = (currentWinString.split('')).map(Number);
      var totalSum = 0;
      indexToCheck.forEach(function(currentIndex){
        totalSum += data[currentIndex];
      });
      won = won || totalSum == 3 || totalSum == 15;
      return totalSum;
    };

    var reportWin = function(){
      // Call out winning player!
      var playerText;
      player && (function () {
        playerText = 'X';
        return true;
      })() || (function () {
        playerText = 'O'
      })();

      var text = "Player " + playerText + " WINS!";

      alert(text);
    }

  }
  exports.Board = Board;
})(this);