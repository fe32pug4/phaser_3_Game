import baseSprite   from "../../../parent/objects/baseSprite";

export default class Rocket extends baseSprite {
  img_name: String
  logoFlag: boolean
  constructor(scene: Phaser.Scene, x: number, y: number, img_name: string) {
    super(scene, x, y, img_name);
    this.img_name = img_name;
    this.logoFlag = true;
    scene.add.existing(this);
    scene.physics.add.existing(this); 
  }

  public update() {    
    if(this.img_name == 'rocketup') {
      this.y -= 4;
    } else if(this.img_name == 'rocket1') {
      this.y += 6;    
    } else if(this.img_name == 'rocket2') {
      this.x += 1.5;
      this.y += 7;
    } else if(this.img_name == 'rocket3') {
      this.x += 2.5;
      this.y += 7;    
    } 
  }
}
