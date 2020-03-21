import SeaSprite from '../../objects/SeaSprite'

export default class WintableScene extends Phaser.Scene {
  wintable1: SeaSprite
  wintable2: SeaSprite
  wintable3: SeaSprite
  wintable4: SeaSprite

  constructor() {
    super({ key: 'WintableScene' })
  }

  create() {
    this.wintable1 = new SeaSprite(this, 110, 370,  'wintable1')
    this.wintable2 = new SeaSprite(this, 685, 370,  'wintable1')
    this.wintable3 = new SeaSprite(this, 90, 330,  'wintable2')
    this.wintable4 = new SeaSprite(this, 666, 330,  'wintable2')    
  }

  update() {
    if(this.wintable2.x == 110) {
      this.wintable1 = new SeaSprite(this, 685, 370,  'wintable1')
    }
    if(this.wintable1.x == 110) {
      this.wintable2 = new SeaSprite(this, 685, 370,  'wintable1')
    }
    if(this.wintable4.x == 90) {
      this.wintable3 = new SeaSprite(this, 666, 330,  'wintable2')
    }
    if(this.wintable3.x == 90) {
      this.wintable4 = new SeaSprite(this, 666, 330,  'wintable2')
    }
    this.wintable1.update(true)
    this.wintable2.update(true)
    this.wintable3.update(true)
    this.wintable4.update(true)
  }
}
