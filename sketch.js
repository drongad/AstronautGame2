var gymAnimation, drinkAnimation, moveAnimation, eatAnimation, bathAnimation, brushAnimation, sleepAnimation,gym2Animation
var issImage
var iss, sleep, brush, gym, move, eat, bath, astronaut
var edges
function preload(){
  issImage = loadImage("iss.png")
  sleepAnimation = loadAnimation("sleep.png")
  brushAnimation = loadAnimation("brush.png")

  gymAnimation = loadAnimation( "gym1.png", "gym2.png")
  drinkAnimation = loadAnimation("drink1.png", "drink2.png")
  moveAnimation = loadAnimation("move.png","move.png","move1.png","move1.png");
  eatAnimation = loadAnimation("eat1.png", "eat2.png")
  bathAnimation = loadAnimation("bath1.png","bath2.png")
  gym2Animation = loadAnimation("gym11.png", "gym12.png")

}


function setup() {
  createCanvas(800,500);
  createSprite(400, 200, 50, 50);
  iss = createSprite(400,200)
  iss.addImage(issImage)
  iss.scale = 0.18
  astronaut = createSprite(300,230)
  astronaut.addAnimation("sleep", sleepAnimation)
  astronaut.scale = 0.1
  
}

function draw() {
  background("gray");
  drawSprites();
  fill("white")
  textSize(15)
  text("Instructions:", 10,15)  
  textSize(11)
  text("Up Arrow = Brushing", 10, 30)
  text("Down Arrow = Gymming", 10, 45)
  text("a key = Gymming 2", 10, 60)
  text("Left Arrow = Eating",10,75)
  text("Right Arrow = Bathing", 10 , 90)
  text("m key = Moving", 10, 105)
  edges = createEdgeSprites()
  astronaut.bounceOff(edges)
  if(keyDown("up")){
    astronaut.addAnimation("brushing", brushAnimation)
    astronaut.changeAnimation("brushing")
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }
  if(keyDown("down")){
    astronaut.addAnimation("gymming", gymAnimation)
    astronaut.changeAnimation("gymming")
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }
  if(keyDown("a")){
    astronaut.addAnimation("gymming2", gym2Animation)
    astronaut.changeAnimation("gymming2")
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }
  if(keyDown("left")){
    astronaut.addAnimation("eating",eatAnimation)
    astronaut.changeAnimation("eating")
    astronaut.y = 350
    astronaut.velocityY = 1
    astronaut.velocityX = 1

  }
  
  
   
  
  

  if(keyDown("right")){
    astronaut.addAnimation("bathing", bathAnimation)
    astronaut.changeAnimation("bathing")
    astronaut.velocityX = 0
    astronaut.velocityY = 0
    astronaut.y = 350
  }
  if(keyDown("m")){
    astronaut.addAnimation("move", moveAnimation);
    astronaut.changeAnimation("move");
    astronaut.y = 350
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }
}