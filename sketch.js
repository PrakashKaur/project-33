var scene, sceneImg;
var snow, snowImg

function preload() {
  sceneImg = loadImage("snow3.jpg");
  snowImg = loadImage("snow5.webp")

}
function setup() {
  createCanvas(800,400);
  scene = createSprite(400, 200, 50, 50);
  scene.addImage(sceneImg);
  scene.scale = 0.75;

  

}

function draw() {
  background("white"); 
  createSnow(); 
  drawSprites();
}

//creating snow
  function createSnow() {
    if (frameCount % 10 === 0) {
      snow = createSprite(random(10,750), 10, 10, 10);
      snow.addImage(snowImg);
      snow.scale = 0.05;
      snow.velocityY = 5;

    }
  }