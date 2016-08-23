// wrapper for Update
(function(){
    function Update(){ }
    var HEX = {
      2:   "#247BA0",
      4:   "#6A406E",
      8:   "#F98221",
      16:  "#E0B91C",
      32:  "#F25F5C",
      64:  "#B0FC23",
      128: "#B2FF9E",
      OOB: "#B2FF9E"
    };

    //renders board image
    Update.tileMove = function() {
      //goes over length of gameboard
      for (i = 0; i < Game.gameBoard.length; i++) {
        //if tile is empty, set it to hidden
        if (Game.gameBoard[i] === 0) {
          Game.id("O" + i).style.visibility = "hidden";
        } else {
          //render tile and its value
          Game.id("O" + i).style.visibility = "visible";
          Game.id("I" + i).innerHTML = Game.gameBoard[i];

          bgColor(Game.gameBoard[i], i);

          updateScore();
        }
      }
    };

    var bgColor = function(index, i) {
        Game.id("O" + i).style.backgroundColor = HEX[index] || HEX.OOB;
    };

    var updateScore = function() {
        //update score
        Game.id("inner-score").innerHTML = "Score<br>" + Game.score;
        if (Game.highscore < Game.score) {
          // replace inner html of highscore
          Game.id("highscore").innerHTML = "High Score<br>" + Game.score;
          localStorage.setItem("highscore", Game.score); // Store
        }
    };

    // animation when two boxes merge
    //found at http://www.w3schools.com/jquery/jquery_animate.asp
    Update.animateDiv = function(i) {
      $("#O" + i).animate({
        height: '+=5px',
        width: '+=5px'
      }, "fast");
      $("#O" + i).animate({
        height: '-=5px',
        width: '-=5px'
      }, "fast");
    };

    // add "class" Rectangle to our Game object
    Game.Update = Update;
})();
