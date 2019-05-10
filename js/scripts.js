function roll1() {
    var x = document.getElementById("roll1")
    x.innerHTML = Math.floor((Math.random() * 6) + 1);
}
function roll2() {
    var x = document.getElementById("roll2")
    x.innerHTML = Math.floor((Math.random() * 6) + 1);
}


$(document).ready(function() {    
   var player1 = prompt("input name of first player")
   var player2 = prompt("input name of second player")
   document.getElementById("player1").innerHTML =
   "Hello " + player1 + "! How are you today?";
   document.getElementById("player2").innerHTML =
   "Hello " + player2 + "! How are you today?";
});