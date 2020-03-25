import BaseSprite        from '../../../parent/objects/baseSprite'
export default class BackFish extends BaseSprite {
  logoFlag   : boolean
  scene      : Phaser.Scene
  animFrame  : AnimFrame
  animFrames : AnimFrame[]
  flag       : boolean
  constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
    super(scene, x, y, texture)
    this.logoFlag = true
    this.scene = scene
    scene.add.existing(this)
    scene.physics.add.existing(this)
    this.flag  = false
    //----------Create Animation-------------------
    var animKey     = texture + "Anim"
    this.animFrames = []
    for(var i=0; i<6; i++) {
      let frameName    = (texture+"_000"+i).toString()
      this.animFrame   = {key: frameName, frame: NaN}
      this.animFrames.push(this.animFrame)
    }
    scene.anims.create({
      key: animKey.toString(),
      frames: this.animFrames,
      frameRate: 20,
      repeat: -1
    });
    this.play(animKey)
  } 

  public update(nSpeed, nbackFishFlag) { 
    let fishY                   = this.randomInt(20, 600);   
    let nBackFishScaleIndex     = this.randomInt(0, 3);
    let fishX                   = 0;
    let backFishScale           = [0.5, 0.7, 1, 1.2];
    let visibleFlag             = this.randomInt(0, 1);
    if(nbackFishFlag > 5) {      
      this.flag = false
    } else {
      this.flag = true
    }
    if(this.flag == true) {
      this.setFlipX(false);
      this.x -= nSpeed;
      if(this.x< -190) {
        fishX  = this.randomInt(400, 500);
        this.x = fishX;
        this.y = fishY;
        this.setScale(backFishScale[nBackFishScaleIndex]);
        this.setVisible(visibleFlag);
      }
    } else {
      this.setFlipX(true);
      this.x += nSpeed;
      if(this.x> 500) {
        fishX  = this.randomInt(-190, -20);
        this.x = fishX;
        this.y = fishY;
        this.setScale(backFishScale[nBackFishScaleIndex]);
        this.setVisible(visibleFlag);
      }
    }
  }
}
