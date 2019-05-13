// Business logic
function Player(userName) {
  this.userName = userName;
  this.score = 0;
};

function turn(player) {
  this.total = 0;
  this.randNumber = 0;
  this.player = player;
};

//Creates random number, saves it and then returns it
turn.prototype.diceRoller = function (player1, player2) {
  var randNumber = Math.floor(Math.random() * 6) + 1;
  if (randNumber == 1) {
    this.total = 0;
    this.player.score = 0;
    this.hold(player1,player2);
    alert("next players turn");
    return randNumber;
  } else {
    this.total += randNumber;
    return randNumber;
  };
};

turn.prototype.hold = function () {
  //adding total to score
  this.player.score += this.total;
  //and clearing total
  this.total = 0;
  this.randNumber = 0;
 //changes players
  if (this.player == player1) {
    this.player = player2;
    
} else if (this.player == player2) {
    this.player = player1;
    
};


};




// User interface
$(document).ready(function () {
  $("#rol").click(function () {
    $("#roll1").text(playing.diceRoller());
    $("#total1").text(playing.total);
    if ((playing.total) >= 100) {      
          alert("You are the winner!");
      } 

  });
  $("#roll").click(function () {
    $("#roll2").text(playing.diceRoller());
    $("#total2").text(playing.total);
    if ((playing.total) >= 100) {      
      alert("You are the winner!");
  } 



  });

  var player1 = new Player(prompt("input name"));
  var player2 = new Player(prompt("input name"));

  var playing = new turn(player1);

  $("#player1").text(player1.userName);
  $("#player2").text(player2.userName);






  $("#hold").click(function (event) {
    event.preventDefault();

    playing.hold(player1,player2);


    //Prints players scores

    $('#t1').text(player1.score);
    $('#t2').text(player2.score);
    //Prints the cleared Current Roll and Turn Total on page
    $("#roll1").text(playing.randNumber);
    $("#total1").text(playing.total);



  });


  






});





