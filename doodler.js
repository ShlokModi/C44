class Doodler{
    constructor(){
        var options= {
            restitution:1.0
        }
        this.doodler = Bodies.rectangle(400,400,20,20,options);
        World.add(world,this.doodler);
    }
    display(){
        var pos = this.doodler.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,20,20);
    }
}