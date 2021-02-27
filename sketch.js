const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var score=0;
var engine, world;
var box1, pig1;
var backgroundImg ;
function preload(){    getTime();
  backgroundImg = loadImage("sprites/bg.png");
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

   
    glass1 = new Glass(700, 240, 50, 50);
    glass2 = new Glass(920, 240, 50, 50);
    glass3 = new Glass(700, 240, 50, 50);
    glass4 = new Glass(920, 240, 50, 50);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(100,100);
    Slingshot = new Slingshot(bird.body,{x:200, y:50});

}

function draw(){
  

  if(backgroundImg)
  background(backgroundImg);
  textSize(35);
  text("Score:"+score,width-300,50)


  
  //text(mouseX+','+mouseY,30,45);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
   // console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    platform.display();

    glass1.display();
  glass2.display();
  glass3.display();
  glass4.display();
   
    pig3.display();
    log3.display();
    Slingshot.display();    

    box5.display();
    log4.display();
    log5.display();

    bird.display();
}
function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  Slingshot.fly();
}
function keyPressed(){
if(keyCode===32)
Slingshot.attach(bird.body);
bird.trajectory=[];
Matter.Body.setPosition(bird.body, {x: 200 , y: 50});

}


async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
console.log(responseJSON)
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  console.log(datetime);
  console.log(hour);
  if(hour>=06 && hour<=14){
      bg = "sprites/bg1.png";
  }
  else{
      bg = "sprites/bg2.jpg";
  }

  backgroundImg = loadImage(bg);
}










