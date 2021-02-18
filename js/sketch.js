
let col;

let star;

function preload(){
  star = loadImage("images/star.png");
}

function setup() {
  // put setup code here to run once
  createCanvas(windowWidth, windowHeight);

col = {
  r1 : 215,
  g1 : 222,
  b1 : 221,
  r2 : 30,
  g2 : 43,
  b2 : 64,
}

}


function draw() {
  // put drawing code here to run in a loop
background(col.r1, col.g1, col.b1);

fill(255, 255, 255);
for(let i = 0; i <= 50; i++){
    for(let j = 0; j <=50; j++){
    circle(80*i, 80*j, 5);
    circle(80*i + 80, 80*j + 80, 5);

  }
  }

fill(255, 250, 219);
circle(windowWidth/2, 620, 200);

noStroke();
fill(col.r2, col.g2, col.b2);
rect(0, 600, windowWidth, 500);

textSize(20);
fill(143, 146, 156);
text('dawn', 20, 30);

textSize(20);
fill(143, 146, 156);
text('at', 20,55);

textSize(20);
fill(143, 146, 156);
text('sea', 20,80);

}

function keyPressed(){
  if (col.r1 == 215 && col.g1 == 222 && col.b1 == 221){

    col.r1 = 237;
    col.g1 = 190;
    col.b1 = 180;
  }
  else { col.r1 = 215
         col.g1 = 222
         col.b1 = 221
       }
}



function mouseClicked(){
  if (col.r2 == 30 && col.g2 == 43 && col.b2 == 64){
    col.r2 = 87;
    col.g2 = 124;
    col.b2 = 156;
  }
  else { col.r2 = 30
         col.g2 = 43
         col.b2 = 64
       }
}
