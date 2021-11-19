var ufo, ufoImage, ufosGroup;
var enemy, enemyImage, enemysGroup;
var meteor, meteorImage, meteorsGroup;
var gameState = "play";
var star, starImage, starsGroup;
var space, spaceImage;
var bag;
var bullet, bulletsGroup;
var score;
var invisibleBlock, invisibleBlockGroup;
var board;

function preload(){
    ufoImage = loadImage("ufo.gif");
    enemyImage = loadImage("red cop ufo.png");
    meteorImage = loadImage("potato meteor.png");
    starImage = loadImage("star.png");
    spaceImage = loadImage("wow.jpg");
}

function setup() {
 createCanvas(600,600);
 /*space = createSprite(300,300,600,600);
 space.addImage("wow.jpg",spaceImage);
 space.velocityY = 2;
 space.scale = 5;*/

 meteorsGroup = new Group();
 starsGroup = new Group();
 bulletsGroup = new Group();

 ufo = createSprite(300,300,50,30);
 ufo.addImage("ufo.gif",ufoImage);
 ufo.scale = 0.2;

 //
 

  score = 0;
}

function draw() {
    var x=1000;
    console.log(x);
    background("black");

    text("Score: "+ score, 500,20);
    
    
    if(gameState === "play"){
      createMeteors();
        score = score + Math.round(frameRate()/60);
        /*if(space.y > 400){
            space.y = 300
          }*/
          if (keyDown(LEFT_ARROW)) {
            ufo.x = ufo.x - 6;
          }
          if (keyDown(RIGHT_ARROW)) {
            ufo.x = ufo.x + 6;
          }
          if (keyDown("space")) {
            ufo.velocityY= -10;
          }
          ufo.velocityY = ufo.velocityY + 1;
          if (meteorsGroup.isTouching(ufo) || ufo.y > 600) {
            gameState = "end";
          } 
        }

    drawSprites();
    if (gameState==="end") {
        ufo.destroy();
        //space.velocityY = 0;
        meteorsGroup.setVelocityYEach(0);
        starsGroup.setVelocityYEach(0);
        textSize(30);
        text("Game Over!", 200,300);
      }
}

function createMeteors() {
    if (frameCount % 180 ===0) {
      meteor = createSprite(Math.round(random(100,540)),-30,30,50);
      meteor.velocityY = (4+2*score/100);
      meteor.addImage(meteorImage);
      meteor.scale = 0.3;
      /*star = createSprite(Math.round(random(100,540)),-50,40);
      star.addImage(starImage);
      star.scale = 0.05;*/
       //meteor.velocityY = 2;
      //star.velocityY = 2;
      meteor.lifetime = 450;
      //star.lifetime = 450;
      ufo.depth = star.depth; 
      ufo.depth = ufo.depth + 1;
      //starsGroup.add(star);
      meteorsGroup.add(meteor);
    }
    if (frameCount % 90 ===0) {
      star = createSprite(Math.round(random(100,540)),-50,40);
      star.velocityY = (4+2*score/100);
      star.addImage(starImage);
      star.scale = 0.05;
      //star.velocityY = 2;
      star.lifetime = 450;
      starsGroup.add(star);
    }
  }