export default function sketch(p) {

    let canvas 
    p.setup = function() {
      //p.createCanvas(p.windowWidth, p.windowHeight)
      canvas = p.createCanvas(p.windowWidth - 60, 800)
      canvas.position(30,150)
      p.background(125)
      canvas.style('z-index', '-1')
    }
  
    p.draw = function() {
        p.background(255);  
        p.stroke(236);
        p.strokeWeight(1);
        /*
        for (var x = 0; x < p.width; x += 10) {
            for (var y = 0; y < p.height; y += 10) {
            p.line(x, 0, x, p.height);
            p.line(0, y, p.width, y);
            }
        }
        */
    }
    p.windowResized = function() {
        canvas = p.createCanvas(p.windowWidth - 60, 800);
      }
  }
  