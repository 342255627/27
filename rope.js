class Rope {
constructor(body1,body2, offsetX, offsetY)
{

    this.offsetX = offsetX
    this.offSetY = offsetY

var optionss={
bodyA:body1,
bodyB:body2,
pointB:{x:this.offsetX,y:this.offestY}
}

this.rope=Constraint.create(options)
World.add(world,this.rope)

} 
}