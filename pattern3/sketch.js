/* pattern3 
by valentina
4.22.2020

*/
 //global scope



function setup(){
	//setup scope
	var canvas = createCanvas(640,360);
	canvas.parent("sketch");


	var patternButton = createButton("New Pattern");
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
	save("stars.png");
}



function pattern(){
	//draw scope
	background(253,239,223);
	
	var w = 145
	var h = w; 
  
  	for (let x = 0; x <= width; x += w) {
		for (let y = 0; y <= height; y += h) {
  
  	push();
  	translate (x, y);
             
   

    let r = random(0, 255); // red
	let g = random(10, 220); // green
	let b = random(50, 230); // blue

		if (y > 200) {
		r = random(180, 220);
		g = random(23, 255);
		b = random(193, 255);

		 }else if (x< 100) {
		r = random(10, 220);
		g = random(0, 240);
		b = random(189, 200);}

		fill(r, g, b);
      	noStroke();

      	triangle(0, 108, 60, 2, 120, 120); //big star
    	triangle(0, 40, 60, 145, 120, 24);

       var randomChoice= random(4);
       if (randomChoice < 2){

       	triangle(119,157, 154, 159, 139,117);//small star
  		triangle(119, 133, 154, 126, 139,169);

    	}

    
    
  	pop();
          
          
        }
  }
  
		}

