class Paper {
	constructor(x,y,r) {
		var options = {
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
	    this.image = loadImage("sprites/p2.png");
		this.x = x;
		this.y = y;
		this.r = r;
		this.body=Bodies.circle(this.x, this.y, this.r/2, options);
		
		World.add(world,this.body);
		World.add(world,this.image);

	}
	display() {
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			this.body.scale = 0.1;
			rotate(this.body.angle);
			imageMode(CENTER);
			//strokeWeight(4);
			stroke(255)
			fill(255)
			image(this.image,0,0,this.width,this.height);
			pop()
			
	}
}