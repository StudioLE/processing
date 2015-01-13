

// Vars

// Length of axis in pixels (50% window size)
var axis_len = 500;

// Highest value on axis
var axis_max = 6;

// Data file name
var file_name = "LE-11-frame-50.csv"; //"LE-11-five-particles.csv"

// Data imported?
var data_imported = 0;


function setup() {
  
  // Window setup
  createCanvas(2 * axis_len, 2 * axis_len, 'P3D');
  
}

function draw() {
  
  // 3D graph setup
  background(0);
  camera((mouseX * 2) - axis_len, (mouseY * 2) - axis_len, (height/2) / tan(PI/6), width/2, height/2, 0, 0, 1, 0);
  translate(width/2, height/2, -100);
  stroke(255);
  noFill();
  box(1000);
  lights();
  
  // Data import
  if(data_imported == 0) {
    table = new p5.Table;
    table = loadTable(file_name, "header");
  
    //println(table.getRowCount() + " total rows in table"); 
    
    // Sift data
    for (row in table.rows()) {
      
      var id = row.getInt("id");
      var frame = row.getInt("frame");
      var x = row.getFloat("x");
      var y = row.getFloat("y");
      var z = row.getFloat("z");
      
      point(axis_len * (x / axis_max), axis_len * (y / axis_max), axis_len * (z / axis_max));
      
      //println(id + " is (" + x + "," + y + "," + z + ") in frame " + frame);
      
    }
    
    //data_imported = 1;
    
  }
  
}