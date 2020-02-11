/* self potrait with variables 
by valentina
2.11.2020

*/
 //global scope

var x= 320; //origin for face
var y=180; 

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
	ellipse(x, y, 200); //face area 
	x++

	fill('SADDLEBROWN')
	stroke('white')
	ellipse(x- 9, y- 20,30); //left eye
	ellipse(x+20,y-20, 30); //right eye

	//mouth
	fill('LIGHTPINK');
	stroke('white');
	strokeWeight(2)
	rect(290,190, 55,20,10);

	fill('WHITESMOKE');
    rect(291,191, 53,10,5);

	
//right ear
	fill('PEACHPUFF');
	stroke('white');
	arc(365,180,30,40,-HALF_PI,HALF_PI);
	arc(365,180,20,30,-HALF_PI,HALF_PI);

//left ear
	arc(274,180,30,40, HALF_PI,-HALF_PI);
	arc(274,180,20,30, HALF_PI, -HALF_PI);


	//SHAPES THAT ARE ONLY XY POINTS

//nouse
	fill('LIGHTSALMON');
	noStroke();
	arc(320,180,20,10,-HALF_PI,HALF_PI);

//tongue
	fill('PALEVIOLETRED');
	arc(320, 208, 19, 30, 0, PI);


  //Hat
  fill('DARKMAGENTA');
	strokeWeight(2)
	rect(276,130, 90,14,10);
	arc(320, 123, 100-30, 100-60, 0, TWO_PI);


   
}

