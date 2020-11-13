class paper {
    constructor(x, y, radius) {
      var options = {
          'isStatic':false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, radius/2, options);
     
      this.radius=radius;
      
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      //var angle = this.body.angle;
      //push();
      //translate(pos.x, pos.y);
      //rotate(angle);
      ellipseMode(CENTER);
      fill("black");
      strokeWeight(3);
      stroke("white")
      ellipse(pos.x, pos.y, this.radius,this.radius);
      //pop();
    }
  };
  