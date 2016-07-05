/**
 * Created by Spyr1014 on 5/07/2016.
 */


function Display(){
  var board = new Board();

  var playerSpaces = document.getElementById('gameBoard').getElementsByTagName('div');
  for (var i = 0; i < playerSpaces.length; i++){
    playerSpaces[i].addEventListener('click', press.bind(null, i), false);
  }

  this.pressed = function(id){
    board.placeId(id);
  };

  this.updateDisplay = function(){
    board.getData().forEach(function(boardValue, index){
      if (boardValue == 1){
        playerSpaces[index].style.background = 'red';
      } else if (boardValue == 5){
        playerSpaces[index].style.background = 'blue';
      }
    });
  }

}

var DISPLAY = new Display();


function press(id){
  DISPLAY.pressed(id);
  DISPLAY.updateDisplay();
}