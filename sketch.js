const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground;
var s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12,s13,s14,s15,s16, s17;
var p, ground, slab1, slab2, slingshot, polygon;

function preload(){
}
function setup(){
   createCanvas(1200,800);
   
   engine = Engine.create();
   world = engine.world;
   //level4
   s1 = new Box(505,528);
   s2 = new Box(540,529);
   s3 = new Box(572,527);
   s4 = new Box(610,528);
   s5 = new Box(640,524);
   s6 = new Box(683,528);
   
   //level3
   s7 = new Box(539,478);
   s8 = new Box(576,473);
   s9 = new Box(611,478);
   s10 = new Box(649,479);
   //level2
   s11 = new Box(582,429);
   s12 = new Box(609,424);
   //level1
   s13 = new Box(605,382);
   //slab2 level3
   s14 = new Box(757,203);
   s15 = new Box(794,201);
   s16 = new Box(835,208);
   //level2
   s17 = new Box(790,149);
   
   ground = new Ground(width/2, 750, width, 30);

   slab1 = new Ground(590,560,235,15);
   slab2 = new Ground(806,240,160,15);
   polygon = new Polygon(50, 200);
   slingshot = new Slingshot(polygon.body,{x: 50, y:200});
}
function draw(){
   Engine.update(engine);
   background("maroon");
   s1.display();
   s2.display();
   s3.display();
   s4.display();
   s5.display();
   s6.display();
   s7.display();
   s8.display();
   s9.display();
   s10.display();
   s11.display();
   s12.display();
   s13.display();
   s14.display();
   s15.display();
   s16.display();
   s17.display();
   ground.display();
   slab1.display();
   slab2.display();
   polygon.display();
   slingshot.display();
   console.log(mouseX, mouseY)
}
function mouseDragged(){
   Matter.Body.setPosition(polygon.body,{x: mouseX, y: mouseY});
}
function mouseReleased(){
   slingshot.fly();
}

