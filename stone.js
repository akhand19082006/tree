class Stone
{
	constructor(x,y,w,h)
	{
		var options={
            isStatic:false,
            friction:1,
            density:1.2,
            restitution:0
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
        this.body=Bodies.rectangle(x, y, w, h , options);
        this.image=loadImage("stone.png")
 		World.add(world, this.body);

	}
	display()
	{
			
			var treePos=this.body.position;		
			push()
			translate(treePos.x, treePos.y);
			imageMode(CENTER)
			image(this.image,0,0,this.w, this.h);
			pop()
			
	}

}