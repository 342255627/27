
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
bobObject1 = new Bob(40,40,200,50);
bobObject2 = new Bob(40,90,200,50);
bobObject3 = new Bob(40,140,200,50);	
bobObject4 = new Bob(40,190,200,50);
bobObject5 = new Bob(40,230,200,50);
rope1=new rope(bobObject1.body,roofObject.body,-bobOianeter*2,0)

engine = Engine.create();


	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  drawSprites();
 display()
 {
var pointA=this.rope.bodyA.position;
var pointB=this.rope.bodyB.position;

strokeWeight(2);

var Anchor1X=pointA.x
var Anchor1Y=pointA.y
 
var Anchor1X=pointA.x+this.offsetX
var Anchor1Y=pointA.y+this.offsetY

line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
}
}



