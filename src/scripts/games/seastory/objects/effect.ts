export default class Effect extends Phaser.Physics.Arcade.Sprite {
  logoFlag   : boolean
  scene      : Phaser.Scene
  animFrame  : AnimFrame
  animFrames : AnimFrame[]
  flag       : boolean
  animReapeat: number;
  constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
    super(scene, x, y, texture)
    this.logoFlag = true
    this.scene = scene
    scene.add.existing(this)
    scene.physics.add.existing(this)
    this.flag  = false;
    this.animReapeat = -1;
    //----------Create Animation-------------------
    var frameNumber = 0
    if(texture == "fireworks") {
      frameNumber = 58;
    } else if(texture == "dol") {
      frameNumber = 53;
    } else if(texture == "event_bar") {
      frameNumber = 44;
    } else if(texture == "event_seven") {
      frameNumber = 42;
    } else if(texture == "eventstar1") {
      frameNumber = 6;
    } else if(texture == "spark") {
      frameNumber = 9;
    } else if(texture == "boom") {
      this.animReapeat = 0;
      frameNumber = 27;
    }

    var animKey     = texture + "Anim"
    var frameName   = ''
    this.animFrames = []
    for(var i=0; i<frameNumber; i++) {
      if(i > 9) {
        frameName    = (texture+"_00"+i).toString()
      } else {
        frameName    = (texture+"_000"+i).toString()
      }
      
      this.animFrame   = {key: frameName, frame: NaN}
      this.animFrames.push(this.animFrame)
    }
    scene.anims.create({
      key: animKey.toString(),
      frames: this.animFrames,
      frameRate: 20,
      repeat: this.animReapeat
    });
    this.play(animKey)
  } 

  public update() { 
    if(this.x == -50) {      
      this.flag = false
    } else if(this.x == 490) {
      this.flag = true
    }

    if(this.flag) {
      this.setFlipX(false)
      this.x -= 1
    } else {
      this.setFlipX(true)
      this.x += 1
    }
  }
}
