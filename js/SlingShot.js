class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 100
        }
        this.sling = Constraint.create(options);
        this.pointB=pointB;

        World.add(world, this.sling);

    }
    fly(){
        this.sling.bodyA =false;
        console.log(this.sling.bodyA);
    }
    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        console.log(this.sling.bodyA);
        var pointB = this.pointB;
        
        strokeWeight(4);
        stroke("turquoise");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        }
    
}
