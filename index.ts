interface Icannon {
    fireCannon():string;
    ammo:number;
    
 
}

export class LaserCannon implements Icannon{
     ammo:number
    constructor(){
         this.ammo = 2
    }
    fireCannon(): string {
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


export class PlasmerCannom implements Icannon{
    ammo:number
    constructor(){
         this.ammo = 2
    }
    fireCannon(): string {
        
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



class SpaceShip { 
    icannon:Icannon
    constructor( icannon: Icannon){
        // console.log(icannon.fireCannon());
        
        this.icannon = icannon
    }
    
    setCannon( icannon: Icannon){
        this.icannon = icannon
    }
    
    shoot(){
        return  this.icannon.fireCannon()
    }
    
    reload(){
        this.icannon.ammo  = 2
        return `Weapon reloaded, ammo: ${this.icannon.ammo}`
    }
    checkAmmo(){
        return this.icannon.ammo
    }

}

export  class MartianSpaceship extends SpaceShip{
    constructor() {
        super(new LaserCannon())
        
    }
}

export  class NeptunianShip extends SpaceShip{
    constructor(){
        super(new  PlasmerCannom())
    }
}


let martianShip = new MartianSpaceship();

let neptunianShip = new NeptunianShip()
// predatorSpaceship.setCannon(new PlasmerCannom())
// predatorSpaceship.shoot()
neptunianShip.shoot();
neptunianShip.shoot();
neptunianShip.shoot();
neptunianShip.shoot();
neptunianShip.reload();
neptunianShip.shoot();
console.log(neptunianShip.shoot());
