// wrapper for game
window.Game = {};

// Game Script
(function(){
    Game.id = function( id ) { return document.getElementById( id ); };
    // prepaire our game canvas
    Game.newGame = Game.id("reset");
    Game.newGameMenu = Game.id("reset-menu");
    //highscore from local storage
    Game.highscore = localStorage.getItem("highscore") || 0;
    Game.score = 0;

    //sets gameboard in game object
    Game.gameBoard = [
      0, 0, 0, 0,
      0, 0, 0, 0,
      0, 0, 0, 0,
      0, 0, 0, 0
    ];

    //places random number on game board
     Game.placeRandom = function() {
      var numToPlace, r;

      // 0.5 chance to be 2 or 4
      numToPlace = (Game.randomNum(0, 1) == 1) ? 2 : 4;

      var placed = false;

      //checks to see if number can be placed
      while (!placed && Game.canPlace()) {

        r = Game.randomNum(0, 15);
        //checks if it is empty
        if (Game.gameBoard[r] === 0) {
          Game.gameBoard[r] = numToPlace;
          placed = true;
        }
        //checks for gameOver
        if (!Game.canPlace() && Game.endOfGame()) {
            Game.id("endOfGame").style.display = "block";
        }
      }
  };

    //random int between two numbers
    Game.randomNum = function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  };

    //if the space is empty return true, else false
    Game.canPlace = function() {
      for (i = 0; i < Game.gameBoard.length; i++) {
        if (Game.gameBoard[i] === 0) {
          return true;
        }
      }
      return false;
  };

    // function that returns true if game is in end state
    Game.endOfGame = function() {
      //checks each game time to see if it can merge with its neighbor
      for (i = 0; i < Game.gameBoard.length; i++) {
        if (i != 3 && i != 7 && i != 11 && i != 15 &&
          Game.gameBoard[i] == Game.gameBoard[i + 1]) {
          return false;
        } else if (i < 12 && Game.gameBoard[i] == Game.gameBoard[i + 4]) {
          return false;
        }
      }
      return true;
  };

    //resets game board
    Game.resetGame = function() {
      Game.score = 0;
      for (i = 0; i < Game.gameBoard.length; i++) {
        Game.gameBoard[i] = 0;
      }
      //renders board
      Game.Update.tileMove();
      //removes endOfGame screen
      Game.id("endOfGame").style.display = "none";
    };

})();
