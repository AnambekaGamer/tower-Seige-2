class Grayblock extends BaseClass{
    constructor(x, y) {
      super(x,y,50,50);
  
    }
      display(){
        console.log(this.body.speed);
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
          fill(128,128,128)
          pop();
        }
  
      }
}