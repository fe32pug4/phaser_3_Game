import baseSprite   from "../../../parent/objects/baseSprite";

export default class DayorNight extends baseSprite {
  img_name: String
  constructor(scene: Phaser.Scene, x: number, y: number, img_name: string) {
    super(scene, x, y, img_name);
    this.img_name = img_name;
    this.logoFlag = true;
    scene.add.existing(this);
    scene.physics.add.existing(this);
    
  }

  public update(flag) {    
    if(flag) {
      if(this.alpha < 0.7) {
        this.alpha += 0.005;
      }
    } else {
      if(this.alpha > 0) {
        this.alpha -= 0.005;
      }
    }
  }
}
