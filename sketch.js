const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	bgimg = loadImage("bg.png");
}
function setup() {
  createCanvas(1300, 600);
  engine = Engine.create();
	world = engine.world;
  g1= new Ground(400,400,1000,20);
  g2= new Ground(650,580,width,10);
  sh = new Superhero(100,300,200,100);
  b1= new Block(200,100,10,10);
  s1 = new Line(b1.body,sh.body);
}
function draw() {
  background(bgimg);
  g1.display();
  sh.display();
  b1.display();
  s1.display();
}