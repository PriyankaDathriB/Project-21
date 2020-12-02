var bullet, wall, thickness;
var speed, weight, damage;

function setup() {
  createCanvas(1600,400);
  
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  bullet = createSprite(50, 200, 50, 50);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80,80,80);
  bullet.velocityX = speed;
  
}

function draw() {
  background(255,255,255);  

  if(hasCollided(bullet,wall)) {

    bullet.velocityX = 0;
    bullet.x = 1200 - (thickness/2);
    damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness);
    console.log(damage);
   
    if( damage > 10)
      bullet.shapeColor = color(255,0,0);
    else
      bullet.shapeColor = color(0,255,0);
        
  }
  drawSprites();
}

function hasCollided(lbullet, lwall) {
  var bulletRightEdge = lbullet.x + lbullet.width;
  var wallLeftEdge = lwall.x;
  if(bulletRightEdge >= wallLeftEdge) 
    return true;
  else 
    return false;
}