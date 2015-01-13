var original_sq_size = 350
var rangle
var sq_size

function setup() {
	createCanvas(900,900)
	smooth()
	noFill()
	rectMode(CENTER)
}

function draw() {
	
	var mod
	
	sq_size = original_sq_size
	
	background(17,17,17)
	stroke(162,232,105)
	translate(width / 2, height / 2)
	var c_mouse_x = mouseX
	rangle = (c_mouse_x / width) * (PI / 2)
	
	for(var i = 0; i < 200; i++) {
		mod = i % 3
		//println(i + "/ 3 = " + mod)
		if(mod == 0) {
			stroke(162,232,105)
		}
		else if (mod == 1) {
			stroke(251,115,255)
		}
		else {
			stroke(105,122,232)
		}
		rect(0, 0, sq_size, sq_size)
		rotate(rangle)
		sq_size = sq_size * cos(rangle)
	}
	
	
}
