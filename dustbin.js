class dustbin{
    constructor(x,y,width,height){
var options={
    'isStatic':true,
    //'restitution':0.8,
    //'friction':0.4,
    //'density':0.8
}
this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
//Matter.Body.setAngle(this.body,angle);
World.add(world,this.body);
    }
    
    display(){
        var pos=this.body.position;
        //var angle=this.body.angle;
        //push();
        //translate(pos.x,pos.y);
        //rotate(angle);
        rectMode(CENTER);
        fill("purple");
        rect(pos.x,pos.y,this.width,this.height)
        //pop();
    }
}
