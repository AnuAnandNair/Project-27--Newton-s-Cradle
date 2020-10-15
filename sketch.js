
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5, bobdiameter;

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	/*bob1=new Bob(50,300,50);
	bob2=new Bob(100,300,50);
	bob3=new Bob(150,300,50);
	bob4=new Bob(200,300,50);
	bob5=new Bob(250,300,50);*/

	
	startBobPositionX=width/2;
	bobDiameter=40;
	
	bob1=new Bob(startBobPositionX-bobDiameter*2,400,bobDiameter);
	bob2=new Bob(startBobPositionX-bobDiameter,400,bobDiameter);
	bob3=new Bob(startBobPositionX,400,bobDiameter);
	bob4=new Bob(startBobPositionX+bobDiameter,400,bobDiameter);
	bob5=new Bob(startBobPositionX+bobDiameter*2,400,bobDiameter);

	
	roof1=new Roof(width/2,50,300,20);	
	      
    //y offset is 0 for all bobs as all the points on the roof are at same vertical distnce from the top of the canvas
	//for 1st bob, its centre is at a distance = 2*diameter from the 3rd central bobs centre but its towards left. so -2*diameter
	rope1= new Rope(bob1.body,roof1.object, -bobDiameter*2,0);
	//for 2nd bob, its centre is at a distance = diameter from the 3rd central bobs centre but its towards left. so -diameter
	rope2= new Rope(bob2.body,roof1.object, -bobDiameter,0);
	rope3= new Rope(bob3.body,roof1.object, 0,0);
	 //for 4th bob, its centre is at a distance = diameter from the 3rd central bobs centre but its towards right. so diameter
	rope4= new Rope(bob4.body,roof1.object, bobDiameter,0);
	 //for 5th bob, its centre is at a distance = 2*diameter from the 3rd central bobs centre but its towards right. so 2*diameter
	rope5= new Rope(bob5.body,roof1.object, bobDiameter*2,0);


	Engine.run(engine);
  
}


function draw() {
 
  background(230);

  roof1.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
  bob1.display(); 
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-35});

	}
}