var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var drinkImg,drink;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  drinkImg = loadImage ("energyDrink.png")
}

function setup(){
  
  createCanvas(400,400);
  
  // Mover el fondo
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2;

  //crear sprite de niño corriendo
  boy = createSprite(180,340,30,30);
  boy.scale=0.08;
  boy.addAnimation("JakeRunning",boyImg);
    

  leftBoundary=createSprite(0,0,100,800);
  leftBoundary.visible = false;


  rightBoundary=createSprite(410,0,100,800);
  rightBoundary.visible = false;
  
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //código para reiniciar el fondo

  if(path.y > 400 ){
    path.y = height/2;
  }
  drawSprites();
  crearedrink();
}

function crearedrink (){
  var velocidad = (random(1,5))
  var frecuencia = round(random(100,200));
if (frameCount %frecuencia === 0){
  drink=createSprite (200,100)
  drink.addImage (drinkImg);
  drink.scale = 0.2;
  drink.velocityY = velocidad;
}


}