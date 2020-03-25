export default class Submarine extends Phaser.Physics.Arcade.Sprite {
  img_name: String
  logoFlag: boolean
  constructor(scene: Phaser.Scene, x: number, y: number, img_name: string) {
    super(scene, x, y, img_name);
    this.img_name = img_name;
    this.logoFlag = true;
    scene.add.existing(this);
    scene.physics.add.existing(this); 
  }
  public update(flag) {    
    if(flag) {
      this.x += 2;
    } else {

    }
    
    if(this.x > 680) {
      //After submarine disappears from the screen, move it to the first position.
      this.destroy();
    }
  }
}
