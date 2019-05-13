function Player(userName) {
  this.userName = userName;
  this.score = 0;
};

function Turn(player) {
  this.total = 0;
  this.randNumber = 0;
  this.player = player;
};

//Creates random number, saves it and then returns it
Turn.prototype.diceRoller = function (player1, player2) {
  var randNumber = Math.floor(Math.random() * 6) + 1;
  if (randNumber == 1) {
    this.total = 0;
    this.player.score = 0;
    this.hold(player1, player2);
    return randNumber;
  } else {
    this.total += randNumber;
    return randNumber;
  };
};

Turn.prototype.hold = function () {
  //adding total to score
  this.player.score += this.total;
  //and clearing total
  this.total = 0;
  this.randNumber = 0;

};





$(document).ready(function () {
  $("#rol").click(function () {
    $("#roll1").text(playing.diceRoller());
    $("#total1").text(playing.total);



  });
  $("#roll").click(function () {
    $("#roll2").text(playing.diceRoller());
    $("#total2").text(playing.total);




  });

  var player1 = new Player(prompt("input name"));
  var player2 = new Player(prompt("input name"));

  var playing = new Turn(player1);
  var playing = new Turn(player2);

  $("#player1").text(player1.userName);
  $("#player2").text(player2.userName);






  $("#hold").click(function (event) {
    event.preventDefault();

    playing.hold(player1);


    //Prints players scores

    $('#t1').text(player1.score);

    //Prints the cleared Current Roll and Turn Total on page
    $("#roll1").text(playing.randNumber);
    $("#total1").text(playing.total);



  });


  $("#hold2").click(function (event) {
    event.preventDefault();

    playing.hold(player2);



    //Prints players scores

    $('#t2').text(player2.score);

    //Prints the cleared Current Roll and Turn Total on page
    $("#roll2").text(playing.randNumber);
    $("#total2").text(playing.total);

   
  });






});





