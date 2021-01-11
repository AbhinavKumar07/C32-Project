const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var mainGround , SlingshotGround, ground1 , ground2 , ground3;
var block1 , block2 , block3 , block4 , block5;
var  block6 , block7 , block8 , block9 , block10;
var block11 , block12 , block13 , block14 , block15;
var block16 , block17 , block18 , block19 , block20 , block21;
var block22, block23 , block24 , block25 , block26;
var block27, block28 , block29 , block30 , block31; 
var launcher , slingshot1 , polygonImage;
var score =  0;

function preload() {
    polygonImage = loadImage("polygon.png");
}

function setup(){
    createCanvas(1600,800);
    engine = Engine.create();
    world = engine.world;

    //Ground for the blocks
    mainGround = new Ground(800,780,1600,5);
    SlingshotGround = new Ground(150,730,300,100)
    ground1 = new Ground(1000,600,400,10);
    ground2 = new Ground(700,400,100,10);
    ground3 = new Ground(600,700,200,10);

    //Blocks for ground1
    block1 = new Box(880,555,55,55);
    block2 = new Box(940,555,55,55);
    block3 = new Box(1000,555,55,55);
    block4 = new Box(1060,555,55,55);
    block5 = new Box(1120,555,55,55);
    block6 = new Box(907.5,500,55,55);
    block7 = new Box(967.5,500,55,55);
    block8 = new Box(1027.5,500,55,55);
    block9 = new Box(1087.5,500,55,55);
    block10 = new Box(940,435,55,55);
    block11 = new Box(1000,435,55,55);
    block12 = new Box(1060,435,55,55);
    block13 = new Box(967.5,370,55,55);
    block14 = new Box(1027.5,370,55,55);
    block15 = new Box(1000,285,55,55);

//Blocks for ground2

    block16 = new Box(680,370,20,20);
    block17 = new Box(700,370,20,20);
    block18 = new Box(720,370,20,20);
    block19 = new Box(690,340,20,20);
    block20 = new Box(710,340,20,20);
    block21 = new Box(700,300,20,20);

//Blocks for ground3

    block22 =  new Box(555,690,30,30);
    block23 =  new Box(582,690,30,30);
    block24 =  new Box(618,690,30,30);
    block25 =  new Box(650,690,30,30);
    block26 =  new Box(565,600,30,30);
    block27 =  new Box(600,600,30,30);
    block28 =  new Box(635,600,30,30);
    block29 =  new Box(582,500,30,30);
    block30 =  new Box(618,500,30,30);
    block31 =  new Box(600,400,30,30);

//Polygon and slingshot

var options = {
    "density":0.6
}

launcher = Bodies.circle(200,500,15,options);
World.add(world,launcher);

slingshot1 = new Slingshot(launcher,{x:180,y:500});
}

function draw(){
    background("black");
    Engine.update(engine);

    mainGround.display();
    SlingshotGround.display();
    ground1.display();
    ground2.display();
    ground3.display();
    strokeWeight(20);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    strokeWeight(8);
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    strokeWeight(11);
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();
    block31.display();

    slingshot1.display();

    stroke("Blue");
    strokeWeight(25);
    imageMode(CENTER);
    image(polygonImage,launcher.position.x,launcher.position.y,40,40);

    text("Score: "+score,750,40);

    /*block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();
    block26.score();
    block27.score();
    block28.score();
    block29.score();
    block30.score();
    block31.score();
    */
    
}

function mouseDragged(){
    Matter.Body.setPosition(this.launcher,{x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot1.fly();
}

function keyPressed() {
    if(keyCode === 32) {
      slingshot1.attach(polygonImage.body);
     }
}

function attach(){
    bodyA = polygonImage;
}