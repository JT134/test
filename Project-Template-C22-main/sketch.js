const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

let engine;
let world;


var roof;
var ball;
var ball1;
var ball2;
var ball3;
var ball4;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	engine = Engine.create();

	world = engine.world;
    rectMode(CENTER);
    ellipseMode(RADIUS);

	var roof_options={
		isStatic:true			
	}
	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	var ball_options={
		restituion: 0.95
		
	}
	// creating the body of ball
    ball = Bodies.circle(320,230,10,ball_options);
    World.add(world,ball);
	rope1 = Matter.Constraint.create({
	  pointA:{x:400,y:100},
	  bodyB:ball,
	  PointB:{x:0,y:0},
	  length:50,
	  stiffness:0.1
	})
	
	var ball1_options={
		restituion: 0.95
	}
    // creating body of ball1
	ball1 = Bodies.circle(360,230,10,ball1_options);
	World.add(world,ball);
	rope2 = Matter.Constraint.create({
		pointA:{x:400,y:100},
		bodyB:ball,
		PointB:{x:0,y:0},
		length:50,
		stiffness:0.1
	  })
	

	var ball2_options={
		restituion: 0.95
	}
	// creating body of ball2
	ball2 = Bodies.circle(480,230,10,ball2_options);
	World.add(world,ball);
	rope3 = Matter.Constraint.create({
		pointA:{x:400,y:100},
		bodyB:ball,
		PointB:{x:0,y:0},
		length:50,
		stiffness:0.1
	  })

	var ball3_options={
		restituion: 0.95
	}
	// creating body of ball3
	ball3 = Bodies.circle(440,230,10,ball3_options);
	World.add(world,ball);
	rope4 = Matter.Constraint.create({
		pointA:{x:400,y:100},
		bodyB:ball,
		PointB:{x:0,y:0},
		length:50,
		stiffness:0.1
	  })
	
	var ball4_options={
		restituion: 0.95
	}
	// creating body of ball4
	ball4 = Bodies.circle(400,230,10,ball4_options);
	World.add(world,ball);
	rope5 = Matter.Constraint.create({
		pointA:{x:400,y:100},
		bodyB:ball,
		PointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	})

	// creating new ropes
	rope1=new rope(ball1,roof,-80,0);
	World.add(world,rope1);

	rope2=new rope(ball2,roof,-80,0);
	World.add(world,rope2);

	rope3=new rope(ball3,roof,-80,0);
	World.add(world,rope3);

	rope4=new rope(ball4,roof,-80,0);
	World.add(world,rope3);

	rope5= new rope(ball,roof,-80,0);
	World.add(world,rope5);
}

function draw() {
  rectMode(CENTER);
  background("#99004d");
  
  rect(roof.position.x,roof.position.y,230,20);
  circle(ball.position.x,ball.position.y,20,20);
  circle(ball1.position.x,ball1.position.y,20,20);
  circle(ball2.position.x,ball2.position.y,20,20);
  circle(ball3.position.x,ball3.position.y,20,20);
  circle(ball4.position.x,ball4.position.y,20,20);
  push();
  strokeWeight(2);
  stroke(25);

  //line(x1,y1,x2,y2,x3,y3,x4,y4,x5,y5);
  line(rope1.pointA.x,rope1.y,ball.position.x,ball.position.y);
  line(rope2.pointA.x,rope2.y,ball.position.x,ball.position.y);
  line(rope3.pointA.x,rope4.y,ball.position.x,ball.position.y);
  line(rope4.pointA.x,rope4.y,ball.position.x,ball.position.y);
  line(rope5.pointA.x,rope5.y,ball.position.x,ball.position.y);
  pop();
  //call display() to show ropes here
 
  
  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
