let cv1; // HTML Canvas

function setup() {
  cv1 = createCanvas(825, 495);
  cvElement = cv1.canvas;
  cvElement.style.position = "absolute";
  cvElement.style.top = "130px";
  cvElement.style.left = "75px";
  cvElement.style.zIndex = "1";

  background(205, 166, 160); /*pink*/
}

function draw() {
  fill(40,40,40);
  noStroke();
  ellipse(mouseX, mouseY, 160, 160);
}

// javascript //
let letter1 = document.getElementById('letter1');
let letter2 = document.getElementById('letter2');

letter1.addEventListener('mouseover', showAddress);
function showAddress() {
  letter1.src = "img/letter2.png";
  console.log("show");
}

letter1.addEventListener('mouseleave', hideAddress);
function hideAddress() {
  letter1.src = "img/letter1.png";
  console.log("hide");
}

letter1.addEventListener('click', toPg5);
function toPg5() {
  window.location.href = "pg5.html";
  console.log("why");
}

letter2.addEventListener('click', toPg5);
function toPg5() {
  window.location.href = "pg5.html";
  console.log("why");
}

let back = document.getElementById('back');
back.addEventListener('click', toPg3);
  function toPg3() {
    window.location.href = ("pg3.html");
  }
