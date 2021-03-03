var background, backgroundImage;
var bow, bowImage;
var arrow, arrowImage, arrowGroup;
var  green_balloon, green_balloonImage, greenB;
var  red_balloon, red_balloonImage, redB;
var pink_balloon, pink_balloonImage, pinkB;
var blue_balloon, blue_balloonImage, blueB; 

var score=0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}

function setup() {
  createCanvas(600, 600);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 3;
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   //  red_balloon = createSprite(50, 180, 1, 1);
  // red_balloon.addImage(red_balloonImage)
  //   red_balloon.scale = 0.1
  
  //create line of red balloons using for loop
  //for(var i=60;i<390;i=i+60){
  //red_balloon = createSprite(50, i, 1, 1);
  //red_balloon.addImage(red_balloonImage);
  //red_balloon.scale = 0.1
  //}
 
  

  //create line of green balloons using for loop
  //for(var i=110;i<390;i=i+60){
  //green_balloon = createSprite(100, i, 10, 10);
  //green_balloon.addImage(green_balloonImage);
  //green_balloon.scale = 0.1;
  //}

  
  //create line of blue balloons using for loop
  //for(var i=130;i<350;i=i+60){  
  //blue_balloon = createSprite(140, i, 10, 10);
  //blue_balloon.addImage(blue_balloonImage);
  //blue_balloon.scale=0.1;
  //}
  
  //create line of purple balloons using for loop
  //for(var i=180;i<250;i=i+60){
  //pink_balloon = createSprite(180, i, 10, 10);
  //pink_balloon.addImage(pink_balloonImage);
  //pink_balloon.scale = 1.2;
  //}
 
  arrowGroup = new Group();
  blueB = new Group();
  redB = new Group();
  pinkB = new Group();
  greenB = new Group();
  
}

function draw() {
  // moving ground
    background.velocityX = -3 ;

    if (background.x < 0){
      background.x = background.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
  }
  
  var select_balloon = Math.round(random(1,4));
  console.log(select_balloon);
  
  if(World.frameCount % 80 == 0){
    if(select_balloon==1){
      redBalloon();
    } else if(select_balloon==2){
      greenBalloon();
    } else if(select_balloon==3){
      blueBalloon();     
    } else{
      pinkBalloon();  
    }
  }
  
  if(arrowGroup.isTouching(redB)){
    redB.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }
    if(arrowGroup.isTouching(greenB)){
    greenB.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }
    if(arrowGroup.isTouching(pinkB)){
    pinkB.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }
    if(arrowGroup.isTouching(blueB)){
    blueB.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }
  
  drawSprites();
  textSize(20);
  text("Score: "+score,500,100);

}

// Creating  arrows for bow
function createArrow() {
  arrow= createSprite(100,100,60,10);
  arrow.addImage(arrowImage);
  arrow.x=360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime=100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
}
function redBalloon() {
var red = createSprite(0,Math.round(random(100,370)),10,10);
  red.addImage(red_balloonImage);
  red.velocityX=3;
  red.lifetime=200;
  red.scale=0.1;
  redB.add(red);
}
function greenBalloon() {
  var green = createSprite(0,Math.round(random(100,370)),10,10);
  green.addImage(green_balloonImage);
  green.velocityX=3;
  green.lifetime=200;
  green.scale=0.1;
  greenB.add(green);
}
function blueBalloon() {
  var blue = createSprite(0,Math.round(random(100,370)),10,10);
  blue.addImage(blue_balloonImage);
  blue.velocityX=3;
  blue.lifetime=200;
  blue.scale=0.1;
  blueB.add(blue);
}
function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(100,370)),10,10);
  pink.addImage(pink_balloonImage);
  pink.velocityX=3;
  pink.lifetime=200;
  pink.scale=1;
  pinkB.add(pink);
}