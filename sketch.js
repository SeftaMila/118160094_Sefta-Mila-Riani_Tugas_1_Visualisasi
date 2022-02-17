let j;
function setup() {
  // put setup code here
  createCanvas(400,200);
  j=0;
}

function draw() {
  // put drawing code here
  background(200);
  //kentang kiri
  fill(204,255,204);
  rect(0,0,199,230); 
  fill(183,146,104);
  ellipse(100,100,70,100);
  fill(153,0,0);
  ellipse(120,80,10,5);
  ellipse(80,80,10,5);
  arc(100,110,40,30, radians(720), radians(180));

  //pembatas
  line(180,20000,200,0);

  //kentang kanan
  rect(200,-30,199,230); 
  fill(204,255,229);
  var y = 200+20*Math.sin(PI*j/20);
  var r = 70+10*Math.sin(PI*j/20);
  j +=1;
  ellipse(310,100,r,r);
  fill(0,153,153);
  ellipse(290,80,10,5);
  ellipse(330,80,10,5);
  arc(310,110,40,30, radians(720), radians(180));

  



}