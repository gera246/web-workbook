'use strict';

var player1turn = true;
var xArray = [];
var oArray = [];
$(document).ready(function() {
  // Put app logic in here

$("div[data-cell]").click(function() {
  $(this).text(HandleTurn);
  var squareNumber = $(this).attr("data-cell");
  alert(squareNumber);
});

});

function HandleTurn(squareNumber) {
  //This function is going to create an X for player 1, and an O for player 2.
  //This function will also change the text of the game instructions.
  if(player1turn)
  {
  CheckForWinner(xArray);
  player1turn = false;
  xArray.push();
  $(".game-instructions").text("Player 1's turn");
  return "X";
  }
  CheckForWinner(oArray);
  player1turn = true;
  oArray.push();
  $(".game-instructions").text("Player 2's turn");
  return"O";
}

function CheckForWinner(playerArray) {
  if($.inArray("0", (playerArray)!=-1 && "1", (playerArray)!=-1 && "2", (playerArray)!=-1)
  (alert("Winner");)
};
