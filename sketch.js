const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var obimg
var engine, world;
var ob
function preload(){
ob1img=loadImage("ob1.png")
ob2img=loadImage("ob2.png")
ob3img=loadImage("ob3.png")
}
function setup() {
  createCanvas(displayWidth-20,displayHeight-20);
  engine = Engine.create();
    world = engine.world;
    ob.addImage("ob",ob1img)

}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
callob();
drawSprites()
}
function callob(){
  if (frameCount % 60===0){
    ob=createSprite(displayWidth-20,displayHeight/2)
   ob.lifetime=200
   ob.velocityX=-3
    var ran=random(1,3)
    switch (ran){
      case 1: ob.addImage("ob",ob1img);break;
        case 2: ob.addImage("ob",ob2img);break;
          case 3: ob.addImage("ob",ob3img);break;
    }
  }
}