let cv;

function setup() {
  cv = createCanvas(windowWidth, windowHeight);
  // cvElement = cv.canvas;
  // cvElement.style.position = "absolute";
  // cvElement.style.zIndex ="-1"
  background(40,40,40);

}

function draw(){
  if (frameCount < 120 && frameCount >0){
    showmark();
  }
  if (frameCount < 240 && frameCount >120){
    showamuse1();
  }

  function showmark(){
    let show_mark = document.getElementById("mark");
    show_mark.style.display = "block";
    show_mark.style.opacity = frameCount/140;
  }
  function showamuse1(){
    let show_amuse1 = document.getElementById("amuse1");
    show_amuse1.style.display = "block";
    show_amuse1.style.opacity = (frameCount-120)/200;
  }
}

let back = document.getElementById('back');
back.addEventListener('click', toPg13);
function toPg13() {
  window.location.href = ("pg13.html");
}

let next = document.getElementById('next');
next.addEventListener('click', toPgindex);
function toPgindex() {
  window.location.href = ("index.html");
}
