export default function sketch(p) {

    let stripes = []
    let midhoriz
    let midvert

    var num = 50 // number of stars
    var edge = 50 // pixels from the edge of the canvas
    var pointCollection = [] // array of points 

    p.setup = function() {
      //p.createCanvas(p.windowWidth, p.windowHeight)
      p.checkCanvas(p.windowWidth)
      p.smooth()
      p.background(0,10,30)
      p.frameRate(60)

      p.createPoints()

      midhoriz = p.width / 2
      midvert = p.height / 2


    }

    p.createPoints = function() {
      pointCollection = []
      for (let i = 0; i < num; i++){
        let org = p.createVector(p.random(edge, p.width-edge), p.random(edge, p.height-edge));
        let radius = p.random(20, 60);
        let loc = p.createVector(org.x+radius, org.y);
        let offSet = p.random(p.TWO_PI);
        let dir = 1;
        let r = p.random(1);
        if (r>.5) {
          dir =-1;
        }
        let makePoint = new Point(org, loc, radius, dir, offSet);
        pointCollection[i] = makePoint;
      }
    }

    class Point{

      constructor(_org, _loc, _radius, _dir, _offSet) {
        this.org = _org
        this.loc = _loc;
        this.sz = 5;
        this.theta = 0;
        this.radius = _radius;
        this.offSet = _offSet;
        this.dir = _dir
        this.d = 30;
      }
      display = () => {
        for (let i=0; i<5; i++) {
          p.ellipse(this.loc.x, this.loc.y, this.sz-2*i, this.sz-2*i);
        }
      }
      move = () => {
        this.loc.x = this.org.x + p.sin(this.theta+this.offSet)*this.radius;
        this.loc.y = this.org.y + p.cos(this.theta+this.offSet)*this.radius;
        this.theta += (0.04/3*this.dir);
      }
      line = () => {
        for (let i=0; i<pointCollection.length; i++) { 
          let other = pointCollection[i];
          var distance = this.loc.dist(other.loc);
          var mousedist = p.dist(this.loc.x, this.loc.y, midhoriz, midvert);
          
          // mouse line
          if (mousedist > 0 && mousedist < this.d * 4){
            p.stroke(255,255,255);
            p.line(this.loc.x, this.loc.y, midhoriz, midvert);
          }
          // between line
          if (distance >0 && distance < this.d) {
            p.stroke(255,255,255,100);
            p.line(this.loc.x, this.loc.y, other.loc.x, other.loc.y);
          }
        }
      }
      draw = () => {
        p.strokeWeight(.5)
        p.stroke(255)
        p.fill(255)

        this.display()
        this.move()
        this.line()
      }
    }

    
  
    p.draw = function() {
      p.background(0,10,30)
      p.noFill()

      for(let i = 0; i < pointCollection.length; i++){
        let currentPoint = pointCollection[i]
        currentPoint.draw()
      }

      p.stroke(0,120,255)
      p.strokeWeight(1)
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

    p.touchMoved = function() {
      if((p.mouseX > 0 && p.mouseX < p.width) && (p.mouseY > 0 && p.mouseY < p.height)){
        midhoriz = p.mouseX
        midvert = p.mouseY
      } else {
        midvert = p.height / 2
        midhoriz = p.width / 2
      }
    }

    p.touchEnded = function() {
      midvert = p.height / 2
      midhoriz = p.width / 2
    }

    p.windowResized = function() {
        p.checkCanvas(p.windowWidth);
      }

    p.checkCanvas = function(w) {
      if(w > 1024) {
        p.resizeCanvas((w -150) / 2, 400);
        console.log("works");
      }
      if(w <= 1024 && w > 768){
        p.resizeCanvas((w - 60) / 2, 400);
      }
      if(w <= 768 && w > 480){
        p.resizeCanvas((w - 40) / 2, 400);
      }
      if(w <= 480){
        p.resizeCanvas(w - 40, 400);
      }
      midvert = p.height / 2
      midhoriz = p.width / 2
    }
  }
  