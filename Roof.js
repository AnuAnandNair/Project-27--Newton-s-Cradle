class Roof{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.object=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.object);
    }

    display(){
        var pos=this.object.position;
        push();
		translate(pos.x, pos.y);
        rectMode(CENTER);
        fill(128,128,128);
		rect(0,0,this.width,this.height);
		pop();
        //rect(pos.x,pos.y,this.width,this.height);
    }
}