var x = 0;
element.addEventListener("keydown", changeX);
function changeX() {
x = 1;
}
function cdFunction() {
  document.getElementById('connect5').style.display = "block";
  document.getElementById('connectstart').style.display = "none";
  document.getElementById('buffer').style.display = "block";
  const FivetoFour = setTimeout(cdFive, 1000);
}
function cdFive() {
  document.getElementById("connect5").style.display = "none"
  document.getElementById("connect4").style.display = "block"
  const FourtoThree = setTimeout(cdFour, 1000);
}
function cdFour() {
  document.getElementById("connect4").style.display = "none"
  document.getElementById("connect3").style.display = "block"
  const ThreetoTwo = setTimeout(cdThree, 1000);
}
function cdThree() {
  document.getElementById("connect3").style.display = "none"
  document.getElementById("connect2").style.display = "block"
  const TwotoOne = setTimeout(cdTwo, 1000);
}
function cdTwo() {
  document.getElementById("connect2").style.display = "none"
  document.getElementById("connect1").style.display = "block"
  const OnetoDone = setTimeout(cdDone, 1000);
}
function cdDone() {
if (x === 1) {
  document.getElementById("connecty").style.display = "block"
document.getElementById("connect1").style.display = "none"
  document.getElementById('buffer').style.display = "none";
} else {
document.getElementById("connectn").style.display = "block"
  document.getElementById("connect1").style.display = "none"
  document.getElementById('buffer').style.display = "none";
}
}
