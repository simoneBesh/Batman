/*class Drops{
    constructor(x, y){
        var options={
            restitution: 0.1,
            friction: 0.2,
            isStatic: false,
        }
        this.body=Bodies.rectangle(x, y, options);
        World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        ellipseMode(CENTER);
        fill("blue");
        ellipse(0, 0, this.r, this.r);

    }

} 
class Drops {
    constructor(x, y) {
    var options = {
        isStatic: false,
        restitution: 0.1,
        friction:0.1

     }
     this.x=x;
     this.y=y;
     //this.r=r;
     this.body = Bodies.circle(this.x, this.y, options);
     this.color=color(30, 10, 90);
          
     World.add(world, this.body);
        }
        display(){
          var pos =this.body.position;
          push();
          translate(pos.x, pos.y);
          rotate(this.body.angle);
          ellipseMode(CENTER);
          fill(this.color);
          ellipse(0, 0);
          //strokeWeight(4);
          //stroke("white");
          //image(this.image, 0, 0, this.r*2, this.r*2);
          pop();
        }
     

} */
class Drops {
    constructor(x, y, r) {
    var options = {
        isStatic: false,
        restitution: 0.1,
        friction:0.1

     }
     this.x=x;
     this.y=y;
     this.r=r;
     this.body = Bodies.circle(this.x, this.y, this.r/2, options);
     this.color=color(random(0,255), random(0,255), random(0,255));
          
     World.add(world, this.body);
        }
        display(){
          var pos =this.body.position;
          push();
          translate(pos.x, pos.y);
          rotate(this.body.angle);
          ellipseMode(CENTER);
          fill(this.color);
          ellipse(0, 0, this.r, this.r);
          //strokeWeight(4);
          //stroke("white");
          //image(this.image, 0, 0, this.r*2, this.r*2);
          pop();
        }
     

}