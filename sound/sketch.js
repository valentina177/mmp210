/* Sound
by valentina
4.28.2020

*/
 //global scope

var mise_sadness, endless;
var acousticmusic, music1;
var musicnotes, pianoandcello;

function preload() {
	mise_sadness= loadSound("mise_sadness.wav");
	endless= loadSound("endless.wav");
	acousticmusic= loadSound("acousticmusic.wav");
	music1 = loadSound("music1.wav");
	musicnotes = loadSound("musicnotes.wav");
	pianoandcello = loadSound("pianoandcello.wav");
}

function setup() {
	createCanvas(640,360);
	noStroke();
}

function draw() {
	background(220);


	if (mise_sadness.isPlaying()) {
		fill(255, 165, 0);
		triangle(100, 160, 150, 260, 200, 160);
	} else {
		
		fill(255, 228, 181);
		triangle(100, 160, 150, 260, 200, 160);
	}

	if (musicnotes.isPlaying()) {
		fill(186, 85, 211);
		 ellipse(120, 150, 75);
	}else{
		fill('plum');
		ellipse(120, 150, 75);
	}
	

	if (acousticmusic.isPlaying()) {
		fill(123, 104, 238);
		ellipse(180, 150, 75);
	}else{
		fill(230, 230, 250);
		ellipse(180, 150, 75);

	}


	if (music1.isPlaying()) {
		fill(255, 105, 180);
		ellipse(150, 100, 75);
	}else{
		fill(255, 192, 203);
		ellipse(150, 100, 75);

	}


	if (endless.isPlaying()) {
		fill('gold');
		triangle(400, 160, 453, 260, 500, 160);
	}else{
		fill(255, 250, 205);
		triangle(400, 160, 453, 260, 500, 160);
	}



	if (pianoandcello.isPlaying()) {
		fill(50, 205, 50);
		ellipse(420, 150, 75);
		ellipse(480, 150, 75);
   		ellipse(450, 100, 75);
	}else{
		fill(144, 238, 144);
		ellipse(420, 150, 75);
		ellipse(480, 150, 75);
   		ellipse(450, 100, 75);
	}

	var volume = map(mouseY, 0, height, 1, 0);
	mise_sadness.setVolume(volume);
	musicnotes.setVolume(volume);
	acousticmusic.setVolume(volume);
	music1.setVolume(volume);
	endless.setVolume(volume);
	pianoandcello.setVolume(volume);

	var pan = map(mouseX, 0, width, -100, 100);
	mise_sadness.pan(pan);
	musicnotes.pan(pan);
	acousticmusic.pan(pan);
	music1.pan(pan);
	endless.pan(pan);
	pianoandcello.pan(pan);
	

	var x = pmouseX;
	var y = pmouseY;
	var s = 30;


  	fill(160, 82, 45);
  	stroke('white');
	strokeWeight(4);
  ellipse(pmouseX-20,pmouseY, s);
  ellipse(pmouseX+20,pmouseY, s);
  ellipse(pmouseX,pmouseY-20, s);
  ellipse(pmouseX,pmouseY+20, s);
  ellipse(pmouseX,pmouseY-2, s-10);
  
	
}

function keyPressed() {


	// z key
	if (keyCode == 90) {
		if (mise_sadness.isPlaying()) { 
			mise_sadness.pause();

		
		} else {
			mise_sadness.play();

		}
	}

// x key
	if (keyCode == 88) { 
		if (musicnotes.isPlaying()) { 
			musicnotes.pause();
		}else {
		musicnotes.play();	
	}
}

	// c key
	if (keyCode == 67) { 
		if (acousticmusic.isPlaying()) { 
			acousticmusic.pause();
		}else {
			acousticmusic.play();
		}
	}

	// v key
	if (keyCode == 86) { 
		if (music1.isPlaying()) { 
			music1.pause();
		}else {
			music1.play();
	}
}


//b key
	if (keyCode == 66){ 
		if (endless.isPlaying()) { 
			endless.pause();
	}else {
			endless.play();
		}
	}


//n key

	if (keyCode == 78) { 
		if (pianoandcello.isPlaying()) { 
			pianoandcello.pause();
		}else {
		pianoandcello.play();
	}
		
		
	}

}

