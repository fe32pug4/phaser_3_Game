import baseSprite   from "../../../parent/objects/baseSprite";

export default class Wintable extends baseSprite {
  img_name: String
  constructor(scene: Phaser.Scene, x: number, y: number, img_name: string) {
    super(scene, x, y, img_name);
    this.img_name = img_name;
    this.logoFlag = true;
    scene.add.existing(this);
    scene.physics.add.existing(this);
  }

  public update() {    
    if(this.img_name == 'wintable1' || this.img_name == 'wintable2'){
      this.x = this.x - 1
    } 
  }
}
