var x = 0;
function cdFunction() {
  document.getElementById('connect5').style.display = "block";
  document.getElementById('connectstart').style.display = "none";
x = 1;
}

const myTimeout = setTimeout(cdBody, 1000);

function cdBody() {
  if (x === 1) {
  document.getElementById("connect9").style.display = "block"
  document.getElementById("connect10").style.display = "none"
}
