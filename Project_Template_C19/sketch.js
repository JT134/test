var alienshipImg, alienship, alienshipGroup;
var spacecraftImg, spacecraft;
var missileImg, missile, missileGroup;
var gameState = "play";
var score = 0;

function preload(){
alienshipImg = loadImage("alien ship.png");
missileImg = loadImage("missile.png");
spacecraftImg = loadImage("spacecraft.png");
gameoverImg = loadImage("game over.png");
}

function setup() {
createCanvas(windowWidth,windowHeight);

missile = createSprite(900,900,70,30);
missile.addImage("missile",missileImg);
missile.scale = 0.1;

spacecraft = createSprite(900,900,70,35);
spacecraft.addImage("spacecraft",spacecraftImg);
spacecraft.scale = 0.5;

missileGroup = new Group();
alienshipGroup = new Group();

}

function draw() {
    background(0);
   textSize(30);text("score"+ score,180,50);
    

if(gameState === "play") {
  if(keyDown("left_arrow")){
    spacecraft.x = spacecraft.x -15;}
    if(keyDown("right_arrow"))
    { spacecraft.x = spacecraft.x + 15;}
    if(keyDown("down_arrow"))
    { spacecraft.y = spacecraft.y +3 }
    

   // call alienship function
      spawnalienship();


  if (keyDown("space")) {
    createmissile();
  }

  if(missileGroup.isTouching(alienshipGroup)) {
    alienship.destroyEach();
    score = score+50;
  }

  if(alienshipGroup.isTouching(spacecraft)) {
    spacecraft.destroy();
    spacecraft.velocityY = 0;
    gameState = "end";
  }

  if (keyDown("space")) {
    missile.velocityX = 0;
    missile.velocityY = -6;
  }
}
  drawSprites();
}
  

  function spawnalienship(){
    if (frameCount % 500 === 0){
      var alienship = createSprite (50,200);
      var test = Math.round(random(windowWidth,windowHeight));
      console.log(test);
      alienship.x = Math.round(random(windowWidth,windowHeight))
      alienship.addImage(alienshipImg);
      alienship.velocityY = 5;
      alienship.lifetime = 900;
      alienship.scale = 0.6;
      alienshipGroup.add(alienship);
      }
}


// creating missiles for ship
  function createmissile() {
    var missile = createSprite(900,900,70,30);
    missile.addImage(missileImg);
    missile.x = spacecraft.x;
    missile.y = spacecraft.y;
    missile.velocityY = -6;
    missile.lifetime = 900;
    missile.scale = 0.1;
  }
