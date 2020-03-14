import AnimFrame  from '../interface/baseInterface'
export default class baseSprite extends Phaser.Physics.Arcade.Sprite {
  logoFlag       : boolean
  animFrame      : AnimFrame
  animFrames     : AnimFrame[]
  strImgName     : string
  scene          : Phaser.Scene
  constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
    super(scene, x, y, texture);
    this.scene = scene;
    scene.add.existing(this);
    scene.physics.add.existing(this);
  }

  public createAnim(img_name: string, nframeNum: number, nframeRate: number) {
    this.animFrames = []
    let strAnimKey = img_name+"Anim";
    for(let i=0; i<nframeNum; i++) {
      let frameName = "";
      if(i>9) {
        frameName = (img_name+"_00"+i).toString();
      } else {
        frameName = (img_name+"_000"+i).toString();
      } 
      this.animFrame   = {key: frameName, frame: NaN};
      this.animFrames.push(this.animFrame);
    }
    let animation = this.scene.anims.create({
      key: strAnimKey.toString(),
      frames: this.animFrames,
      frameRate: nframeRate,
      repeat: -1
    });
    return animation;
  }

  public getPositionX() {
    return this.x;
  }

  public getPositionY() {
    return this.y;
  }

  public update() {    
    if(this.strImgName == 'droper') {
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
    } else if(this.strImgName == 'background_image') {
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
    } else if(this.strImgName == 'wintable1' || this.strImgName == 'wintable2'){
      this.x = this.x - 1
    } else {
      this.setVelocity(10, 70)
      //this.setFlipY(false)
    }
  }
}
