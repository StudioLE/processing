float x_coord;
float y_coord;
float division;
float x_divider;
float y_divider;

void setup() {
  size(900,900);
  division = 20;
  x_divider = width / division;
  y_divider = height / division;
  smooth();
  //noFill();
  strokeWeight(1.5);
}

void draw() {
  background(#111111);
  
  x_coord = x_divider;
  y_coord = y_divider;
  
  for(int a = 0; a < (division - 1); a++) {
    for(int b = 0; b < (division - 1); b++) {
  
      //circle_function(x_coord, y_coord);
      circle_function_alt(x_coord, y_coord, a, b, division);
      x_coord += x_divider;
    }
    
    x_coord = x_divider;
    y_coord += y_divider;
    
  }
}