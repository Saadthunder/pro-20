
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 var plane;
var block1;
var angle1=60;
var angle2=60;
var angle3=60;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world; 
  var plane_options={
   isStatic: true
}
  
	//Create the Bodies Here.
   plane=Bodies.rectangle(200,650,1200,20,plane_options);
   World.add(world,plane);
	 rectMode(CENTER);
   block1=Bodies.rectangle(200,400,200,20,plane_options);
   World.add(world,block1);
   rectMode(CENTER);
   block2=Bodies.rectangle(600,400,200,20,plane_options);
   World.add(world,block2);
   rectMode(CENTER);
   rotator1=Bodies.rectangle(400,200,15,120,plane_options);
   World.add(world,rotator1);
   rectMode(CENTER);
   rotator2=Bodies.rectangle(400,200,120,15,plane_options);
   World.add(world,rotator2);
   rectMode(CENTER);
   rotator3=Bodies.rectangle(400,200,120,15,plane_options);
   World.add(world,rotator2);
   rectMode(CENTER)
   Engine.run(engine);
}

function draw() {
  
  background(51);
  
  Engine.update(engine);
  rect(plane.position.x,plane.position.y,1200,20);

  rect(block1.position.x,block1.position.y,200,20);
  rect(block2.position.x,block2.position.y,200,20);

 
  rect(rotator2.position.x,rotator2.position.y,120,15);
  rect(rotator3.position.x,rotator3.position.y,120,15);


  Matter.Body.rotate(rotator1,angle1);
  push();
  translate(rotator1.position.x,rotator1.position.y);
  rotate(angle1);
   rect(0,0,15,120);
  pop();
  angle1=angle1+10;

  drawSprites();
 
}










