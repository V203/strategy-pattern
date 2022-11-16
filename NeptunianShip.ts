import Spaceship from "./Spaceship"
import { PlasmerCanon } from "./PlasmerCanon"

export  class NeptunianShip extends Spaceship{
    constructor(){
        super(new  PlasmerCanon())
    }
}