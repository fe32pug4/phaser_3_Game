import baseSprite   from "../../../parent/objects/baseSprite";

export default class God extends baseSprite {
  img_name: String
  constructor(scene: Phaser.Scene, x: number, y: number, img_name: string) {
    super(scene, x, y, img_name);
    this.img_name = img_name;
    this.logoFlag = true;
    scene.add.existing(this);
    scene.physics.add.existing(this);
    
    if(img_name == 'hae') {
      this.createAnim(img_name, 30, 10, -1)
      let animKey = "haeAnim"
      this.play(animKey)
    }

    if(img_name == 'turtle') {
      this.createAnim(img_name, 21, 5, -1)
      let animKey = "turtleAnim"
      this.play(animKey)
    }

    if(img_name == 'shark') {
      this.createAnim(img_name, 37, 10, -1)
      let animKey = "sharkAnim"
      this.play(animKey)
    }
  }

  public update(flag) {    
    if(this.y < -200) {
      this.destroy();
    }
    if(this.img_name == 'hae') {
      this.y -= 0.5;
      this.x -= 0.05;
    }

    if(this.img_name == 'turtle') {
      if(flag){
        this.x += 0.8;
      } else {
        this.x -= 0.8;
      }      
    }

    if(this.img_name == 'shark') {
      this.x += 2;
    } 
  }
}
