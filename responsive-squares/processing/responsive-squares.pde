float original_sq_size = 350;
float rangle;
float sq_size;

void setup() {
  size(900,900);
  smooth();
  noFill();
  rectMode(CENTER);
}

void draw() {
  
  float mod;
  
  sq_size = original_sq_size;
  
  background(#111111);
  stroke(#A2E869);
  translate(width / 2, height / 2);
  float c_mouse_x = float(mouseX);
  rangle = (c_mouse_x / width) * (PI / 2);
  
  for(int i = 0; i < 200; i++) {
    mod = i % 3;
    //println(i + "/ 3 = " + mod);
    if(mod == 0) {
      stroke(#A2E869);
    }
    else if (mod == 1) {
      stroke(#FB73FF);
    }
    else {
      stroke(#697AE8);
    }
    rect(0, 0, sq_size, sq_size);
    rotate(rangle);
    sq_size = sq_size * cos(rangle);
  }
  
  
}
