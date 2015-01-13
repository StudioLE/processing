void circle_function(float x, float y) {
  pushMatrix();
    
    //float diameter = mouseX / 5 + 10;
    float mouse_dist = dist(x, y, mouseX, mouseY);
    float diameter = mouse_dist / 10;
    translate(x, y);
    stroke(255);
    ellipse(0, 0, diameter, diameter);
  
  popMatrix();
}

void circle_function_alt(float x, float y, float a, float b, float division) {
  
  pushMatrix();
    
    //float diameter = mouseX / 5 + 10;
    float mouse_dist = dist(x, y, mouseX, mouseY);
    float diameter = mouse_dist / 10;
    
    float red = 255 * (a / division);
    float green = 255 * (b / division);
    float blue = 255;
    
    translate(x, y);
    stroke(red, green, blue);
    fill(red, green, blue);
    ellipse(0, 0, diameter, diameter);
  
  popMatrix();
  
}