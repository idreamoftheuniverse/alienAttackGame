var bgImage,ground
var spaceCraft,spaceCraftImg;
var alien1,alienImage1;
var alien2,alienImage2;
var alien3,alienImage3;


function preload(){
bgImage = loadImage("images/background.jpg")
spaceCraftImg = loadImage("images/spacecraft.png")
alienImage1=loadImage("images/aliencraft1.png")
alienImage2=loadImage("images/aliencraft2.png")
alienImage3=loadImage("images/aliencraft3.png")
}

function setup() {
  createCanvas(1100,680);
  

  ground = createSprite(0,300,1600,800)
  ground.addImage("background",bgImage)
  //ground.scale = 0.5

  spaceCraft = createSprite(100,340,60,60)
  spaceCraft.addImage("spacecraft",spaceCraftImg)
  spaceCraft.scale = 0.2

  alien1 = createSprite(800,340,60,60)
  alien1.addImage("alien1",alienImage1)
  alien1.scale = 0.3

  alien1 = createSprite(800,340,60,60)
  alien1.addImage("alien1",alienImage1)
  alien1.scale = 0.3

  alien2 = createSprite(800,600,60,60)
  alien2.addImage("alien2",alienImage2)
  alien2.scale = 0.2

  alien3 = createSprite(800,100,60,60)
  alien3.addImage("alien3",alienImage3)
  alien3.scale = 0.4

}

function draw() 
{
  background("black");
if(ground.x<400){
  ground.x = ground.width/2
}
  ground.velocityX = -3


  if(keyDown("up")){
    spaceCraft.y = spaceCraft.y-5
  }

  if(keyDown("down")){
    spaceCraft.y = spaceCraft.y+5
  }

  drawSprites();
}




