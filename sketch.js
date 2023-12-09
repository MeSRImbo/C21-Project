
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var ball_options={
		isStatic:false,
		restitution:0,
		friction:0,
		density:1.2
	}


	engine = Engine.create();
	world = engine.world;
	
	ball = Bodies.circle(200,200,20,{restitution:0});
  	World.add(world, ball)
	ground = new Ground(width/2,670,width,20)
	leftSide = new Ground(500,600,20,120)
	rightSide = new Ground(700,600,20,120)

	rectMode(CENTER);
	ellipseMode(RADIUS);
}

function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.04,y:-0.04})
	}
}

function draw() {
  background(0);
  ground.display();
  rightSide.display();
  leftSide.display();
  ellipse(ball.position.x,ball.position.y,20)
  Engine.update(engine);
}



