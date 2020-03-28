/* Loop
by valentina
3.24.2020

*/
 //global scope




function setup(){
	//setup scope
	var canvas = createCanvas(640,360);

	pattern();
	
}

function mousePressed(){
	pattern();

}

function pattern() {
	//draw scope
	background(220);
	
	

  translate(0, random(90));
 
  for (let x = 0; x < width; x += 40) {

//colors
  	let r = random(100,255);
	let g = random(120);
	let b = random(153);
//sizes
	let s = random(25, 50);

    push();
    translate(x,random(400) );
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

