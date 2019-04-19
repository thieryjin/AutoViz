var countdown = document.getElementById("countdown");
// function
var countItDown = function() {
  var currentTime = parseFloat(countdown.textContent);
  if (currentTime < 60) {
    countdown.textContent = currentTime + 1;
  } else {
    countdown.textContent = 0;
  }

};
// call interval 
var timer = window.setInterval(countItDown, 200);


var countdown2 = document.getElementById("countdown2");
// function
var countItDown2 = function() {
  var currentTime = parseFloat(countdown2.textContent);
  if (currentTime < 60) {
    countdown2.textContent = currentTime + 1;
  } else {
    countdown2.textContent = 0;
  }

};
// call interval 
var timer = window.setInterval(countItDown2, 100);
