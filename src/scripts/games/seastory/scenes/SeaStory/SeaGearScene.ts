import SeaSprite         from '../../objects/SeaSprite'
import Reel              from '../../objects/reel'
import PinsGroup         from '../../objects/pin/pinGroup'
import Spin              from '../../objects/spin'
import BackFish          from '../../objects/backFish'
import GearScene         from '../../../../parent/scenes/gearScene'
import Effect            from '../../objects/effect'
import Submarine         from '../../objects/Submarine'
import Rocket            from '../../objects/Rocket'
import God               from '../../objects/God'
import Wintable          from '../../objects/Wintable'
import DayorNight        from '../../objects/DayorNight'

export default class SeaGearScene extends Phaser.Scene {
  night                   : DayorNight;
  nightAlpha              : number;
  nightFlag               : boolean;
  godUp                   : God[];
  godDown                 : God[];
  background_image_up     : SeaSprite;
  background_image_down   : SeaSprite;
  backFish                : BackFish[]; 
  backFishSpeedArray      : number[];
  backFishSpeed           : number[];
  backFishFlag            : number[];
  backFishF               : boolean;
  backFishScale           : number[];
  gearScene               : GearScene;
  currentScene            : Phaser.Scene;
  WaterUp                 : SeaSprite;
  submarine               : Submarine;
  submarineFlag           : boolean;
  rocket                  : Rocket[];
  rocketIndex             : number;
  rocketdown1             : Rocket;
  rocketdown2             : Rocket;
  rocketdown3             : Rocket;
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
  soojoLeft               : SeaSprite;
  soojoRight              : SeaSprite;
  soojoLeft1              : SeaSprite;
  soojoRight1             : SeaSprite;
  reelflag                : boolean;
  nplusGiftScore          : number;  
  nBetScore               : number;
  nBetScoreText           : Phaser.GameObjects.Text;
  nGameScore              : number;
  nGameScoreText          : Phaser.GameObjects.Text;
  nCreditScore            : number;
  nCreditScoreText        : Phaser.GameObjects.Text;
  nWinScore               : number;
  nWinScoreText           : Phaser.GameObjects.Text;  
  fireworks               : Effect;
  dol_Event               : Effect;
  event_bar               : Effect;
  event_seven             : Effect;
  eventstar1              : Effect;
  fpsText                 : Phaser.GameObjects.Text;
  tempGiftScore           : number;
  tempGameScore           : number;
  tempCreditScore         : number;
  nWinScoreFlag           : boolean;
  nGameScoreFlag          : boolean;
  nCreditScoreFlag        : boolean;
  wintable1               : Wintable;
  wintable2               : Wintable;
  wintable3               : Wintable;
  wintable4               : Wintable;
  m_nFlag                 : number;
  mainSpark               : SeaSprite;
  leftMaskY               : number;
  rightMaskY              : number;
  nGameStart              : boolean;
  nCol                    : number;
  nGodNumUp               : number;
  nGodNumDown             : number;
  godDirectionUp          : boolean;
  godDirectionDown        : boolean;
  celebrateFlag           : boolean;
  celebrateReel           : string;
  reelCheckFlag           : boolean;
  eff_dol                 : Effect[];
  eff_joker               : Effect[];
  eff_bar                 : Effect;
  eff_seven               : Effect;
  eff_star                : Effect;
  eff_target              : Reel[];
  celebrateScore          : Phaser.GameObjects.Text;
  sparkFlag               : boolean;
  updateReelCol           : number;
  twoSamecheckFlag        : number;
  threeSamecheckFlag      : number;
  boom                    : Effect

  testFlag                : number;
  
  constructor() {
    super({ key: 'SeaGearScene' })
    this.currentScene         = this;
    this.nWinScore            = 100;
    this.nGameScore           = 0;
    this.nBetScore            = 10000;
    this.nCreditScore         = 10000;
    this.pins                 = []; 
    this.backFish             = [];
    this.backFishSpeed        = [];
    this.backFishFlag         = [];
    this.backFishSpeedArray   = [0.5, 0.7, 1];
    this.backFishScale        = [0.5, 0.7, 1, 1.2];
    this.backFishFlag         = [];
    this.backFishF            = true;
    this.spins                = [];
    this.spinX                = [550, 610, 670, 730, 790, 850, 910, 970, 1030, 1090, 1150, 1210, 1270, 1330, 1390];
    this.spinY                = 290;    
    this.spin_Name            = ['bomb', 'bonus_50', 'bonus_100', 'crab', 'prizebox', 'spin_blue', 'spin_green', 'spin_red', 'spin_gray', 'spin_yellow'];
    this.reel_Name            = ['joker', 'bar', 'seven', 'star', 'target', 'shellfish', 'heama', 'mong', 'fish3', 'fish2', 'fish1'];
    this.reelX                = [85, 170, 255, 340];
    this.reelY                = [-455, -395, -335, -275, -215, -155, -95, -35, 25, 85, 145, 205, 265, 325, 385];
    this.reel1                = [];
    this.reel2                = [];
    this.reel3                = [];
    this.reel4                = [];
    this.godUp                = [];
    this.godDown              = [];
    this.reelflag             = true;
    this.rocketIndex          = 0;
    this.rocket               = [];
    this.m_nFlag              = 0; 
    this.nCreditScoreFlag     = true;
    this.tempCreditScore      = 10000;
    this.leftMaskY            = 0;
    this.rightMaskY           = 0;
    this.nGameStart           = false;
    this.nCol                 = 0;
    this.nGodNumUp            = 0;
    this.nGodNumDown          = 0;
    this.godDirectionUp       = false;
    this.godDirectionDown     = false;
    this.nightFlag            = false;
    this.nightAlpha           = 0;
    this.celebrateFlag        = false;
    this.celebrateReel        = '';
    this.reelCheckFlag        = true;
    this.eff_target           = [];
    this.testFlag             = 0;
    this.sparkFlag            = false;
    this.updateReelCol        = 0;
    this.twoSamecheckFlag     = 0;
    this.threeSamecheckFlag   = 0;
  }

