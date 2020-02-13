/* self potrait with variables 
by valentina
2.11.2020

*/
 //global scope

var x= 320; //origin for face
var y=180; 


// size variables
var s = 200; // size of the face
var eyeSize = 30;

function setup(){
	//setup scope
	createCanvas(640,360);
}

function draw() {
	//draw scope
	background(220);

	//shapes with xy coordinate + size

	fill('PEACHPUFF');
	stroke('white');
	strokeWeight(5)
	ellipse(x, y, s); //face area 
	// x++;

	fill('SADDLEBROWN')
	stroke('white')
	ellipse(x-20, y- 20, eyeSize); //left eye
	ellipse(x+20,y-20, eyeSize); //right eye

	//mouth
	fill('LIGHTPINK');
	stroke('white');
	strokeWeight(2)
	rect(x-s/4, y+26, s/2, s/10, s/20);

	fill('WHITESMOKE');
    rect(x-s/4,y+27, s/2, s/20, 5);

	
//right ear
	fill('PEACHPUFF');
	stroke('white');
	arc(x+ 95,y,50,70,-HALF_PI,HALF_PI);
	arc(x+95,y,30,40,-HALF_PI,HALF_PI);

//left ear
	arc(x-95,y,50,70, HALF_PI,-HALF_PI);
	arc(x-95,y,30,40, HALF_PI, -HALF_PI);


	//SHAPES THAT ARE ONLY XY POINTS

//nouse
	fill('LIGHTSALMON');
	noStroke();
	arc(x,y+ 6,40,20,-HALF_PI,HALF_PI);

//tongue
	fill('PALEVIOLETRED');
	arc(x+3, y+46, 25, 33, 0, PI);


  //Hat
  fill('DARKMAGENTA');
	strokeWeight(2)
	rect(x-88,y-73, 175,20,10);
	arc(x, y-90, 155, 100-27, 0, TWO_PI);
	//s++;

   
}

