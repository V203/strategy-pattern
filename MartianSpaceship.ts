import {LaserCanon} from "./LaserCanon"
import Spaceship from "./Spaceship"

export  class MartianSpaceship extends Spaceship{
    constructor() {
        super(new LaserCanon())
        
    }
}
