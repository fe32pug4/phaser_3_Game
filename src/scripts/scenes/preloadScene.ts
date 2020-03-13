export default class PreloadScene extends Phaser.Scene {
  pins:         string[]
  spins:        string[]
  pinInfo:      PinsConfig[]
  constructor() {
    super({ key: 'PreloadScene' })
    this.pins            = []
    this.pinInfo         = []
    this.spins           = []
  }

  preload() {   
    this.load.image('background_image', `assets/img/back_0.png`)
    this.load.image('soojo',            `assets/img/Soojo/soojo_x5.png`)

    //Coin Droper image loading
    this.load.image('droper',           `assets/img/Droper/Drop_01.png`)

    //Ball image loading
    this.load.image('ball_01',           `assets/img/WaterDrop/ball_01.png`)
    this.load.image('ball_02',           `assets/img/WaterDrop/ball_02.png`)
    this.load.image('ball_03',           `assets/img/WaterDrop/ball_03.png`)
    //Bonus panel  
    this.load.image('bp_left',          `assets/img/bonusPanel/inter_blue_02.png`)
    this.load.image('bp_center',        `assets/img/bonusPanel/inter_blue_03.png`)
    this.load.image('bp_right',         `assets/img/bonusPanel/inter_blue_04.png`)

    //Score panel 
    this.load.image('sp_left',          `assets/img/scorePanel/inter_blue_07.png`)
    this.load.image('sp_center',        `assets/img/scorePanel/inter_blue_08.png`)
    this.load.image('sp_right',         `assets/img/scorePanel/inter_blue_09.png`)

    this.load.image('under_left',       `assets/img/underSide/inter_blue_05.png`)
    this.load.image('under_right',      `assets/img/underSide/inter_blue_06.png`)

    this.load.audio('bomb',             `assets/sound/boom.ogg`)
    this.load.audio('bg_sound',         `assets/sound/BGM_0000.ogg`) 
    
    //Wintable image loading
    this.load.image('wintable1',        `assets/img/WinTable/inter_wintable_0_0.png`)
    this.load.image('wintable2',       `assets/img/WinTable/inter_wintable_3_0.png`) 

    //DangerNew
    this.load.image('dangernew',       `assets/img/dangernew.png`) 
    
    //-----------------------Loading Fireworks images-------------------------------
    for(var i=0; i<58; i++) {
      let image_Name = ''
      if(i>9) {
        image_Name = ('fireworks_00'+i).toString()
      } else {
        image_Name = ('fireworks_000'+i).toString()
      } 
      this.load.image(image_Name, `assets/img/Effect/Fireworks/${image_Name}.png`)
    }

    //----------------------Event images Loading
    //Loading dol images
    for(var i=0; i<53; i++) {
      let image_Name = ''
      if(i>9) {
        image_Name = ('dol_00'+i).toString()
      } else {
        image_Name = ('dol_000'+i).toString()
      } 
      this.load.image(image_Name, `assets/img/Event/${image_Name}.png`)
    }

    //Loading event_bar images
    for(var i=0; i<44; i++) {
      let image_Name = ''
      if(i>9) {
        image_Name = ('event_bar_00'+i).toString()
      } else {
        image_Name = ('event_bar_000'+i).toString()
      } 
      this.load.image(image_Name, `assets/img/Event/${image_Name}.png`)
    }

    //Loading event_seven images
    for(var i=0; i<42; i++) {
      let image_Name = ''
      if(i>9) {
        image_Name = ('event_seven_00'+i).toString()
      } else {
        image_Name = ('event_seven_000'+i).toString()
      } 
      this.load.image(image_Name, `assets/img/Event/${image_Name}.png`)
    }

    //Loading eventstar1 images
    for(var i=0; i<6; i++) {
      let image_Name = ''
      if(i>9) {
        image_Name = ('eventstar1_00'+i).toString()
      } else {
        image_Name = ('eventstar1_000'+i).toString()
      } 
      this.load.image(image_Name, `assets/img/Event/${image_Name}.png`)
    }

    //-----------------------Loading reel images------------------------------------
    //Reel bar image loading    
    for(var i=0; i<5; i++) {
      let image_Name = ''
      image_Name = ('bar_000'+i).toString()
      this.load.image(image_Name, `assets/img/Reel/bar/${image_Name}.png`)
    }
    //Reel bar ani image loading
    for(var i=0; i<12; i++) {
      let image_Name = ''
      if(i>9) {
        image_Name = ('bar_ani_00'+i).toString()
      } else {
        image_Name = ('bar_ani_000'+i).toString()
      }      
      this.load.image(image_Name, `assets/img/Reel/bar/${image_Name}.png`)
    }

    //Reel fish1 image loading    
    for(var i=0; i<5; i++) {
      let image_Name = ''
      image_Name = ('fish1_000'+i).toString()
      this.load.image(image_Name, `assets/img/Reel/fish1/${image_Name}.png`)
    }
    //Reel fish1 ani image loading
    for(var i=0; i<12; i++) {
      let image_Name = ''
      if(i>9) {
        image_Name = ('fish1_ani_00'+i).toString()
      } else {
        image_Name = ('fish1_ani_000'+i).toString()
      }      
      this.load.image(image_Name, `assets/img/Reel/fish1/${image_Name}.png`)
    }

    //Reel fish2 image loading    
    for(var i=0; i<5; i++) {
      let image_Name = ''
      image_Name = ('fish2_000'+i).toString()
      this.load.image(image_Name, `assets/img/Reel/fish2/${image_Name}.png`)
    }
    //Reel fish2 ani image loading
    for(var i=0; i<12; i++) {
      let image_Name = ''
      if(i>9) {
        image_Name = ('fish2_ani_00'+i).toString()
      } else {
        image_Name = ('fish2_ani_000'+i).toString()
      }      
      this.load.image(image_Name, `assets/img/Reel/fish2/${image_Name}.png`)
    }

    //Reel fish3 image loading    
    for(var i=0; i<5; i++) {
      let image_Name = ''
      image_Name = ('fish3_000'+i).toString()
      this.load.image(image_Name, `assets/img/Reel/fish3/${image_Name}.png`)
    }
    //Reel fish3 ani image loading
    for(var i=0; i<12; i++) {
      let image_Name = ''
      if(i>9) {
        image_Name = ('fish3_ani_00'+i).toString()
      } else {
        image_Name = ('fish3_ani_000'+i).toString()
      }      
      this.load.image(image_Name, `assets/img/Reel/fish3/${image_Name}.png`)
    }

    //Reel heama image loading    
    for(var i=0; i<5; i++) {
      let image_Name = ''
      image_Name = ('heama_000'+i).toString()
      this.load.image(image_Name, `assets/img/Reel/heama/${image_Name}.png`)
    }
    //Reel heama ani image loading
    for(var i=0; i<12; i++) {
      let image_Name = ''
      if(i>9) {
        image_Name = ('heama_ani_00'+i).toString()
      } else {
        image_Name = ('heama_ani_000'+i).toString()
      }      
      this.load.image(image_Name, `assets/img/Reel/heama/${image_Name}.png`)
    }

    //Reel joker image loading    
    for(var i=0; i<5; i++) {
      let image_Name = ''
      image_Name = ('joker_000'+i).toString()
      this.load.image(image_Name, `assets/img/Reel/joker/${image_Name}.png`)
    }
    //Reel joker ani image loading
    for(var i=0; i<12; i++) {
      let image_Name = ''
      if(i>9) {
        image_Name = ('joker_ani_00'+i).toString()
      } else {
        image_Name = ('joker_ani_000'+i).toString()
      }      
      this.load.image(image_Name, `assets/img/Reel/joker/${image_Name}.png`)
    }

    //Reel mong image loading    
    for(var i=0; i<5; i++) {
      let image_Name = ''
      image_Name = ('mong_000'+i).toString()
      this.load.image(image_Name, `assets/img/Reel/mong/${image_Name}.png`)
    }
    //Reel mong ani image loading
    for(var i=0; i<12; i++) {
      let image_Name = ''
      if(i>9) {
        image_Name = ('mong_ani_00'+i).toString()
      } else {
        image_Name = ('mong_ani_000'+i).toString()
      }      
      this.load.image(image_Name, `assets/img/Reel/mong/${image_Name}.png`)
    }

    //Reel seven image loading    
    for(var i=0; i<5; i++) {
      let image_Name = ''
      image_Name = ('seven_000'+i).toString()
      this.load.image(image_Name, `assets/img/Reel/seven/${image_Name}.png`)
    }
    //Reel seven ani image loading
    for(var i=0; i<12; i++) {
      let image_Name = ''
      if(i>9) {
        image_Name = ('seven_ani_00'+i).toString()
      } else {
        image_Name = ('seven_ani_000'+i).toString()
      }      
      this.load.image(image_Name, `assets/img/Reel/seven/${image_Name}.png`)
    }

    //Reel shellfish image loading    
    for(var i=0; i<5; i++) {
      let image_Name = ''
      image_Name = ('shellfish_000'+i).toString()
      this.load.image(image_Name, `assets/img/Reel/shellfish/${image_Name}.png`)
    }
    //Reel shellfish ani image loading
    for(var i=0; i<12; i++) {
      let image_Name = ''
      if(i>9) {
        image_Name = ('shellfish_ani_00'+i).toString()
      } else {
        image_Name = ('shellfish_ani_000'+i).toString()
      }      
      this.load.image(image_Name, `assets/img/Reel/shellfish/${image_Name}.png`)
    }

    //Reel star image loading    
    for(var i=0; i<5; i++) {
      let image_Name = ''
      image_Name = ('star_000'+i).toString()
      this.load.image(image_Name, `assets/img/Reel/star/${image_Name}.png`)
    }
    //Reel star ani image loading
    for(var i=0; i<12; i++) {
      let image_Name = ''
      if(i>9) {
        image_Name = ('star_ani_00'+i).toString()
      } else {
        image_Name = ('star_ani_000'+i).toString()
      }      
      this.load.image(image_Name, `assets/img/Reel/star/${image_Name}.png`)
    }

    //Reel target image loading    
    for(var i=0; i<5; i++) {
      let image_Name = ''
      image_Name = ('target_000'+i).toString()
      this.load.image(image_Name, `assets/img/Reel/target/${image_Name}.png`)
    }
    //Reel target ani image loading
    for(var i=0; i<12; i++) {
      let image_Name = ''
      if(i>9) {
        image_Name = ('target_ani_00'+i).toString()
      } else {
        image_Name = ('target_ani_000'+i).toString()
      }      
      this.load.image(image_Name, `assets/img/Reel/target/${image_Name}.png`)
    }

    //-----------------Jellyfish images loading
    for(var i=0; i<30; i++) {
      let image_Name = ''
      if(i>9) {
        image_Name = ('hae_00'+i).toString()
      } else {
        image_Name = ('hae_000'+i).toString()
      }      
      this.load.image(image_Name, `assets/img/Adumbrate/Jellyfish/${image_Name}.png`)
    }

    //-----------------Whale images loading
    for(var i=0; i<23; i++) {
      let image_Name = ''
      if(i>9) {
        image_Name = ('wh_ta_00'+i).toString()
      } else {
        image_Name = ('wh_ta_000'+i).toString()
      }      
      this.load.image(image_Name, `assets/img/Adumbrate/Whale/${image_Name}.png`)
    }

    //-----------------Shark images loading
    for(var i=0; i<37; i++) {
      let image_Name = ''
      if(i>9) {
        image_Name = ('shark_00'+i).toString()
      } else {
        image_Name = ('shark_000'+i).toString()
      }      
      this.load.image(image_Name, `assets/img/Adumbrate/Shark/${image_Name}.png`)
    }

    //-----------------Turtle images loading
    for(var i=0; i<21; i++) {
      let image_Name = ''
      if(i>9) {
        image_Name = ('turtle_00'+i).toString()
      } else {
        image_Name = ('turtle_000'+i).toString()
      }      
      this.load.image(image_Name, `assets/img/Adumbrate/Turtle/${image_Name}.png`)
    }


    //-----------------Back fishes images loading
    for(var i=1; i<8; i++) {
      for(var j=0; j<6; j++) {
        var fish_name = "bfish"+i+"_000"+j
        this.load.image(fish_name, `assets/img/BackAni/${fish_name}.png`) 
      }
    }

    //-----------------Loading pin images---------------------------------------
    for(var i=0; i< 33; i++) {
      for(var j=0; j<4; j++) {
        var pin_nim = i+1
        var img_name = "Pin_"+pin_nim+"_000"+j
        this.load.image(img_name, `assets/img/Pin/${img_name}.png`)     
      }
    }

    //----------------Loading bonus images--------------------------------------    
    const bomb           = ['bomb_0000',  'bomb_0001',  'bomb_0002',  'bomb_0003',  'bomb_0004',  'bomb_0005',  'bomb_0006',  'bomb_0007']
    const ani_bomb       = ['abomb_0000', 'abomb_0001', 'abomb_0002', 'abomb_0003', 'abomb_0004', 'abomb_0005', 'abomb_0006', 'abomb_0007']
    
    const bonus_50       = ['bo_50','bo_50_000', 'bo_50_0000']
    const ani_bonus_50   = ['bo_ani_200_0000','bo_ani_200_0001', 'bo_ani_200_0002', 'bo_ani_200_0003', 'bo_ani_200_0004', 'bo_ani_200_0005', 'bo_ani_200_0006', 'bo_ani_200_0007', 'bo_ani_200_0008', 'bo_ani_200_0009',
                            'bo_ani_200_0010','bo_ani_200_0011', 'bo_ani_200_0012', 'bo_ani_200_0013', 'bo_ani_200_0014', 'bo_ani_200_0015', 'bo_ani_200_0016', 'bo_ani_200_0017', 'bo_ani_200_0018', 'bo_ani_200_0019',
                            'bo_ani_200_0020','bo_ani_200_0021', 'bo_ani_200_0022', 'bo_ani_200_0023', 'bo_ani_200_0024', 'bo_ani_200_0025', 'bo_ani_200_0026', 'bo_ani_200_0027', 'bo_ani_200_0028', 'bo_ani_200_0029']

    const bonus_100      = ['bo_100','bo_100_000', 'bo_100_0000']
    const ani_bonus_100  = ['bo_ani_100_0000','bo_ani_100_0001', 'bo_ani_100_0002', 'bo_ani_100_0003', 'bo_ani_100_0004', 'bo_ani_100_0005', 'bo_ani_100_0006', 'bo_ani_100_0007', 'bo_ani_100_0008', 'bo_ani_100_0009',
                            'bo_ani_100_0010','bo_ani_100_0011', 'bo_ani_100_0012', 'bo_ani_100_0013', 'bo_ani_100_0014', 'bo_ani_100_0015', 'bo_ani_100_0016', 'bo_ani_100_0017', 'bo_ani_100_0018', 'bo_ani_100_0019',
                            'bo_ani_100_0020','bo_ani_100_0021', 'bo_ani_100_0022', 'bo_ani_100_0023', 'bo_ani_100_0024', 'bo_ani_100_0025', 'bo_ani_100_0026', 'bo_ani_100_0027', 'bo_ani_100_0028', 'bo_ani_100_0029']

    const crab           = ['crab_0000' , 'crab_0001' , 'crab_0002' , 'crab_0003' , 'crab_0004' , 'crab_0005' , 'crab_0006' , 'crab_0007' ]
    const ani_crab       = ['acrab_0000', 'acrab_0001', 'acrab_0002', 'acrab_0003', 'acrab_0004', 'acrab_0005', 'acrab_0006', 'acrab_0007']
    const over_crab      = ['splat_0000', 'splat_0001', 'splat_0002', 'splat_0003', 'splat_0004', 'splat_0005', 'splat_0006', 'splat_0007', 'splat_0008', 'splat_0009', 'splat_0010'  ]
    
    const prizebox       = ['prizebox_0000'    , 'prizebox_0001'    , 'prizebox_0002'    , 'prizebox_0003'    , 'prizebox_0004'    , 'prizebox_0005'    , 'prizebox_0006'    , 'prizebox_0007']
    const ani_prizebox   = ['prizebox_ani_0000', 'prizebox_ani_0001', 'prizebox_ani_0002', 'prizebox_ani_0003', 'prizebox_ani_0004', 'prizebox_ani_0005', 'prizebox_ani_0006', 'prizebox_ani_0007']

    const spin_blue      = ['spin_blue_0000'  , 'spin_blue_0001'  , 'spin_blue_0002'  , 'spin_blue_0003'  , 'spin_blue_0004'  , 'spin_blue_0005'  , 'spin_blue_0006'  , 'spin_blue_0007'  ]
    const spin_gray      = ['spin_gray_0000'  , 'spin_gray_0001'  , 'spin_gray_0002'  , 'spin_gray_0003'  , 'spin_gray_0004'  , 'spin_gray_0005'  , 'spin_gray_0006'  , 'spin_gray_0007'  ]
    const spin_green     = ['spin_green_0000' , 'spin_green_0001' , 'spin_green_0002' , 'spin_green_0003' , 'spin_green_0004' , 'spin_green_0005' , 'spin_green_0006' , 'spin_green_0007' ]
    const spin_red       = ['spin_red_0000'   , 'spin_red_0001'   , 'spin_red_0002'   , 'spin_red_0003'   , 'spin_red_0004'   , 'spin_red_0005'   , 'spin_red_0006'   , 'spin_red_0007'   ]
    const spin_yellow    = ['spin_yellow_0000', 'spin_yellow_0001', 'spin_yellow_0002', 'spin_yellow_0003', 'spin_yellow_0004', 'spin_yellow_0005', 'spin_yellow_0006', 'spin_yellow_0007']
    
    bomb.forEach(img => {
      this.load.image(img, `assets/img/Item/Bomb/${img}.png`)
    })
    ani_bomb.forEach(img => {
      this.load.image(img, `assets/img/Item/Bomb/Ani/${img}.png`)
    })

    crab.forEach(img => {
      this.load.image(img, `assets/img/Item/Crab/${img}.png`)
    })
    ani_crab.forEach(img => {
      this.load.image(img, `assets/img/Item/Crab/Ani/${img}.png`)
    })
    over_crab.forEach(img => {
      this.load.image(img, `assets/img/Item/Crab/Over/${img}.png`)
    })
    bonus_50.forEach(img => {
      this.load.image(img, `assets/img/Item/Bonus/${img}.png`)
    })
    ani_bonus_50.forEach(img => {
      this.load.image(img, `assets/img/Item/Bonus/Ani_50/${img}.png`)
    })
    bonus_100.forEach(img => {
      this.load.image(img, `assets/img/Item/Bonus/${img}.png`)
    })
    ani_bonus_100.forEach(img => {
      this.load.image(img, `assets/img/Item/Bonus/Ani_100/${img}.png`)
    })
    prizebox.forEach(img => {
      this.load.image(img, `assets/img/Item/PrizeBox/${img}.png`)
    })
    ani_prizebox.forEach(img => {
      this.load.image(img, `assets/img/Item/PrizeBox/Ani/${img}.png`)
    })
    spin_blue.forEach(img => {
      this.load.image(img, `assets/img/Item/Spin/${img}.png`)
    })
    spin_gray.forEach(img => {
      this.load.image(img, `assets/img/Item/Spin/${img}.png`)
    })
    spin_red.forEach(img => {
      this.load.image(img, `assets/img/Item/Spin/${img}.png`)
    })
    spin_yellow.forEach(img => {
      this.load.image(img, `assets/img/Item/Spin/${img}.png`)
    })
    spin_green.forEach(img => {
      this.load.image(img, `assets/img/Item/Spin/${img}.png`)
    })

    this.load.image('spin_blue_ani_0000', `assets/img/Item/Spin/Ani/spin_ani_blue_0000.png`)
    this.load.image('spin_blue_ani_0001', `assets/img/Item/Spin/Ani/spin_ani_blue_0001.png`)
    this.load.image('spin_blue_ani_0002', `assets/img/Item/Spin/Ani/spin_ani_blue_0002.png`)
    this.load.image('spin_blue_ani_0003', `assets/img/Item/Spin/Ani/spin_ani_blue_0003.png`)
    this.load.image('spin_blue_ani_0004', `assets/img/Item/Spin/Ani/spin_ani_blue_0004.png`)
    this.load.image('spin_blue_ani_0005', `assets/img/Item/Spin/Ani/spin_ani_blue_0005.png`)
    this.load.image('spin_blue_ani_0006', `assets/img/Item/Spin/Ani/spin_ani_blue_0006.png`)
    this.load.image('spin_blue_ani_0007', `assets/img/Item/Spin/Ani/spin_ani_blue_0007.png`)

    this.load.image('spin_gray_ani_0000', `assets/img/Item/Spin/Ani/spin_ani_gray_0000.png`)
    this.load.image('spin_gray_ani_0001', `assets/img/Item/Spin/Ani/spin_ani_gray_0001.png`)
    this.load.image('spin_gray_ani_0002', `assets/img/Item/Spin/Ani/spin_ani_gray_0002.png`)
    this.load.image('spin_gray_ani_0003', `assets/img/Item/Spin/Ani/spin_ani_gray_0003.png`)
    this.load.image('spin_gray_ani_0004', `assets/img/Item/Spin/Ani/spin_ani_gray_0004.png`)
    this.load.image('spin_gray_ani_0005', `assets/img/Item/Spin/Ani/spin_ani_gray_0005.png`)
    this.load.image('spin_gray_ani_0006', `assets/img/Item/Spin/Ani/spin_ani_gray_0006.png`)
    this.load.image('spin_gray_ani_0007', `assets/img/Item/Spin/Ani/spin_ani_gray_0007.png`)

    this.load.image('spin_red_ani_0000', `assets/img/Item/Spin/Ani/spin_ani_red_0000.png`)
    this.load.image('spin_red_ani_0001', `assets/img/Item/Spin/Ani/spin_ani_red_0001.png`)
    this.load.image('spin_red_ani_0002', `assets/img/Item/Spin/Ani/spin_ani_red_0002.png`)
    this.load.image('spin_red_ani_0003', `assets/img/Item/Spin/Ani/spin_ani_red_0003.png`)
    this.load.image('spin_red_ani_0004', `assets/img/Item/Spin/Ani/spin_ani_red_0004.png`)
    this.load.image('spin_red_ani_0005', `assets/img/Item/Spin/Ani/spin_ani_red_0005.png`)
    this.load.image('spin_red_ani_0006', `assets/img/Item/Spin/Ani/spin_ani_red_0006.png`)
    this.load.image('spin_red_ani_0007', `assets/img/Item/Spin/Ani/spin_ani_red_0007.png`)

    this.load.image('spin_yellow_ani_0000', `assets/img/Item/Spin/Ani/spin_ani_yell_0000.png`)
    this.load.image('spin_yellow_ani_0001', `assets/img/Item/Spin/Ani/spin_ani_yell_0001.png`)
    this.load.image('spin_yellow_ani_0002', `assets/img/Item/Spin/Ani/spin_ani_yell_0002.png`)
    this.load.image('spin_yellow_ani_0003', `assets/img/Item/Spin/Ani/spin_ani_yell_0003.png`)
    this.load.image('spin_yellow_ani_0004', `assets/img/Item/Spin/Ani/spin_ani_yell_0004.png`)
    this.load.image('spin_yellow_ani_0005', `assets/img/Item/Spin/Ani/spin_ani_yell_0005.png`)
    this.load.image('spin_yellow_ani_0006', `assets/img/Item/Spin/Ani/spin_ani_yell_0006.png`)
    this.load.image('spin_yellow_ani_0007', `assets/img/Item/Spin/Ani/spin_ani_yell_0007.png`)

    this.load.image('spin_green_ani_0000', `assets/img/Item/Spin/Ani/spin_ani_gree_0000.png`)
    this.load.image('spin_green_ani_0001', `assets/img/Item/Spin/Ani/spin_ani_gree_0001.png`)
    this.load.image('spin_green_ani_0002', `assets/img/Item/Spin/Ani/spin_ani_gree_0002.png`)
    this.load.image('spin_green_ani_0003', `assets/img/Item/Spin/Ani/spin_ani_gree_0003.png`)
    this.load.image('spin_green_ani_0004', `assets/img/Item/Spin/Ani/spin_ani_gree_0004.png`)
    this.load.image('spin_green_ani_0005', `assets/img/Item/Spin/Ani/spin_ani_gree_0005.png`)
    this.load.image('spin_green_ani_0006', `assets/img/Item/Spin/Ani/spin_ani_gree_0006.png`)
    this.load.image('spin_green_ani_0007', `assets/img/Item/Spin/Ani/spin_ani_gree_0007.png`)

    // const bonus_150      = ['bo_150_0000','bo_150_0001', 'bo_150_0002', 'bo_150_0003', 'bo_150_0004', 'bo_150_0005', 'bo_150_0006', 'bo_150_0007']
    // // const ani_bonus_150  = ['bo_ani_150_0000','bo_ani_150_0001', 'bo_ani_150_0002', 'bo_ani_150_0003', 'bo_ani_150_0004', 'bo_ani_150_0005', 'bo_ani_150_0006', 'bo_ani_150_0007', 'bo_ani_150_0008', 'bo_ani_150_0009',
    // //                       'bo_ani_150_0010','bo_ani_150_0011', 'bo_ani_150_0012', 'bo_ani_150_0013', 'bo_ani_150_0014', 'bo_ani_150_0015', 'bo_ani_150_0016', 'bo_ani_150_0017', 'bo_ani_150_0018', 'bo_ani_150_0019',
    // //                       'bo_ani_150_0020','bo_ani_150_0021', 'bo_ani_150_0022', 'bo_ani_150_0023', 'bo_ani_150_0024', 'bo_ani_150_0025', 'bo_ani_150_0026', 'bo_ani_150_0027', 'bo_ani_150_0028', 'bo_ani_150_0029']

    // const bonus_200      = ['bo_200_0000','bo_200_0001', 'bo_200_0002', 'bo_200_0003', 'bo_200_0004', 'bo_200_0005', 'bo_200_0006', 'bo_200_0007']
    // const ani_bonus_200  = ['bo_ani_200_0000','bo_ani_200_0001', 'bo_ani_200_0002', 'bo_ani_200_0003', 'bo_ani_200_0004', 'bo_ani_200_0005', 'bo_ani_200_0006', 'bo_ani_200_0007', 'bo_ani_200_0008', 'bo_ani_200_0009',
    //                       'bo_ani_200_0010','bo_ani_200_0011', 'bo_ani_200_0012', 'bo_ani_200_0013', 'bo_ani_200_0014', 'bo_ani_200_0015', 'bo_ani_200_0016', 'bo_ani_200_0017', 'bo_ani_200_0018', 'bo_ani_200_0019',
    //                       'bo_ani_200_0020','bo_ani_200_0021', 'bo_ani_200_0022', 'bo_ani_200_0023', 'bo_ani_200_0024', 'bo_ani_200_0025', 'bo_ani_200_0026', 'bo_ani_200_0027', 'bo_ani_200_0028', 'bo_ani_200_0029']

    // const bonus_300      = ['bo_300_0000','bo_300_0001', 'bo_300_0002', 'bo_300_0003', 'bo_300_0004', 'bo_300_0005', 'bo_300_0006', 'bo_300_0007']
    // const ani_bonus_300  = ['bo_ani_300_0000','bo_ani_300_0001', 'bo_ani_300_0002', 'bo_ani_300_0003', 'bo_ani_300_0004', 'bo_ani_300_0005', 'bo_ani_300_0006', 'bo_ani_300_0007', 'bo_ani_300_0008', 'bo_ani_300_0009']
    
    // const bonus_400      = ['bo_400_0000','bo_400_0001', 'bo_400_0002', 'bo_400_0003', 'bo_400_0004', 'bo_400_0005', 'bo_400_0006', 'bo_400_0007']
    // const ani_bonus_400  = ['bo_ani_400_0000','bo_ani_400_0001', 'bo_ani_400_0002', 'bo_ani_400_0003', 'bo_ani_400_0004', 'bo_ani_400_0005', 'bo_ani_400_0006', 'bo_ani_400_0007']

    // const bonus_500      = ['bo_500_0000','bo_500_0001', 'bo_500_0002', 'bo_500_0003', 'bo_500_0004', 'bo_500_0005', 'bo_500_0006', 'bo_500_0007']
    // const ani_bonus_500  = ['bo_ani_500_0000','bo_ani_500_0001', 'bo_ani_500_0002', 'bo_ani_500_0003', 'bo_ani_500_0004', 'bo_ani_500_0005', 'bo_ani_500_0006', 'bo_ani_500_0007']

    // const bonus_1000     = ['bo_1000_0000','bo_1000_0001', 'bo_1000_0002', 'bo_1000_0003', 'bo_1000_0004', 'bo_1000_0005', 'bo_1000_0006', 'bo_1000_0007']
    // const ani_bonus_1000 = ['bo_ani_1000_0000','bo_ani_1000_0001', 'bo_ani_1000_0002', 'bo_ani_1000_0003', 'bo_ani_1000_0004', 'bo_ani_1000_0005', 'bo_ani_1000_0006', 'bo_ani_1000_0007']

    // const bonus_2000     = ['bo_2000_0000','bo_2000_0001', 'bo_2000_0002', 'bo_2000_0003', 'bo_2000_0004', 'bo_2000_0005', 'bo_2000_0006', 'bo_2000_0007']
    // const ani_bonus_2000 = ['bo_ani_2000_0000','bo_ani_2000_0001', 'bo_ani_2000_0002', 'bo_ani_2000_0003', 'bo_ani_2000_0004', 'bo_ani_2000_0005', 'bo_ani_2000_0006', 'bo_ani_2000_0007']

    // const bonus_3000     = ['bo_3000_0000','bo_3000_0001', 'bo_3000_0002', 'bo_3000_0003', 'bo_3000_0004', 'bo_3000_0005', 'bo_3000_0006', 'bo_3000_0007']
    // const ani_bonus_3000 = ['bo_ani_3000_0000','bo_ani_3000_0001', 'bo_ani_3000_0002', 'bo_ani_3000_0003', 'bo_ani_3000_0004', 'bo_ani_3000_0005', 'bo_ani_3000_0006', 'bo_ani_3000_0007']
    
    // const bonus_5000     = ['bo_5000_0000','bo_5000_0001', 'bo_5000_0002', 'bo_5000_0003', 'bo_5000_0004', 'bo_5000_0005', 'bo_5000_0006', 'bo_5000_0007']
    // const ani_bonus_5000 = ['bo_ani_5000_0000','bo_ani_5000_0001', 'bo_ani_5000_0002', 'bo_ani_5000_0003', 'bo_ani_5000_0004', 'bo_ani_5000_0005', 'bo_ani_5000_0006', 'bo_ani_5000_0007', 'bo_ani_5000_0008', 'bo_ani_5000_0009']


    // bonus_150.forEach(img => {
    //   this.load.image(img, `assets/img/Item/Bonus/${img}.png`)
    // })
    // ani_bonus_150.forEach(img => {
    //   this.load.image(img, `assets/img/Item/Bonus/Ani_150/${img}.png`)
    // })
    // bonus_200.forEach(img => {
    //   this.load.image(img, `assets/img/Item/Bonus/${img}.png`)
    // })
    // ani_bonus_200.forEach(img => {
    //   this.load.image(img, `assets/img/Item/Bonus/Ani_200/${img}.png`)
    // })
    // bonus_300.forEach(img => {
    //   this.load.image(img, `assets/img/Item/Bonus/${img}.png`)
    // })
    // ani_bonus_300.forEach(img => {
    //   this.load.image(img, `assets/img/Item/Bonus/Ani_300/${img}.png`)
    // })
    // bonus_400.forEach(img => {
    //   this.load.image(img, `assets/img/Item/Bonus/${img}.png`)
    // })
    // ani_bonus_400.forEach(img => {
    //   this.load.image(img, `assets/img/Item/Bonus/Ani_400/${img}.png`)
    // })
    // bonus_500.forEach(img => {
    //   this.load.image(img, `assets/img/Item/Bonus/${img}.png`)
    // })
    // ani_bonus_500.forEach(img => {
    //   this.load.image(img, `assets/img/Item/Bonus/Ani_500/${img}.png`)
    // })
    // bonus_1000.forEach(img => {
    //   this.load.image(img, `assets/img/Item/Bonus/${img}.png`)
    // })
    // ani_bonus_1000.forEach(img => {
    //   this.load.image(img, `assets/img/Item/Spin/Ani0/${img}.png`)
    // })
    // bonus_2000.forEach(img => {
    //   this.load.image(img, `assets/img/Item/Bonus/${img}.png`)
    // })
    // ani_bonus_2000.forEach(img => {
    //   this.load.image(img, `assets/img/Item/Bonus/Ani_2000/${img}.png`)
    // })
    // bonus_3000.forEach(img => {
    //   this.load.image(img, `assets/img/Item/Bonus/${img}.png`)
    // })
    // ani_bonus_3000.forEach(img => {
    //   this.load.image(img, `assets/img/Item/Bonus/Ani_3000/${img}.png`)
    // })
    // bonus_5000.forEach(img => {
    //   this.load.image(img, `assets/img/Item/Bonus/${img}.png`)
    // })
    // ani_bonus_5000.forEach(img => {
    //   this.load.image(img, `assets/img/Item/Bonus/Ani_5000/${img}.png`)
    // })    
  }

  create() {
    this.scene.start('MainScene')
    this.scene.start('WintableScene')
    this.scene.start('StaticScene')
    /**
     * This is how you would dynamically import the mainScene class (with code splitting),
     * add the mainScene to the Scene Manager
     * and start the scene.
     * The name of the chunk would be 'mainScene.chunk.js
     * Find more about code splitting here: https://webpack.js.org/guides/code-splitting/
     */
    // let someCondition = true
    // if (someCondition)
    //   import(/* webpackChunkName: "mainScene" */ './mainScene').then(mainScene => {
    //     this.scene.add('MainScene', mainScene.default, true)
    //   })
    // else console.log('The mainScene class will not even be loaded by the browser')
  }
}
