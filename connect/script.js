var x = 0;
function cdFunction() {
  document.getElementById('connect5').style.display = "block";
  document.getElementById('connectstart').style.display = "none";
  const FivetoFourTimeout = setTimeout(cdFive, 1000);

}
function cdFive() {
  document.getElementById("connect5").style.display = "none"
  document.getElementById("connect4").style.display = "block"
  const FivetoFourTimeout = setTimeout(cdFour, 1000);
}
function cdFour() {
  document.getElementById("connect4").style.display = "none"
  document.getElementById("connect3").style.display = "block"
  const FivetoFourTimeout = setTimeout(cdThree, 1000);
}
function cdThree() {
  document.getElementById("connect3").style.display = "none"
  document.getElementById("connect2").style.display = "block"
  const FivetoFourTimeout = setTimeout(cdTwo, 1000);
}
function cdTwo() {
  document.getElementById("connect2").style.display = "none"
  document.getElementById("connect1").style.display = "block"
  const FivetoFourTimeout = setTimeout(cdDone, 1000);
}
function cdDone() {
if (x === 1) {
  document.getElementById("connecty").style.display = "block"
document.getElementById("connect1").style.display = "none"
} else {
document.getElementById("connectn").style.display = "block"
  document.getElementById("connect1").style.display = "none"
}
}
