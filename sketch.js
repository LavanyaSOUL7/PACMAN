var pacman;
// pacman , blox , ghosts , small balls , big balls;

function preload() {
pacmanRight = loadAnimation("p1.png","p2.png","p3.png");

}

function setup() {
  createCanvas(400,400);
  pacman = createSprite(200,200,30,30);
  pacman.addAnimation("pacmanRight",pacmanRight)

}

function draw() 
{
   background(30);


  drawSprites();
}




