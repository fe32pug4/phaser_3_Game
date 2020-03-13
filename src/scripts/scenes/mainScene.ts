import PhaserLogo from '../objects/phaserLogo'
import Reel from '../objects/reel'
import FpsText from '../objects/fpsText'
import PinsGroup from '../objects/pin/pinGroup'
import PinSingle from '../objects/pin/pinSingle'
import Spin from '../objects/spin'
import { Sound } from 'phaser'
import BackFish from '../objects/backFish'

export default class MainScene extends Phaser.Scene {
  fpsText         : Phaser.GameObjects.Text
  droper          : PhaserLogo
  pin             : PhaserLogo
  reel1            : Reel[]
  reel2            : Reel[]
  reel3            : Reel[]
  reel4            : Reel[]
  coin            : PhaserLogo
  reelX           : number[]
  reelY           : number[]
  spinX           : number[]
  spinY           : number
  droperPositionX : number
  droperPositionY : number
  pinsGroup       : PinsGroup
  pins            : string[]
  reel_Name       : string[]
  spins           : Spin[]
  spin_Name       : string[]
  JellyFish       : PhaserLogo
  background_image_up  : PhaserLogo
  background_image_down: PhaserLogo
  soojoLeft       : PhaserLogo
  soojoRight      : PhaserLogo
  backFish        : BackFish[]
  private square  : Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body }; 
 
  constructor() {
    super({ key: 'MainScene' })
  }

  create() {  
    //Play background music 
    this.palySound('bg_sound')

    //Add background image
    this.background_image_up               = new PhaserLogo(this, 270, 180, 'background_image')
    this.background_image_down             = new PhaserLogo(this, 270, 540, 'background_image')

    //JellyFish 
    this.JellyFish    = new PhaserLogo(this, 200, 180, 'hae').setScale(2)

    //Tutle 
    this.JellyFish    = new PhaserLogo(this, 200, 180, 'turtle').setScale(2)

    //shark 
    this.JellyFish    = new PhaserLogo(this, 200, 100, 'shark').setScale(3)
    
    //BackFish 
    this.backFish = []
    for(var i=1; i<8; i++) {
      let texture = "bfish" + i;
      let fishY = this.randomInt(50, 300)
      this.backFish.push(new BackFish(this, -50, fishY, texture))   
    }
    //Add 2 soojo images 
    this.soojoLeft          = new PhaserLogo(this, 75, 150, 'soojo')
    this.soojoRight         = new PhaserLogo(this, 355, 150, 'soojo')
    this.soojoRight.flipX   = true

    this.reel_Name = ['fish1', 'fish2', 'fish3', 'bar', 'joker', 'mong', 'seven', 'heama', 'star', 'target', 'shellfish']
    this.reelX     = [85, 170, 255, 340]
    this.reelY     = [-455, -395, -325, -265, -205, -155, -95, -35, 25, 85, 145, 205, 265, 325, 385]
    this.spinX     = [550, 605, 660, 715, 770, 820, 880, 935, 990, 1045, 1100, 1155, 1210, 1265, 1320]
    this.spinY     = 290
    this.droper    = new PhaserLogo(this, 10, 35, 'droper') 
    this.spin_Name = ['bomb', 'bonus_50', 'bonus_100', 'crab', 'prizebox', 'spin_blue', 'spin_green', 'spin_red', 'spin_gray', 'spin_yellow']

    this.reel1      = []
    this.reel2      = []
    this.reel3      = []
    this.reel4      = []
    for(var i=0; i<15; i++) {      
      this.reel1[i] = this.generateReel(this.reelX[0], this.reelY[i])
      this.reel2[i] = this.generateReel(this.reelX[1], this.reelY[i])
      this.reel3[i] = this.generateReel(this.reelX[2], this.reelY[i])
      this.reel4[i] = this.generateReel(this.reelX[3], this.reelY[i])
    }
     
    this.pins             = []    
    for(var i=0; i< 33; i++) {
      for(var j=0; j<4; j++) {
        var pin_nim = i+1
        var img_name = "Pin_"+pin_nim+"_000"+j;
        this.pins.push(img_name)
      }
    }
    this.pinsGroup = new PinsGroup(this, this.pins)
    this.dropCoin()

    //this.physics.add.collider(this.coin, this.pinsGroup)
    this.spins = []
    for(var i=0; i<15; i++) {         
      this.spins[i]         = this.generateSpin(this.spinX[i], this.spinY) 
      this.touchSpin(this.coin, this.spins[i])      
    }
  }
  
  randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  palySound(soundName: string) {
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

  touchSpin(coin: PhaserLogo, spin: Spin) {
    this.physics.add.overlap(coin, spin, (coin: PhaserLogo, spin: Spin) => {
      if (spin.body.touching.up) {
        if(coin.x < 420 && coin.x > -50) {
          var soundName = 'bomb'
          this.palySound(soundName)         
          
          var anim_Name = "ani_spin"+spin.img_name;
          if(spin.img_name == 'crab'){
            spin.anims.play("over_spincrab")
            spin.anims.play(anim_Name)
          } else {
            spin.anims.play(anim_Name)
          }          
        }        
        this.coin.destroy()
        this.dropCoin()
      }
    })
  }

  generateReel(x: number, y: number) {
    let reel_No           = this.randomInt(0, 10)
    let reel              = new Reel(this, x, y, this.reel_Name[reel_No])
    return reel
  }
  
  generateSpin(x: number, y: number) {
    let spin_No           = this.randomInt(0, 9)
    let spin              = new Spin(this, x, y, this.spin_Name[spin_No])
    return spin
  }

  dropCoin() {
    this.droperPositionX    = this.droper.getPositionX()
    this.droperPositionY    = this.droper.getPositionY()
    this.coin               = new PhaserLogo(this, this.droperPositionX, this.droperPositionY, 'coin') 
  }
  
  update() {
    this.background_image_up.update()
    this.background_image_down.update()
    for(var i=0; i<7; i++) {
      this.backFish[i].update()
    }
    this.droper.update() 
    for(var i=0; i<15; i++) {   
      //if(this.reel1[1].y < 465) {
        let flag = true
        if(this.reel1[1].y > 320) {
          flag = true
        } else {
          flag = false
        }
        this.reel1[i].update(1, flag)
        if(this.reel1[i].y > 700) {
          this.reel1[i].destroy()
          if(i == 14) {
            this.reel1[i] = this.generateReel(this.reelX[0], this.reel1[0].y - 60)
          } else {
            this.reel1[i] = this.generateReel(this.reelX[0], this.reel1[i+1].y - 60)
          }          
        }
      //} 
      //if(this.reel2[1].y < 465) {
        //let flag = true
        if(this.reel1[1].y > 320) {
          flag = true
        } else {
          flag = false
        }
        this.reel2[i].update(2, flag)
        if(this.reel2[i].y > 700) {
          this.reel2[i].destroy()
          if(i == 14) {
            this.reel2[i] = this.generateReel(this.reelX[1], this.reel2[0].y - 60)
          } else {
            this.reel2[i] = this.generateReel(this.reelX[1], this.reel2[i+1].y - 60)
          }          
        }
      //} 
      //if(this.reel3[1].y < 465) {
        //let flag = true
        if(this.reel1[1].y > 320) {
          flag = true
        } else {
          flag = false
        }
        this.reel3[i].update(3, flag)
        if(this.reel3[i].y > 700) {
          this.reel3[i].destroy()
          if(i == 14) {
            this.reel3[i] = this.generateReel(this.reelX[2], this.reel3[0].y - 60)
          } else {
            this.reel3[i] = this.generateReel(this.reelX[2], this.reel3[i+1].y - 60)
          }          
        }
      //} 
      //if(this.reel4[1].y < 465) {
        //let flag = true
        if(this.reel1[1].y > 320) {
          flag = true
        } else {
          flag = false
        }
        this.reel4[i].update(4, flag)
        if(this.reel4[i].y > 700) {
          this.reel4[i].destroy()
          if(i == 14) {
            this.reel4[i] = this.generateReel(this.reelX[3], this.reel4[0].y - 60)
          } else {
            this.reel4[i] = this.generateReel(this.reelX[3], this.reel4[i+1].y - 60)
          }          
        }
      //} 

      if(this.reel1[14].y > 465) {
        this.reel1[14]
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
    // if(this.reel[0].y > 460) {
    //   let remove_No = this.randomInt(0, 3)
    //   for(var i=0; i<3; i++) {   
    //     this.reel[remove_No].y +=300
    //     let reel_No            = this.randomInt(0, 10)   
    //     this.reel[remove_No]   = new Reel(this, this.reelX[remove_No], this.reelY[remove_No], this.reel_Name[reel_No])
    //     remove_No += 4        
    //   } 
    // } 
    this.coin.update()
    if(this.coin.y>450) {
      this.coin.destroy();
      this.dropCoin()
    }
  }
}