/* Meme version 1
by valentina
2.25.2020

*/
 //global scope

var foxImage;
var x=0
var y=0

function preload(){
	foxImage = loadImage("fox.jpg");

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
	image(foxImage,x,y,width/2,height/2); //1stImage
	image(foxImage,width/2,y,width/2,height/2); //2ndImage
	image(foxImage,width/2,y+180,width/2,height/2); //3rdImage
	image(foxImage,x,y+180,width/2,height/2);//4thImage


//bigtext 
	textSize(40);
	fill('orange');
	stroke('white');
	strokeWeight(20);
	textStyle(NORMAL);
	textFont('menlo');
	textAlign(CENTER, TOP);


	var fox = 'What does the fox say?';
	var end = map(frameCount, 0, 200, 0, fox.length);
	text(fox.substring(0, end), x+330, y+150);

//textfox
	textSize(15);
	X = mouseX;
	Y = mouseY;
  	fill(mouseY,mouseX,0);
	noStroke();
	textStyle('italic');
	textFont('menlo');
	textAlign(CENTER, TOP);

	text("Ring-ding!",x+250,y+36);//1sttext
	text("Wa-papa-pow!",x+250,y+220);//2nd
	text("Jacha-chow!", x+570, y+36);//3rd
	text("A-ha-hee!",x+570,y+220);//4th


	
	}