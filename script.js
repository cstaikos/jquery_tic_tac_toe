$(document).on('ready', function() {
  new game().init();
});

function game() {

  this.init = function() {
    $(".square").addClass("open").text("");

    this.currentPlayer = "X";

    this.updateMessage("Welcome to jQuery tic-tac-toe! Click a square to begin:");
    this.attachHandlers();
  }

  this.updateMessage = function(newMessage) {
    this.message = newMessage;
    $("#message").text(this.message);
  }

  this.attachHandlers = function() {
    $(".container").on( "click", ".open", this, this.makeMove );
  }

  this.gameState = function() {
  var winningSequences = ["#a1, #a2, #a3",
                      "#b1, #b2, #b3",
                      "#c1, #c2, #c3",
                      "#a1, #b1, #c1",
                      "#a2, #b2, #c2",
                      "#a3, #b3, #c3",
                      "#a1, #b2, #c3",
                      "#a3, #b2, #c1"]
  var winningString = this.currentPlayer + this.currentPlayer + this.currentPlayer;
  var gameWon = false;

  for (i=0; i<winningSequences.length; i++) {
    if ($(winningSequences[i]).text() === winningString) {
      gameWon = true;
    }
  }

  if (!gameWon) {
    return ($(".open").length === 0 ? 0 : null);
  }
  else {
    return (this.currentPlayer === "X" ? 1 : -1);
  }

  }

  this.makeMove = function(arg) {
    $(this).text(arg.data.currentPlayer).removeClass("open");
    arg.data.togglePlayer();
    arg.data.updateGameFlow();
  }

  this.togglePlayer = function() {
    this.currentPlayer = (this.currentPlayer === "X" ? "O" : "X");
  }

  this.updateGameFlow = function() {
    if (this.gameState() === null) return;
      var newMessage = "";

      switch (this.gameState()) {
        case 1 : // X wins
          newMessage = "X wins! ";
          break;
        case -1 : // O wins
          newMessage = "O wins! ";
          break;
        case 0 : // tie game
          newMessage = "Tie Game! ";
          break;
        } //switch

        newMessage += "Click anywhere to start a new game.";
        this.updateMessage(newMessage);

      } //updateGameFlow


  }//game class



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
