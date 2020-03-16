import { Sound }         from 'phaser'
import SeaGearScene      from '../../games/seastory/scenes/SeaStory/SeaGearScene'
import BaseSprite        from '../objects/baseSprite'
export default class GearScene {
    SeaGearScene: SeaGearScene
    backImgUp   : BaseSprite
    backImgDown : BaseSprite
    //nGearNum is index of game {0: seastory}
    constructor(nGearNum: number) { 
      //------------------------Seastroy------------------------------
      // if(nGearNum == 0) {
      //   //Background Image
      //   this.backImgDown = new BaseSprite(this.SeaGearScene, 270, 180, 'background_image')
      //   this.backImgUp   = new BaseSprite(this.SeaGearScene, 270, 540, 'background_image')
      // }
    }
  
    preload() { }
    
    // playSound(soundName: string) {
    //   let music = this.sound.add(soundName)
    //   let musicConfig = {}
    //   if(soundName == 'bg_sound') {
    //     musicConfig = {
    //       mute: false,
    //       volume: 1,
    //       delay: 0,
    //       loop: true
    //     }
    //   } else {
    //     musicConfig = {
    //       mute: false,
    //       volume: 1,
    //       delay: 0
    //     }
    //   }    
    //   music.play(musicConfig)
    // }

    create() { }
}
  