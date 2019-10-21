for (let i = 0; i < 9; i++) {
  document.getElementById("game").innerHTML += '<div class="block"></div>';
}
let hod = 0;
document.getElementById("game").onclick = function(event) {
  console.log(event.target);
  if (event.target.className == "block") {
    if (hod % 2 == 0) {
      event.target.innerHTML = "X";
    } else {
      event.target.innerHTML = "0";
    }
    hod++;
    checkWinner();
  }
};
var allblock = document.getElementsByClassName("block");

function checkWinner () {
    var combo = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for (let i = 0; i < combo.length; i++) {
        if (allblock[combo[i][0]].innerHTML == "X" && allblock[combo[i][1]].innerHTML == "X" && allblock[combo[i][2]].innerHTML == "X") alert ('Крестики');
        if (allblock[combo[i][0]].innerHTML == "0" && allblock[combo[i][1]].innerHTML == "0" && allblock[combo[i][2]].innerHTML == "0") alert ('Нолики');
    }
}