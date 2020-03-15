import BaseSprite from '../../../parent/objects/baseSprite'
export default class Reel extends BaseSprite {
  animFrame     : AnimFrame
  animFrames    : AnimFrame[]
  animFramesAni : AnimFrame[]
  constructor(scene: Phaser.Scene, x: number, y: number, img_name: string) {
    super(scene, x, y, img_name)
    
    //----------Create Animation-------------------
    let animKey        = img_name+"Anim"
    let animKeyAni     = img_name+"_aniAnim"
    this.animFrames    = []
    this.animFramesAni = []
    //Origin Animation   
    this.createAnim(img_name, 5, 5, -1)    
    //Ani Animation
    this.createAnim(img_name+"_ani", 12, 5, -1) 
    this.play(animKey)
    this.setVisible(false)
  } 

  public update(index: number, flag: boolean) {   
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