class Cannon{
    constructor(x,y,w,h,angle){
      
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.angle
        this.cannon_image = loadImage("./assets/canon.png");
        this.cannonBase = loadImage("./assets/cannonBase.png");
    }
display(){
    push();
    Translate(this.x,this.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.cannon_image,0,0,this.w,this.h);
    pop();
    image(this.cannonBase,70,20,200,200);
    noFill
}
}

