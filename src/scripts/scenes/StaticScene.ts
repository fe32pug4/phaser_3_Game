import PhaserLogo from '../objects/phaserLogo'

export default class StaticScene extends Phaser.Scene {
  constructor() {
    super({ key: 'StaticScene' })
  }

  create() {
    //Add bonusPanel 
    var bp_left = new PhaserLogo(this, 70    , 375,  'bp_left')
    new PhaserLogo(this, 214   , 375,  'bp_center')
    new PhaserLogo(this, 358   , 375,  'bp_right')

    //Add scorePanel
    new PhaserLogo(this, 70    , 663,  'sp_left')
    new PhaserLogo(this, 214   , 705,  'sp_center')
    new PhaserLogo(this, 358   , 663,  'sp_right')

    //Add scorePanel
    new PhaserLogo(this, 16.5  , 519,  'under_left')
    new PhaserLogo(this, 411.8 , 519,  'under_right')

    //
    new PhaserLogo(this, 275   , 678,  'dangernew')
  }

  update() {
  }
}
