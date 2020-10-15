class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY){ 
        
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointC: {x: offsetX, y: offsetY},           
        }
       
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        var pointA = this.rope.bodyA.position; 
        var pointB = this.rope.bodyB.position; 

        var anchor1X=pointA.x;
        var anchor1Y=pointA.y;

        var anchor2X=pointB.x + this.rope.pointC.x; 
        var anchor2Y=pointB.y + this.rope.pointC.y;

        strokeWeight(2);
        //stroke("blue");
        //fill(255); will not work for line
        line(anchor1X,anchor1Y , anchor2X, anchor2Y); 
    }
    
}