console.log("me");

function Drop() {
  this.x = random(width);
  this.y = random(height);
  this.z = random(0,8);
  this.len = map(this.z, 0, 20, 10, 20);
  this.yspd = map(this.z,0,20,1,20);

  this.fall = function (){
    this.y = this.y + this.yspd;
    let grav = map(this.z, 0, 20, 0, 0.2);
    this.yspd = this.yspd + grav;

    if (this.y > height) {
      this.y = random(-200, -100);
      this.yspd = map(this.z, 0, 20, 4, 10);
    }
  }

  this.show = function() {
    let thick = map(this.z, 0, 20, 1, 3);
    strokeWeight(thick);
    stroke(255, 255,255,100);
    line(this.x, this.y, this.x, this.y+this.len);
  }
}

let back = document.getElementById('back');
back.addEventListener('click', toPg6);
function toPg6() {
  window.location.href = ("pg6.html");
}

let next = document.getElementById('next');
next.addEventListener('click', toPg8);
function toPg8() {
  window.location.href = ("pg8.html");
}
