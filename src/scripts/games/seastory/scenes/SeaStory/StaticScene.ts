import SeaSprite         from '../../objects/SeaSprite'
import Effect            from '../../objects/effect'
import ScoreText         from '../../objects/scoreText'
import FpsText           from '../../objects/fpsText'
import SeaGearScene from './SeaGearScene'
export default class StaticScene extends Phaser.Scene {
  fireworks          : Effect
  dol_Event          : Effect
  event_bar          : Effect
  event_seven        : Effect
  eventstar1         : Effect
  fpsText            : Phaser.GameObjects.Text
  nGiftScore         : number
  nBetScore          : number
  nGameScore         : number
  nCreditScore       : number
  nGiftScoreText     : Phaser.GameObjects.Text
  nBetScoreText      : Phaser.GameObjects.Text
  nGameScoreText     : Phaser.GameObjects.Text
  nCreditScoreText   : Phaser.GameObjects.Text
  SeaGearScene       : SeaGearScene
  currentScene       : Phaser.Scene
  tempGiftScore      : number
  tempGameScore      : number
  tempCreditScore    : number
  nGiftScoreFlag     : boolean
  nGameScoreFlag     : boolean
  nCreditScoreFlag   : boolean
  constructor() {
    super({ key: 'StaticScene' });    
    this.nGameScore       = 100;
    this.nBetScore        = 10000;
    this.nCreditScore     = 10000;
    this.tempCreditScore  = 10000;
    this.currentScene     = this;
    this.tempGiftScore    = 10000;
    this.tempGameScore    = 10000;
    this.nGiftScoreFlag   = true;
    this.nGameScoreFlag   = true;
    this.nCreditScoreFlag = true;
  }

  create() {
    this.nGiftScore   = 10000;
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

    this.fpsText = new FpsText(this);

    this.nGiftScoreText = this.add
    .text(this.cameras.main.width - 15, 670, `${this.nGiftScore}`, {
      color: '#fff',
      fontSize: 20
    })
    .setOrigin(1, 0)
    
    this.nGameScoreText = this.add
    .text(120, 670, `${this.nGameScore}`, {
      color: '#fff',
      fontSize: 20
    })
    .setOrigin(1, 0)

    this.nBetScoreText = this.add
    .text(240, 650, `${this.nBetScore}`, {
      color: '#0f0',
      fontSize: 20
    })
    .setOrigin(1, 0)

    this.nCreditScoreText = this.add
    .text(240, 685, `${this.nCreditScore}`, {
      color: '#0f0',
      fontSize: 20
    })
    .setOrigin(1, 0)
    
    const clickButton = this.add.text(300, 750, 'Add 10000!', { fill: '#0f0' })
      .setInteractive()
      .on('pointerdown', () => this.updateCreditSocre(10000) );
  }

  updateGiftSocre(score: number) {
    this.tempGiftScore  = score;
    this.nGiftScoreFlag = true;
  }

  updateCreditSocre(score: number) {
    this.tempCreditScore  = score;
    this.nCreditScoreFlag = true;
  }

  update(score: number) {
    if(this.nCreditScoreFlag) {      
      if(this.tempCreditScore > 0) {
        this.tempCreditScore -= 500;
        this.nCreditScore    += 500; 
        this.nCreditScoreText.setText(this.nCreditScore.toString());
      } else {
        this.nCreditScoreFlag = false;
      }
    }
    
    if(this.nGiftScoreFlag) {
      if(this.tempGiftScore > 0) {
        this.tempGiftScore -= 500;
        this.nGiftScore    += 500;
        this.nGiftScoreText.setText(this.nGiftScore.toString());
      } else {
        this.nGiftScoreFlag = false;
      }
    }
  }
}
