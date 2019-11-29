let img;
let imgX, imgY;

function preload() {
  img = loadImage('img/news.png');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(157,82,80);
}

function draw(){
  // background(78,41,34,10);
  background(137,62,60,10);
  // background(10,10,10,10);
  if (frameCount < 120){
    imgY = frameCount * 2;
  } else if (frameCount < 180){
    imgY = 240 + (frameCount - 120) * 1.5;
  } else {
    imgY = 360;
  }

  imgX = width/2;
  imgArea = 140;

  let distance = dist(imgX, imgY, mouseX, mouseY);
  if (distance < imgArea) {
    // mouse is on the circle
    // fill(255,0,0);
    if (mouseIsPressed) {
      // fill(255,0,0);
      modal.style.display = "block";

    }
  } else {
    // fill(255,255,0);
  }
  // ellipseMode(CENTER);
  // ellipse(imgX, imgY, imgArea*2, imgArea*2);

  imageMode(CENTER);
  image(img, imgX, imgY, imgArea*2, imgArea*2);
}

let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  window.location.href = "pg14.html";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let back = document.getElementById('back');
back.addEventListener('click', toPg12);
function toPg12() {
  window.location.href = ("pg12.html");
  console.log("no");
}
