import PinSingle from './pinSingle'

export default class PinGroup extends Phaser.GameObjects.Group {
    pinPosY: number[]
    pinPosX: number[]
    constructor(scene: Phaser.Scene, texture: String[]) {
        super(scene)
        this.pinPosX = [45, 98, 151, 205, 259, 313, 367, 73, 125, 178, 232, 286, 340, 45, 98, 151, 205, 259, 313, 367,
                        73, 125, 178, 232, 286, 340, 45, 98, 151, 205, 259, 313, 367];
        this.pinPosY = [85, 85, 85, 85, 85, 85, 85, 114, 114, 114, 114, 114, 114, 143, 143, 143, 143, 143, 143, 143, 172, 172, 172,
            172, 172, 172, 201, 201, 201, 201, 201, 201, 201];

        var j = 0;
        for(var i=0; i< texture.length; i+=4) {            
            var x = this.pinPosX[j]
            var y = this.pinPosY[j]
            j++;
            var pin = new PinSingle(scene, x, y, texture[i].toString())
            this.add(pin)
        }
    }
}