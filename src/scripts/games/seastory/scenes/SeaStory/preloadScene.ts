import BasePreloadScene  from '../../../../parent/scenes/basePreloadingScene'
export default class PreloadScene extends BasePreloadScene {
  sceneGroup : string[]
  constructor() {
    super()
    this.sceneGroup            = []
  }

  preload() {   
    ///--------------------------Audio Loading----------------------------
    this.load.audio('bomb'                , `assets/seastory/sound/boom.ogg`);
    this.load.audio('bg_sound'            , `assets/seastory/sound/BGM_0000.ogg`);
    this.load.audio('spin'                , `assets/seastory/sound/SPIN.ogg`);
    this.load.audio('SOOJO'               , `assets/seastory/sound/SOOJO.ogg`);
    ///--------------------------Image Loading----------------------------
    this.load.image('background_image'    , `assets/seastory/img/back_0.png`);
    this.load.image('soojo'               , `assets/seastory/img/Soojo/soojo_x5.png`);

    //Coin Droper image loading
    this.load.image('droper'              , `assets/seastory/img/Droper/Drop_01.png`);

    //Ball image loading
    this.load.image('ball_01'             , `assets/seastory/img/WaterDrop/ball_01.png`);
    this.load.image('ball_02'             , `assets/seastory/img/WaterDrop/ball_02.png`);
    this.load.image('ball_03'             , `assets/seastory/img/WaterDrop/ball_03.png`);
    //Bonus panel  
    this.load.image('bp_left'             , `assets/seastory/img/bonusPanel/inter_blue_02.png`);
    this.load.image('bp_center'           , `assets/seastory/img/bonusPanel/inter_blue_03.png`);
    this.load.image('bp_right'            , `assets/seastory/img/bonusPanel/inter_blue_04.png`);

    //Score panel 
    this.load.image('sp_left'             , `assets/seastory/img/scorePanel/inter_blue_07.png`);
    this.load.image('sp_center'           , `assets/seastory/img/scorePanel/inter_blue_08.png`);
    this.load.image('sp_right'            , `assets/seastory/img/scorePanel/inter_blue_09.png`);

    this.load.image('under_left'          , `assets/seastory/img/underSide/inter_blue_05.png`);
    this.load.image('under_right'         , `assets/seastory/img/underSide/inter_blue_06.png`);    
    
    //Wintable image loading
    this.load.image('wintable1'           , `assets/seastory/img/WinTable/inter_wintable_0_0.png`);
    this.load.image('wintable2'           , `assets/seastory/img/WinTable/inter_wintable_3_0.png`); 

    //DangerNew
    this.load.image('dangernew'           , `assets/seastory/img/dangernew.png`);
    
    //----------------------Loading Fireworks images-------------------------------
    this.loadingImage('fireworks'         , 58, 'seastory/img/Effect/Fireworks');

    //----------------------Event images Loading
    //Loading dol images
    this.loadingImage('dol'               , 53, 'seastory/img/Event');
    //Loading event_bar images
    this.loadingImage('event_bar'         , 44, 'seastory/img/Event');
    //Loading event_seven images
    this.loadingImage('event_seven'       , 42, 'seastory/img/Event');
    //Loading eventstar1 images
    this.loadingImage('eventstar1'        , 6 , 'seastory/img/Event');

    //-----------------------Loading reel images------------------------------------
    //Reel bar image loading  
    this.loadingImage('bar'               ,  5, 'seastory/img/Reel/bar');  
    //Reel bar ani image loading
    this.loadingImage('bar_ani'           , 12, 'seastory/img/Reel/bar');

    //Reel fish1 image loading 
    this.loadingImage('fish1'             ,  5, 'seastory/img/Reel/fish1');
    //Reel fish1 ani image loading
    this.loadingImage('fish1_ani'         , 12, 'seastory/img/Reel/fish1');

    //Reel fish2 image loading 
    this.loadingImage('fish2'             ,  5, 'seastory/img/Reel/fish2');
    //Reel fish2 ani image loading
    this.loadingImage('fish2_ani'         , 12, 'seastory/img/Reel/fish2');

    //Reel fish3 image loading    
    this.loadingImage('fish3'             ,  5, 'seastory/img/Reel/fish3');
    //Reel fish3 ani image loading
    this.loadingImage('fish3_ani'         , 12, 'seastory/img/Reel/fish3');

    //Reel heama image loading    
    this.loadingImage('heama'             ,  5, 'seastory/img/Reel/heama');
    //Reel heama ani image loading
    this.loadingImage('heama_ani'         , 12, 'seastory/img/Reel/heama');

    //Reel joker image loading 
    this.loadingImage('joker'             ,  5, 'seastory/img/Reel/joker');
    //Reel joker ani image loading
    this.loadingImage('joker_ani'         , 12, 'seastory/img/Reel/joker');

    //Reel mong image loading 
    this.loadingImage('mong'              ,  5, 'seastory/img/Reel/mong');
    //Reel mong ani image loading
    this.loadingImage('mong_ani'          , 12, 'seastory/img/Reel/mong');

    //Reel seven image loading 
    this.loadingImage('seven'             ,  5, 'seastory/img/Reel/seven');
    //Reel seven ani image loading
    this.loadingImage('seven_ani'         , 12, 'seastory/img/Reel/seven');

    //Reel shellfish image loading 
    this.loadingImage('shellfish'         ,  5, 'seastory/img/Reel/shellfish');
    //Reel shellfish ani image loading
    this.loadingImage('shellfish_ani'     , 12, 'seastory/img/Reel/shellfish');

    //Reel star image loading 
    this.loadingImage('star'              ,  5, 'seastory/img/Reel/star');
    //Reel star ani image loading;
    this.loadingImage('star_ani'          , 12, 'seastory/img/Reel/star')

    //Reel target image loading 
    this.loadingImage('target'            ,  5, 'seastory/img/Reel/target');
    //Reel target ani image loading
    this.loadingImage('target_ani'        , 12, 'seastory/img/Reel/target');

    //-----------------Jellyfish images loading
    this.loadingImage('hae'               , 30, 'seastory/img/Adumbrate/Jellyfish');

    //-----------------Whale images loading
    this.loadingImage('wh_ta'             , 23, 'seastory/img/Adumbrate/Whale');

    //-----------------Shark images loading
    this.loadingImage('shark'             , 37, 'seastory/img/Adumbrate/Shark');

    //-----------------Turtle images loading
    this.loadingImage('turtle'            , 21, 'seastory/img/Adumbrate/Turtle');

    //-----------------Back fishes images loading
    for(var i=1; i<8; i++) {
      let strfishPrefix = "bfish"+i;
      this.loadingImage(strfishPrefix     , 6 , 'seastory/img/BackAni');
    }

    //-----------------Loading pin images---------------------------------------
    for(var i=1; i< 34; i++) {
      var strPinPrefix = "Pin_"+i
      this.loadingImage(strPinPrefix      , 4 , 'seastory/img/Pin');
    }

    //----------------Loading bonus images-------------------------------------- 
    //Bomb image loading 
    this.loadingImage('bomb'             ,  8 , 'seastory/img/Item/Bomb');
    //Bomb ani image loading
    this.loadingImage('abomb'            ,  8 , 'seastory/img/Item/Bomb/Ani'); 
    
    //Bonus_50 image loading 
    const bonus_50       = ['bo_50','bo_50_000', 'bo_50_0000']
    bonus_50.forEach(img => {
      this.load.image(img                ,  `assets/seastory/img/Item/Bonus/${img}.png`)
    })
    //Bonus_50 ani image loading
    this.loadingImage('bo_ani_200'       , 30 , 'seastory/img/Item/Bonus/Ani_50'); 

    //Bonus_100 image loading 
    const bonus_100      = ['bo_100','bo_100_000', 'bo_100_0000']
    bonus_100.forEach(img => {
      this.load.image(img                ,  `assets/seastory/img/Item/Bonus/${img}.png`)
    })
    //Bonus_50 ani image loading
    this.loadingImage('bo_ani_100'       , 30 , 'seastory/img/Item/Bonus/Ani_100'); 
    
    //Crab image Loading
    this.loadingImage('crab'             ,  8 , 'seastory/img/Item/Crab'); 
    this.loadingImage('acrab'            ,  8 , 'seastory/img/Item/Crab/Ani');
    this.loadingImage('splat'            , 11 , 'seastory/img/Item/Crab/Over');  

    //Prizebox image Loading
    this.loadingImage('prizebox'         ,  8 , 'seastory/img/Item/PrizeBox'); 
    this.loadingImage('prizebox_ani'     ,  8 , 'seastory/img/Item/PrizeBox/Ani');
    this.loadingImage('box'              ,  9 , 'seastory/img/Item/PrizeBox');

    //----------------------------------Spin images Loading------------------------
    //Spin_blue images Loading
    this.loadingImage('spin_blue'        ,  8 , 'seastory/img/Item/Spin')

    //Spin_gray images Loading
    this.loadingImage('spin_gray'        ,  8 , 'seastory/img/Item/Spin')

    //Spin_red images Loading
    this.loadingImage('spin_red'         ,  8 , 'seastory/img/Item/Spin')

    //Spin_yello images Loading
    this.loadingImage('spin_yellow'      ,  8 , 'seastory/img/Item/Spin')

    //Spin_gree images Loading
    this.loadingImage('spin_green'       ,  8 , 'seastory/img/Item/Spin')
    //Spin Over images Loading
    this.loadingImage('s_all'            , 15 , 'seastory/img/Item/Spin/Over')

    //WaterUp images Loading
    this.loadingImage('waterdrop2'       , 30 , 'seastory/img/WaterUp')
    
    //Submarine image loading
    this.load.image('submarine'           , `assets/seastory/img/Submarine/marine1.png`)

    //RocketUp image Loading
    this.load.image('rocketup', `assets/seastory/img/Submarine/rocketup.png`)

    //RocketDown image Loading
    this.load.image('rocket1', `assets/seastory/img/Submarine/rocket1.png`)
    this.load.image('rocket2', `assets/seastory/img/Submarine/rocket2.png`)
    this.load.image('rocket3', `assets/seastory/img/Submarine/rocket3.png`)

    this.load.image('spin_blue_ani_0000'  , `assets/seastory/img/Item/Spin/Ani/spin_ani_blue_0000.png`)
    this.load.image('spin_blue_ani_0001'  , `assets/seastory/img/Item/Spin/Ani/spin_ani_blue_0001.png`)
    this.load.image('spin_blue_ani_0002'  , `assets/seastory/img/Item/Spin/Ani/spin_ani_blue_0002.png`)
    this.load.image('spin_blue_ani_0003'  , `assets/seastory/img/Item/Spin/Ani/spin_ani_blue_0003.png`)
    this.load.image('spin_blue_ani_0004'  , `assets/seastory/img/Item/Spin/Ani/spin_ani_blue_0004.png`)
    this.load.image('spin_blue_ani_0005'  , `assets/seastory/img/Item/Spin/Ani/spin_ani_blue_0005.png`)
    this.load.image('spin_blue_ani_0006'  , `assets/seastory/img/Item/Spin/Ani/spin_ani_blue_0006.png`)
    this.load.image('spin_blue_ani_0007'  , `assets/seastory/img/Item/Spin/Ani/spin_ani_blue_0007.png`)

    this.load.image('spin_gray_ani_0000'  , `assets/seastory/img/Item/Spin/Ani/spin_ani_gray_0000.png`)
    this.load.image('spin_gray_ani_0001'  , `assets/seastory/img/Item/Spin/Ani/spin_ani_gray_0001.png`)
    this.load.image('spin_gray_ani_0002'  , `assets/seastory/img/Item/Spin/Ani/spin_ani_gray_0002.png`)
    this.load.image('spin_gray_ani_0003'  , `assets/seastory/img/Item/Spin/Ani/spin_ani_gray_0003.png`)
    this.load.image('spin_gray_ani_0004'  , `assets/seastory/img/Item/Spin/Ani/spin_ani_gray_0004.png`)
    this.load.image('spin_gray_ani_0005'  , `assets/seastory/img/Item/Spin/Ani/spin_ani_gray_0005.png`)
    this.load.image('spin_gray_ani_0006'  , `assets/seastory/img/Item/Spin/Ani/spin_ani_gray_0006.png`)
    this.load.image('spin_gray_ani_0007'  , `assets/seastory/img/Item/Spin/Ani/spin_ani_gray_0007.png`)

    this.load.image('spin_red_ani_0000'   , `assets/seastory/img/Item/Spin/Ani/spin_ani_red_0000.png`)
    this.load.image('spin_red_ani_0001'   , `assets/seastory/img/Item/Spin/Ani/spin_ani_red_0001.png`)
    this.load.image('spin_red_ani_0002'   , `assets/seastory/img/Item/Spin/Ani/spin_ani_red_0002.png`)
    this.load.image('spin_red_ani_0003'   , `assets/seastory/img/Item/Spin/Ani/spin_ani_red_0003.png`)
    this.load.image('spin_red_ani_0004'   , `assets/seastory/img/Item/Spin/Ani/spin_ani_red_0004.png`)
    this.load.image('spin_red_ani_0005'   , `assets/seastory/img/Item/Spin/Ani/spin_ani_red_0005.png`)
    this.load.image('spin_red_ani_0006'   , `assets/seastory/img/Item/Spin/Ani/spin_ani_red_0006.png`)
    this.load.image('spin_red_ani_0007'   , `assets/seastory/img/Item/Spin/Ani/spin_ani_red_0007.png`)
 
    this.load.image('spin_yellow_ani_0000', `assets/seastory/img/Item/Spin/Ani/spin_ani_yell_0000.png`)
    this.load.image('spin_yellow_ani_0001', `assets/seastory/img/Item/Spin/Ani/spin_ani_yell_0001.png`)
    this.load.image('spin_yellow_ani_0002', `assets/seastory/img/Item/Spin/Ani/spin_ani_yell_0002.png`)
    this.load.image('spin_yellow_ani_0003', `assets/seastory/img/Item/Spin/Ani/spin_ani_yell_0003.png`)
    this.load.image('spin_yellow_ani_0004', `assets/seastory/img/Item/Spin/Ani/spin_ani_yell_0004.png`)
    this.load.image('spin_yellow_ani_0005', `assets/seastory/img/Item/Spin/Ani/spin_ani_yell_0005.png`)
    this.load.image('spin_yellow_ani_0006', `assets/seastory/img/Item/Spin/Ani/spin_ani_yell_0006.png`)
    this.load.image('spin_yellow_ani_0007', `assets/seastory/img/Item/Spin/Ani/spin_ani_yell_0007.png`)

    this.load.image('spin_green_ani_0000' , `assets/seastory/img/Item/Spin/Ani/spin_ani_gree_0000.png`)
    this.load.image('spin_green_ani_0001' , `assets/seastory/img/Item/Spin/Ani/spin_ani_gree_0001.png`)
    this.load.image('spin_green_ani_0002' , `assets/seastory/img/Item/Spin/Ani/spin_ani_gree_0002.png`)
    this.load.image('spin_green_ani_0003' , `assets/seastory/img/Item/Spin/Ani/spin_ani_gree_0003.png`)
    this.load.image('spin_green_ani_0004' , `assets/seastory/img/Item/Spin/Ani/spin_ani_gree_0004.png`)
    this.load.image('spin_green_ani_0005' , `assets/seastory/img/Item/Spin/Ani/spin_ani_gree_0005.png`)
    this.load.image('spin_green_ani_0006' , `assets/seastory/img/Item/Spin/Ani/spin_ani_gree_0006.png`)
    this.load.image('spin_green_ani_0007' , `assets/seastory/img/Item/Spin/Ani/spin_ani_gree_0007.png`)
  }

  create() {
    this.sceneGroup = ['BackgroundScene', 'SeaGearScene', 'WintableScene', 'StaticScene']
    this.startScenes(this.sceneGroup)
  }
}
