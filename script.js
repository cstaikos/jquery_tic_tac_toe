$(document).on('ready', function() {
  // $(".container").on( "click", ".open", function() {
  //     makeMove();
  // });

  var ticTacToe = new game();
  ticTacToe.init();

});


function game() {

  this.init = function() {
    $(".square").addClass("open").text("");
    this.currentPlayer = "X";
    this.message = "Welcome to jQuery tic-tac-toe! Click a square to begin:";
    this.updateMessage();
  }

  this.updateMessage = function() {
    $("#message").text(this.message);
  }

  this.gameState = function() {
    var newMessage = "";
    newMessage = ($(".open").length === 0 ? "Tie Game!" : null);

    return newMessage + " Click anywhere to start another.";
  }

  this.makeMove = function(element) {
    $(element).text(currentPlayer).removeClass("open");

    currentPlayer = (currentPlayer === "X" ? "O" : "X");

    if (gameState() !== null) {
      updateMessage( gameState() );
    }
  }

}

// var initGame = function() {
//   $("#message").text("Welcome to jQuery tic-tac-toe! Click a square to begin:");
//   $(".square").addClass("open");
// }

// var makeMove = function() {
//   $(this).text(currentPlayer).removeClass("open");
//
//   currentPlayer = (currentPlayer === "X" ? "O" : "X");
//
//   if (gameState() !== null) {
//     $("#message").text(gameState() + " Click anywhere to start another.");
//   }
// }

// Returns the game state as a message...if the game is not over returns null
// var gameState = function() {
//   return ($(".open").length === 0 ? "Tie Game!" : null);
// }
