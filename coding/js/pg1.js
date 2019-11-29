function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(40,40,40);
}

function draw() {

}

function mousePressed(){
  console.log(mouseX+","+mouseY);
}

let back = document.getElementById('back');
back.addEventListener('click', toPg0);
  function toPg0() {
    window.location.href = ("pg0.html");
  }

let next = document.getElementById('next');
next.addEventListener('click', toPg1Conv);
  function toPg1Conv() {
    window.location.href = ("pg1-convboxes.html");
  }
