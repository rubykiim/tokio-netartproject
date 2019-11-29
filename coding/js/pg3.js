function setup() {
  createCanvas(windowWidth, windowHeight);
  background(40,40,40);
}

function draw(){

if (frameCount < 120 && frameCount >0){
  showmark();
}
if (frameCount < 240 && frameCount >120){
  showamuse1();
}
if (frameCount < 360 && frameCount >240){
  showboy();
}

function showmark(){
  let show_mark = document.getElementById("mark");
  show_mark.style.display = "block";
  show_mark.style.opacity = frameCount/120;
}
function showamuse1(){
  let show_amuse1 = document.getElementById("amuse1");
  show_amuse1.style.display = "block";
  show_amuse1.style.opacity = (frameCount-120)/200;
}
function showboy(){
  let show_boy = document.getElementById("boy");
  show_boy.style.display = "block";
  show_boy.style.opacity = (frameCount-240)/120;
}


// push();
// transform(821,688);
// rotate()
// pop();

   // background(10,10,10,10);
   // translate(821,688);
   // rotate((PI / 180) * frameCount);
   // imageMode(CENTER);
   // image("img/amuse1.png", 0, 0, 150, 150);
}

function mousePressed(){
  console.log(mouseX+","+mouseY);
}

let back = document.getElementById('back');
back.addEventListener('click', toPg2);
  function toPg2() {
    window.location.href = ("pg2.html");
  }

let next = document.getElementById('next');
next.addEventListener('click', toPg4);
  function toPg4() {
    window.location.href = ("pg4.html");
  }
