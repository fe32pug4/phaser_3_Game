import MainScene from '../scenes/mainScene'
export default class PhaserLogo extends Phaser.Physics.Arcade.Sprite {
  img_name   : String
  logoFlag   : boolean
  mainScene  : MainScene
  animFrame  : AnimFrame
  animFrames : AnimFrame[]
  constructor(scene: Phaser.Scene, x: number, y: number, img_name: string) {
    super(scene, x, y, img_name)
    this.img_name = img_name
    this.logoFlag = true
    scene.add.existing(this)
    scene.physics.add.existing(this)

    if(img_name == 'coin') {
      scene.anims.create({
        key: 'coinAnim',
        frames: [
            { key: 'ball_01', frame: NaN },
            { key: 'ball_02', frame: NaN },
            { key: 'ball_03', frame: NaN }
        ],
        frameRate: 7,
        repeat: -1
      });  
      this.play("coinAnim")
    }

    if(img_name == 'hae') {
      let animKey = "haeAnim"
      this.animFrames = [] 
      for(var i=0; i<30; i++) {
        var frameName = ""
        if(i>9) {
          frameName = (img_name+"_00"+i).toString()
        } else {
          frameName = (img_name+"_000"+i).toString()
        } 
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

    if(img_name == 'turtle') {
      let animKey = "turtleAnim"
      this.animFrames = [] 
      for(var i=0; i<21; i++) {
        var frameName = ""
        if(i>9) {
          frameName = (img_name+"_00"+i).toString()
        } else {
          frameName = (img_name+"_000"+i).toString()
        } 
        this.animFrame   = {key: frameName, frame: NaN}
        this.animFrames.push(this.animFrame)
      }
      scene.anims.create({
        key: animKey.toString(),
        frames: this.animFrames,
        frameRate: 10,
        repeat: -1
      });

      this.play(animKey)
    }

    if(img_name == 'shark') {
      let animKey = "sharkAnim"
      this.animFrames = [] 
      for(var i=0; i<37; i++) {
        var frameName = ""
        if(i>9) {
          frameName = (img_name+"_00"+i).toString()
        } else {
          frameName = (img_name+"_000"+i).toString()
        } 
        this.animFrame   = {key: frameName, frame: NaN}
        this.animFrames.push(this.animFrame)
      }
      scene.anims.create({
        key: animKey.toString(),
        frames: this.animFrames,
        frameRate: 10,
        repeat: -1
      });

      this.play(animKey)
    }
    // this.setCollideWorldBounds(true)
    //   .setBounce(0.6)
    //   .setInteractive()
    //   .on('pointerdown', () => {
    //     this.setVelocityX(-400)
    //   })    
  }

  public getPositionX() {
    return this.x;
  }

  public getPositionY() {
    return this.y;
  }

  public update() {    
    if(this.img_name == 'droper') {
      if(this.x > 370) {
        this.logoFlag = false 
      } else if(this.x < 60) {
        this.logoFlag = true        
      }
      
      if(this.logoFlag == true) {
        this.x = this.x + 3
      } else {
        this.x = this.x - 3 
      } 
    } else if(this.img_name == 'background_image') {
      if(this.x > 200) {
        this.logoFlag = false 
      } else if(this.x < 150) {
        this.logoFlag = true        
      }
      
      if(this.logoFlag == true) {
        this.x = this.x + 0.1
      } else {
        this.x = this.x - 0.1 
      } 
    } else if(this.img_name == 'wintable1' || this.img_name == 'wintable2'){
      this.x = this.x - 1
    } else {
      this.setVelocity(10, 70)
      //this.setFlipY(false)
    }
  }
}
