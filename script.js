$(document).on('ready', function() {
  var currentGame = new game();
  currentGame.init();
});

function game() {

  this.init = function() {
    $(".square").addClass("open").text("").css({"background-color": "white"});

    this.currentPlayer = "X";

    this.updateMessage("Welcome to jQuery tic-tac-toe! Click a square to begin:");
    this.attachHandlers();
  }

  this.updateMessage = function(newMessage) {
    this.message = newMessage;
    $("#message").text(this.message);
  }

  this.attachHandlers = function() {
    $(".container").off().on( "click", ".open", this, this.makeMove );
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
        $(winningSequences[i]).css({"background-color": "green"});
      }
    }

    if (!gameWon) {
      return ($(".open").length === 0 ? 0 : null);
    }
    else {
      return (this.currentPlayer === "X" ? 1 : -1);
    }

  }// gameState

  this.makeMove = function(arg) {
    $(this).text(arg.data.currentPlayer).removeClass("open");
    if (arg.data.updateGameFlow()) {
      return; //Skip toggling the player and simply return if the game is finished (avoids toggling to "O" when next game starts)
    }
    arg.data.togglePlayer();
  }

  this.togglePlayer = function() {
    this.currentPlayer = (this.currentPlayer === "X" ? "O" : "X");
  }

  this.updateGameFlow = function() {
    if (this.gameState() === null) return; //If game is still going we can ignore the rest of this function

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

      $(".open").removeClass("open");
      alert("Click ok to restart the game.");
      this.init();

      return true;


    } //updateGameFlow

  }//game class
