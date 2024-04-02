const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var planeO={
		isStatic: true
	}
	var b1_options={
		restitution:0.5,
		friction:0.02,
		frictionAir:0
	}
	var b2_options={
		restitution:0.7,
		friction:0.01,
		frictionAir:0.1
	}
	var b3_options={
		restitution:0.01,
		friction:1,
		frictionAir:0.3
	}
	block1= Bodies.circle(220,10,10,b1_options);
	World.add(world,block1);
	block2= Bodies.rectangle(110,50,10,10,b2_options);
	World.add(world,block2);
	block3= Bodies.rectangle(350,50,10,10,b3_options);
	World.add(world,block3);

	plane = Bodies.rectangle(600,580,1200,2,planeO);
    World.add(world,plane);

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(255);
	Engine.update(engine);


  /*
++++++++++++++++++++++++++++++++++++++++++++++
        Chame as funções para exibir os corpos
++++++++++++++++++++++++++++++++++++++++++++++
*/
rect(plane.position.x,plane.position.y,1200);
	ellipse(block1.position.x,block1.position.y,30);
	rect(block2.position.x,block2.position.y,50,50)
  	rect(block3.position.x,block3.position.y,100,50)	
  
  	drawSprites();
 
}


