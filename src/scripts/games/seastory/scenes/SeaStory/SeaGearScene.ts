import SeaSprite         from '../../objects/SeaSprite'
import Reel              from '../../objects/reel'
import PinsGroup         from '../../objects/pin/pinGroup'
import Spin              from '../../objects/spin'
import BackFish          from '../../objects/backFish'
import GearScene         from '../../../../parent/scenes/gearScene'
import StaticScene       from './StaticScene'

export default class SeaGearScene extends Phaser.Scene {
  droper                  : SeaSprite;
  pin                     : SeaSprite;
  reel1                   : Reel[];
  reel2                   : Reel[];
  reel3                   : Reel[];
  reel4                   : Reel[];
  coin                    : SeaSprite;
  reelX                   : number[];
  reelY                   : number[];
  spinX                   : number[];
  spinY                   : number;
  droperPositionX         : number;
  droperPositionY         : number;
  pinsGroup               : PinsGroup;
  pins                    : string[];
  reel_Name               : string[];
  spins                   : Spin[];
  spin_Name               : string[];
  JellyFish               : SeaSprite;
  background_image_up     : SeaSprite;
  background_image_down   : SeaSprite;
  soojoLeft               : SeaSprite;
  soojoRight              : SeaSprite;
  backFish                : BackFish[]; 
  backFishSpeedArray      : number[]
  backFishSpeed           : number[];
  backFishFlag            : number[];
  gearScene               : GearScene;
  currentScene            : Phaser.Scene
  StaticScene             : StaticScene
  reelflag                : boolean
  nplusGiftScore          : number
  nGiftScore              : number
  nBetScore               : number
  nGameScore              : number
  nCreditScore            : number
  nGiftScoreText          : Phaser.GameObjects.Text
  nBetScoreText           : Phaser.GameObjects.Text
  nGameScoreText          : Phaser.GameObjects.Text
  nCreditScoreText        : Phaser.GameObjects.Text
  constructor() {
    super({ key: 'SeaGearScene' })
    this.currentScene = this;
    this.nGiftScore   = 10000;
    this.nGameScore   = 100;
    this.nBetScore    = 10000;
    this.nCreditScore = 10000;
    this.StaticScene  = new StaticScene();
    this.pins         = []; 
  }

  create() { 
    //Add 2 soojo images 
    this.soojoLeft                = new SeaSprite(this, 75, 150, 'soojo');
    this.soojoRight               = new SeaSprite(this, 355, 150, 'soojo');
    this.soojoRight.flipX         = true;
    this.reel_Name                = ['fish1', 'fish2', 'fish3', 'bar', 'joker', 'mong', 'seven', 'heama', 'star', 'target', 'shellfish'];
    this.reelX                    = [85, 170, 255, 340];
    this.reelY                    = [-455, -395, -325, -265, -205, -155, -95, -35, 25, 85, 145, 205, 265, 325, 385];
    this.spinX                    = [550, 605, 660, 715, 770, 820, 880, 935, 990, 1045, 1100, 1155, 1210, 1265, 1320];
    this.spinY                    = 290;
    this.droper                   = new SeaSprite(this, 100, 35, 'droper');
    this.spin_Name                = ['bomb', 'bonus_50', 'bonus_100', 'crab', 'prizebox', 'spin_blue', 'spin_green', 'spin_red', 'spin_gray', 'spin_yellow'];
    this.reel1                    = [];
    this.reel2                    = [];
    this.reel3                    = [];
    this.reel4                    = [];
    this.nplusGiftScore           = 0;
    this.reelflag                 = true;
    for(var i=0; i<15; i++) {      
      this.reel1[i]               = this.generateReel(this.reelX[0], this.reelY[i]);
      this.reel2[i]               = this.generateReel(this.reelX[1], this.reelY[i]);
      this.reel3[i]               = this.generateReel(this.reelX[2], this.reelY[i]);
      this.reel4[i]               = this.generateReel(this.reelX[3], this.reelY[i]);
    }
       
    for(var i=0; i< 33; i++) {
      for(var j=0; j<4; j++) {
        var pin_nim     = i+1;
        var img_name    = "Pin_"+pin_nim+"_000"+j;
        this.pins.push(img_name);
      }
    }
    this.pinsGroup = new PinsGroup(this, this.pins) ;
    this.dropCoin();
    
    this.spins = [];
    for(var i=0; i<15; i++) {         
      this.spins[i]              = this.generateSpin(this.spinX[i], this.spinY);
      this.touchSpin(this.coin, this.spins[i]);      
    } 

    this.add.sprite(100, 770, 'ball_01')
      .setInteractive()
      .on('pointerdown', () => this.updateReel() );
  }
  
  randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } 
  
  updateReel() {
    for(var i=0; i<15; i++) {      
      this.reel1[i].y += 10;
      this.reel2[i].y += 10;      
      this.reel3[i].y += 10;
      this.reel4[i].y += 10;   
    }
  }

  touchSpin(coin: SeaSprite, spin: Spin) {
    this.physics.add.overlap(coin, spin, () => {
      if (spin.body.touching.up) {
        if(coin.x < 420 && coin.x > -50) {    
          var anim_Name = "ani_spin"+spin.img_name;
          if(spin.img_name == 'bomb'){
            this.playSound('bomb');
            spin.anims.play(anim_Name);                       
          } else if(spin.img_name == "spin_red" || spin.img_name == "spin_blue" || spin.img_name == "spin_gray" || spin.img_name == "spin_green" || spin.img_name == "spin_yellow" ){
            this.playSound('spin');            
            new SeaSprite(this, spin.x, spin.y-10, 's_all').setScale(0.8);
            spin.anims.play(anim_Name);            
          } else if(spin.img_name == "crab") {
            new SeaSprite(this, spin.x, spin.y-10, 'splat').setScale(0.8);
            this.playSound('SOOJO');
            spin.anims.play(anim_Name);
          }       
        }   
        this.nplusGiftScore = 100;                     
        this.coin.destroy();
        this.dropCoin();
      }
    })
  }

  playSound(soundName: string) {
    let music = this.sound.add(soundName)
    let musicConfig = {}
    if(soundName == 'bg_sound') {
      musicConfig = {
        mute: false,
        volume: 1,
        delay: 0,
        loop: true
      }
    } else {
      musicConfig = {
        mute: false,
        volume: 1,
        delay: 0
      }
    }    
    music.play(musicConfig)
  }

  generateReel(x: number, y: number) {
    let reel_No                   = this.randomInt(0, 10)
    let reel                      = new Reel(this, x, y, this.reel_Name[reel_No])
    return reel
  }
  
  generateSpin(x: number, y: number) {
    let spin_No                   = this.randomInt(0, 9)
    let spin                      = new Spin(this, x, y, this.spin_Name[spin_No])
    return spin
  }

  dropCoin() {
    this.droperPositionX          = this.droper.getPositionX()
    this.droperPositionY          = this.droper.getPositionY()
    this.coin                     = new SeaSprite(this, this.droperPositionX, this.droperPositionY, 'ball_01') 
    this.coin.setVelocity(70, 50).setBounce(1, -1).setCollideWorldBounds(true).setVelocityY(200);
    this.physics.add.collider(this.coin, this.pinsGroup);
    this.coin.body.setOffset(-10, -15);  
    this.coin.body.setSize(20, 20);  
  }
  
  update() {    
    this.nGiftScore = 1000;
    this.StaticScene.updateGiftSocre(this.nGiftScore);
    this.droper.update() 
    for(var i=0; i<15; i++) {   
      if(this.reel1[1].y <= 462 || this.reel1[1].y >= 470) {
        let flag = true;
        if(this.reel1[1].y > 320 && this.reel1[1].y < 470) {
          flag = true
        } else {
          flag = false
        }
        this.reel1[i].update(1, flag)
        if(this.reel1[i].y > 700) {
          this.reel1[i].destroy()
          if(i == 14) {
            this.reel1[i]        = this.generateReel(this.reelX[0], this.reel1[0].y - 60)
          } else {
            this.reel1[i]        = this.generateReel(this.reelX[0], this.reel1[i+1].y - 60)
          }          
        }
      } else {
        this.reelflag = false;
      }
      if(this.reel2[1].y <= 462 || this.reel2[1].y >= 470) {
        let flag = true
        if(this.reel1[1].y > 320 && this.reel1[1].y < 470) {
          flag = true
        } else {
          flag = false
        }
        this.reel2[i].update(2, flag)
        if(this.reel2[i].y > 700) {
          this.reel2[i].destroy()
          if(i == 14) {
            this.reel2[i]       = this.generateReel(this.reelX[1], this.reel2[0].y - 60)
          } else {
            this.reel2[i]       = this.generateReel(this.reelX[1], this.reel2[i+1].y - 60)
          }          
        }
      } 
      if(this.reel3[1].y <= 462 || this.reel3[1].y >= 470) {
        let flag = true
        if(this.reel1[1].y > 320 && this.reel1[1].y < 470) {
          flag = true
        } else {
          flag = false
        }
        this.reel3[i].update(3, flag)
        if(this.reel3[i].y > 700) {
          this.reel3[i].destroy()
          if(i == 14) {
            this.reel3[i]      = this.generateReel(this.reelX[2], this.reel3[0].y - 60)
          } else {
            this.reel3[i]      = this.generateReel(this.reelX[2], this.reel3[i+1].y - 60)
          }          
        }
      } 
      if(this.reel4[1].y <= 462 || this.reel4[1].y >= 470) {
        let flag = true
        if(this.reel1[1].y > 320 && this.reel1[1].y < 470) {
          flag = true
        } else {
          flag = false
        }
        this.reel4[i].update(4, flag)
        if(this.reel4[i].y > 700) {
          this.reel4[i].destroy()
          if(i == 14) {
            this.reel4[i]     = this.generateReel(this.reelX[3], this.reel4[0].y - 60)
          } else {
            this.reel4[i]     = this.generateReel(this.reelX[3], this.reel4[i+1].y - 60)
          }          
        }
      } 
    } 
    for(var j=0; j<15; j++) {   
      this.spins[j].update()
      if(this.spins[j].x < -90) {
        this.spins[j].destroy()
        if(j>0) {
          this.spins[j] = this.generateSpin(this.spins[j-1].x+55, this.spinY)          
        } else if(j==0){
          this.spins[j] = this.generateSpin(this.spins[14].x+55, this.spinY)
        }   
        this.touchSpin(this.coin, this.spins[j])      
      }
    } 
    
    //this.coin.update()
    if(this.coin.y>280) {
      this.coin.destroy();
      this.dropCoin()
    }
  }
}