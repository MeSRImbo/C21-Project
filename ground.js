class Ground {
    constructor(x,y,w,h) {
        this.body = Bodies.rectangle(x,y,w,h,{isStatic: true})
        this.w = w;
        this.h = h;
        World.add(world, this.body)
    }
    display() {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        stroke(255);
        fill(127);
        rect(pos.x, pos.y, this.w, this.h);
        pop();
    }
  
}