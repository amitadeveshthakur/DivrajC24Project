const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperball,dustside1V,dustside2V,dustside3H,ground1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperball=new paper(200,50,40);
	dustside1V=new dustbin(600,540,10,50);
	dustside2V=new dustbin(700,540,10,50);
	dustside3H=new dustbin(650,560,100,10);
	ground1=new ground(400,580,800,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paperball.display();
  ground1.display();
  dustside1V.display();
  dustside2V.display();
  dustside3H.display();
  
  drawSprites();

  //keyPressed();
}

function keyPressed(){
	
if(keyCode===UP_ARROW){

	Matter.Body.applyForce(paperball.body,paperball.body.position,{x:25,y:-40})
	
}
}
