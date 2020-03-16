import 'phaser'
import SeaGearScene    from './games/seastory/scenes/SeaStory/SeaGearScene'
import PreloadScene    from './games/seastory/scenes/SeaStory/preloadScene'
import StaticScene     from './games/seastory/scenes/SeaStory/StaticScene'
import WintableScene   from './games/seastory/scenes/SeaStory/WintableScene'
import BackgroundScene from './games/seastory/scenes/SeaStory/BackgroundScene'
const DEFAULT_WIDTH = 430
const DEFAULT_HEIGHT = 790

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  backgroundColor: '#ffffff',
  scale: {
    parent: 'phaser-game',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT
  },
  scene: [PreloadScene, BackgroundScene, SeaGearScene, WintableScene, StaticScene],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 0 }
    }
  }
}

window.addEventListener('load', () => {
  const game = new Phaser.Game(config)
})
