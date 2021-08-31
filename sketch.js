var runner, runnerImg
var bg
var path
var ground
var diamond
var diamondImg
var obstaclesGroup, obstacle1, obst;
var score=0;
var monster1,monster2,monster3
var monsterGroup
var monster1img, monster2img, monster3img
var gamestate = "Play"
var keyImg, key
var gameoverImg
var gameover
var restart, restartImg
var youWinImg, youWin
function preload(){
   runnerImg = loadImage("Hero.gif")
  
bg = loadImage("rock.jpg")
  diamondImg = loadImage("me.jpg")
  obstacle1 = loadImage("moralta.png")
  monster1img = loadImage("Monster1.gif")
  
  monster2img = loadImage("Monster2.gif")
  monster3img = loadImage("Monster3.gif")
  gameoverImg = loadImage("Game.png")
  diamondImg = loadImage("diamond.png")
  
   keyImg = loadImage("Key1.jpg")
   youWinImg = loadImage("Youwin.png")
restartImg = loadImage("restart.png")
}

function setup() {
 createCanvas(1250,600)
  path=createSprite(1,300,4950,100);
path.addImage(bg);
path.x = path.width/2 -6550;
  path.velocityX = -2
  path.scale = 0.85

  
  
  runner = createSprite(100,500,90,90)
  runner.addImage(runnerImg)
runner.scale = 0.5
  // runner.velocityX = 0.9
  runner.setCollider("rectangle",0,0,30,runner.height);
  runner.debug = true;
  
  restart = createSprite(300,140);
  restart.addImage(restartImg);
  
 
  restart.scale = 0.5;
  restart.visible = false;


ground = createSprite(100,610,6000,5)
  ground.visible = false
  monsterGroup = new Group() 
  
  key.visible = false

  gameOver = createSprite(300,100);
  gameOver.addImage(gameoverImg); 
  gameOver.scale = 0.75
  gameOver.visible = false;



}

function draw() {
 background("white")

fill("black")
 
if(gamestate === "Play"){
  score = score + Math.round(frameCount/60);

if(keyDown("space")) {
  runner.y = runner.y-23
}
     runner.velocityY = runner.velocityY + 0.2


  console.log(score)

if (path.x < 0){
  path.x = path.width/4 ;
}
if(frameCount%500===0){
  
  key = createSprite(600,500,100, 100);
  key.addImage(keyImg)
  key.scale = 0.5;
  
  console.log("yes")
  gamestate = "Pause"
 
 
}




  
  
runner.collide(ground)
createCash()


createMonster()
if(monsterGroup.isTouching(runner)){
  gamestate = "End"
}
}
if(gamestate=== "End"){
  gameOver.visible = true;
  restart.visible = true;
  path.velocityX = 0
 runner.velocityX = 0
 runner.velocityY = 0
 monsterGroup.setVelocityXEach(0)
 monsterGroup.setLifetimeEach(-1)
 if(mousePressedOver(restart)) {
   score =0 
  gamestate = "Play"
}

 
 
}
if(gamestate === "Pause"){
  score = 0 
  key.visible = false
 
  gamestate = "Play"

  
}
if(frameCount%7000 === 0){
  diamond = createSprite(500,100,29,20)
  diamond.addImage(diamondImg)
 
}
console.log(frameCount)


  drawSprites() 
  textSize(25)
  text("Score: "+ score, 500,50);
}
  
  

  
  
  
    function createCash() {
  if (World.frameCount % 50 == 0) {
  var obst = createSprite(Math.round(random(50, 350),40, 10, 10));
  obst.addImage(obstacle1);
  obst.scale=0.01;
  obst.velocityY = 3;
  obst.lifetime = 150;
 
  }  
  
    
  
}

function createMonster() {
  if (frameCount % 90 === 0){
     var monster = createSprite(1890,560,90,40); 
     monster.velocityX = -6; 
     
var rand = Math.round(random(1,3)); 
    switch(rand) { 
     case 1: monster.addImage(monster1img); 
     
      break;
        case 2: monster.addImage(monster2img);
         break;
         case 3: monster.addImage(monster3img); 
       
           
        default: break;
           }
           monster.scale = 0.3
           monster.lifetime = 300
           monsterGroup.add (monster)
}



}






























