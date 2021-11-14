class Box {

    constructor(x,y,width,height) {
        var options = {
            isStatic : false,
    
        }
    
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);

        this.w = width;
        this.h = height;
     

    }


    display() {
        rectMode(CENTER);
        fill("red");
        rect(this.body.position.x,this.body.position.y,this.w,this.h);  
    }


}