  create() {
    //Setting background such as background images, background sounds and back fishes
    this.setBackGround();
    
    //Coin Droper
    this.droper                   = new SeaSprite(this, 100, 34, 'droper').setDepth(5);  
    
    // Pin Group
    for(var i=0; i< 33; i++) {
      for(var j=0; j<4; j++) {
        var pin_nim     = i+1;
        var img_name    = "Pin_"+pin_nim+"_000"+j;
        this.pins.push(img_name);
      }
    }
    this.pinsGroup = new PinsGroup(this, this.pins);    
    //Generate Spins
    for(var i=0; i<15; i++) {         
      this.spins[i] = this.generateSpin(this.spinX[i], this.spinY);
      if(this.nGameStart == true) {
        this.touchSpin(this.coin, this.spins[i]); 
      }           
    }
    
    //Generating Reel    
    for(var i=0; i<15; i++) {      
      this.reel1[i]               = this.generateReel(this.reelX[0], this.reelY[i], 1, i);
      this.reel2[i]               = this.generateReel(this.reelX[1], this.reelY[i], 2, i);
      this.reel3[i]               = this.generateReel(this.reelX[2], this.reelY[i], 3, i);
      this.reel4[i]               = this.generateReel(this.reelX[3], this.reelY[i], 4, i);
    }
     
    //Setting wintables
    this.setWinTable();    

    //Add 2 soojo images 
    this.soojoLeft                = new SeaSprite(this, 70, 143, 'soojo_0000').setDepth(4);
    this.soojoRight               = new SeaSprite(this, 360, 143, 'soojo_0000').setDepth(4);
    this.soojoLeft1               = new SeaSprite(this, 70, 143, 'soo').setInteractive().setDepth(4);
    this.soojoRight1              = new SeaSprite(this, 360, 143, 'soo').setDepth(4);
    this.soojoRight.flipX         = true; 
    this.soojoRight1.flipX        = true;    
    this.nplusGiftScore           = 0; 

    //Add bonusPanel 
    var bp_left = new SeaSprite(this, 70    , 375,  'bp_left').setDepth(1);
    new SeaSprite(this, 214   , 375,  'bp_center').setDepth(1);
    new SeaSprite(this, 358   , 375,  'bp_right').setDepth(1);

    //Add scorePanel
    new SeaSprite(this, 70    , 663,  'sp_left').setDepth(1);
    new SeaSprite(this, 214   , 705,  'sp_center').setDepth(1);
    new SeaSprite(this, 358   , 663,  'sp_right').setDepth(1);
    new SeaSprite(this, 215   , 678,  'GearBottom').setDepth(1).setScale(0.93);
    //Add scorePanel
    new SeaSprite(this, 16.5  , 519,  'under_left').setDepth(1);
    new SeaSprite(this, 411.8 , 519,  'under_right').setDepth(1);
    
    let mask_left = this.make.graphics({ fillStyle: { color: 0x000000 }, add: false})
                .fillRectShape(new Phaser.Geom.Rectangle(-40, this.leftMaskY, 200, 300));
    this.soojoLeft1.setMask(new Phaser.Display.Masks.BitmapMask(this, mask_left));

    let mask_right = this.make.graphics({ fillStyle: { color: 0x000000 }, add: false})
                .fillRectShape(new Phaser.Geom.Rectangle(240, this.leftMaskY, 200, 300));
    this.soojoRight1.setMask(new Phaser.Display.Masks.BitmapMask(this, mask_right));

    this.nWinScoreText = this.add
    .text(this.cameras.main.width - 15, 699, `00000`, {
      color: '#fff',
      fontSize: 20
    }).setOrigin(1, 0).setDepth(5);
    
    this.nGameScoreText = this.add
    .text(120, 699, `000`, {
      color: '#fff',
      fontSize: 20
    }).setOrigin(1, 0).setDepth(5);

    this.nCreditScoreText = this.add
    .text(258, 705, `0000000`, {
      color: '#0f0',
      fontSize: 20
    }).setOrigin(1, 0).setDepth(5);

    this.add.sprite(70, 767, 'btnSelectGear')
      .setInteractive().setDepth(5).setScale(0.93)
      .on('pointerdown', () => this.updateReel() 
    );

    this.add.sprite(216, 767, 'btnStart')
      .setInteractive().setDepth(5).setScale(0.93)
      .on('pointerdown', () => this.gameStart()
    );

    this.add.sprite(360, 767, 'btnAppend')
      .setInteractive().setDepth(5).setScale(0.93)
      .on('pointerdown', () => this.updateCreditSocre(10000)  
    );

    this.time.addEvent({
      delay: 8000,                // ms
      callback: this.updateReel,
      callbackScope: this.currentScene,
      loop: true
    });

    //this.generateGod('hae');
    this.generateGod('turtle');

    this.night = new DayorNight(this, 200, 200, 'rect2').setScale(15).setAlpha(this.nightAlpha).setDepth(-2);

    this.generateDay();
    
  }
  
  randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } 
  
  gameStart() {
    //Drop coin
    this.nGameStart = true;
    this.dropCoin(); 
  }

  setBackGround() {
    //Add background image
    this.background_image_up      = new SeaSprite(this, 270, 180, 'background_image').setDepth(-2);
    this.background_image_down    = new SeaSprite(this, 270, 540, 'background_image').setDepth(-2);

    //Play background music 
    this.playSound('bg_sound');   
    
    //BackFish     
    this.generateBackFish();

    //Waterup generating
    this.time.addEvent({
      delay: 5000,                // ms
      callback: this.generateWaterUp,
      callbackScope: this.currentScene,
      loop: true
    });
  }

  generateNight() {
    this.nightFlag = true;    
    this.backFishF = false;
  }

  generateDay() {
    this.nightFlag = false;    
    this.backFishF = true;
  }

  setWinTable() {
    this.wintable1 = new Wintable(this, 110, 370,  'wintable1').setDepth(1);
    this.wintable2 = new Wintable(this, 685, 370,  'wintable1').setDepth(1);
    this.wintable3 = new Wintable(this, 90,  330,  'wintable2').setDepth(1);
    this.wintable4 = new Wintable(this, 666, 330,  'wintable2').setDepth(1);
  }

  updateReel() {
  
    if(this.testFlag == 3) {
      
    } else {
      this.testFlag ++ ;
    }  

    if(this.nGameScore > 0) {
      this.nGameScore--;
    }    

    if(this.updateReelCol == 0) {      
      for(var i=0; i<15; i++) {
        this.reel1[i].y += 10; 
        this.reel2[i].y += 10; 
        this.reel4[i].y += 10; 
        this.reel3[i].y += 10;   
      }  
      this.twoSamecheckFlag = 0;     
    } else if(this.updateReelCol == 1){
      for(var i=0; i<15; i++) {
        this.reel1[i].y += 10;    
      }
    } else if(this.updateReelCol == 2) {
      for(var i=0; i<15; i++) {
        this.reel2[i].y += 10;    
      }  
    } else if(this.updateReelCol == 3){
      for(var i=0; i<15; i++) {
        this.reel3[i].y += 10;    
      }
    } else if(this.updateReelCol == 4) {
      for(var i=0; i<15; i++) {
        this.reel4[i].y += 10;    
      }  
    }   
  }

  touchSpin(coin: SeaSprite, spin: Spin) {
    this.physics.add.overlap(coin, spin, () => {
      if (spin.body.touching.up || spin.body.touching.left || coin.body.touching.down || coin.body.touching.right) {
        if(coin.x < 420 && coin.x > -50) {    
          var anim_Name = "ani_spin"+spin.img_name;
          if(spin.img_name == 'bomb'){
            this.playSound('BLANK');
            spin.anims.play(anim_Name);                       
          } else if(spin.img_name == "spin_red" || spin.img_name == "spin_blue" || spin.img_name == "spin_gray" || spin.img_name == "spin_green" || spin.img_name == "spin_yellow" ){
            this.playSound('spin');      
            this.nGameScore++;      
            var anim = new SeaSprite(this, spin.x, spin.y-10, 's_all').setScale(0.6);
            spin.anims.play(anim_Name);
          } else if(spin.img_name == "crab") {
            var anim = new SeaSprite(this, spin.x, spin.y-10, 'splat').setScale(0.6);
            this.playSound('SOOJO');
            spin.anims.play(anim_Name); 
            if(spin.x > 235) {
              if(this.leftMaskY < -300) {
                this.soojoLeft.play('soojoAnim'); 
                setTimeout(() => {
                  anim.destroy();     
                }, 1500);               
                let soojoBonus = this.add
                .text(115, 250, `1000`, {
                  color: '#fff',
                  fontSize: 36
                }).setOrigin(1, 0).setDepth(5);
                setTimeout(() => {   
                  this.nWinScore += 1000;
                  soojoBonus.destroy();            
                  this.leftMaskY = 0;
                  this.generateMask('left');                            
                }, 3000);                
              } else {
                this.leftMaskY -= 10;
                this.generateMask('left');    
              }
            } else {           
              if(this.rightMaskY < -300) {                
                this.soojoRight.play('soojoAnim');
                setTimeout(() => {
                  anim.destroy();     
                }, 1500);
                let soojoBonus = this.add
                .text(400, 250, `1000`, {
                  color: '#fff',
                  fontSize: 36
                }).setOrigin(1, 0).setDepth(5);
                setTimeout(() => {                   
                  this.nWinScore += 1000;
                  soojoBonus.destroy();
                  this.rightMaskY = 0;
                  this.generateMask('right');                     
                }, 3000);               
              } else {
                this.rightMaskY -= 10;
                this.generateMask('right');
              }
            }          
          } 
          setTimeout(() => {
            anim.destroy();     
          }, 1500);           
        }   
        this.nplusGiftScore = 100;                     
        this.coin.destroy();
        this.dropCoin();
      }
    })
  }

  generateMask(position: string) {
    if(position == 'left') {
      let mask = this.make.graphics({ fillStyle: { color: 0x000000 }, add: false})
                .fillRectShape(new Phaser.Geom.Rectangle(-40, this.leftMaskY, 200, 300));
      this.soojoLeft1.setMask(new Phaser.Display.Masks.BitmapMask(this, mask));
    } else if(position == 'right'){
      let mask = this.make.graphics({ fillStyle: { color: 0x000000 }, add: false})
                .fillRectShape(new Phaser.Geom.Rectangle(240, this.rightMaskY, 200, 300));
      this.soojoRight1.setMask(new Phaser.Display.Masks.BitmapMask(this, mask));
    } 
  }
  playSound(soundName: string) {
    let music = this.sound.add(soundName);
    let musicConfig = {};
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

  generateReel(x: number, y: number, col: number, row: number) {
    let reel_No = this.randomInt(0, 10);
    var reel    = new Reel(this, x, y, this.reel_Name[reel_No]); 
    
    if(this.testFlag == 3 && row == 2) {
      if(col == 0 && row == 2) {
        reel = new Reel(this, x, y, this.reel_Name[1]); 
      } else if(col == 1 && row == 2) {
        reel = new Reel(this, x, y, this.reel_Name[1]); 
      } else if(col == 2 && row == 2) {
        reel = new Reel(this, x, y, this.reel_Name[1]);
      } else if(col == 3 && row == 2) {
        reel = new Reel(this, x, y, this.reel_Name[reel_No]); 
      }      
    }  
    return reel.setDepth(0);
  }
  
  generateSpin(x: number, y: number) {
    let spin_No                   = this.randomInt(0, 9)
    let spin                      = new Spin(this, x, y, this.spin_Name[spin_No]).setDepth(0);
    return spin
  }

  dropCoin() {
    this.droperPositionX          = this.droper.x;
    this.droperPositionY          = this.droper.y;
    this.coin                     = new SeaSprite(this, this.droperPositionX, this.droperPositionY, 'ball_01').setDepth(2);
    for(let i=0; i<15; i++) {
      this.touchSpin(this.coin, this.spins[i]);  
    } 
    this.coin.setVelocity(10, 20).setBounce(1, -1).setCollideWorldBounds(true).setVelocityY(80);
    this.coin.setDepth(0);
    // this.physics.add.collider(this.coin, this.pinsGroup); 
    // this.coin.body.setOffset(-10,-10);
    // this.coin.body.setSize(20 , 20);
  }

  generateSubmarine() {  
    this.submarine = new Submarine(this, -290, 180, 'submarine').setScale(2).setDepth(3);   
    this.m_nFlag = 0;
    setTimeout(() => {
      //Make submarine moving
      this.submarineFlag = true;
      //After 3s, shut rockets
      setTimeout(() => {
        this.shutRocket(); 
      }, 3600); 
    }, 2400);
    //Make submarine stop so that rockets can be shutted
    setTimeout(() => {
      this.submarineFlag = false; 
    }, 6000);  
    //After shut all rockets move submarine
    setTimeout(() => {
      this.submarineFlag = true; 
    }, 15000);  
  }

  shutRocket() {  
    let nX = 20; 
    for(let i=0; i<6; i++) {
      //Once per 0.4s shutts rocket
      setTimeout(() => {
        this.rocket[i] = new Rocket(this, 160+nX*i, 150, 'rocketup');
      }, 400*i);      
    }
    setTimeout(() => {
      this.hitRocketReel();
    }, 7000);  
  }

  hitRocketReel() {  
    this.rocketdown1       = new Rocket(this, 340, -150, 'rocket1').setScale(1.2).setDepth(3);
    setTimeout(() => {
      this.rocketdown2     = new Rocket(this, 250, 250, 'rocket2').setScale(1.2).setDepth(3);
    }, 1000);
    setTimeout(() => {
      this.rocketdown3     = new Rocket(this, 250, 392, 'rocket3').setScale(1.2).setDepth(3);
      this.boom            = new Effect(this, 340, 520, 'boom').setScale(1.5).setDepth(3);
    }, 1500);
    setTimeout(() => {
      this.updateReelCol = 4;
      this.updateReel();
      this.reelCheckFlag = true;
      this.boom.destroy();
    }, 2000);
       
  }

  generateWaterUp() {
    if(this.WaterUp != null) {
      this.WaterUp.destroy();
    }
    let x = this.randomInt(50, 360);
    this.WaterUp                  = new SeaSprite(this, x, 170, 'waterdrop2');
  }

  generateBackFish() {    
    for(var i=1; i<15; i++) {
      let nFishNo                 = this.randomInt(1, 7);
      let texture                 = "bfish" + nFishNo;
      let fishY                   = this.randomInt(20, 600);      
      let nSpeedFlag              = this.randomInt(0, 2);
      let nBackFishScaleIndex     = this.randomInt(0, 3);
      let backFishFlag            = this.randomInt(0, 10);
      var fishX                   = 0;
      if(backFishFlag > 5) {
        fishX                     = this.randomInt(-190, -20);
      } else {
        fishX                     = this.randomInt(400, 500);
      }      
      this.backFishSpeed.push(this.backFishSpeedArray[nSpeedFlag]);
      this.backFish.push(new BackFish(this, fishX, fishY, texture).setScale(this.backFishScale[nBackFishScaleIndex]));   
      this.backFishFlag.push(backFishFlag);      
    }    
    return;
  }

  updateCreditSocre(score: number) {
    this.tempCreditScore  = score;
    this.nCreditScoreFlag = true;
  }

  generateSpark(col: number) {
    if(this.sparkFlag) {
      this.sparkFlag = false;
      if(col == 0) {
        this.mainSpark = new SeaSprite(this, 90, 160, 'spark').setScale(1.5).setDepth(5);
        this.m_nFlag   = 3;
        setTimeout(() => {
          this.updateReelCol = 1;
          this.updateReel(); 
          this.reelCheckFlag = true;
          this.mainSpark.destroy();
        }, 2500);
      }
    }    
  }

  celebrate() {
    this.celebrateFlag = false;
    var laser = new SeaSprite(this, 250, 530, 'laser').setScale(2.3);
    this.playSound('laser');
    setTimeout(() => {
      this.reel1[2].play(this.reel1[2].imgName+"_aniAnim").setScale(1.3).setDepth(5);
      this.reel2[2].play(this.reel2[2].imgName+"_aniAnim").setScale(1.3).setDepth(5);
      this.reel3[2].play(this.reel3[2].imgName+"_aniAnim").setScale(1.3).setDepth(5);
      this.reel4[2].play(this.reel4[2].imgName+"_aniAnim").setScale(1.3).setDepth(5);
    }, 1000);
    //Fireworks 
    this.fireworks    = new Effect(this, 215, 350, 'fireworks').setScale(2).setDepth(4);
    if(this.celebrateReel == 'joker') {      
      this.playSound('cele_0003');
      this.eff_dol   = [];
      this.eff_joker = [];
      this.celebrateScore = this.add
      .text(347, 475, `20000`, {
        color: 'orange',
        fontSize: 90,
        fontWeight: 900
      }).setOrigin(1, 0).setDepth(5);

      this.eff_dol[0] = new Effect(this, 215, 250, 'dol').setScale(2).setDepth(4);
      setTimeout(() => {
        this.eff_dol[1]    = new Effect(this, 215, 250, 'dol').setScale(2).setDepth(4);
      }, 500);
      setTimeout(() => {
        this.eff_dol[2]    = new Effect(this, 215, 250, 'dol').setScale(2).setDepth(4);
        setTimeout(() => {
        }, 29000);
      }, 1000);
      setTimeout(() => {
        this.eff_joker[0]    = new Effect(this, 340, 150, 'joker').setScale(2).setDepth(4);
        setTimeout(() => {
        }, 29000);
      }, 2000);
      setTimeout(() => {
        this.eff_joker[1]    = new Effect(this, 265, 150, 'joker').setScale(2).setDepth(4);
        setTimeout(() => {
        }, 29000);
      }, 3000);
      setTimeout(() => {
        this.eff_joker[2]    = new Effect(this, 180, 150, 'joker').setScale(2).setDepth(4);
        setTimeout(() => {
        }, 29000);
      }, 4000); 
      setTimeout(() => {
        this.eff_joker[3]    = new Effect(this, 90, 150, 'joker').setScale(2).setDepth(4);
        setTimeout(() => {
        }, 29000);
      }, 5000);
      setTimeout(() => {
        for(let i=0; i<3; i++) {
          this.eff_dol[i].destroy();
        }
        for(let i=0; i<4; i++) {
          this.eff_joker[i].destroy();
        }
        this.fireworks.destroy();
        this.m_nFlag = 0;
        this.reel1[2].play(this.reel1[2].imgName+"Anim").setScale(1).setDepth(0);
        this.reel2[2].play(this.reel2[2].imgName+"Anim").setScale(1).setDepth(0);
        this.reel3[2].play(this.reel3[2].imgName+"Anim").setScale(1).setDepth(0);
        this.reel4[2].play(this.reel4[2].imgName+"Anim").setScale(1).setDepth(0);
        this.celebrateScore.destroy();
        this.updateReelCol = 0;
        this.updateReel();
        this.nWinScore += 20000;
        this.reelCheckFlag = true;        
      }, 29000);
    } else if(this.celebrateReel == 'bar') { 
      this.playSound('cele_0003');     
      //Event_bar
      this.event_bar    = new Effect(this, 215, 150, 'event_bar').setScale(1.5).setDepth(4);
      this.celebrateScore = this.add
      .text(347, 475, `20000`, {
        color: 'orange',
        fontSize: 90,
        fontWeight: 900
      }).setOrigin(1, 0).setDepth(5);
      setTimeout(() => {
        this.event_bar.destroy();
        this.fireworks.destroy();
        this.m_nFlag = 0;
        this.reel1[2].play(this.reel1[2].imgName+"Anim").setScale(1).setDepth(0);
        this.reel2[2].play(this.reel2[2].imgName+"Anim").setScale(1).setDepth(0);
        this.reel3[2].play(this.reel3[2].imgName+"Anim").setScale(1).setDepth(0);
        this.reel4[2].play(this.reel4[2].imgName+"Anim").setScale(1).setDepth(0);
        this.celebrateScore.destroy();
        this.updateReelCol = 0;
        this.updateReel();
        this.nWinScore += 20000;
        this.reelCheckFlag = true;
      }, 29000);
    } else if(this.celebrateReel == 'star') { 
      var music = this.playSound('cele_0003');     
      //Event_bar
      var star    = new Effect(this, 215, 150, 'eventstar1').setScale(1.5).setDepth(4);
      this.celebrateScore = this.add
      .text(347, 475, `20000`, {
        color: 'orange',
        fontSize: 90,
        fontWeight: 900
      }).setOrigin(1, 0).setDepth(5);
      setTimeout(() => {
        star.destroy();
        this.fireworks.destroy();
        this.m_nFlag = 0;
        this.reel1[2].play(this.reel1[2].imgName+"Anim").setScale(1).setDepth(0);
        this.reel2[2].play(this.reel2[2].imgName+"Anim").setScale(1).setDepth(0);
        this.reel3[2].play(this.reel3[2].imgName+"Anim").setScale(1).setDepth(0);
        this.reel4[2].play(this.reel4[2].imgName+"Anim").setScale(1).setDepth(0);
        this.celebrateScore.destroy();
        this.updateReelCol = 0;
        this.updateReel();
        this.nWinScore += 20000;
        this.reelCheckFlag = true;        
      }, 29000);
    } else if(this.celebrateReel == 'target') { 
      this.eff_target = [];
      var music = this.playSound('cele_0000');     
      //Event_bar
      setTimeout(() => {
        this.eff_target[0]    = new Reel(this, 365, 150, this.reel_Name[4]).setScale(1.5).setDepth(6).setVisible(true);
        this.eff_target[0].play('target_aniAnim');
      }, 700);
      setTimeout(() => {
        this.eff_target[1]    = new Reel(this, 265, 150, 'target').setScale(1.5).setDepth(4).setVisible(true);
        this.eff_target[1].play('target_aniAnim');
      }, 500);
      setTimeout(() => {
        this.eff_target[2]    = new Reel(this, 167, 150, 'target').setScale(1.5).setDepth(4).setVisible(true);
        this.eff_target[2].play('target_aniAnim');
      }, 300); 
      setTimeout(() => {
        this.eff_target[3]    = new Reel(this, 70, 150, 'target').setScale(1.5).setDepth(4).setVisible(true);
        this.eff_target[3].play('target_aniAnim');
      }, 100);
      this.celebrateScore = this.add
      .text(347, 475, `10000`, {
        color: 'orange',
        fontSize: 90,
        fontWeight: 900
      }).setOrigin(1, 0).setDepth(5);
      setTimeout(() => {
        for(let i=0; i<4; i++) {
          this.eff_target[i].destroy();
        }
        this.fireworks.destroy();
        this.m_nFlag = 0;
        this.reel1[2].play(this.reel1[2].imgName+"Anim").setScale(1).setDepth(0);
        this.reel2[2].play(this.reel2[2].imgName+"Anim").setScale(1).setDepth(0);
        this.reel3[2].play(this.reel3[2].imgName+"Anim").setScale(1).setDepth(0);
        this.reel4[2].play(this.reel4[2].imgName+"Anim").setScale(1).setDepth(0);
        this.celebrateScore.destroy();
        this.updateReelCol = 0;
        this.updateReel();
        this.nWinScore += 10000;
        this.reelCheckFlag = true;        
      }, 6000);
    } else if(this.celebrateReel == 'seven') { 
      this.playSound('cele_0003');     
      //Event_bar
      this.event_bar    = new Effect(this, 215, 150, 'event_seven').setScale(1.5).setDepth(4);
      this.celebrateScore = this.add
      .text(347, 475, `20000`, {
        color: 'orange',
        fontSize: 90,
        fontWeight: 900
      }).setOrigin(1, 0).setDepth(5);
      setTimeout(() => {
        this.event_bar.destroy();
        this.fireworks.destroy();
        this.m_nFlag = 0;
        this.reel1[2].play(this.reel1[2].imgName+"Anim").setScale(1).setDepth(0);
        this.reel2[2].play(this.reel2[2].imgName+"Anim").setScale(1).setDepth(0);
        this.reel3[2].play(this.reel3[2].imgName+"Anim").setScale(1).setDepth(0);
        this.reel4[2].play(this.reel4[2].imgName+"Anim").setScale(1).setDepth(0);
        this.celebrateScore.destroy();
        this.updateReelCol = 0;
        this.updateReel();
        this.nWinScore += 20000;
        this.reelCheckFlag = true;
      }, 29000);
    }       
  }

  generateGod(godName: string) {    
    if(godName == 'hae') {
      this.nGodNumDown = this.randomInt(2, 4);
      let nScaleArr = [1, 1.3, 1.5, 2];      
      for(let i=0; i<this.nGodNumDown; i++) {
        let nGodPosX        = this.randomInt(150, 300);        
        let nScaleArrIndex  = this.randomInt(0, 3); 
        this.godDown[i]         = new God(this, nGodPosX, 700, godName).setDepth(-1).setScale(nScaleArr[nScaleArrIndex]);
        this.playSound('JELLYFISH');
      }
    } else if(godName == 'turtle') {
      let directionArr = [true, false];
      let nScaleArr = [2, 2.5, 3, 3.5];
      //up
      this.nGodNumUp  = this.randomInt(2, 3); 
      var direction = directionArr[this.randomInt(0, 1)];    
      this.godDirectionUp = direction;  
      for(let i=0; i<this.nGodNumUp; i++) {
        if(direction) {
          let nStartPosX      = this.randomInt(-80, -250);
          let nStartPosY      = this.randomInt(40, 260);
          let nScaleArrIndex  = this.randomInt(0, 3);
          this.godUp[i]       = new God(this, nStartPosX, nStartPosY, godName).setDepth(-1).setScale(nScaleArr[nScaleArrIndex]);
        } else {
          let nStartPosX      = this.randomInt(400, 570);
          let nStartPosY      = this.randomInt(40, 260);
          let nScaleArrIndex  = this.randomInt(0, 3);
          this.godUp[i]       = new God(this, nStartPosX, nStartPosY, godName).setDepth(-1).setScale(nScaleArr[nScaleArrIndex]).setFlipX(true);
        }        
        this.playSound('TURTLE');
      }
      //down
      this.nGodNumDown  = this.randomInt(2, 3); 
      direction = directionArr[this.randomInt(0, 1)];   
      this.godDirectionDown = direction; 
      for(let i=0; i<this.nGodNumDown; i++) {
        if(direction) {
          let nStartPosX      = this.randomInt(-80, -250);
          let nStartPosY      = this.randomInt(450, 600);
          let nScaleArrIndex  = this.randomInt(0, 3);
          this.godDown[i]     = new God(this, nStartPosX, nStartPosY, godName).setDepth(-1).setScale(nScaleArr[nScaleArrIndex]);
        } else {
          let nStartPosX      = this.randomInt(400, 570);
          let nStartPosY      = this.randomInt(450, 600);
          let nScaleArrIndex  = this.randomInt(0, 3);
          this.godDown[i]     = new God(this, nStartPosX, nStartPosY, godName).setDepth(-1).setScale(nScaleArr[nScaleArrIndex]).setFlipX(true);
        }
      }      
    }
  }

  update() { 
    if(this.celebrateFlag == true) {
      this.celebrate();
      this.celebrateFlag = false;
    }
    this.night.update(this.nightFlag);

    if(this.nGodNumUp != 0) {
      for(let i=0; i<this.nGodNumUp; i++) {
        this.godUp[i].update(this.godDirectionUp);
      }
    }
    
    if(this.nGodNumDown != 0) {
      for(let i=0; i<this.nGodNumDown; i++) {
        this.godDown[i].update(this.godDirectionDown);
      }
    }

    if(this.mainSpark != null && this.mainSpark.y < 340) {
      this.mainSpark.y += 5;
    }
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
          if(i == 14) {
            this.reel1[i] = this.generateReel(this.reelX[0], this.reel1[0].y - 60, 0, 0);
          } else {
            if(this.testFlag == 3 && i == 2) {
              this.reel1[i] = this.generateReel(this.reelX[0], this.reel1[i+1].y - 60, 0, 2);
            } else {
              this.reel1[i] = this.generateReel(this.reelX[0], this.reel1[i+1].y - 60, 0, 0);
            }            
          }          
        }
      } else {
        this.reelflag = false;
      }
      if(this.reel2[1].y <= 462 || this.reel2[1].y >= 470) {
        let flag = true
        if(this.reel2[1].y > 320 && this.reel2[1].y < 470) {
          flag = true
        } else {
          flag = false
        }
        this.reel2[i].update(2, flag)
        if(this.reel2[i].y > 700) {
          if(i == 14) {
            this.reel2[i] = this.generateReel(this.reelX[1], this.reel2[0].y - 60, 0, 0);
          } else {
            if(this.testFlag == 3 && i == 2) {
              this.reel2[i] = this.generateReel(this.reelX[1], this.reel2[i+1].y - 60, 1, 2);
            } else {
              this.reel2[i] = this.generateReel(this.reelX[1], this.reel2[i+1].y - 60, 1, 0);
            }            
          }         
        }
      } 
      if(this.reel3[1].y <= 462 || this.reel3[1].y >= 470) {
        let flag = true
        if(this.reel3[1].y > 320 && this.reel3[1].y < 470) {
          flag = true
        } else {
          flag = false
        }
        this.reel3[i].update(3, flag);
        if(this.reel3[i].y > 700) {
          if(i == 14) {
            this.reel3[i]   = this.generateReel(this.reelX[2], this.reel3[0].y - 60, 0, 0);
          } else {
            if(this.testFlag == 3 && i == 2) {
              this.reel3[2] = this.generateReel(this.reelX[2], this.reel3[i+1].y - 60, 2, 2);
            } else {
              this.reel3[i] = this.generateReel(this.reelX[2], this.reel3[i+1].y - 60, 0, 0);
            }
          }           
        }
      } 
      if(this.reel4[1].y <= 462 || this.reel4[1].y >= 470) {
        let flag = true
        if(this.reel4[1].y > 320 && this.reel4[1].y < 470) {
          flag = true
        } else {
          flag = false
        }
        this.reel4[i].update(4, flag);
        if(this.reel4[i].y > 700) {
          if(i == 14) {
            this.reel4[i]   = this.generateReel(this.reelX[3], this.reel4[0].y - 60, 0, 0);
          } else {
            if(this.testFlag == 3 && i == 2) {
              this.reel4[i] = this.generateReel(this.reelX[3], this.reel4[i+1].y - 60, 3, 2);
            } else {
              this.reel4[i] = this.generateReel(this.reelX[3], this.reel4[i+1].y - 60, 0, 0);
            }
          }          
        }
      } 
    }  
    
    if((this.reel1[1].y>462 && this.reel1[1].y<470)&&(this.reel2[1].y>462 && this.reel2[1].y<470)
      &&this.reel3[1].y>462 && this.reel3[1].y<470&&(this.reel4[1].y>462 && this.reel4[1].y<470)) {  
        if(this.reelCheckFlag) {
          let imgName1 = this.reel1[2].imgName;
          let imgName2 = this.reel2[2].imgName;
          let imgName3 = this.reel3[2].imgName;
          let imgName4 = this.reel4[2].imgName;
          if(imgName1 == imgName4) {      
            if(imgName1 == imgName3) {
              if(imgName1  == imgName2) {
                this.updateReelCol = -1;
                this.celebrateFlag = true;  
                this.celebrateReel = imgName1;  
                this.reelCheckFlag = false;          
              }
            }    
          } else if(imgName1 == imgName2) {
            if(imgName2 == imgName3) {
              if(this.threeSamecheckFlag == 0) {
                this.threeSamecheckFlag++;
                if(imgName2 == 'bar' || imgName2 == 'target' || imgName2 == 'seven' || imgName2 == 'star') {
                  this.updateReelCol = -1;
                  this.reelCheckFlag = false;
                  this.generateSubmarine();
                }
              } else {
                this.updateReelCol = 0;
                this.updateReel();
                this.reelCheckFlag = true;
                this.threeSamecheckFlag = 0;
              }                            
            }
          } else if(imgName2 == imgName3) {
            if(this.twoSamecheckFlag == 0) {
              if(imgName2 == 'bar' || imgName2 == 'target' || imgName2 == 'seven' || imgName2 == 'star') {
                this.updateReelCol = -1;
                this.sparkFlag = true;
                this.reelCheckFlag = false;
                this.twoSamecheckFlag++;
                this.generateSpark(0);
              } 
            } else {
              this.sparkFlag = true;
              this.updateReel();
              this.reelCheckFlag = true;
              this.updateReelCol = 0;
            }                                  
          } else {
            this.updateReelCol = 0;
            this.reelCheckFlag = true;
          }
      }        
    }

    for(var j=0; j<15; j++) {   
      this.spins[j].update()
      if(this.spins[j].x < -90) {
        if(j>0) {
          this.spins[j] = this.generateSpin(this.spins[j-1].x + 60, this.spinY);       
        } else if(j==0){         
          this.spins[j] = this.generateSpin(this.spins[14].x + 60, this.spinY); 
        }    
      }
    }  

    if(this.coin != null && this.coin.y>280) {
      this.coin.destroy();
      this.dropCoin()
    }
    this.wintable1.update();
    this.wintable2.update();
    this.wintable3.update();
    this.wintable4.update();
    if(this.wintable2.x == 210) {
      this.wintable1.x = 685;
      this.wintable1.y = 370;
    }
    if(this.wintable1.x == 110) {
      this.wintable2.x = 685;
      this.wintable2.y = 370;
    }
    if(this.wintable4.x == 90) {
      this.wintable3.x = 666;
      this.wintable3.y = 330;
    }
    if(this.wintable3.x == 90) {
      this.wintable4.x = 666;
      this.wintable4.y = 330;
    }

    if(this.submarine != null) {
      this.submarine.update(this.submarineFlag);           
    }  

    if(this.nCreditScoreFlag) {      
      if(this.tempCreditScore > 0) {
        this.tempCreditScore -= 200;
        this.nCreditScore    += 200; 
        if(this.nCreditScore > 999999){
          this.nCreditScoreText.setText(this.nCreditScore.toString());
        } else if(this.nCreditScore > 99999) {
          this.nCreditScoreText.setText('0'+this.nCreditScore.toString());
        } else {
          this.nCreditScoreText.setText('00'+this.nCreditScore.toString());
        }        
      } else {
        this.nCreditScoreFlag = false;
      }
    }

    if(this.nGameScore > 99) {
      this.nGameScoreText.setText(this.nGameScore.toString());
    } else if(this.nGameScore > 9) {
      this.nGameScoreText.setText('0'+this.nGameScore.toString());
    } else {
      this.nGameScoreText.setText('00'+this.nGameScore.toString());
    }

    if(this.nWinScore > 9999) {
      this.nWinScoreText.setText(this.nWinScore.toString());
    } else if(this.nWinScore > 999) {
      this.nWinScoreText.setText('0'+this.nWinScore.toString());
    } else if(this.nWinScore > 99) {
      this.nWinScoreText.setText('00'+this.nWinScore.toString());
    } else if(this.nWinScore > 9) {
      this.nWinScoreText.setText('000'+this.nWinScore.toString());
    } else {
      this.nWinScoreText.setText('0000'+this.nWinScore.toString());
    }

    if(this.rocket.length != 0) {
      for(let i=0; i<6; i++) {
        if(this.rocket[i] != null) {
          this.rocket[i].update();
        }        
      }
    }  
    
    if(this.rocketdown1 != null) { 
      this.rocketdown1.update();
      if(this.rocketdown1.y == 468) {    
        this.playSound('bomb');
        this.rocketdown1.destroy();        
      }            
    }
    if(this.rocketdown2 != null) {
      this.rocketdown2.update();
      if(this.rocketdown2.y == 467) { 
        this.rocketdown2.destroy();       
        this.playSound('bomb');       
      }           
    }
    if(this.rocketdown3 != null) {
      this.rocketdown3.update(); 
      if(this.rocketdown3.y == 469) { 
        this.rocketdown3.destroy();       
        this.playSound('bomb');        
      }          
    }

    this.background_image_up.update()
    this.background_image_down.update()
    
    if(this.backFish.length != 0) {     
      if(this.backFishF == true) {
        for(var i=0; i<this.backFish.length; i++) {
          this.backFish[i].update(this.backFishSpeed[i], this.backFishFlag[i])
        }
      } else {
        for(var i=0; i<this.backFish.length; i++) {
          this.backFish[i].destroy();
        }
      }       
    }
  }
}