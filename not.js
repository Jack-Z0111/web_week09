let i

function setup() {
	createCanvas(600, 600);
	background(255);
}

function draw() {
	background(255);
	fill(0, 0, 255);
	rect(mouseX, mouseY, 50, 50);
	for (i = 0 ; i < 8 ; i ++ ) {
		ellipse(50 * i, 50 * i, 30, 30);
	}

}