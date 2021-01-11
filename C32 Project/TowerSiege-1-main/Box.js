class Box{
  constructor(x, y, width, height, angle) {
      var options = {
          isStatic:false,
          'restitution':0.5,
          'friction':1.0,
          'density':0.1,
          "mass":1
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibility = 255;
      World.add(world, this.body);
    }
    display(){
      stroke("Green");
      var angle = this.body.angle;
      var positon = this.body.position;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
     if (this.body.speed < 3) {
       //Do nothing (lines 17-25 are executed)
     } else {
      World.remove(world,this.body);
      push();
      this.visibility = this.visibility - 5;
      tint(255,this.visibility);
      rect(this.body.position.x,this.body.position.y,width,this.height);
      pop();
     }
     function score() {
      if(this.visibility <0 && this.visibility >- 105) {
        score++;
      }
    }
  }
}