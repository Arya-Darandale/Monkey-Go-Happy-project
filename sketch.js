var BananaImage,monkey,monkey_running,obstacleImage;
var FoodGroup, obstacleGroup,backgroundImg,score;


function preload(){
 
  
  monkey_running    =loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
 bananaImage = loadImage("banana.png");
 backgroundImg=loadImage("jungle.jpg");
 obstacle_img = loadImage("stone.png");
}


function setup() {
  createCanvas(600,600);
 
 // Background = loadImage("jungle.jpg");
  //  Background.velocityX = -4;
  
  background1=createSprite(200,200,400,400);
  background1.addImage(backgroundImg);
  background1.x = background1.width/2;
  background1.velocityX = -4;
  background1.scale=1.5;
  
  monkey=createSprite(80,480,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.15; 

  ground=createSprite(450,500,900,20);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  ground.visible=false;
  
  FoodGroup=createGroup();
  obstacleGroup=createGroup();
  
  score=0;
  
}

function draw() {
  background(220);
  
  stroke("blue");
  textSize(20);
  fill("yellow");
  text("Score: "+ score,500,50);
  
  
  // reset the moving background
  if(background1.x<0){
    
    background1.x = background1.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY=-12;
    }
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  
  if (FoodGroup.isTouching(monkey)){
    score=score+2;
    FoodGroup.destroyEach();
   // monkey.scale=monkey.scale+0.02;
  }
  
  
  switch (score){
    case 10: monkey.scale=0.2;
            break;
    case 20: monkey.scale=0.4;
            break;
    case 30: monkey.scale=0.6;
            break;
    case 40: monkey.scale=0.8;
            break;
    default:break;
  }
  
  if (obstacleGroup.isTouching(monkey)){
    
    
   //monkey.scale=monkey.scale-0.2; ->This code will make your monkey walk upside down
    
    // just try the below one
    monkey.scale =0.15;
    
   obstacleGroup.destroyEach(); 
    
    
    
    
  
 
}
  
  monkey.collide(ground);
  
  food();
  obstacles();
 drawSprites();
  text("Score: "+ score,500,50);
   
}

function food(){
  if(frameCount%80===0){
   var banana=createSprite(600,165,10,40); 
     banana.y= Math.round(random(220,300));
    banana.velocityX = -6;
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.lifetime=200;

    FoodGroup.add(banana);
  }
}
function obstacles(){
   if (frameCount %300===0){
   var obstacle = createSprite(600,480,10,40);
     //obstacle.y= Math.round(random(120,200));
     obstacle.velocityX = -4;
     obstacle.addImage(obstacle_img);
     obstacle.scale=0.25;
     obstacle.lifetime=200;
     
     obstacleGroup.add(obstacle);
   }
}
