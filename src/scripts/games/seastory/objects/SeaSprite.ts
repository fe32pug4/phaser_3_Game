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

    //WaterUp
    if(img_name == 'waterdrop2') {
      this.createAnim(img_name, 30, 20, 0);
      let animKey = "waterdrop2Anim";
      this.play(animKey);
    }

    //Spark
    if(img_name == 'spark') {
      this.createAnim(img_name, 9, 10, 0);
      let animKey = "sparkAnim";
      this.play(animKey);
    }

    //laser
    if(img_name == 'laser') {
      this.createAnim(img_name, 15, 10, 0);
      let animKey = "laserAnim";
      this.play(animKey);
    }

    //laser
    if(img_name == 'soojo_0000') {
      this.createAnim('soojo', 10, 5, 0);
      let animKey = "soojoAnim";
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
    } else {
      this.setVelocity(10, 100)
    }
  }
}
