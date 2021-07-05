const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var dustbinObj,paperObject,groundObject,launcherObject;
var world;
var dustbinImg,paperImg;

function setup() {
	createCanvas(1600,700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	dustbinObj = new dustbin(1200,650);
	paperObject = new Paper(200,450,40);

	groundObject = new Ground(width/2,670,width,20);
    launcherObject = new Launcher(paperObject.body,{x: 250,y: 450});

	paperImg = loadImage("sprites/paper.png");
	dustbinImg = loadImage("sprites/dustbin.png");
	
   var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	
}

function draw() {

  rectMode(CENTER);
  background(255);
 
  dustbinObj.display();
  paperObject.display();

  groundObject.display();
  launcherObject.display();
  
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}

function mouseDragged() {
    Matter.Body.setPosition(paperObject.body,{x: mouseX,y: mouseY});
}


function mouseReleased() {
    launcherObject.fly();
}