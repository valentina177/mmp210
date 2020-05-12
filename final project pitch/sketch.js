/* final project pitch
by valentina
5.11.2020

*/
 //global scope

 

var currentSlide = 0;
var numberOfSlides = 3;

// next slide button
var nextButtonX = 500;
var nextButtonY = 300;
var nextButtonW = 100;
var nextButtonH = 33;

// prev slide button
var prevButtonX = 350;
var prevButtonY = nextButtonY;
var prevButtonW = nextButtonW + 30;
var prevButtonH = nextButtonH;



function setup() {
	createCanvas(640,360);
	noStroke();
	
}


function draw() {
	background(220);


	// text('slide ' + currentSlide, 100, 100);

	var title; // the title of the slide
	var description;
	

	// setup each slide
	if (currentSlide == 0) {
		title = "My final project";
		description = "my project will have figures that will create a food area, it will have some images and sound.";
		
		  

	// background
		var w = 55;
        for (let x = 0; x < width; x += w+2) {
            for (let y = 0; y < height; y += w+2) {

            fill(192, 192, 192,20);
            rect( 30 , 20 ,578 ,320 );

              rotate(PI / 0.3);
           
               fill(199, 21, 133);
      
                stroke('white');
                rect( x , y , w, w); 

                fill(238, 130, 238);
              	rect( x-20, y-30 , w, w); 
  
          
        }
         
        }

	} else if (currentSlide == 1) {
		title = "User interaction";
		description = "The user can iteract with the shapes and images to listen to different sounds usisng the mouse or some keys.";
	
		// background
		var w = 55;
        for (let x = 0; x < width; x += w+2) {
            for (let y = 0; y < height; y += w+2) {

            fill(192, 192, 192,20);
            rect( 30 , 20 ,578 ,320 );

              rotate(PI / 1);
           
               fill(199, 21, 133);
      
                stroke('white');
                rect( x , y , w, w); 

                fill(238, 130, 238);
              	rect( x-20, y-30 , w, w); 
              
                
          
        }
         
        }

	} else if (currentSlide == 2) {
		title = "Graphics";
		description = " I will use p5 shapes, sounds, colors,text, and images.";

		// background
		var w = 55;
        for (let x = 0; x < width; x += w+2) {
            for (let y = 0; y < height; y += w+2) {

            fill(192, 192, 192,20);
            rect( 30 , 20 ,578 ,320 );

              rotate(PI / 0.7);
           
               fill(199, 21, 133);
      
                stroke('white');
                rect( x , y , w, w); 

                fill(238, 130, 238);
              	rect( x-20, y-30 , w, w); 
              
                
          
        }
         
        }
	}

	// display title
	textSize(40);
	fill(255);
	stroke('black');
	strokeWeight(2);
	textAlign(CENTER, CENTER);
	text(title, 320, 50);

	// display description
	textSize(30);
	text(description, 29, 159, width - 50);

	

	// slide button display
	// button background design
	fill(255, 0, 255);
	stroke(255);
	strokeWeight(2);
	
	if (currentSlide < numberOfSlides - 1) {
		rect(nextButtonX, nextButtonY, nextButtonW, nextButtonH, 5); // next
	}

	if (currentSlide > 0) {
		rect(prevButtonX, prevButtonY, prevButtonW, prevButtonH, 5); // prev
	}
	
	
	// text design
	fill(255);
	textSize(25);
	noStroke();
	textAlign(CENTER, CENTER);

	if (currentSlide < numberOfSlides - 1) {
		text("Next", nextButtonX, nextButtonY, nextButtonW, nextButtonH);
	}
	
	if (currentSlide > 0) {
		text("Previous", prevButtonX, prevButtonY, prevButtonW, prevButtonH);
	}
	

		

}

function mousePressed() {


	// detecting mouse collision with the next button
	if (mouseX > nextButtonX && mouseX < nextButtonX + nextButtonW &&
		mouseY > nextButtonY && mouseY < nextButtonY + nextButtonH) {
		if (currentSlide < numberOfSlides - 1) {
			currentSlide++;
		}
		
	}

	// detect mouse collision with prev button
	if (mouseX > prevButtonX && mouseX < prevButtonX + prevButtonW &&
		mouseY > prevButtonY && mouseY < prevButtonY + prevButtonH) {
		if (currentSlide > 0) {
			currentSlide--;
		}
	}
}

