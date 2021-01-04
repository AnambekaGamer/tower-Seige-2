class Blueblock extends BaseClass{
  constructor(x, y) {
    super(x,y,50,50);

  }
    display(){
      //console.log(this.body.speed);
      if(this.body.speed<3){
        super.display();
      }
      else{
        World.remove(world,this.body);
        push();
        this.Visiblity=this.Visiblity-5
        tint(255,this.Visiblity)
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        rectMode(CENTER);
        strokeWeight(2);
        fill("lightblue")
        pop();
      }

    }

      //display(){
        //var angle = this.body.angle;
        //push();
        //translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        //rectMode(CENTER);
        //strokeWeight(2);
        //fill("lightblue")
        //rect( 0, 0, this.width, this.height);
        //pop();
      //}
}