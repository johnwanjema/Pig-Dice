function roll() {
    var randomNumber = Math.floor((Math.random() * 6) + 1);

    return randomNumber

};


function player (name, score) {
  this.name = name;
  this.score = score;  
}


$(document).ready(function () {
    $("#rol").click(function () {

        $("#roll1").text(roll());


    });
    $("#roll").click(function () {
        $("#roll2").text(roll());
    });
    var player1 = new player (prompt("input name of first player"));
    var player2 = new player (prompt("input name of second player"));

    $("#player1").text(player1);
    $("#player2").text(player2);
    $("#total1").text();



});





