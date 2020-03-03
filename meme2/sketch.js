/* Meme version 2
by valentina
3.3.2020

*/
 //global scope

var foxImage;
var sleepingImage;
var x=0
var y=0

function preload(){
	foxImage = loadImage("foxx.png");
	sleepingImage= loadImage("sleeping.png")

}

function setup(){
	//setup scope
	var canvas = createCanvas(640,360);
 canvas.drawingContext.miterLimit = 2;
}

function draw() {
	//draw scope
	background(220); 



	
	//draw the image
	if (mouseIsPressed) {
		tint(mouseX, 60, 120);	
		image(foxImage,x+170, y+60, width/2, height/2);
	
	} else {
		noTint();
		image(sleepingImage, x+170, y+60, width/2, height/2);
	}
	


//1st text 
	textSize(30);
	fill('orange');
	stroke('white');
	strokeWeight(6);
	textStyle(NORMAL);
	textFont('menlo');
	textAlign(CENTER, CENTER);

  var fox = 'I am sleeping do NOT click on me';
	if (mouseIsPressed) {
		fox = 'You woke me up!';
	}
	text(fox, x+320, y+280);

	





	
	}