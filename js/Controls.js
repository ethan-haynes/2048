// wrapper for "class" Controls
(function(){
    function Controls(){}

        //adds the tile to space to the left of current tile
        Controls.tileAddLeft = function() {
            var DIM = {
                FIRST: 0,
                SECOND: 4,
                THIRD: 8,
                FOURTH: 12
            };

            helper(DIM, -1);
        };

        //adds the tile to space above current tile
        Controls.tileAddUp = function() {
            var DIM = {
                FIRST: 0,
                SECOND: 1,
                THIRD: 2,
                FOURTH: 3
            };

            helper(DIM, -4);
        };

        //adds the tile to space right of the current tile
        Controls.tileAddRight = function() {
            var DIM = {
                FIRST: 3,
                SECOND: 7,
                THIRD: 11,
                FOURTH: 15
            };

            helper(DIM, 1);
        };

        //adds the tile to space beneath current tile
        Controls.tileAddDown = function() {
            var DIM = {
                FIRST: 12,
                SECOND: 13,
                THIRD: 14,
                FOURTH: 15
            };

            helper(DIM, 4);
        };

        var helper = function(obj, x) {
          var GB = Game.gameBoard;
          //goes over length of board
          for (i = 0; i < GB.length; i++) {
            var index = i;

            while (index != obj.FIRST  &&
                   index != obj.SECOND &&
                   index != obj.THIRD  &&
                   index != obj.FOURTH) {
              //if selected tile is not empty
              if (GB[i] !== 0) {
                //if tile to move to is empty, or they match
                if (GB[i + x] == GB[i] ||
                    GB[i + x] === 0) {

                  GB[i + x] += GB[i]; //copy over value
                  Game.score += GB[i + x]; //add and replace value
                  GB[i] = 0; //overwite old value

                  //animates tile
                  Game.Update.animateDiv(i + x);

                  // if we are here a tile behind target moved; start over
                  i = 0;
                }
              }
              index += x;
            }
          }
        };

        // add "class" Player to our Game object
        Game.Controls = Controls;
})();
