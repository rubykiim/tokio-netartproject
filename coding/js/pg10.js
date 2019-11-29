let back = document.getElementById('back');
let next = document.getElementById('train');

back.addEventListener('click', toPg8);
function toPg8() {
  window.location.href = ("pg8.html");
}

next.addEventListener('click', toPg11);
function toPg11() {
  window.location.href = ("pg11.html");
}

let audio = document.getElementById('audio');




let circleSize = 300;

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(40,40,40);
}

function draw(){
  background(40,40,40,10);
  let speed = frameCount/50;
  let s = 5;
  if (speed >= s){
    speed = 5;
  }

  // strokeWeight(2);
  stroke(252, 236, 215);
  translate(width/2, height/2);
  scale(s - speed);
  noFill();
  ellipse(0,50, circleSize,circleSize);
}
