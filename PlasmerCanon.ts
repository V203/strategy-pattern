import  Icanon  from "./Icanon" 

export class PlasmerCanon implements Icanon{
    ammo:number
    constructor(){
         this.ammo = 2
    }
    fireCanon(): string {
        
        if(this.ammo === 0){
            return `Click Click Click \n \t Reload, ammo: ${this.ammo}!`
        }else{
            this.ammo--
            return `Plasmer cannon fired: ${this.ammo} shots left\n \tBweeeahhm Bweeeahhm!`
        }
        
    }

    reload():string{
        this.ammo = 2;
        return `Weapon reloaded, ammo: ${this.ammo}`
    }

}