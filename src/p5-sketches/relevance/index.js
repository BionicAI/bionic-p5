export default function sketch(p) {


    let stripes = []
    p.setup = function() {
      //p.createCanvas(p.windowWidth, p.windowHeight)
      p.createCanvas((p.windowWidth -150) / 2, 400)
      p.smooth()
      p.background(0,10,30)
      p.frameRate(1)
    }
  
    p.draw = function() {
      p.background(0,10,30)
      p.stroke(0,120,255)
      p.line(0, p.height/2, p.width, p.height/2)
      p.line(p.width/2, 0, p.width/2, p.height)
    }

    p.windowResized = function() {
        p.resizeCanvas((p.windowWidth -150) / 2, 400);
      }
  }
  