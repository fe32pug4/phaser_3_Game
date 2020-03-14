import SeaSprite from '../objects/SeaSprite'
import Effect     from '../objects/effect'

export default class StaticScene extends Phaser.Scene {
  fireworks  : Effect
  dol_Event  : Effect
  event_bar  : Effect
  event_seven: Effect
  eventstar1 : Effect
  constructor() {
    super({ key: 'StaticScene' })
  }

  create() {
    //Add bonusPanel 
    var bp_left = new SeaSprite(this, 70    , 375,  'bp_left')
    new SeaSprite(this, 214   , 375,  'bp_center')
    new SeaSprite(this, 358   , 375,  'bp_right')

    //Add scorePanel
    new SeaSprite(this, 70    , 663,  'sp_left')
    new SeaSprite(this, 214   , 705,  'sp_center')
    new SeaSprite(this, 358   , 663,  'sp_right')

    //Add scorePanel
    new SeaSprite(this, 16.5  , 519,  'under_left')
    new SeaSprite(this, 411.8 , 519,  'under_right')

    //
    new SeaSprite(this, 274   , 678,  'dangernew')

    //Fireworks 
    this.fireworks    = new Effect(this, 215, 280, 'fireworks').setScale(2)

    //Dol_Event
    this.dol_Event    = new Effect(this, 215, 280, 'dol').setScale(2)

    //Event_bar
    this.event_bar    = new Effect(this, 215, 280, 'event_bar')

    //Event_seven
    this.event_seven  = new Effect(this, 215, 280, 'event_seven')
    
    //eventstar1
    this.eventstar1   = new Effect(this, 215, 280, 'eventstar1')
  }

  update() {
  }
}
