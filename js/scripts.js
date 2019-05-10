function roll() {
    var x = Math.floor((Math.random() * 6) + 1);
    return x;
}


$(document).ready(function () {
    $("#rol").click(function () {
        $("#roll1").text(roll());
    });
    $("#roll").click(function () {
        $("#roll2").text(roll());
    });





    var player1 = prompt("input name of first player")
    var player2 = prompt("input name of second player")
    document.getElementById("player1").innerHTML = player1

    document.getElementById("player2").innerHTML = player2
});