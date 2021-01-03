var monkey, monkey_running;
var banana, pear, pearImage, bananaImage, obstacle, obstacleImage, backgroundImage;
var FoodGroup, obstacleGroup;
var background1;
var score, survivalTime;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  backgroundImage = loadImage("background.png");
  pearImage = loadImage("yellowPear.png");

}



function setup() {
  createCanvas(550, 550);

  monkey = createSprite(100, 450, 100, 100);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.23;
  
  
  
  background1 = createSprite(200, 200, 50, 1);
  background1.addImage(backgroundImage);
  background1.scale = 1;
  background1.velocityX = -10;
  background1.depth = monkey.depth;
  monkey.depth = monkey.depth + 1;


  ground = createSprite(200, 500, 600, 10);
  ground.visible = (false);



  foodGroup = createGroup();
  survivalTime = 0;
  score = 0;




}


function draw() {



  if (background1.x < 130) {

    background1.x = background1.width / 2;
  }


  if (monkey.isTouching(foodGroup)) {

    foodGroup.destroyEach();
    score = score + 1;

  }

  survivalTime = survivalTime + Math.round(getFrameRate() / 60.3);


  if (keyDown("space") && monkey.y >= 400) {

    monkey.velocityY = -19;

  }

  monkey.velocityY = monkey.velocityY + 0.9;


  monkey.collide(ground);



  food();
  obstacles();
  drawSprites();

  stroke("black");
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 40);

  stroke("black");
  textSize(20);
  fill("white");
  text("Survival Time : " + survivalTime, 380, 70);



}

function food() {
  if (frameCount % 80 === 0) {

    var fruits = createSprite(500, Math.round(random(120, 300)), 1, 1);

    var rand = Math.round(random(2, 1));

    switch (rand) {

      case 1:
        fruits.addImage(bananaImage);
        fruits.scale = 0.2;
        fruits.velocityX = -13;
        break;

      case 2:
        fruits.addImage(pearImage);
        fruits.velocityX = -13;
        fruits.scale = 0.4;
        break;

    }

    
          
    foodGroup.add(fruits);
  }
}


function obstacles() {
  if (frameCount % 300 === 0) {

    obstacle = createSprite(450, 439, 1, 1);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.3;
    obstacle.velocityX = -10;




  }




}