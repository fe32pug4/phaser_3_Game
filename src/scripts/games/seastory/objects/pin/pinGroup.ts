import PinSingle from './pinSingle'

export default class PinGroup extends Phaser.GameObjects.Group {
    pinPosY: number[]
    pinPosX: number[]
    constructor(scene: Phaser.Scene, texture: String[]) {
        super(scene)
        this.pinPosX = [53, 105, 157, 209, 261, 313, 365, 79, 131, 183, 235, 287, 339, 53, 105, 157, 209, 261, 313, 365,
                        79, 131, 183, 235, 287, 339, 53, 105, 157, 209, 261, 313, 365]
        this.pinPosY = [93, 93, 93, 93, 93, 93, 93, 118, 118, 118, 118, 118, 118, 143, 143, 143, 143, 143, 143, 143, 168, 168, 168,
            168, 168, 168, 195, 195, 195, 195, 195, 195, 195]

        // this.pinPosX = [53, 153, 257, 359, 459, 559, 659, 103, 203, 303, 404, 505, 605, 53,
        //     53, 153, 257, 359, 459, 559, 659, 103, 203, 303, 404, 505, 605, 53, 53, 153, 257, 359, 459, 559, 659]
        // this.pinPosY = [93, 93, 93, 93, 93, 93, 93, 193, 193, 193, 193, 193, 193, 293, 293, 293, 293, 293, 293, 293, 393, 393, 393,
        //     393, 393, 393, 494, 494, 494, 494, 494, 494, 494]

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