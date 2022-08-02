var gameState = "serve";
var backgroundImg;
var GoingDownEnd;
var bp1,bp2,bp3;
var mp1, mp2, mp3;
var tp1,tp2, tp3;
var v1, v2, v3, v4, v5, v6, v7, v8, v9;
var evilUni, goodUni;
var gameOver;
var isPressed = false;

function preload(){
  backgroundImg = loadImage("Background.jpeg");
  GoingDownEnd = loadImage("Going down princess.jpeg");

  bp1= loadImage("botton piece 1.jpeg");
  bp2= loadImage("bottom piece 2.jpeg");
  bp3= loadImage("bottom piece 3.jpeg");

  mp1= loadImage("Middle piece 1.jpeg");
  mp2= loadImage("Middle Piece 2.jpeg");
  mp3= loadImage("middle piece 3.jpeg");

  tp1= loadImage("top peice 1.jpeg");
  tp2= loadImage("top piece 2.jpeg");
  tp3= loadImage("top piece 3.jpeg");

  evilUni= loadImage("Evil unicorn.png");
  goodUni= loadImage("Good unicorn.png");

  gameOver = loadSound("game over.mp3");

}




function setup() {
  createCanvas(windowWidth,windowHeight);
  
  v1= createSprite(130,200,200,200);
  v1.shapeColor = "pink";  
  v1.addImage(tp1);
  v1.scale = 0.43;

  v2= createSprite(350,200,200,200);
  v2.shapeColor = "lightblue";
 
  v3= createSprite(570,200,200,200);
  v3.shapeColor = "pink";
  
  v4= createSprite(130,410,200,200);
  v4.shapeColor = "lightblue";
  
  v5= createSprite(350,410,200,200);
  v5.shapeColor = "lightgreen";
  v5.addImage(mp2);
  v5.scale = 0.43;

  v6= createSprite(570,410,200,200);
  v6.shapeColor = "lightblue";
  
  v7= createSprite(130,620,200,200);
  v7.shapeColor = "lightgreen";
  v7.addImage(bp1);
  v7.scale = 0.43;

  v8= createSprite(350,620,200,200);
  v8.shapeColor = "pink";
  
  v9= createSprite(570,620,200,200);
  v9.shapeColor = "lightgreen";
  v9.addImage(bp3);
  v9.scale = 0.43;

  evilUniPlace = createSprite(800,500,200,200);
evilUniPlace.shapeColor = "white";
evilUniPlace.addImage(evilUni);
evilUniPlace.scale = 0.7;

goodUniPlace = createSprite(1300,570,200,200);
goodUniPlace.shapeColor = "white";
goodUniPlace.addImage(goodUni);
goodUniPlace.scale = 0.7;
  
}

function draw() {
  if(gameState == "serve"){
    background("white");
textSize(25);
fill("pink");
text("Welcome to Save the princess. You have to save the princess by finishing the puzzle.", 10,200);
text("You can finish the puzzle by clicking the number 1-9.",10,260);
fill("lightgreen");
text("The evil unicorn traped the princess in the tower, you have to make the unicorn nice again.",10,230);
fill("lightblue");
text("Press Enter or Return to start the game!",10,290);

evilUniPlace.visible=true;
goodUniPlace.visible=false;

v1.visible=false;
v2.visible=false;
v3.visible=false;
v4.visible=false;
v5.visible=false;
v6.visible=false;
v7.visible=false;
v8.visible=false;
v9.visible=false;

if(keyDown("enter")){
  gameState = "play";
}
  }
  
  if(gameState == "play"){
  

  background(backgroundImg);

  v1.visible=true;
  v2.visible=true;
  v3.visible=true;
  v4.visible=true;
  v5.visible=true;
  v6.visible=true;
  v7.visible=true;
  v8.visible=true;
  v9.visible=true;

  evilUniPlace.visible=false;
  goodUniPlace.visible=false;
  //hmmmmm...

if(keyDown("1")){
  v1.addImage(tp1);
  v1.scale = 0.43;
  isPressed = true;
  }

if(keyDown("2")){
  v2.addImage(tp2);
  v2.scale = 0.43;
  isPressed = true;
}
if(keyDown("3")){
  v3.addImage(tp3);
  v3.scale = 0.43;
  isPressed = true;
}
if(keyDown("4")){
  v4.addImage(mp1);
  v4.scale = 0.43;
  isPressed = true;
}
if(keyDown("5")){
  v5.addImage(mp2);
  v5.scale = 0.43;
  isPressed = true;
}
if(keyDown("6")){
  v6.addImage(mp3);
  v6.scale = 0.43;
  isPressed = true;
}
if(keyDown("7")){
  v7.addImage(bp1);
  v7.scale = 0.43;
  isPressed = true;
}
if(keyDown("8")){
  v8.addImage(bp2);
  v8.scale = 0.43;
  isPressed = true;

  gameState = "end";
}
if(keyDown("9")){
  v9.addImage(bp3);
  v9.scale = 0.43;
  isPressed = true;
  

}
fill("white")
  textSize(50);
  
  text("1",130,200);
  textSize(50);
  
  text("2",350,200);
  textSize(50);
  
  text("3",570,200);
  textSize(50);
  
  text("4",130,410);
  textSize(50);
 
  text("5",350,410);
  textSize(50);
  
  text("6",570,410);
  textSize(50);
 
  text("7",130,620);
  textSize(50);
  
  text("8",350,620);
  textSize(50);
  
  text("9",570,620);

  }
  if(gameState == "end"){
background(GoingDownEnd);
v1.visible = false;
v2.visible = false;
v3.visible = false;
v4.visible = false;
v5.visible = false;
v6.visible = false;
v7.visible = false;
v8.visible = false;
v9.visible = false;
evilUniPlace.visible=false;
goodUniPlace.visible=true;

gameOver.play();
}
  drawSprites();

}