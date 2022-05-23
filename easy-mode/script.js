var score = 0;

function startEasy() {
document.getElementById('easygamestart').style.display = "none";
  document.getElementById('easygaming').style.display = "block";
   const gamingtimer = setTimeout(easyEnd, 45000);
}
 
function easyEnd() {
document.getElementById('easygameend').style.display = "block";
document.getElementById('easygaming').style.display = "none";
    document.getElementById("endscore").innerHTML = "Score: " + score;
    }

function easyScore() {
var red = document.getElementById("redg");
var blue = document.getElementById("blueg");
var green = document.getElementById("greeng");
var yellow = document.getElementById("yellowg");
score += 100
let colorpick = Math.floor((Math.random() * 4) + 1);
if (colorpick == 1) {
red.style.display = 'block';
blue.style.display = 'none';
green.style.display = 'none';
yellow.style.display = 'none';
document.getElementById("colorchosen").innerHTML = "Put the Peg in the Red Square, and then click the button below when done.";
}
    else if (colorpick == 2) {
red.style.display = 'none';
blue.style.display = 'block';
green.style.display = 'none';
yellow.style.display = 'none';
document.getElementById("colorchosen").innerHTML = "Put the Peg in the Blue Square, and then click the button below when done.";
    }
    else if (colorpick == 3) {
red.style.display = 'none';
blue.style.display = 'none';
green.style.display = 'block';
yellow.style.display = 'none';
document.getElementById("colorchosen").innerHTML = "Put the Peg in the Green Square, and then click the button below when done.";
    }
    else if (colorpick == 4) {
red.style.display = 'none';
blue.style.display = 'none';
green.style.display = 'none';
yellow.style.display = 'block';
document.getElementById("colorchosen").innerHTML = "Put the Peg in the Yellow Square, and then click the button below when done.";
    }
}
