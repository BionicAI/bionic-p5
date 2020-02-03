export default function yolosketch(p) {

  let canvas 
  p.setup = function() {
    //p.createCanvas(p.windowWidth, p.windowHeight)
    canvas = p.createCanvas(p.windowWidth - 60, p.windowHeight)
    canvas.position(30,150)
    p.background(125)
    canvas.style('z-index', '-1')
  }

  p.draw = function() {
    
  }
}
