/* Meme version 3
by valentina
3.10.2020

*/
 //global scope

var foxImage;
var sleepingImage;
var x=0;
var y=0;

var sleepingSize;
var sleepingSizeSpeed=5;

var foxX;


var counter= 0;


function preload(){
	foxImage = loadImage("foxx.png");
	sleepingImage= loadImage("sleeping.png")

}

function setup(){
	//setup scope
	var canvas = createCanvas(640,360);
	 canvas.drawingContext.miterLimit = 2;

	x = width - 150;
	y = height - 100;

	sleepingSize=width;
	foxX=0;
}

function mousePressed() {
	counter++;
	if (counter == 2) {
		counter = 0;
	}


}

function draw() {
	//draw scope
	background(220);


//text 
	textSize(30);
	fill('GOLD');
	stroke('white');
	strokeWeight(6);
	textStyle(NORMAL);
	textFont('menlo');
	textAlign(CENTER, CENTER);


//animation

	if (counter == 0){

		imageMode(CENTER);
		image(sleepingImage, width/2, height/2,sleepingSize, sleepingSize);

		sleepingSize += sleepingSizeSpeed;
		if (sleepingSize> width*2 || sleepingSize < width - sleepingSizeSpeed){
			sleepingSizeSpeed*= -1;}
			
			}


	/*if (mouseX < width/2 && mouseY > height/2) {
		fill("PEACHPUFF");
	} else if (mouseX < width/2 && mouseY > height/2) {
		fill("GOLD");
	}



	if (counter == 0) {
		noTint();
		image(sleepingImage, 170, 2, width/2, height/1);
		text('I am sleeping.', 120, 50);
		text('Do NOT click on me.', 500, 290);
	} else if (counter == 1) {
		image(foxImage,170, 2, width/2, height/1);
		text('You woke me up!',500, 280);}*/
		




	
}