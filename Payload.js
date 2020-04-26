class Payload extends Base {
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("Circle-Transparent-PNG.png");
    }
  
    display() {
      super.display();
    }
  }