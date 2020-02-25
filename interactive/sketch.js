/* Interactive self potrait 
by valentina
2.11.2020

*/
 //global scope

var x= 320; //origin for face
var y=180; 



// size variables
var s = 200; // size of the face
var eyeSize = 30;
var e=30;


//colors RGB
var r = 255, g = 255, b = 255; 


function setup(){
	//setup scope
	createCanvas(640,360);
}

function draw() {
	//draw scope
	background(220);
	
	var x = pmouseX;
	var y = pmouseY;
	var v = min(400, frameCount * 4);

	//shapes with xy coordinate + size


	//circle background
	fill(r,g,b);
	 r = 0; // red;
	 g = map(mouseX, 0, width, 0, 255); // green
	 b = map(mouseY, 0, height, 0, 255); // blue

	circle(x-70, y- 20, e);//left 
	circle(x+70,y-20, e);//right circle
	circle(x-10,y+60, e);//down


	//face area
	fill('PEACHPUFF');
	stroke('white');
	strokeWeight(5)
	ellipse(x, y, s);  
	// x++;


	//eyes
	fill('SADDLEBROWN')
	stroke('white')
	ellipse(x-20, y- 20, eyeSize); //left eye
	ellipse(x+20,y-20, eyeSize); //right eye

	//mouth
	fill('LIGHTPINK');
	stroke('white');
	strokeWeight(2)
	rect(x-s/4, y+26, s/2, s/10, s/20);//background

	fill('WHITESMOKE');
    rect(x-s/4,y+27, s/2, s/20, s/40);//teeth

    fill(255,215,0);
    noStroke();
    rect(x-s/8, y+26, s/17, s/17);//gold tooth

	
//right ear
	fill('PEACHPUFF');
	stroke('white');
	arc(x+ 95,y,s/4,s/3,-HALF_PI,HALF_PI);
	arc(x+95,y,s/7,s/5,-HALF_PI,HALF_PI);

//left ear
	arc(x-95,y,s/4,s/3, HALF_PI,-HALF_PI);
	arc(x-95,y,s/7,s/5, HALF_PI, -HALF_PI);


	//SHAPES THAT ARE ONLY XY POINTS

	//nouse
	fill('LIGHTSALMON');
	noStroke();
	arc(x,y+ 6,s/5,s/10,-HALF_PI,HALF_PI);

	//tongue
	fill('PALEVIOLETRED');
	arc(x+3, y+46,s/8,v/7, s-200, PI);

	
  //Hat
  	x = mouseX;
	y = mouseY;
  	fill(mouseY,0,mouseX);
	strokeWeight(2)
	rect(x-98,y-73,s/1,s/10,s/10);
	arc(x, y-90, s/1.2, s/2.8, s-200, TWO_PI);
	//s++;
}


	//circle backgrounds
	function mousePressed() {
	e += 10;}



