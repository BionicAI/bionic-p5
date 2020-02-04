export default function sketch(p) {

    let stripes = []
    let midhoriz
    let midvert

    p.setup = function() {
      //p.createCanvas(p.windowWidth, p.windowHeight)
      p.createCanvas((p.windowWidth -150) / 2, 400, p.WEBGL)
      p.smooth()
      p.background(0,10,30)
      p.frameRate(60)

      midhoriz = p.width / 2
      midvert = p.height / 2
    }
  
    p.draw = function() {
      p.background(0,10,30)
      p.noFill()
      p.stroke(0,120,255)
      p.translate(-p.width/2,-p.height/2,0)
      p.line(0, midvert, p.width, midvert)
      p.line(midhoriz, 0, midhoriz, p.height)
    }

    p.mouseMoved = function() {
      if((p.mouseX > 0 && p.mouseX < p.width) && (p.mouseY > 0 && p.mouseY < p.height)){
        midhoriz = p.mouseX
        midvert = p.mouseY
      } else {
        midvert = p.height / 2
        midhoriz = p.width / 2
      }
    }

    p.windowResized = function() {
        p.resizeCanvas((p.windowWidth -150) / 2, 400);
      }
  }
  