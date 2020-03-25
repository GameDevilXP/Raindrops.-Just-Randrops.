class RaindropParent {
    constructor(x,y) {
        var velocity ={
            velocityX: +3
        }
        this.body = Bodies.rectangle(x,y,width,height,velocity);
        this.width = 3;
        this.height = 15;
    };

    display() {
        var angle = this.body.angle;
        push();
        translate(this.body.x,this.body.y);
        rotate(angle);
        fill("grey");
        strokeWeight = 1;
        stroke(29,34,123);
        pop();
    }
    

};