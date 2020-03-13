else if(img_name == 'spin_red') {
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