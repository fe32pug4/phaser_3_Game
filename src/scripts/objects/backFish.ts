export default class BackFish extends Phaser.Physics.Arcade.Sprite {
  logoFlag   : boolean
  scene      : Phaser.Scene
  animFrame  : AnimFrame
  animFrames : AnimFrame[]
  constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
    super(scene, x, y, texture)
    this.logoFlag = true
    this.scene = scene
    scene.add.existing(this)
    scene.physics.add.existing(this)
    
    //----------Create Animation-------------------
    var animKey     = texture + "Anim"
    this.animFrames = []
    for(var i=0; i<6; i++) {
      let frameName    = (texture+"_000"+i).toString()
      this.animFrame   = {key: frameName, frame: NaN}
      this.animFrames.push(this.animFrame)
    }
    scene.anims.create({
      key: animKey.toString(),
      frames: this.animFrames,
      frameRate: 20,
      repeat: -1
    });
    this.play(animKey)
  } 

  public update() { 
    var flag = true
    console.log(this.x)
    if(this.x == -50) {      
      flag = false
    } else if(this.x == 490) {
      flag = true
    }

    if(flag == true) {
      this.setFlipX(true)
      this.x -= 2
    } else {
      this.setFlipX(true)
      this.x += 2
    }
  }
}
