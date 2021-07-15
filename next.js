class Next{
  constructor(x, y, width, height){
    var options={
      restitution:0.2,
      density:1.2,
      friction:1.5,
      isStatic: true
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.x=x;
    this.y=y;
    this.width=100;
    this.height=30;
    this.image = loadImage("next.png")
    
    this.Visiblity=255;
    World.add(world,this.body)
  }
  display(){
    if(this.body.speed<6){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,30,40);
      pop();
    }
    else{
      push();
      this.Visiblity = this.Visiblity -5;
      World.remove(world,this.body);
      tint(255,this.Visiblity);
      pop();
    }
  }
}