export default function sketch(p) {

    let stripes = []

    p.disableFriendlyErrors = true // disables FES

    p.setup = function() {
      p.createCanvas(p.windowWidth, 400)
      p.background(0,10,30)
      p.frameRate(60)

      for(let i = 0; i < 100; i++){
        stripes[i] = new Stripe()
      }

    }

    class Stripe {

        constructor(){

          // p5 p.random
          /*
          this.x = p.random(p.width)
          this.y = p.random(400)
          this.length = p.random(40,400)
          this.length = Math.random() * (400 - 40) + 40;
          this.height = p.random(1,3)
          this.randomNumber = p.random()
          if (this.randomNumber > 0.8){
            this.speed = p.random(50,200)
            this.color = p.color(0,0,255)
          } else {
            this.speed = p.random(5,10)
            this.color = p.color(200)
          }
          */

          // Native js Math Random
          this.x = Math.random() * p.width
          this.y = Math.random() * 400
          this.length = Math.random() * (400 - 40) + 40
          this.height = Math.random() * (3 - 1) + 1
          this.randomNumber = Math.random()
          if (this.randomNumber > 0.8){
            this.speed = Math.random() * (200 - 50) + 50
            this.color = p.color(0,0,255)
          } else {
            this.speed = Math.random() * (10 - 5) + 5
            this.color = p.color(200)
          }
          
        }
      
        display(){
          p.stroke(this.color)
          p.strokeWeight(this.height)
          p.line(this.x, this.y, this.x + this.length, this.y)
        }
        update(){
          this.x = this.x += this.speed
          this.reset()
        }
        reset(){
          if(this.x > p.width){
            //this.x = (-this.length - p.random(p.width))
            this.x = (-this.length - (Math.random() * p.width ))
            //this.y = p.random(400)
            this.y = Math.random() * 400
            //this.length = p.random(40,400)
            this.length = Math.random() * (400 - 40) + 40
            //this.height = p.random(1,3)
            this.height = Math.random() * (3 - 1) + 1
          }
        }
      
      }
  
    p.draw = function() {
        //p.translate(-p.width/2,-p.height/2,0)
      p.background(255)
    
      for(let i = 0; i < stripes.length; i++){
        stripes[i].update()
        stripes[i].display()
      }
    }

    p.windowResized = function() {
        p.resizeCanvas((p.windowWidth), 400)
      }
  }
  