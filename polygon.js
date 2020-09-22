class Polygon{
    constructor(x,y,radius){
       var options ={
           'restitution':0.03,
           'friction': 1.0,
           'density': 1.0,
       }
       this.polygon = Bodies.circle(x,y,radius,options);
       this.x = x;
       this.y = y;
       this.radius = radius;
       this.image = loadImage("pics/maxresdefault.png");
       World.add(world,this.polygon);
    }
    display(){
        var pos = this.polygon.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,200,100);
    }
}