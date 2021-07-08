class Slingshot{
        constructor(bodyA, pointB){
            var options = {
                "bodyA": bodyA,
                "pointB": pointB,
                "stiffness": 1,
                "length": 50
            }
            this.pointB = pointB;
            this.sling = Matter.Constraint.create(options)
            World.add(world,this.sling);     
        }
        display(){
            if (this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(7);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
            }
            
        }
        fly(){
            this.sling.bodyA = null
        }
}