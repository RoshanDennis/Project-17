var PLAY = 1;
var END = 0;
var obstacle;
var monkey, monkey_running,
bananaImage;
var score;
var obstacleImage;
var survivalTime=0;
var banana


function  preload(){
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  
  
  obstacleImage = loadImage("obstacle.png");
bananaImage=loadImage("banana.png");
  

}

function setup() {
  createCanvas(600, 200);
 
  
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving" ,monkey_running)
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  
  ground.velocityX=-4;
  ground.x = ground.width/2;
  console.log(ground.x)
  
 
  
  //create Obstacle and Cloud Groups
bananaGroup=createGroup();
obstacleGroup= createGroup();
  
  console.log("Hello" + 5);
  
  monkey.setCollider("circle",0,0,40);
  monkey.debug = true
  
  score = 0
}

function draw() {
  background("white");
  //displaying score
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score,500,50);
  
stroke("black");
textSize(20);
fill("black");
survivalTime=Math.ceil(frameCount/frameRate())
text("Survival Time: "+ survivalTime, 100,50);
  
  obstacleGroup.setLifetimeEach(-1);
    bananaGroup.setLifetimeEach(-1);
     
     obstacleGroup.setVelocityXEach(0);
     bananaGroup.setVelocityXEach(0);    
  
    //move the ground
    ground.velocityX = -4;
    //scoring
    score = score + Math.round(frameCount/60);
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >=100) {
        monkey.velocityY = -13;
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
    
  
      
    
  }
  
   

     
    
{
  
 
  spawnobstacle();
  spawnfood();
  
  
  drawSprites(); 
}

function spawnobstacle(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(400,165,10,40);
   
    //generate random obstacles
   // var rand = Math.round(random(1,1));
    
       obstacle.addImage(obstacleImage);
        obstacle.velocityX = -6;         
    obstacle.scale = 0.5;
    obstacle.lifetime = 360
    obstaclesGroup.add(obstacle);
 
}

function spawnfood() {
  //write code here to spawn the clouds
   if (frameCount % 80 === 0) {
    banana=createSprite(200,300)
    banana.y = Math.round(random(10,60));
banana.addImage(bananaImage);
    banana.scale = 0.5;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 134;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //adding cloud to the group
   bananaGroup.add(banana);
     }
}

