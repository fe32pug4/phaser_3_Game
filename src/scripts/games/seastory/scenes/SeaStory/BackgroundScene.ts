import SeaSprite         from '../../objects/SeaSprite'
import BackFish          from '../../objects/backFish'
import GearScene         from '../../../../parent/scenes/gearScene'
import StaticScene from './StaticScene';

export default class BackgroundScene extends Phaser.Scene {
  JellyFish               : SeaSprite;
  turtle                  : SeaSprite;
  shark                   : SeaSprite;
  background_image_up     : SeaSprite;
  background_image_down   : SeaSprite;
  backFish                : BackFish[]; 
  backFishSpeedArray      : number[]
  backFishSpeed           : number[];
  backFishFlag            : number[];
  gearScene               : GearScene;
  currentScene            : Phaser.Scene
  WaterUp                 : SeaSprite
  submarine               : SeaSprite
  submarineFlag           : boolean
  rocket                  : SeaSprite[]
  rocketIndex             : number
  rocketdown1             : SeaSprite
  rocketdown2             : SeaSprite
  rocketdown3             : SeaSprite
  rocketdownFlag          : boolean
  staticScene             : StaticScene
  
  constructor() {
    super({ key: 'BackgroundScene' })
    this.currentScene  = this;
    this.submarineFlag = true;
    this.rocket        = []
    this.rocketIndex   = 0
    this.rocketdownFlag = true
  }

  create() {  
    //new GearScene(nGearNum)
    var nGearNum = 0;   

    //Play background music 
    this.playSound('bg_sound');   
    
    //BackFish 
    this.backFish                 = [];
    this.backFishSpeed            = [];
    this.backFishFlag             = [];
    this.generateBackFish();

    //Waterup generating
    this.time.addEvent({
      delay: 5000,                // ms
      callback: this.generateWaterUp,
      callbackScope: this.currentScene,
      loop: true
    });
    //Backfish generate
    this.time.addEvent({
        delay: 26000,                // ms
        callback: this.generateBackFish,
        callbackScope: this.currentScene,
        loop: true
    });       

    //Add background image
    this.background_image_up      = new SeaSprite(this, 270, 180, 'background_image');
    this.background_image_down    = new SeaSprite(this, 270, 540, 'background_image');

    //JellyFish 
    //this.JellyFish                = new SeaSprite(this, 200, 180, 'hae').setScale(2);

    //Tutle 
    //this.turtle                   = new SeaSprite(this, 200, 180, 'turtle').setScale(2);

    //shark 
    //this.shark                    = new SeaSprite(this, 200, 100, 'shark').setScale(3);    

    //Submarine   
    this.generateSubmarine(); 
  }
  
  randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } 

  generateSubmarine() { 
    this.rocketdownFlag = true;   
    this.submarine                = new SeaSprite(this, -200, 180, 'submarine').setScale(1.5);
    setTimeout(() => {
      this.submarineFlag = false;
      setTimeout(() => {
        this.time.addEvent({
          delay: 400,                // ms
          callback: this.shutRocket,
          callbackScope: this.currentScene,
          loop: true
        });
        //this.shutRocket();
      }, 500); 
    }, 2400);
    setTimeout(() => {
      this.submarineFlag = true; 
    }, 6000);   
  }

  shutRocket() {    
    if(this.rocketIndex < 6) {
      this.rocket[this.rocketIndex] = new SeaSprite(this, 250, 150, 'rocketup');
    } else {
      setTimeout(() => {
        this.hitRocketReel();
      }, 5000); 
    }    
    this.rocketIndex++;
  }

  hitRocketReel() {
    if(this.rocketdownFlag == true) {
      this.staticScene.rocketdown1 = new SeaSprite(this, 250, -150, 'rocket1');
      //this.staticScene.rocketdown1 = new SeaSprite(this, 250, -150, 'rocket1');
      this.rocketdownFlag = false;
    }    
  }

  generateWaterUp() {
    let x = this.randomInt(50, 360);
    this.WaterUp                  = new SeaSprite(this, x, 170, 'waterdrop2');
  }

  generateBackFish() {
    this.backFish                 = [];
    var backFishSpeedArray        = [0.5, 0.7, 1];
    var backFishScale             = [0.5, 0.7, 1, 1.2];
    let nBackFishNum              = this.randomInt(3,17);
    this.backFishFlag             = [];
    for(var i=1; i<nBackFishNum; i++) {
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
      this.backFishSpeed.push(backFishSpeedArray[nSpeedFlag]);
      this.backFish.push(new BackFish(this, fishX, fishY, texture).setScale(backFishScale[nBackFishScaleIndex]));   
      this.backFishFlag.push(backFishFlag);      
    }    
    return;
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

  update() {
    if(this.submarine != null) {
      this.submarine.update(this.submarineFlag);
    }
    if(this.rocketdown1 != null) {
      this.rocketdown1.update(true);
    }

    if(this.rocket.length != 0) {
      for(let i=0; i<6; i++) {
        if(this.rocket[i] != null) {
          this.rocket[i].update(true);
        }        
      }
    }    
    this.background_image_up.update(true)
    this.background_image_down.update(true)
    if(this.backFish.length != 0) {      
      for(var i=0; i<this.backFish.length; i++) {  
        this.backFish[i].update(this.backFishSpeed[i], this.backFishFlag[i])
      }
    }
  }
}