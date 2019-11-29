// const logo = document.querySelectorAll("#logo path");
// for (let i=0; i<logo.length; i++) {
//   console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
// }

let timeInSec = 0;
let next = document.getElementById('next');
let audio = document.getElementById('audio');

setInterval("timer()", 1000);
function timer(){
  timeInSec += 1;
  console.log(timeInSec);
}

next.addEventListener('click', toPg0);
function toPg0() {
  window.location.href = ("pg0.html");
}

audio.volume = 0.5;
setTimeout(function()
  {audio.play();}, 17000)
