var car1, wall;

function setup() {
  createCanvas(1600,400);
  wall = createSprite(400, 100, 60, 1600);
  wall.shapeColor = (80,80,80);
  wall.debug = true;
}

function draw() {
  background(0,0,0);  

  if (car.x - wall.x < wall.width/2 + car.width/2
      && wall.x - car.x < wall.width/2 + car.width/2) {
    car.velocityX = car.velocityX * (-1);
    wall.velocityX = wall.velocityX * (-1);
  }
  if (car.y - wall.y < wall.height/2 + car.height/2
    && wall.y - car.y < wall.height/2 + car.height/2){
    car.velocityY = car.velocityY * (-1);
    wall.velocityY = wall.velocityY * (-1);
  }
  drawSprites();
}