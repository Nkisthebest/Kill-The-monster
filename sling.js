class Line{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:1,
            length:500
        }
        this.Line = Constraint.create(options);
        World.add(world, this.Line);
    }
    display(){
        var posA=this.Line.bodyA.position;
        var posB=this.Line.bodyB.position;
        line(posA.x,posA.y,posB.x,posB.y);
    }
}