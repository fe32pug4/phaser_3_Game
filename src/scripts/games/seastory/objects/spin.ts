import BaseSprite        from '../../../parent/objects/baseSprite'
export default class Spin extends BaseSprite {
    img_name: String
    logoFlag: boolean
    scene: Phaser.Scene
    sinX: number
    sinY: number
    constructor(scene: Phaser.Scene, x: number, y: number, img_name: string) {
      super(scene, x, y, img_name)
      this.img_name = img_name
      this.logoFlag = true
      this.scene = scene
      this.sinX = x
      this.sinY = y
      
      if(img_name == 'bomb') {
        scene.anims.create({
          key: 'spinbomb',
          frames: [
              { key: 'bomb_0000', frame: NaN },
              { key: 'bomb_0001', frame: NaN },
              { key: 'bomb_0002', frame: NaN },
              { key: 'bomb_0003', frame: NaN },
              { key: 'bomb_0004', frame: NaN },
              { key: 'bomb_0005', frame: NaN },
              { key: 'bomb_0006', frame: NaN },
              { key: 'bomb_0007', frame: NaN }
          ],
          frameRate: 7,
          repeat: -1
        });         

        scene.anims.create({
          key: 'ani_spinbomb',
          frames: [
              { key: 'abomb_0000', frame: NaN },
              { key: 'abomb_0001', frame: NaN },
              { key: 'abomb_0002', frame: NaN },
              { key: 'abomb_0003', frame: NaN },
              { key: 'abomb_0004', frame: NaN },
              { key: 'abomb_0005', frame: NaN },
              { key: 'abomb_0006', frame: NaN },
              { key: 'abomb_0007', frame: NaN }
          ],
          frameRate: 7,
          repeat: -1
        }); 

        this.play("spinbomb")
      } else if(img_name == 'bonus_50') {
        scene.anims.create({
          key: 'spinbonus_50',
          frames: [            
            { key: 'bo_50',       frame: NaN },
            { key: 'bo_50_000',   frame: NaN },
            { key: 'bo_50_0000', frame: NaN }
          ],
          frameRate: 7,
          repeat: -1
        }); 

        scene.anims.create({
          key: 'ani_spinbonus_50',
          frames: [            
            { key: 'bo_ani_200_0000', frame: NaN },
            { key: 'bo_ani_200_0001', frame: NaN },
            { key: 'bo_ani_200_0002', frame: NaN },
            { key: 'bo_ani_200_0003', frame: NaN },
            { key: 'bo_ani_200_0004', frame: NaN },
            { key: 'bo_ani_200_0005', frame: NaN },
            { key: 'bo_ani_200_0006', frame: NaN },
            { key: 'bo_ani_200_0007', frame: NaN },
            { key: 'bo_ani_200_0008', frame: NaN },
            { key: 'bo_ani_200_0009', frame: NaN },
            { key: 'bo_ani_200_0010', frame: NaN },
            { key: 'bo_ani_200_0011', frame: NaN },
            { key: 'bo_ani_200_0012', frame: NaN },
            { key: 'bo_ani_200_0013', frame: NaN },
            { key: 'bo_ani_200_0014', frame: NaN },
            { key: 'bo_ani_200_0015', frame: NaN },
            { key: 'bo_ani_200_0016', frame: NaN },
            { key: 'bo_ani_200_0017', frame: NaN },
            { key: 'bo_ani_200_0018', frame: NaN },
            { key: 'bo_ani_200_0019', frame: NaN },
            { key: 'bo_ani_200_0020', frame: NaN },
            { key: 'bo_ani_200_0021', frame: NaN },
            { key: 'bo_ani_200_0022', frame: NaN },
            { key: 'bo_ani_200_0023', frame: NaN },
            { key: 'bo_ani_200_0024', frame: NaN },
            { key: 'bo_ani_200_0025', frame: NaN },
            { key: 'bo_ani_200_0026', frame: NaN },
            { key: 'bo_ani_200_0027', frame: NaN },
            { key: 'bo_ani_200_0028', frame: NaN },
            { key: 'bo_ani_200_0029', frame: NaN }
          ],
          frameRate: 7,
          repeat: -1
        }); 
        this.play("spinbonus_50")
      } else if(img_name == 'bonus_100') {
        scene.anims.create({
          key: 'spinbonus_100',
          frames: [            
            { key: 'bo_100',      frame: NaN },
            { key: 'bo_100_000',  frame: NaN },
            { key: 'bo_100_0000', frame: NaN }
          ],
          frameRate: 7,
          repeat: -1
        }); 
        scene.anims.create({
          key: 'ani_spinbonus_100',
          frames: [            
            { key: 'bo_ani_100_0000', frame: NaN },
            { key: 'bo_ani_100_0001', frame: NaN },
            { key: 'bo_ani_100_0002', frame: NaN },
            { key: 'bo_ani_100_0003', frame: NaN },
            { key: 'bo_ani_100_0004', frame: NaN },
            { key: 'bo_ani_100_0005', frame: NaN },
            { key: 'bo_ani_100_0006', frame: NaN },
            { key: 'bo_ani_100_0007', frame: NaN },
            { key: 'bo_ani_100_0008', frame: NaN },
            { key: 'bo_ani_100_0009', frame: NaN },
            { key: 'bo_ani_100_0010', frame: NaN },
            { key: 'bo_ani_100_0011', frame: NaN },
            { key: 'bo_ani_100_0012', frame: NaN },
            { key: 'bo_ani_100_0013', frame: NaN },
            { key: 'bo_ani_100_0014', frame: NaN },
            { key: 'bo_ani_100_0015', frame: NaN },
            { key: 'bo_ani_100_0016', frame: NaN },
            { key: 'bo_ani_100_0017', frame: NaN },
            { key: 'bo_ani_100_0018', frame: NaN },
            { key: 'bo_ani_100_0019', frame: NaN },
            { key: 'bo_ani_100_0020', frame: NaN },
            { key: 'bo_ani_100_0021', frame: NaN },
            { key: 'bo_ani_100_0022', frame: NaN },
            { key: 'bo_ani_100_0023', frame: NaN },
            { key: 'bo_ani_100_0024', frame: NaN },
            { key: 'bo_ani_100_0025', frame: NaN },
            { key: 'bo_ani_100_0026', frame: NaN },
            { key: 'bo_ani_100_0027', frame: NaN },
            { key: 'bo_ani_100_0028', frame: NaN },
            { key: 'bo_ani_100_0029', frame: NaN }
          ],
          frameRate: 7,
          repeat: -1
        }); 
        this.play("spinbonus_100")
      } else if(img_name == 'crab') {
        scene.anims.create({
          key: 'spincrab',
          frames: [            
            { key: 'crab_0000', frame: NaN },
            { key: 'crab_0001', frame: NaN },
            { key: 'crab_0002', frame: NaN },
            { key: 'crab_0003', frame: NaN },
            { key: 'crab_0004', frame: NaN },
            { key: 'crab_0005', frame: NaN },
            { key: 'crab_0006', frame: NaN },
            { key: 'crab_0007', frame: NaN }
          ],
          frameRate: 7,
          repeat: -1
        }); 
        scene.anims.create({
          key: 'ani_spincrab',
          frames: [            
            { key: 'acrab_0000', frame: NaN },
            { key: 'acrab_0001', frame: NaN },
            { key: 'acrab_0002', frame: NaN },
            { key: 'acrab_0003', frame: NaN },
            { key: 'acrab_0004', frame: NaN },
            { key: 'acrab_0005', frame: NaN },
            { key: 'acrab_0006', frame: NaN },
            { key: 'acrab_0007', frame: NaN }
          ],
          frameRate: 7,
          repeat: -1
        }); 
        scene.anims.create({
          key: 'over_spincrab',
          frames: [            
            { key: 'splat_0000', frame: NaN },
            { key: 'splat_0001', frame: NaN },
            { key: 'splat_0002', frame: NaN },
            { key: 'splat_0003', frame: NaN },
            { key: 'splat_0004', frame: NaN },
            { key: 'splat_0005', frame: NaN },
            { key: 'splat_0006', frame: NaN },
            { key: 'splat_0007', frame: NaN },
            { key: 'splat_0008', frame: NaN },
            { key: 'splat_0009', frame: NaN },
            { key: 'splat_00010', frame: NaN }
          ],
          frameRate: 7,
          repeat: -1
        }); 
        this.play("spincrab")
      } else if(img_name == 'prizebox') {
        scene.anims.create({
          key: 'spinprizebox',
          frames: [            
            { key: 'prizebox_0000', frame: NaN },
            { key: 'prizebox_0001', frame: NaN },
            { key: 'prizebox_0002', frame: NaN },
            { key: 'prizebox_0003', frame: NaN },
            { key: 'prizebox_0004', frame: NaN },
            { key: 'prizebox_0005', frame: NaN },
            { key: 'prizebox_0006', frame: NaN },
            { key: 'prizebox_0007', frame: NaN }
          ],
          frameRate: 7,
          repeat: -1
        }); 
        scene.anims.create({
          key: 'ani_spinprizebox',
          frames: [            
            { key: 'prizebox_ani_0000', frame: NaN },
            { key: 'prizebox_ani_0001', frame: NaN },
            { key: 'prizebox_ani_0002', frame: NaN },
            { key: 'prizebox_ani_0003', frame: NaN },
            { key: 'prizebox_ani_0004', frame: NaN },
            { key: 'prizebox_ani_0005', frame: NaN },
            { key: 'prizebox_ani_0006', frame: NaN },
            { key: 'prizebox_ani_0007', frame: NaN }
          ],
          frameRate: 7,
          repeat: -1
        }); 
        this.play("spinprizebox")
      } else if(img_name == 'spin_blue') {
        scene.anims.create({
          key: 'spinspin_blue',
          frames: [            
            { key: 'spin_blue_0000', frame: NaN },
            { key: 'spin_blue_0001', frame: NaN },
            { key: 'spin_blue_0002', frame: NaN },
            { key: 'spin_blue_0003', frame: NaN },
            { key: 'spin_blue_0004', frame: NaN },
            { key: 'spin_blue_0005', frame: NaN },
            { key: 'spin_blue_0006', frame: NaN },
            { key: 'spin_blue_0007', frame: NaN }
          ],
          frameRate: 7,
          repeat: -1
        }); 
        scene.anims.create({
          key: 'ani_spinspin_blue',
          frames: [            
            { key: 'spin_blue_ani_0000', frame: NaN },
            { key: 'spin_blue_ani_0001', frame: NaN },
            { key: 'spin_blue_ani_0002', frame: NaN },
            { key: 'spin_blue_ani_0003', frame: NaN },
            { key: 'spin_blue_ani_0004', frame: NaN },
            { key: 'spin_blue_ani_0005', frame: NaN },
            { key: 'spin_blue_ani_0006', frame: NaN },
            { key: 'spin_blue_ani_0007', frame: NaN }
          ],
          frameRate: 7,
          repeat: -1
        }); 
        this.play("spinspin_blue")
      } else if(img_name == 'spin_green') {
        scene.anims.create({
          key: 'spinspin_green',
          frames: [            
            { key: 'spin_green_0000', frame: NaN },
            { key: 'spin_green_0001', frame: NaN },
            { key: 'spin_green_0002', frame: NaN },
            { key: 'spin_green_0003', frame: NaN },
            { key: 'spin_green_0004', frame: NaN },
            { key: 'spin_green_0005', frame: NaN },
            { key: 'spin_green_0006', frame: NaN },
            { key: 'spin_green_0007', frame: NaN }
          ],
          frameRate: 7,
          repeat: -1
        }); 
        scene.anims.create({
          key: 'ani_spinspin_green',
          frames: [            
            { key: 'spin_green_ani_0000', frame: NaN },
            { key: 'spin_green_ani_0001', frame: NaN },
            { key: 'spin_green_ani_0002', frame: NaN },
            { key: 'spin_green_ani_0003', frame: NaN },
            { key: 'spin_green_ani_0004', frame: NaN },
            { key: 'spin_green_ani_0005', frame: NaN },
            { key: 'spin_green_ani_0006', frame: NaN },
            { key: 'spin_green_ani_0007', frame: NaN }
          ],
          frameRate: 7,
          repeat: -1
        }); 
        this.play("spinspin_green")
      } else if(img_name == 'spin_gray') {
        scene.anims.create({
          key: 'spinspin_gray',
          frames: [            
            { key: 'spin_gray_0000', frame: NaN },
            { key: 'spin_gray_0001', frame: NaN },
            { key: 'spin_gray_0002', frame: NaN },
            { key: 'spin_gray_0003', frame: NaN },
            { key: 'spin_gray_0004', frame: NaN },
            { key: 'spin_gray_0005', frame: NaN },
            { key: 'spin_gray_0006', frame: NaN },
            { key: 'spin_gray_0007', frame: NaN }
          ],
          frameRate: 7,
          repeat: -1
        }); 
        scene.anims.create({
          key: 'ani_spinspin_gray',
          frames: [            
            { key: 'spin_gray_ani_0000', frame: NaN },
            { key: 'spin_gray_ani_0001', frame: NaN },
            { key: 'spin_gray_ani_0002', frame: NaN },
            { key: 'spin_gray_ani_0003', frame: NaN },
            { key: 'spin_gray_ani_0004', frame: NaN },
            { key: 'spin_gray_ani_0005', frame: NaN },
            { key: 'spin_gray_ani_0006', frame: NaN },
            { key: 'spin_gray_ani_0007', frame: NaN }
          ],
          frameRate: 7,
          repeat: -1
        }); 
        this.play("spinspin_gray")
      } else if(img_name == 'spin_yellow') {
        scene.anims.create({
          key: 'spinspin_yellow',
          frames: [            
            { key: 'spin_yellow_0000', frame: NaN },
            { key: 'spin_yellow_0001', frame: NaN },
            { key: 'spin_yellow_0002', frame: NaN },
            { key: 'spin_yellow_0003', frame: NaN },
            { key: 'spin_yellow_0004', frame: NaN },
            { key: 'spin_yellow_0005', frame: NaN },
            { key: 'spin_yellow_0006', frame: NaN },
            { key: 'spin_yellow_0007', frame: NaN }
          ],
          frameRate: 7,
          repeat: -1
        }); 
        scene.anims.create({
          key: 'ani_spinspin_yellow',
          frames: [            
            { key: 'spin_yellow_ani_0000', frame: NaN },
            { key: 'spin_yellow_ani_0001', frame: NaN },
            { key: 'spin_yellow_ani_0002', frame: NaN },
            { key: 'spin_yellow_ani_0003', frame: NaN },
            { key: 'spin_yellow_ani_0004', frame: NaN },
            { key: 'spin_yellow_ani_0005', frame: NaN },
            { key: 'spin_yellow_ani_0006', frame: NaN },
            { key: 'spin_yellow_ani_0007', frame: NaN }
          ],
          frameRate: 7,
          repeat: -1
        }); 
        this.play("spinspin_yellow")
      } else if(img_name == 'spin_red') {
        scene.anims.create({
          key: 'spinspin_red',
          frames: [            
            { key: 'spin_red_0000', frame: NaN },
            { key: 'spin_red_0001', frame: NaN },
            { key: 'spin_red_0002', frame: NaN },
            { key: 'spin_red_0003', frame: NaN },
            { key: 'spin_red_0004', frame: NaN },
            { key: 'spin_red_0005', frame: NaN },
            { key: 'spin_red_0006', frame: NaN },
            { key: 'spin_red_0007', frame: NaN }
          ],
          frameRate: 7,
          repeat: -1
        }); 
        scene.anims.create({
          key: 'ani_spinspin_red',
          frames: [            
            { key: 'spin_red_ani_0000', frame: NaN },
            { key: 'spin_red_ani_0001', frame: NaN },
            { key: 'spin_red_ani_0002', frame: NaN },
            { key: 'spin_red_ani_0003', frame: NaN },
            { key: 'spin_red_ani_0004', frame: NaN },
            { key: 'spin_red_ani_0005', frame: NaN },
            { key: 'spin_red_ani_0006', frame: NaN },
            { key: 'spin_red_ani_0007', frame: NaN }
          ],
          frameRate: 7,
          repeat: -1
        }); 
        this.play("spinspin_red")
      }
      
      this.setVisible(false)
    }
  
    public getPositionX() {
      return this.x;
    }
  
    public getPositionY() {
      return this.y;
    }
    
    public update() {    
      this.x = this.x - 3  
      if(this.x < 450 && this.x > -90 ) {
        this.setVisible(true)
      } else {
        this.setVisible(false)
      }
    }
  }
  