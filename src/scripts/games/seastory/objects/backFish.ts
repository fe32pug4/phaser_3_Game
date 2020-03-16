import BaseSprite        from '../../../parent/objects/baseSprite'
export default class BackFish extends BaseSprite {
  logoFlag   : boolean
  scene      : Phaser.Scene
  animFrame  : AnimFrame
  animFrames : AnimFrame[]
  flag       : boolean
  constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
    super(scene, x, y, texture)
    this.logoFlag = true
    this.scene = scene
    scene.add.existing(this)
    scene.physics.add.existing(this)
    this.flag  = false
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

  public update(nSpeed, nbackFishFlag) { 
    if(nbackFishFlag > 5) {      
      this.flag = false
    } else {
      this.flag = true
    }
    if(this.flag == true) {
      this.setFlipX(false)
      this.x -= nSpeed
    } else {
      this.setFlipX(true)
      this.x += nSpeed
    }
  }
}
