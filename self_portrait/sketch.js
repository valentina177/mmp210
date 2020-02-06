function setup(){
	createCanvas(640,360);
}

function draw() {
	background(220);

	//shapes with xy coordinate + size
	fill('PEACHPUFF');
	stroke('white');
	strokeWeight(5)
	ellipse(320, 180, 100); //face

	fill('SADDLEBROWN')
	stroke('white')
	ellipse(310, 160,20); //left eye
	ellipse(330,160,20); //right eye

	//mouth
	fill('LIGHTPINK');
	stroke('white');
	strokeWeight(2)
	rect(290,190, 55,20,10);

	fill('WHITESMOKE');
    rect(290,191, 53,10,5);

	
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
	arc(320,214,16,22, HALF_PI,HALF_PI);


    
}

