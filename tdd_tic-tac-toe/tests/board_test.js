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
      expect(function(){ data }).to.throw(ReferenceError, /data is not defined/);
    })
  });

  describe("Game Playing", function(){
    it('Can place x on a square', function(){
      var board = new Board();
      board.placeId(2);
      expect(board.getData()[2]).to.equal(1);
    });
    it("Can place o on a square", function(){
      var board = new Board();
      board.placeId(1);
      board.placeId(2);
      expect(board.getData()[2]).to.equal(5);
    });

    it("Can't place an o on an x!", function(){
      var board = new Board();
      board.placeId(2);
      board.placeId(2);
      expect(board.getData()[2]).to.equal(1);
    });

    it("Player is swapped automatically", function(){
      var board = new Board();
      board.placeId(2);
      expect(board.getData()[2]).to.equal(1);
      board.placeId(2);
      expect(board.getData()[2]).to.equal(1);
      board.placeId(1);
      expect(board.getData()[1]).to.equal(5);
    });
  });

  describe("Game can be won!", function(){
    it("Can't place move after game has won.", function(){
      var board = new Board();
      board.placeId(0);
      board.placeId(4);
      board.placeId(1);
      board.placeId(8);
      board.placeId(2);
      board.placeId(5);
      expect(board.getData()[5]).to.equal(0);
    })

  });
});