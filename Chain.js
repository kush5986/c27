class Chain  {
    constructor(bodyA,bodyB){
        var options ={
            bodyA:bird.body,
            bodyB:constrainedLog.body,
            stiffness:0.4,
            length:10
        
        }
        this.chain=Constraint.create(options);
    World.add(world,this.chain);
    }
  display(){
      var pointA =this.chain.bodyA.position;
      var pointB =this.chain.bodyB.position;
      strokeWeight(3);
      
      line(bird.body.position.x,bird.body.position.y,constrainedLog.body.position.x,constrainedLog.body.position.y);
  }
  };
  