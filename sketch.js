const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var box1, box2;


function setup() {

    createCanvas(400,400);

    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    box1 = new Box(100,100,50,50);
    box2 = new Box(200,100,50,100);

    
    console.log(box);


}

function draw() {
    background(0);
    box1.display();
    box2.display();
   
}