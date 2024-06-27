function setup() {
    createCanvas(500, 400);
    background(255, 192, 203);
    x = width / 2;
    y = height / 2;
  }
  
  function draw() {
    const dice1 = floor(random(1, 7));
    const dice2 = floor(random(1, 7));
    const dice3 = floor(random(1, 7));
    lineLength = dice1 * 10;
    lineAngle = dice2 * 30;
    lineStyle = dice3 % 2 === 0 ? 'straight' : 'zigzag';
  
    prevX = x;
    prevY = y;
    drawLine(lineLength, lineAngle, lineStyle);
  }
  
  function drawLine(length, angle, style) {
    const radians = (angle);
    x += length * cos(radians);
    y += length * sin(radians);
    stroke(0); 
    strokeWeight(2);
  
    
    if (style === 'straight') {
      line(prevX, prevY, x, y); 
    } else if (style === 'zigzag') {
     
      for (let i = 0; i < 10; i++) {
        const step = length / 10;
        const startX = prevX + i * step;
        const startY = prevY + (i % 2 === 0 ? -step : step);
        const endX = prevX + (i + 1) * step;
        const endY = prevY + (i % 2 === 0 ? step : -step);
        line(startX, startY, endX, endY);
      }
    }
    prevX = x;
    prevY = y;
  }
  