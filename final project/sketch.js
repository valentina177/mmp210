/* final project
by valentina
5.11.2020

*/
 //global scope


 var handImage;

  var ambientSong;

  var counter= 0;

 

 m = mouseX;
   c = mouseY;

function preload(){

  //image
  handImage = loadImage("hand.png");

  //music 

  ambientSong = loadSound("ambient.wav");


}

function setup() {
  var canvas=createCanvas(640,470);  
 canvas.drawingContext.miterLimit = 2;

 pattern();





}




function pattern() {
background(205, 133, 63);
  
   fill(245, 245, 245);
  noStroke();
  rect(-1, 0, 650, 300);
    
  
  var e = 100;
  var j = e; 
  
//wall
 
for (let x = 0; x <= width+990; x += e) {
    for (let y = 0; y <= height+200; y += j) {
  
//colors
    let r = random(227,230);
  let g = random(209);
    let b = random(216,255);
          
//sizes
  let s = random(40, 50);

    push();
          scale(0.4);
    translate(x,y+80);
    stroke(r, g, b); 
    noFill();
    for (let i = 0; i < 10; i++) {
      ellipse(9, 20, s, s); //flower
      rotate(PI / 4);

    }
    pop();
  }

}
  
  //divider
stroke(128, 128, 128);
  fill(220, 220, 220);
  rect(-1, 300, 650, 10);
  
  
  
 
    //carpet
  let X = 320;
  let Y  = 402;
  let W = 600;
  let H = 90;
  
  noStroke();
  
  fill(204, 102, 255);
  arc(X, Y, W, H, 0, TWO_PI, CHORD);
   
  fill(204, 153, 255);
  arc(X, Y, W-100, H, 0, TWO_PI, CHORD);


  
  //chair 
  fill(139, 69, 19);
  
  rect(X-70, 110, 135, 25,50, 50, 5); //top
  
  rect(X-70, 110, 20, 150,50, 50, 5);//left side
   rect(X+45, 110, 20, 150,50, 50, 5);//right side
  
  rect(X-70,160, 135, 25,50, 50, 5); //middle 
    rect(X-70,200, 135, 25,50, 50, 5); //middle 

  rect(X-70, 310, 20, 60,50, 50, 5);//left leg 
   rect(X-45, 310, 20, 30,50, 50, 5);// back left leg 
  rect(X+50, 310, 20, 60,50, 50, 5);///right leg 
    rect(X+25, 310, 20, 30,50, 50, 5);// back right leg 

  
  
   
  //French fries
  
 scale(0.4);
  
 //package
  strokeWeight(2.5);
  stroke(95, 158, 160);
  fill(32, 178, 170);
  rect(X+260, Y+200, 175, 200);
  rect(X+260, Y+150, 175, 60,50, 50, 5);

  //light
  noStroke();
  fill(64, 224, 208);
  arc(X+260,Y+200,305, 320, 0, HALF_PI);
  
  
  //cut
  strokeWeight(2.5);
  stroke(95, 158, 160);
  fill(32, 178, 170);
  arc(X+348, Y+200, 174, 60, 0, HALF_PI+ HALF_PI); 

  
  
  // fries 
  //noStroke();
  stroke(253,216,29);
  fill(254,230,108);
  var v= 530;
  var b= 350;
  
  rect(v+67, b+119, 15, 50, 3);
  rect(v+79, b+90, 15, 85, 2);
  rect(v+96, b+79, 15, 99, 3);
  rect(v+113, b+70, 15, 109, 2);
  rect(v+130, b+45, 15, 135, 4); //the middle
  rect(v+147, b+70, 15, 109, 2);
  rect(v+164, b+79, 15, 99, 3); 
  rect(v+192, b+119, 15, 50, 3);
  rect(v+180, b+90, 15, 85, 2);


  //curve
  stroke(95, 158, 160);
  strokeWeight(4);
  noFill();
  curve(700, 400, 755, 510, 580, 505, 400, 220); 






  //soda 1 
  
  strokeWeight(2.5);
  stroke(225, 15, 56);
  fill(253, 29, 73);
  rect(v+289, b+120, 110, 180,20);//soda
  
  fill(247,247,247);
  rect(v+289, b+180, 110, 50, 200, 5, 205, 5);// white thing
  textSize(30);
  fill(51, 0, 0 );
  text('SODA', v+302,b+215);
  
  strokeWeight(2.5);
  fill(220, 220, 220);
  stroke(169, 169, 169);
  arc(v+344, b+130, 112, 60, 2,2 );// top
  fill(169, 169, 169);
  arc(v+344,b+130, 30, 20, 2,2);
  rect(v+340, b+85, 15, 40, 3);
  
  fill(220, 220, 220);
  rect(v+340, b+90, 15, 10, 3);
    rect(v+342,b+105, 10, 10, 3);




  //soda 2

  
  strokeWeight(2.5);
  stroke(225, 15, 56);
  fill(253, 29, 73);
  rect(v-160, b+200, 110, 180,20);//soda
  
  fill(247,247,247);
  rect(v-160, b+260, 110, 50, 200, 5, 205, 5);// white thing
  textSize(30);
  fill(51, 0, 0 );
  text('SODA', v-146,b+295);
  
  strokeWeight(2.5);
  fill(220, 220, 220);
  stroke(169, 169, 169);
  arc(v-105, b+210, 112, 60, 2,2 );// top
  fill(169, 169, 169);
  arc(v-104,b+210, 30, 20, 2,2);
  rect(v-110, b+170, 15, 40, 3);
  
  fill(220, 220, 220);
  rect(v-110, b+175, 15, 10, 3);
    rect(v-107,b+189, 10, 10, 3);


  
  
  //soda 3
  
  
  strokeWeight(2.5);
  stroke(225, 15, 56);
  fill(253, 29, 73);
  rect(v+560, b+200, 110, 180,20);//soda
  
  fill(247,247,247);
  rect(v+560, b+260, 110, 50, 200, 5, 205, 5);// white thing
  textSize(30);
  fill(51, 0, 0 );
  text('SODA', v+575,b+295);
  
  strokeWeight(2.5);
  fill(220, 220, 220);
  stroke(169, 169, 169);
  arc(v+615, b+210, 112, 60, 2,2 );// top
  fill(169, 169, 169);
  arc(v+614,b+210, 30, 20, 2,2); 
  rect(v+609, b+170, 15, 40, 3);
  

   fill(220, 220, 220);
  rect(v+609, b+175, 15, 10, 3);
    rect(v+612,b+189, 10, 10, 3);


if (counter == 0){

    imageMode(CENTER);
    image(handImage, mouseX, mouseY);}


}

