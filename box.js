class Box {
constructor(x,y,width,height){
 var options={

   /* friction:0.05,
    density:0.5*/
 }

   
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    //his.angle = angle
    this.Visibility=255
this.body= Bodies.rectangle(x,y,width,height,options)
World.add(world,this.body)

}

score()
{
if(this.Visibility<0 && this.Visibility>105){
    score=score+5
}

}
display(){
   
   fill("pink")
  
   
    if(this.body.speed<3)
{
    
  
 // var pos =this.body.position;
  var pos =this.body.position;
 // angl = this.body.angle;
  //console.log(this.body.speed)
  push();
  translate(pos.x,pos.y)
  rectMode(CENTER);
  rect(pos.x, pos.y, this.width, this.height);
  pop();
  rectMode(CENTER);
  rect(pos.x, pos.y, this.width, this.height);
}
else{

World.remove(world,this.body)
push()
this.Visibility=this.Visibility-5
tint(255,this.Visibility)
//rect(pos.x, pos.y, this.width, this.height);
pop()
}

}   }


