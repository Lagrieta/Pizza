const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;


function setup(){
    var canvas = createCanvas(1880,630);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,3000,20);
    bird = new Bird(100,100);
    box1 = new Box(700,320,70,70);
}

function draw(){
    background("black");
    Engine.update(engine);
  
  if (bird.x > 0){
     box1.x = Math.round(random(120,400));
  }
   
    
    ground.display();
    bird.display();
    box1.display();
}
