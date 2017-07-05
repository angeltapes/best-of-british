function setup(){
  createCanvas(1000,500);

}

function draw(){
  //left top
  background(0);
  fill(198,12,48);//red
  triangle(0,height/3,mouseX,mouseY,0,(2*height)/3);
  fill(255);
  triangle(0,(2*height)/6,mouseX,mouseY,0,0);//top left white
  fill(0,39,118);//blue
  triangle(0,0,mouseX,mouseY,(2*width)/8,0);
  fill(255);
  triangle((2*width)/8,0,mouseX,mouseY,(3*width)/8,0);
  fill(198,12,48);//red
  triangle(3*width/8,0,mouseX,mouseY,5*width/8,0);

  //top right
  fill(255);
  triangle(5*width/8,0,mouseX,mouseY,(6*width)/8,0);//top red
  fill(255);
  triangle(width,0,mouseX,mouseY,width,(2*height)/6);//top right white
  fill(0,39,118);//blue
  triangle(6*width/8,0,mouseX,mouseY,width,0);
  //fill(255);
  //triangle(width,height,mouseX,mouseY,width,(4*height)/6);//bottom right white
  fill(198,12,48);//red
  triangle(width,2*height/6,mouseX,mouseY,width,4*height/6);

  //ellipse(0,height/2,mouseX,mouseY);
}
