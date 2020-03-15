import BaseSprite        from '../../../parent/objects/baseSprite'
export default class SeaSprite extends BaseSprite {
  img_name   : String
  logoFlag   : boolean
  animFrame  : AnimFrame
  animFrames : AnimFrame[]
  constructor(scene: Phaser.Scene, x: number, y: number, img_name: string) {
    super(scene, x, y, img_name)
    this.img_name = img_name
    this.logoFlag = true

    if(img_name == 'hae') {
      this.createAnim(img_name, 30, 10, -1)
      let animKey = "haeAnim"
      this.play(animKey)
    }

    if(img_name == 'turtle') {
      this.createAnim(img_name, 21, 10, -1)
      let animKey = "turtleAnim"
      this.play(animKey)
    }

    if(img_name == 'shark') {
      this.createAnim(img_name, 37, 10, -1)
      let animKey = "sharkAnim"
      this.play(animKey)
    }

    //spin(blue, red, yellow, green) over animation
    if(img_name == 's_all') {
      this.createAnim(img_name, 15, 10, 0)
      let animKey = "s_allAnim"
      this.play(animKey)
    }

    //spin(crab) over animation
    if(img_name == 'splat') {
      this.createAnim(img_name, 11, 10, 0)
      let animKey = "splatAnim"
      this.play(animKey)
    }
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
      this.setVelocity(20, 70)
    }
  }
}
