ChiaraForzoni.js
Details
Activity
LAST MONTH

Tommaso Elli shared an item
30 Jan.
Javascript
ChiaraForzoni.js

Can edit
patrizio canzi
LAST YEAR

Michele Mauri shared an item
18 Oct. 2016
Javascript
ChiaraForzoni.js

Can edit
Matteo Sacchi
M
MARIA JOSE DIAZ RIOS shared an item
18 Oct. 2016
Javascript
ChiaraForzoni.js

Can edit
Diego Alonso Montoya Jara

Michele Mauri shared an item
18 Oct. 2016
Javascript
ChiaraForzoni.js

Can view
Azzurra Pini

You renamed an item
18 Oct. 2016
Javascript
ChiaraForzoni.js
sketch.js

You uploaded an item
18 Oct. 2016
Javascript
sketch.js

New Team Drive

function setup() {
  createCanvas(520, 400)
  background('#FF9999')
  angleMode(DEGREES)
  frameRate(60)
  noStroke()
}

function draw() {
  //blucircle
  translate(200, 150)
  push()
  rotate(frameCount*3)
  fill( lerpColor( color('#1D71B8'), color('#FF9999'), (frameCount%100)/120) )
  arc( -60, 0, 10, 10, 0, 360, PIE)
 

pop()
push()
//blackcircle
  translate(80, 0)
  rotate(frameCount*3)
fill( lerpColor( color('#000000'), color('#FF9999'), (frameCount%100)/120) )

  arc( -60, 0, 10, 10, 0, 360, PIE)
 
pop()
  
push()
//redcircle
  translate(160, 0)
  rotate(frameCount*3)
   fill( lerpColor( color('#BE0D0D'), color('#FF9999'), (frameCount%100)/120) )
  arc( -60, 0, 10, 10, 0, 360, PIE)

pop()
  
push()
//greencircle
  translate(120, 80)
  rotate(frameCount*3)
  fill( lerpColor( color('#007F3C'), color('#FF9999'), (frameCount%100)/120) )
  arc( -60, 0, 10, 10, 0, 360, PIE)

pop()

push()
//yelowcircle
translate(40, 80)
rotate(frameCount*3)
fill( lerpColor( color('#E9D912'), color('#FF9999'), (frameCount%100)/120) )
  arc( -60, 0, 10, 10, 0, 360, PIE)
  
pop()

} 
