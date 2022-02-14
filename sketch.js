
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground,leftside,rightside
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
    
	var ballOptions = {
      isStatic: false,
	  restitution:.3,
	  density:1.2
	}
	ball = Matter.Bodies.circle(260,100,20,ballOptions)
	World.add(world,ball)
	//Create the Bodies Here.
    ground = new Ground(800,670,1600,20)
	leftside = new Ground(1100,600,20,120)
	rightside = new Ground(1350,600,20,120)
    ellipseMode(RADIUS)
	rectMode(CENTER)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("orange")
  ellipse(ball.position.x,ball.position.y,20,20)
  ground.show()
  leftside.show()
  rightside.show()
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}


