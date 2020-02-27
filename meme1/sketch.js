/* Meme version 1
by valentina
2.25.2020

*/
 //global scope

var Image;

function preload(){

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
	image(Image,0,0);


	textSize(40);
	fill('pink');
	stroke('white');
	strokeWeight(20);
	textStyle(NORMAL);
	textFont('menlo');
	textAlign(CENTER, TOP);


	var funny = 'Funny meme';
	var end = map(frameCount, 0, 200, 0, funny.length);
	text(funny.substring(0, end), 330, 50);

	
	}