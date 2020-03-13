export default class Coin extends Phaser.Physics.Arcade.Sprite {
  img_name: String
  logoFlag: boolean
  constructor(scene: Phaser.Scene, x: number, y: number, img_name: string) {
    super(scene, x, y, img_name)
    this.img_name = img_name
    this.logoFlag = true
    scene.add.existing(this)
    scene.physics.add.existing(this)
    this.setCollideWorldBounds(true)
      .setBounce(0.6)
      .setInteractive()
      .on('pointerdown', () => {
        this.setVelocityX(-400)
      })    
  }
  public update() {    
    this.y = this.y + 5;
  }
}
