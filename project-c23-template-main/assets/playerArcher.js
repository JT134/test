class playerArcher{
    constructor(x,y,w,h,angle){
    
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.angle = angle
 }
display(){
    push()
    Translate(this.x,this.y);
    rotate(this.angle);
    imageMode(CENTER);
    pop();
    noFill


    if (keyIsDown(DOWN_ARROW) && angle < -73 ) {
        angle += 1;
        Matter.Body.setAngle(this.body, angle);
    }
    
    if (keyIsDown(UP_ARROW) && angle > -103 ) {
        angle -=1;
        Matter.Body.setAngle(this.body, angle);
    }

}
}