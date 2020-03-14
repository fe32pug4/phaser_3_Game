export default class BasePreloadScene extends Phaser.Scene {
    constructor() {
      super({ key: 'BasePreloadScene' })
    }
  
    preload() { }
    
    loadingImage(strimagePrefix: string, nframeNumber: number, strSrc: string) {
        for(var i=0; i<nframeNumber; i++) {
            let strimageName = ''
            if(i>9) {
              strimageName = (strimagePrefix+"_00"+i).toString()
            } else {
              strimageName = (strimagePrefix+"_000"+i).toString()
            } 
            this.load.image(strimageName,        `assets/${strSrc}/${strimageName}.png`)
        }
    }
    create() { }

    startScenes(sceneGroup: string[]) {
        for(var i=0; i<sceneGroup.length; i++) {
            this.scene.start(sceneGroup[i])
        }
    }
  }
  