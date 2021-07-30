var box;
function setup() {
  createCanvas(400, 400);
  box=createSprite(200,200,30,30);
  box.shapeColor="yellow"
}

function draw() 
{
  if (keyIsDown(RIGHT_ARROW)) {
    background("green")
  }
  if (keyIsDown(LEFT_ARROW)) {
    background("pink")
  }
  if (keyIsDown(UP_ARROW)) {
    background("blue")
  }


  if (keyIsDown(DOWN_ARROW)) {
    background("red")
  }

  drawSprites()
}




