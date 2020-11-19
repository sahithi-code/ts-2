class Poly{

constructor(x,y,r)
{
var options={
isStatic:true

}
//his.sides=sides;
this.r=r;
this.x=x
this.y=y
this.polygon=Bodies.circle(x,y,r,options)
World.add(world,this.polygon)
}
display()
{
    push();
    var pos=this.polygon.position
    translate(pos.x,pos.y)
   ellipseMode(CENTER)
   ellipse(this.x,this.y,this.r,this.r)
   pop();
}

}