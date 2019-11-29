let next;
let cv1;
let cv2;

// function preload() {
//   next = loadImage("img/next.png");
// }

function setup(){
  cv1 = createCanvas(window.innerWidth, window.innerHeight);
  cvElement = cv1.canvas;
  background(50,50,50);
  cvElement.style.position ="absolute";
  cvElement.style.zIndex = "2";

  // cv2 = createCanvas(window.innerWidth, window.innerHeight);
  // cvElement = cv2.canvas;
  // cv2.background(0);
  // cvElement.style.position ="absolute";
  // cvElement.style.opacity = "0";
  // cvElement.style.zIndex = "4";
}

function draw(){
  // background(40,40,40,10);
  let speed = frameCount/8;
  let s = 5;

  strokeWeight(10);
  stroke(252, 236, 215, 50);
  // stroke(70,70,70,80);
  translate(width/2, height/2);
  scale(s+speed);
  noFill();
  ellipseMode(CENTER);
  ellipse(0,50,100,100);

  strokeWeight(10);
  stroke(252, 236, 215, 50);
  // stroke(70,70,70,80);
  translate(width/2, height/2);
  scale(s+speed);
  noFill();
  ellipseMode(CENTER);
  ellipse(0,50,50,50);

  if (frameCount > 720){
    shownext();
  }

  function shownext(){
    let show_next = document.getElementById("next");
    show_next.style.display = "block";
    show_next.style.opacity = (frameCount-720)/120;
  }
}

let back = document.getElementById('back');
back.addEventListener('click', toPg10);
function toPg10() {
  window.location.href = ("pg10.html");
}

// let next = document.getElementById('next-0');
// next.addEventListener('click', toPg12);
// function toPg12() {
//   window.location.href = "pg12.html";
//   console.log("why");
// }
