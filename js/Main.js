$(document).ready(function() {
    // Set highscore on page
    Game.id("highscore").innerHTML = "High Score<br>" + Game.highscore;

    // event listeners
    Game.newGame.addEventListener("click", Game.resetGame, false);
    Game.newGameMenu.addEventListener("click", Game.resetGame, false);
    window.addEventListener("keydown", function(e) {
        switch(e.keyCode) {
            case 37: // left arrow
                Game.Controls.tileAddLeft();
                break;
            case 38: // up arrow
                Game.Controls.tileAddUp();
                break;
            case 39: // right arrow
                Game.Controls.tileAddRight();
                break;
            case 40: // down arrow
                Game.Controls.tileAddDown();
                break;
            default:
                return;
        }

        //places random tile
        Game.placeRandom();
        //renders gameBoard
        Game.Update.tileMove();
    }, false);
});
