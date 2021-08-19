const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg
var snow = []

function  preload() {
  bg = loadImage("snow6.jpg")
}
  

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  //ground = new Ground(400,395,800,10)
  
}

function draw() {
  background(bg);  
  Engine.update(engine)

  

  if(frameCount%10===0){
    snow.push(new Snow(random(0,800),-15,30,25))
  }

  for(var k = 0 ; k< snow.length; k++ ){
    snow[k].display();
  }
  
  //ground.display();
  
  drawSprites();

}

