import BaseSprite from '../../../parent/objects/baseSprite'
export default class Reel extends BaseSprite {
  animFrame     : AnimFrame
  animFrames    : AnimFrame[]
  animFramesAni : AnimFrame[]
  imgName       : string
  constructor(scene: Phaser.Scene, x: number, y: number, img_name: string) {
    super(scene, x, y, img_name)
    this.imgName       = img_name;
    //----------Create Animation-------------------
    let animKey        = this.imgName+"Anim"
    this.animFrames    = []
    this.animFramesAni = []
    //Origin Animation   
    this.createAnim(this.imgName, 5, 5, -1);    
    //Ani Animation;
    this.createAnim(this.imgName+"_ani", 12, 10, -1); 
    this.play(animKey);
    this.setVisible(false);
  } 

  public update(index: number, flag: boolean) {   
    if(this.y > 385) {
      this.setVisible(true)
    }

    if(index == 1) {
      if(flag) {
        this.y = this.y + 6
      } else {
        this.y = this.y + 15
      }      
    } else if(index == 2) {
      if(flag) {
        this.y = this.y + 5
      } else {
        this.y = this.y + 14
      }  
    } else if(index == 3) {
      if(flag) {
        this.y = this.y + 4
      } else {
        this.y = this.y + 13
      } 
    } else if(index == 4) {
      if(flag) {
        this.y = this.y + 6
      } else {
        this.y = this.y + 15
      } 
    } 
  }
}