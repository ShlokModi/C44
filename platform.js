class Platform{
    constructor(x,y){
        var options = {
            isStatic: true
        }
        this.platform = Bodies.rectangle(x,y,50,20,options);
        World.add(world,this.platform);
    }
    display(){
        var pos = this.platform.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,50,20);
    }
}