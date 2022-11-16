import  Icanon  from "./Icanon" 

export class LaserCanon implements Icanon{
     ammo:number
    constructor(){
         this.ammo = 2
    }
    fireCanon(): string {
        // this.ammo--

        if(this.ammo === 0){
          return  `Click Click Click \n \t Reload, ammo: ${this.ammo}!`
        }else{
            this.ammo--
          return  `Laser cannon fired: ${this.ammo} shots left\n \tZooooom Zooooom!`
        }
       
    }
    reload():string{
        this.ammo = 2;
        return `Weapon reloaded, ammo: ${this.ammo}`
    }

 
}