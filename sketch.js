var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;
var banana;
var SurvivalTime;

function preload(){

  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(600,300)
  
  //creating monkey 
 monkey = createSprite(70,259,30,30);
 monkey.addAnimation("running",monkey_running);
 monkey.scale = 0.1; 
  
 //creating ground with the moving ability 
 ground = createSprite(300,298,600,10);
 ground.velocityX = -8
 ground.scale = 2
  
  FoodGroup = new Group();
  obstacleGroup = new Group();

  SurvivalTime = 0
}

function draw() {
 background(rgb(173,239,119))
  
  monkey.collide(ground)
  
  fill("black")
  textSize(20)
  text("Survival Time: "+SurvivalTime,250,20)
  SurvivalTime =Math.ceil(frameCount/frameRate()) 
  
    if(keyDown("space")&& monkey.y >= 250)
  {
    monkey.velocityY = -14
  }
  
  //adding gravity
  monkey.velocityY =monkey.velocityY + 0.8
  
  if(ground.x<0){
    ground.x = ground.width/2
  }
 drawSprites();
  
  food();
  block();
}
function food(){
  if(frameCount%80===0){
    banana = createSprite(570,Math.round(random(120,180)),20,20)
    banana.addImage(bananaImage)
    banana.scale = 0.1
    banana.velocityX = -5
    banana.lifetime = 200
    
    FoodGroup.add(banana)
  }
}
function block(){
  if(frameCount%300===0){
    obstacle = createSprite(580,255,20,20)
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.2
    obstacle.velocityX = -7
    obstacle.lifetime = 200
    
    obstacleGroup.add(obstacle);
  }
}




