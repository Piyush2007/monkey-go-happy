
var monkey , monkey_running  ; 
var banana ,bananaImage, obstacle, obstacleImage ;
var FoodGroup, obstacleGroup ; 
var score ;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("download (4).png");
 
}



function setup() {
   
  createCanvas(500,450);
  
  score = 0 ;
  
    monkey = createSprite(300,200,10,10); monkey.addAnimation("monkey_running",monkey_running);
    monkey.scale = 0.14
    //monkey.velocityY = 4;
  
    ground = createSprite(250,380,500,14);
    ground.x = ground.width /2;
    
    obstacleGroup = createGroup();
    FoodGroup = createGroup();
}


function draw() {

  background("white");
  
  monkey.collide(ground);
  
  score = score+Math.round(getFrameRate()/60);
  
  monkey.velocityY = monkey.velocityY + 2;
  
  if (keyDown("space")&&monkey.y >30){
   monkey.velocityY =- 5;}
      
    
  
  drawSprites();
  rock();
  food();
  
      
    textSize(19);
    stroke("skyblue");
    strokeWeight(2.5);
    fill ("indigo")
    text("Survival Time : "+score,250,40);
}

  function rock(){

    if (frameCount %300 == 0 ){

    obstacle = createSprite(600,345);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.33;
    obstacle.velocityX= -5;
    obstacle.depth = 1;
    obstacle.lifetime = 180;
    obstacleGroup.add(obstacle);
     

    }
  }

  function food(){

    if (frameCount % 100==0){

      var y ;
      y =  Math.round(random(50,200));
      banana = createSprite(500,200);
      banana.addImage(bananaImage);
      banana.velocityX =-3;
      banana.scale= 0.058
      banana.y = y;
      banana.lifetime = 180;
      FoodGroup.add(banana);
    }

  }





