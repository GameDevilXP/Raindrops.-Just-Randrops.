
var num;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255); 
  
  for(num = 0; num > 200; num + 3) {
     var purpleRaindrop = new PurpleRaindrop(0,num,num,15);
     purpleRaindrop.display();
     var blueRaindrop = new BlueRaindrop(0,num+400,num,15);
     blueRaindrop.display();
     var greenRaindrop = new GreenRaindrops(0,num+400,num,15);
     greenRaindrop.display();
  };

  drawSprites();
}