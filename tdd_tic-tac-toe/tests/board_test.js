/**
 * Created by Spyr1014 on 2/07/2016.
 */

var expect = chai.expect;

describe("Board", function(){
  //var sandbox;
  //
  //beforeEach(function(){
  //  sandbox = sinon.sandbox.create();
  //
  //  sandbox.stub(window.console, 'log');
  //});
  //
  //afterEach(function(){
  //  sandbox.restore();
  //});
  describe("Board Construction", function(){
    it("Board constructor exists", function(){
      expect(new Board()).to.exist;
    });

    it("Board initially returns an array", function(){
      expect((new Board()).getData()).is.a("array");
    });

    it("Board is empty", function(){
      (new Board()).getData().forEach(function(value){
        expect(value).is.equal(0);
      });
    });
    it("Can't access private variables", function(){
      // Need to let expect find the error.
      expect(function(){data}).to.throw(ReferenceError, /data is not defined/);
    })
  });

  describe("Game Playing", function(){
    it('Can place x on a square', function(){
      var board = new Board();
      board.placeFirst(2);
      expect(board.getData()[2]).to.equal(1);
    });
    it("Can place o on a square", function(){
      var board = new Board();
      board.placeSecond(2);
      expect(board.getData()[2]).to.equal(2);
    })
  });

  describe("Game can be won!", function(){

  });
});