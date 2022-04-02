console.log('Hello Javascript');

let angle = 0;
let sz = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
 

function draw() {
  background(0);

  rectMode(CENTER);

  //start the square in the middle of the screen:  
  translate (width/2,height/2);

   // The translate() function allows objects to be moved to any location within the window. The first parameter sets the x-axis offset and the second parameter sets the y-axis offset. 

  rotate(angle);
  square(0,0,sz);
  
  stroke('red');
  strokeWeight(10);
  noFill();

  //making the squares larger and moving their angle
  angle+=1
  sz+=1
 
  //once the size is the same as the height of the screen, start the animation again
  if(sz > height){
    sz=0;
  }
}

