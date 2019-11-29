let drops = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(40,40,40);
  for (let i = 0; i < 500; i++) {
    drops[i] = new Drop();
  }
}

function draw() {
  background(40,40,40);
  for (let i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }
}
