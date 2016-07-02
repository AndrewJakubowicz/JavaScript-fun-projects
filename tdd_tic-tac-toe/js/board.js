/**
 * Created by Spyr1014 on 2/07/2016.
 */

(function (exports){
  function Board (){

    // 1 = x, 2 = o, 0 = empty
    var data = new Array(9).fill(0);





    // ------------- Public methods ---------- //

    this.getData = function(){
      return data;
    };

    this.placeFirst = function(id){
      data[id] = !data[id] ? 1 : data[id];
    };

    this.placeSecond = function(id){
      data[id] = !data[id] ? 2 : data[id];
    };

  }
  exports.Board = Board;
})(this);