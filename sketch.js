// function setup() {
//   createCanvas(800,400);
//   createSprite(400, 200, 50, 50);
// }

// function draw() {
//   background(255,255,255);  
//   drawSprites();
// }

var snowyBackground;
var child1;
var child2;

function preload(){
  snowyBackground = loadImage("snow1.jpg");
  //child1 = loadAnimation("child1.png","child2.png");
 // child2 = loadImage("child2.png");

}
 
function setup() {
  createCanvas(800,400);


  
  tom = createSprite(400,200,80,30);
  //tom.addAnimation("childPlaying",child1);

}

function draw() {
  background(snowyBackground);  




  drawSprites();
}