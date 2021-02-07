const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var man, manImg;
//var maxDrops=100;
var drop1;

function preload(){
    manImg = loadImage("images/WalkingFrame/walking_1.png");
}

function setup(){
   createCanvas(500, 830);
    
   man = createSprite(250, 660, 50, 50);
   man.addImage("manImg", manImg);
   man.scale=0.5;

}

function draw(){
   background("black");
    
    drop1 = new Drops(250, 50);
    

   drawSprites();
}   

