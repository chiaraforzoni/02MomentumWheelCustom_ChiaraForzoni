function setup() {
  createCanvas(800, 600);
  angleMode(DEGREES);
}

function draw() {
  translate(frameCount,height/2);
  rotate(frameCount)
  fill(255)
  arc(0, 0, 50, 50, 0, 90, PIE);
  fill(255,102,0)
  arc(0, 0, 50, 50, 90, 180, PIE);
  fill(255)
  arc(0, 0, 50, 50, 180, 270, PIE);
  fill(102,255,102)
  arc(0, 0, 50, 50, 270, 360, PIE);
}