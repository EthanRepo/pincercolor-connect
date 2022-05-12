// var x = 0;
function cdFunction() {
  document.getElementById('connect5').style.display = "block";
  document.getElementById('connectstart').style.display = "none";
  const FivetoFourTimeout = setTimeout(cdBody, 1000);
// x = 1;
}

function cdBody() {
  document.getElementById("connect5").style.display = "none"
  document.getElementById("connect4").style.display = "block"
}
