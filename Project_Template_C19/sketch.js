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
createCanvas(windowWidth,windowHeight);// correcting the values by removing windows

//missile = createSprite(500,650,70,30);//remove
//missile.addImage("missile",missileImg);//remove
//missile.scale = 0.1;//remove

spacecraft = createSprite(900,900,70,35);
spacecraft.addImage("spacecraft",spacecraftImg);
spacecraft.scale = 0.5;

missileGroup = new Group();
alienshipGroup = new Group();

}

function draw() {
    background(0);
   textSize(30);
   text("score"+ score,180,50);
    

if(gameState === "play") {
  // call alienship function
      spawnalienship();
  if(keyDown("left_arrow"))
  {
     spacecraft.x = spacecraft.x -15;
  }
    if(keyDown("right_arrow"))
  { 
    spacecraft.x = spacecraft.x + 15;
  }
    if(keyDown("down_arrow"))
    { 
      spacecraft.y = spacecraft.y +3 
    }
    

   


  if (keyDown("space")) {
   createmissile();
  }


  if(missileGroup.isTouching(alienshipGroup)) {
    alienshipGroup.destroyEach();
    // gamestate="END";
    score = score+50;
  }

  if(alienshipGroup.isTouching(spacecraft)) {
    spacecraft.destroy();
    spacecraft.velocityY = 0;
    gameState = "end";
  }

  if (keyDown("space")) {
    //missile.velocityX = 0;
    //missile.velocityY = -6;
  }
}

else{//added
  console.log("game End"); //added


}//added
  drawSprites();
}
  

  function spawnalienship(){
    if (frameCount % 50 === 0){//corrected the divisor
      var alienship = createSprite (50,200);
      //var test = Math.round(random(600,1200));
      //console.log(test);
      alienship.x = Math.round(random(600,1200));
      alienship.addImage(alienshipImg);
      alienship.velocityY = 5;
      alienship.lifetime = 300;
      alienship.scale = 0.6;//correcting
      alienshipGroup.add(alienship);
      alienship.debug=true
      }
}


// creating missiles for ship
  function createmissile() {
    var missile = createSprite(900,900,70,30);
    missile.addImage(missileImg);
    missile.x = spacecraft.x;
    missile.y = spacecraft.y;
    missile.velocityY = -7;
    missile.lifetime = 300;
    missile.scale = 0.1;
    missileGroup.add(missile);
    missile.debug=true
  }

  
