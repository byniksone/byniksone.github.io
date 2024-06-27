function setup() {
    createCanvas(800, 800); 
    background(0); 
    strokeWeight(1.5);  
  }
  
  function draw() {
    let dice1 = int(random(1, 7)); 
    let dice2 = int(random(1, 7)); 
    let dice3 = int(random(1, 7)); 
  
    let x1 = random(width); 
    let y1 = random(height); 
    let x2 = x1; 
    let y2 = y1; 
  
  
    let lineLength = dice1 * 10; 
  
    
    if (dice2 <= 2) {
      y2 -= lineLength;
    } else if (dice2 <= 4) {
      x2 += lineLength; 
    } else {
      y2 += lineLength; 
    }
  
    
    if (frameCount % 3 == 0) {
      stroke(255, 0, 0); // 
    } else if (frameCount % 3 == 1) {
      stroke(0, 0, 255); //
    } else {
      stroke(255); // 
    }
  
  
    line(x1, y1, x2, y2);
  
  
    if (frameCount >= 1000) {
      loop(); //
    }
  }
  