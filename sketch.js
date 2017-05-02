var img;
var offset = -4;
var easing = 0.15;
var canvas;

function setup() {
      canvas = createCanvas(1500, 260);
      canvas.position(0, 48);
      img = loadImage("images/first.jpg");  // Load an image into the program
}

function draw() {
  image(img, 0, 0);  // Display at full opacity
  var dx = (mouseX-img.width/4) - offset;
  offset += dx * easing;
  tint(255, 90);  // Display at half opacity
  image(img, offset, 0);
}
