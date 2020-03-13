export default class Reel extends Phaser.Physics.Arcade.Sprite {
  img_name: String
  logoFlag: boolean
  scene: Phaser.Scene
  reelX: number
  reelY: number  
  animFrame  : AnimFrame
  animFrames : AnimFrame[]
  animFramesAni : AnimFrame[]
  constructor(scene: Phaser.Scene, x: number, y: number, img_name: string) {
    super(scene, x, y, img_name)
    this.img_name = img_name
    this.logoFlag = true
    this.scene = scene
    this.reelX = x
    this.reelY = y
    scene.add.existing(this)
    scene.physics.add.existing(this)
    
    //----------Create Animation-------------------
    let animKey = 'reel'+img_name
    let animKeyAni = 'reel'+img_name+'Ani'
    this.animFrames = []
    this.animFramesAni = []
    //Origin Animation   
    for(var i=0; i<5; i++) {
      let frameName = (img_name+"_000"+i).toString()
      this.animFrame   = {key: frameName, frame: NaN}
      this.animFrames.push(this.animFrame)
    }
    //Ani Animation
    for(var i=0; i<12; i++) {
      let image_Name = ''
      if(i>9) {
        let frameName = (img_name+"_ani_00"+i).toString()
        this.animFrame   = {key: frameName, frame: NaN}
        this.animFramesAni.push(this.animFrame)
      } else {
        let frameName = (img_name+"_ani_000"+i).toString()
        this.animFrame   = {key: frameName, frame: NaN}
        this.animFramesAni.push(this.animFrame)
      }      
    }
    scene.anims.create({
      key: animKey.toString(),
      frames: this.animFrames,
      frameRate: 20,
      repeat: -1
    });

    scene.anims.create({
      key: animKeyAni.toString(),
      frames: this.animFramesAni,
      frameRate: 20,
      repeat: -1
    });
    this.play(animKey)
    this.setVisible(false)
    // this.setCollideWorldBounds(true)
    // .setBounce(0.6)
    // .setInteractive()
    // .on('pointerdown', () => {
    //   this.setVelocityX(-400)
    // })
  }

  public getPositionX() {
    return this.x;
  }

  public getPositionY() {
    return this.y;
  }
  
  public updateY(index) {
    if(index == 1) {
      this.y = this.y + 5
    } else if(index == 2) {
      this.y = this.y + 4
    } else if(index == 3) {
      this.y = this.y + 3
    } else if(index == 1) {
      this.y = this.y + 5
    } 
  }
  public update(index: number, flag: boolean) {    
    // if(this.y < this.reelY) {
    //   this.y = this.y + 5
    // }   
    
    if(this.y > 385) {
      this.setVisible(true)
    }

    if(index == 1) {
      if(flag) {
        this.y = this.y + 3
      } else {
        this.y = this.y + 10
      }      
    } else if(index == 2) {
      if(flag) {
        this.y = this.y + 3
      } else {
        this.y = this.y + 8
      }  
    } else if(index == 3) {
      if(flag) {
        this.y = this.y + 4
      } else {
        this.y = this.y + 6
      } 
    } else if(index == 4) {
      if(flag) {
        this.y = this.y + 3
      } else {
        this.y = this.y + 10
      } 
    } 
  }
}
