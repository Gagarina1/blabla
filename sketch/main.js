function setup() {
    createCanvas(312,400);
  }
  
  function draw() {
    background('#F1F3EF');
    noStroke();
    fill('#578DCF');
    triangle(map(mouseX,0,width,85,-400),400,85,252,154,252);
    fill('#e63946');
    triangle(map(mouseX,0,width,154,360),252,230,0,230,252);
     
    fill(map(mouseX, 0, 400, 217, 400),237,141);
    circle(50,81,map(mouseX,0,width,40,200));
    
  
    fill('#007F45');
    circle(261,145,map(mouseX,0,width,40,1));
    fill('#e63946');
    circle( 32,259, map(mouseX,0,width,40,200));
    fill(map(mouseX, 0, 400, 0, 360),100,185);
    circle(238,374,map(mouseX,0,width,40,150));
    fill(0);
    stroke(0);
    strokeWeight(2);
    line(map(mouseX,0,width,50,200), 101, 290, 127);
    line(map(mouseX,0,width,50,200),102,50,232);
    line(map(mouseX,0,width,0,400),244,400,162);
    line(map(mouseX,0,width,116,-400),0,178,400);
    
  
    line(map(mouseX,0,width,168,-400),209,230,358);
  
  }
    
    
    
  