import PhaserLogo from '../objects/phaserLogo'

export default class WintableScene extends Phaser.Scene {
  wintable1: PhaserLogo
  wintable2: PhaserLogo
  wintable3: PhaserLogo
  wintable4: PhaserLogo
  constructor() {
    super({ key: 'WintableScene' })
  }

  preload() {
    this.load.image('phaser-logo', 'assets/img/phaser-logo.png')
  }

  create() {
    //this.scene.start('StaticScene')
    this.wintable1 = new PhaserLogo(this, 110, 370,  'wintable1')
    this.wintable2 = new PhaserLogo(this, 685, 370,  'wintable1')
    this.wintable3 = new PhaserLogo(this, 90, 330,  'wintable2')
    this.wintable4 = new PhaserLogo(this, 666, 330,  'wintable2')
  }

  update() {
    if(this.wintable2.x == 110) {
      this.wintable1 = new PhaserLogo(this, 685, 370,  'wintable1')
    }
    if(this.wintable1.x == 110) {
      this.wintable2 = new PhaserLogo(this, 685, 370,  'wintable1')
    }
    if(this.wintable4.x == 90) {
      this.wintable3 = new PhaserLogo(this, 666, 330,  'wintable2')
    }
    if(this.wintable3.x == 90) {
      this.wintable4 = new PhaserLogo(this, 666, 330,  'wintable2')
    }
    this.wintable1.update()
    this.wintable2.update()
    this.wintable3.update()
    this.wintable4.update()
  }
}
