
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var img;
var score=0;
//var ball;
var gameState = "onSling";

function preload()
{
 // img = loadImage('assets/gradient.png');
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  roof= new Ground(500,330,200,15)
  roof2 = new Ground(880,200,200,15)
  land = new Ground(600,380,1200,10)

  //up of roof boxes
  box1 = new Box(430,300,30,40)
  box2 = new Box(465,300,30,40)
  box3 = new Box(500,300,30,40)
  box4 = new Box (535,300,30,40)
  box5 = new Box (570,300,30,40)

  box6 = new Box(450,255,30,40)
  box7 = new Box(485,255,30,40)
  box8 = new Box (520,255,30,40)
  box9 = new Box (555,255,30,40)

  box10 = new Box(465,210,30,40)
  box11 = new Box (500,210,30,40)
  box12 = new Box(535,210,30,40)

  box13 = new Box(500,165,30,40)

  //up of the roof 2 boxes
  bin = new Box(810,170,30,40)
  bin2 = new Box(845,170,30,40)
 bin3 = new Box(880,170,30,40)
 bin4 = new Box(915,170,30,40)
 bin5 = new Box(950,170,30,40)



ball = Bodies.circle(200,200,30)
World.add(world,ball)
 //kittu = new Poly(50,100,20,20)
 
  //shot=new SlingShot(kittu.body,{x:100,y:200});
shot1 = new SlingShot(this.ball,{x:100,y:200})
Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(178,190,181);

  textSize(15)
text ("Score:"+score,1000,50)

  box1.display();
  //score.display();
  box2.display();
  //box2.score.display();
  box3.display();
  //box3.score.display();
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

  bin.display()
  bin2.display()
  bin3.display()
  bin4.display()
  bin5.display()
  land.display();
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,10)
  roof.display();
  roof2.display();

  //kittu.display();
  shot1.display();
  drawSprites();
 
}

function mouseDragged(){
 
       Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
   shot1.fly();
   
}
function keyPressed(){
  if(keyCode === 32){
     
  shot1.attach(this.ball);
    

  }}
  async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responeJSON = await response.json();
    //console.log(responeJSON)
    var datetime = responeJSON.datetime
    var hour = datetime.slice(11,13)
    console.log(hour)
     
    if (hour>6 && hour<19 ){
    
    background("black")
    }
    else{
   background("white")
    
    }
    ba
    }