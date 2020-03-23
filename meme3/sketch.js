/* Meme version 3
by valentina
3.10.2020

*/
 //global scope

var foxImage;
var sleepingImage;
var zzzImage;
var x=0;
var y=0;

var sleepingSize;
var sleepingSizeSpeed=5;

var foxX;

var zzz; 
var zzzSizeSpeed=5;


var counter= 0;
var r = 0;
var c = 1; 

function preload(){
	foxImage = loadImage("foxx.png");
	sleepingImage= loadImage("sleeping.png");
	zzzImage= loadImage("zzz.png");
}

function setup(){
	//setup scope
	var canvas = createCanvas(640,360);
	 canvas.drawingContext.miterLimit = 2;

	x = width - 150;
	y = height - 100;

	sleepingSize=width;
	foxX=0;
	zzz=width;

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
	var foxX = min(420, frameCount *2);

//text 
	textSize(30);
	fill(r, 0, 255);
	stroke('white');
	strokeWeight(6);
	textStyle(NORMAL);
	textFont('menlo');
	textAlign(CENTER, CENTER);
	r += c;


//animation

	if (counter == 0){

		imageMode(CENTER);
		image(sleepingImage, width/2, height/2,sleepingSize/4, sleepingSize/4);
		
		image(zzzImage, width/2, height/4, zzz/9, zzz/9);


		sleepingSize += sleepingSizeSpeed;
		if (sleepingSize> width*2 || sleepingSize < width - sleepingSizeSpeed){
			sleepingSizeSpeed*= -1;}

		zzz += zzzSizeSpeed;
		if (zzz> width*2 || zzz < width - zzzSizeSpeed){
			zzzSizeSpeed*= -1;}

			else if (r > 255 || r < 0, counter==0){
				text('I am sleeping.', 120, 50);
		 		text('Do NOT click on me.', 500, 320);}
		 	

		
		}  	else if(counter == 1) {
			
			image(foxImage, foxX, height/2, width/2, height);

			foxX += 5;
		if (foxX > width) {
			foxX = 0;
		sleepingSizeSpeed*= -1;}

			else if (r > 255 || r < 0, counter==1){

				var v = frameCount * PI / 400;

				push();
				shearX(v);

				scale(1.2);

				text('You woke me up!', 140, 110);}
				pop();



		}

			

 
			





	
}