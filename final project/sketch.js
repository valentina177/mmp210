/* final project
by valentina
5.11.2020

*/
 //global scope


 var handImage;

  var ambientSong;

//handImage counter
  var counter= 0;

 
var wallpaperValues = [];


// work in setup and draw
var e = 100;
var j = e;


function preload(){

  //image
  handImage = loadImage("hand.png");

  //music 

  ambientSong = loadSound("ambient.wav");


}


function setup() {
  var canvas = createCanvas(640, 470);
  canvas.drawingContext.miterLimit = 2;
  
  
  for (let x = 0; x <= width + 990; x += e) {
    for (let y = 0; y <= height + 200; y += j) {

      // create an object to hold the values
      var object = {};
      
      //colors
      object.r = random(227, 230);
      object.g = random(209);
      object.b = random(216, 255);

      //sizes
      object.s = random(40, 50);
      
      // add object to list
      wallpaperValues.push(object);
    }
  }
}


function draw() {
  pattern();
  
  
  //divider
  stroke(128, 128, 128);
  fill(220, 220, 220);
  rect(-1, 300, 650, 10);
  
   
   noStroke();
 
  let X = 320;
  let Y = 402;
  let W = 600;
  let H = 90;

 //carpet
  if (ambientSong.isPlaying()) {

  fill(204, 102, 255);
  arc(X, Y, W, H, 0, TWO_PI, CHORD);

  fill(204, 153, 255);
  arc(X, Y, W - 100, H, 0, TWO_PI, CHORD);

} else {
  fill(204, 102, 255);
  arc(X, Y, W, H, 0, TWO_PI, CHORD);

  fill(204, 153, 255);
  arc(X, Y, W - 100, H, 0, TWO_PI, CHORD);
}



  //chair 
  fill(139, 69, 19);

  rect(X - 70, 110, 135, 25, 50, 50, 5); //top

  rect(X - 70, 110, 20, 150, 50, 50, 5); //left side
  rect(X + 45, 110, 20, 150, 50, 50, 5); //right side

  rect(X - 70, 160, 135, 25, 50, 50, 5); //middle 
  rect(X - 70, 200, 135, 25, 50, 50, 5); //middle 

  rect(X - 70, 310, 20, 60, 50, 50, 5); //left leg 
  rect(X - 45, 310, 20, 30, 50, 50, 5); // back left leg 
  rect(X + 50, 310, 20, 60, 50, 50, 5); ///right leg 
  rect(X + 25, 310, 20, 30, 50, 50, 5); // back right leg 



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
      fill(202, 111, 30);
    } else {
      // odd planks
      fill(175, 96, 26);
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
  quad(x, y, x, y + 130, x + 20, y + 130, x + 30, y); //left leg

  quad(x + 130, y, x + 120, y + 70, x + 100, y + 70, x + 100, y); //back left leg

  quad(x + 420, y, x + 420, y + 130, x + 400, y + 130, x + 389, y); //right leg

  quad(x + 320, y, x + 320, y + 70, x + 300, y + 70, x + 290, y); //back right leg

  // front quad is flat
  fill(202, 111, 30);

  quad(x, y, x, y + 30, x + w, y + 30, x + w, y); //front plank





   if (counter == 0){

    scale(1.5);
  noCursor();
    image(handImage, mouseX, mouseY);

  }

  
  
}

function pattern() {

  background(205, 133, 63);

  fill(245, 245, 245);
  noStroke();
  rect(-1, 0, 650, 300);


  //wall
  
  var counter = 0; // count through list of values
  for (let x = 0; x <= width + 990; x += e) {
    for (let y = 0; y <= height + 200; y += j) {

      //colors
      let val = wallpaperValues[counter];
      counter++; // count to next object for next loop
      
      let r = val.r;
      let g = val.g;
      let b = val.b

      //sizes
      let s = val.s;

      push();
      scale(0.4);
      translate(x, y + 80);
      stroke(r, g, b);
      noFill();
      for (let i = 0; i < 10; i++) {
        ellipse(9, 20, s, s); //flower
        rotate(PI / 4);
      }
      pop();
      
       
    }
  }
  

}

  
function mousePressed(){
  ambientSong.play();
 
  if (ambientSong.isPlaying()){
     ambientSong.stop();
  }else {
      ambientSong.play();
    }


  }
  
  

