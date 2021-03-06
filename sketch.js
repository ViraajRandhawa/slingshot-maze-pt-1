const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1
var platform;
var payload, slingshot;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(770,320,70,70);
    box3 = new Box(840,320,70,70);
    box4 = new Box(910,320,70,70);
    box5 = new Box(980,320,70,70);

    box6 = new Box(730,240,70,70);
    box7 = new Box(800,240,70,70);
    box8 = new Box(870,240,70,70);
    box9 = new Box(940,240,70,70);

    box10 = new Box(770,160,70,70);
    box11 = new Box(840,160,70,70);
    box12 = new Box(910,160,70,70);

    box13 = new Box(810,80,70,70);
    box14 = new Box(880,80,70,70);

    box15 = new Box(850,0,70,70);

    payload = new Payload(100,100);
    slingshot = new SlingShot(payload.body,{x:200,y:100});
}
function draw(){
    background(255,165,0);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    payload.display();
    platform.display();
    slingshot.display();    
}
function mouseDragged() {
    Matter.Body.setPosition(payload.body,{x:mouseX,y:mouseY});
    
}
function mouseReleased() {
slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(payload.body);
    }
}