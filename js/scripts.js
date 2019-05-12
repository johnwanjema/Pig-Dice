function Player(userName) {
  this.userName = userName;
  
};

//pass it a player object!
function Turn(player) {
  this.total = 0;
  this.randNumber = 0;
  this.player = player;
};

//Creates random number, saves it and then returns it
Turn.prototype.diceRoller = function (player1, player2) {
  var randNumber = Math.floor(Math.random() * 6) + 1;
  this.total += randNumber;
  
  if (randNumber == 1) {
    this.total = 0;
    
    this.endTurn(player1, player2);
    // this.randNumber += randNumber;
    return randNumber;
  } else {
    
    
    return randNumber;

  };
};

Turn.prototype.endTurn = function (player1, player2) {
  //adding total to score
  
  //and clearing total
  this.total = 0;
  this.randNumber = 0;
  if (this.player == player1) {
    this.player = player2;
    $("#player2").toggleClass("active");
    $("#player1").toggleClass("active");
  } else if (this.player == player2) {
    this.player = player1;
    $("#player2").toggleClass("active");
    $("#player1").toggleClass("active");
  };
};









$(document).ready(function () {
  $("#rol").click(function () {
    $("#roll1").text(playing.diceRoller());
    $("#total1").text(playing.total);
    
 

  });
  $("#roll").click(function () {
    $("#roll2").text(playing.diceRoller());
    $("#total2").text(playing.total);
    $('#t1').text(player2.score);
 

  });
  
  var player1 = new Player(prompt("input name"));
  var player2 = new Player(prompt("input name"));
  var playing = new Turn(player1);

  
  $("#player1").text(player1.userName);
  $("#player2").text(player2.userName);

  



});





