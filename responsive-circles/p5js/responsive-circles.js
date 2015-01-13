var x_coord
var y_coord
var division
var x_divider
var y_divider

function setup() {
	createCanvas(900,900)
	division = 20
	x_divider = width / division
	y_divider = height / division
	smooth()
	//noFill()
	strokeWeight(1.5)
}

function draw() {
	background(17,17,17)
	
	x_coord = x_divider
	y_coord = y_divider
	
	for(var a = 0; a < (division - 1); a++) {
		for(var b = 0; b < (division - 1); b++) {
	
			//circle_function(x_coord, y_coord)
			circle_function_alt(x_coord, y_coord, a, b, division)
			x_coord += x_divider
		}
		
		x_coord = x_divider
		y_coord += y_divider
		
	}
}

function circle_function(x, y) {
  push()
    
    //var diameter = mouseX / 5 + 10
    var mouse_dist = dist(x, y, mouseX, mouseY)
    var diameter = mouse_dist / 10
    translate(x, y)
    stroke(255)
    ellipse(0, 0, diameter, diameter)
  
  pop()
}

function circle_function_alt(x, y, a, b, division) {
  
  push()
    
    //var diameter = mouseX / 5 + 10
    var mouse_dist = dist(x, y, mouseX, mouseY)
    var diameter = mouse_dist / 10
    
    var red = 255 * (a / division)
    var green = 255 * (b / division)
    var blue = 255
    
    translate(x, y)
    stroke(red, green, blue)
    fill(red, green, blue)
    ellipse(0, 0, diameter, diameter)
  
  pop()
  
}