const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1;

var polygonIMG;
var polygonSprite;
var slingshot;

function preload()
{   //Preloading polygon image
	polygonIMG=loadImage("pics/maxresdefault.png");

}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  ground_1 = new Ground(0,390,2000,20);
  ground_2 = new Ground(390,280,170,10);

  //level 2
  block1 = new Box(330,235,30,40);
  block2 = new Box(360,235,30,40);
  block3 = new Box(390,235,30,40);
  block4 = new Box(420,235,30,40);
  block5 = new Box(450,235,30,40);

  //level1
  block6 = new Box(360,195,30,40);
  block7 = new Box(390,195,30,40);
  block8 = new Box(420,195,30,40);

  //top
  block9 = new Box(390,155,30,40);
  
  //polygon sprite
  polygonSprite = createSprite(20,20,20,20);
  polygonSprite.addImage(polygonIMG);
  polygonSprite.scale = 0.1;

  polygon1 = Bodies.rectangle(20,20,20,20);
  World.add(world,polygon1);
  
  slingshot = new SlingShot(polygon1.body,{x:200, y:50});
 // Engine.run(engine);
}

function draw() {

  Engine.update(engine);

  background("aqua");  

 // drawSprites();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  polygonSprite.x = polygon1.position.x;
  polygonSprite.y = polygon1.position.y;

  slingshot.display();
  //polygon1.display();

  ground_1.display();
  ground_2.display();
  drawSprites();
}