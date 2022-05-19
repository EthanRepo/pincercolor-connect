var score = 0;
var button = document.getElementById("startbutton");
button.addEventListener("click", startEasy);
    button.addEventListener("click", easyCountdown);
function startEasy() {
document.getElementById('easygamestart').style.display = "none";
  document.getElementById('easygaming').style.display = "block";
  function easyGaming() {
  
  }
}
function easyCountdown() {
var timer;
var count = 60;

$("#counter").text(count);
//update display

timer = setTimeout(update, 1000);
//this allows for 'clearTimeout' if needed

function update()
{
    if (count > 0)
    {
       $("#counter").text(--count);
       timer = setTimeout(update, 1000);
    }
    else
    {
      document.getElementById('easygameend').style.display = "block";
  document.getElementById('easygaming').style.display = "none";
 document.getElementById("endscore").innerHTML = "Score: " + score;
    }
  }
}
function easyColorScore() {
score + 100
}
