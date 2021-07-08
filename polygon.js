class Polygon{
 constructor(x,y){
     var options = {
      'restitution':0.5,
      'friction': 1.0,
      'density': 0.5
     }
     this.body = Bodies.rectangle(x,y, 60, 60,options);
     this.image = loadImage("polygon.png");
     World.add(world, this.body);
     };
     display(){
       var pos = this.body.position;
       
      push();
    translate(pos.x, pos.y);
    rotate(this.body.angle);
    strokeWeight(3);
   imageMode(CENTER)
   image(this.image, 0, 0, 60, 60);
    pop();
  }
}