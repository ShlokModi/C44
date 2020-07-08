const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
var doodler, platform;
  function setup(){
    createCanvas(800, 800);
    engine = Engine.create();
    world = engine.world;
    doodler = new Doodler();
    platform = new Platform(400,500);
  }
  function draw(){
      background("white");
      Engine.update(engine);
      doodler.display();
      platform.display();
  }
  function keyPressed(){
      if(keyCode === LEFT_ARROW){
          doodler.x = doodler.x-100;
      }
      if(keyCode === RIGHT_ARROW){
          doodler.x = doodler.x+100;
      }
  }
