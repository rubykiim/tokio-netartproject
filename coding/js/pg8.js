let mom = document.getElementById('mom');
let dad = document.getElementById('dad');
let mtext = document.getElementById('momtext');
let dtext = document.getElementById('dadtext');
let tear1 = document.getElementById('rtear-1');
let tear2 = document.getElementById('rtear-2');
let tear3 = document.getElementById('rtear-3');


// mom.addEventListener('mousemove', showText);
// function showText() {
//   let w = window.innerWidth;
//   let x = window.event.clientX;
//   if (x < w*0.5) {
//     text.style.opacity = "1";
//
//   } else if (x > w*0.5) {
//     text.style.opacity = "0";
//   }
// }

// mom.addEventListener('click', showText);
// function showText() {
//
// }

mom.addEventListener('mouseover', showText);
function showText() {
  mom.style.opacity = "0";
  dad.style.opacity = "1";
  mtext.style.display = "none";
  dtext.style.display = "block"
  tear1.style.display = "block";
  tear2.style.display = "block";
  tear3.style.display = "block";
}

mom.addEventListener('mouseleave', hideText);
function hideText() {
  mom.style.opacity = "1";
  dad.style.opacity = "0";
  mtext.style.display = "block";
  dtext.style.display = "none";
  tear1.style.display = "none";
  tear2.style.display = "none";
  tear3.style.display = "none";
}

let back = document.getElementById('back');
back.addEventListener('click', toPg7);
function toPg7() {
  window.location.href = ("pg7.html");
}

let next = document.getElementById('next');
next.addEventListener('click', toPg10);
function toPg10() {
  window.location.href = ("pg10.html");
}
