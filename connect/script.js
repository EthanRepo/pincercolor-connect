function cdFunction() {
  document.getElementById('connect10').style.display = "block";
  document.getElementById('connectstart').style.display = "none";
  return true;
}

const myTimeout = setTimeout(cdBody, 1000);

function cdBody() {
if (cdFunction() === true) {
  document.getElementById("connect9").style.display = "block"
  document.getElementById("connect10").style.display = "none"
}
