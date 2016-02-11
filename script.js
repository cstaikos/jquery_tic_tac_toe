$(document).on('ready', function() {

  var currentPlayer = "X";
  var initialMessage = "Welcome to jQuery tic-tac-toe! Click a square to begin:"

  $(".container").on("click", ".open", function() {

    $(this).text(currentPlayer).removeClass("open");

    currentPlayer = (currentPlayer === "X" ? "O" : "X");

    if (gameState() !== null) {
      $("#message").text(gameState() + " Click anywhere to start another.");
    }

  });

  // Returns the game state as a message...if the game is not over returns null
  var gameState = function() {
    return ($(".open").length === 0 ? "Tie Game!" : null);
  }

})
