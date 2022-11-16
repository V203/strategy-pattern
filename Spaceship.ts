import Icanon from "./Icanon"


export default class Spaceship { 
    icanon:Icanon
    constructor( icanon: Icanon){
        // console.log(icannon.fireCannon());
        
        this.icanon = icanon
    }
    
    setCannon( icanon: Icanon){
        this.icanon = icanon
    }
    
    shoot(){
        return  this.icanon.fireCanon()
    }
    
    reload(){
        this.icanon.ammo  = 2
        return `Weapon reloaded, ammo: ${this.icanon.ammo}`
    }
    checkAmmo(){
        return this.icanon.ammo
    }

}