function draw() {
  
 if (ambientSong.isPlaying()) {
   //table 
 
   var x = 110;
  var y = 300;
  var w = 420;
  var w2 = 190; // back width
  var h = 50;

  var n = 5; // number of planks
  
  stroke(110, 44, 0);
  strokeWeight(1);

  // count backwards
  for (let i = n; i > 0; i--) {
    
    // plank color/style
    if (i % 2 == 0) {
      // even planks
      fill(202, 111, 30 );
    } else {
      // odd planks
      fill(175, 96, 26  );
    }

    /* quads  go in clockwise order
                
     back/top           point2  point3
     front/bottom       point1  point4
    */

    var top = i * h / n;
    var bottom = (i - 1) * h / n;
   
    var back = i * (w - w2) / (n * 2);
    var front = (i - 1) * (w - w2) / (n * 2);

    quad(
      x + front, y - bottom,
      x + back, y - top,
      x + w - back, y - top,
      x + w - front, y - bottom
    );
  }
  
  
  //legs 
  quad(x, y, x, y + 130, x + 20, y + 130, x + 30, y);//left leg
  
  quad(x+130, y, x+120, y + 70, x + 100, y + 70, x + 100, y);//back left leg
  
  quad(x+420, y, x+420, y + 130, x + 400, y + 130, x + 389, y);//right leg
  
    quad(x+320, y, x+320, y + 70, x + 300, y + 70, x + 290, y);//back right leg
  
  // front quad is flat
  fill(202, 111, 30 );
  
  quad(x, y, x, y + 30, x + w, y + 30, x + w, y);//front plank
  
  
  
  }
    }

