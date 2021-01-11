class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 10,
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1 = loadImage("sling1.png");
        this.sling2 = loadImage("sling2.png");
        this.sling3 = loadImage("sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,195,485);
        image(this.sling2,165,485);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if(pointA.x < 220){
             strokeWeight(4);
             stroke(84,39,15);
             line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y);
             line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y);
             image(this.sling3 , pointA.x - 30 , pointA.y - 10 , 15 , 30);
            } 
            else {
                strokeWeight(7);
                stroke(84,39,15);
                line(pointA.x + 25, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y);
                image(this.sling3 , pointA.x + 25 , pointA.y - 10 , 15 , 30);
            }
        }
    }
}