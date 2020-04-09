/* pattern2 
by valentina
4.8.2020

*/
 //global scope

var flowerSlider;
var colorPicker;

function setup(){
	//setup scope
	var canvas = createCanvas(640,360);
	canvas.parent("sketch");

	createP("Flowers size").position(0,399).parent("sketch");

	flowerSlider= createSlider(10, 100, 45);
	flowerSlider.input(pattern);
	flowerSlider.parent("sketch");

	createP("Change the background color").position(360,399).parent("sketch");
	colorPicker= createColorPicker(220);
	colorPicker.input(pattern);
	colorPicker.parent("sketch");
	colorPicker.position(435, 366);

	var patternButton= createButton("New Pattern");
	patternButton.mousePressed(pattern);
	patternButton.position(160,366);
	patternButton.parent("sketch");

	var saveButton= createButton("Save Image");
	saveButton.mousePressed(saveImage);
	saveButton.position(300,366);
	saveButton.parent("sketch");

	pattern();
	
}

function saveImage(){
	save("flowers.png");
}



function pattern() {
	//draw scope
	background(colorPicker.color());
	
	

  translate(0, random(0,10));
 
  for (let x = 0; x < width; x += flowerSlider.value()) {

//colors
  	let r = random(100,255);
	let g = random(120);
	let b = random(153);
//sizes
	let s = random(25, 50);

    push();

    translate(x,random(0, 260) );
    fill(r, g, b, random(127,160));
    noStroke();
    for (let i = 0; i < 10; i++) {
      ellipse(9, 20, s, s); //flower
      rotate(PI / 4);

    }
    pop();
  }


		}

			

 
			

/* example from https://p5js.org/examples/hello-p5-simple-shapes.html */

