"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NeptunianShip = exports.MartianSpaceship = exports.PlasmerCannom = exports.LaserCannon = void 0;
class LaserCannon {
    constructor() {
        this.ammo = 2;
    }
    fireCannon() {
        // this.ammo--
        if (this.ammo === 0) {
            return `Click Click Click \n \t Reload, ammo: ${this.ammo}!`;
        }
        else {
            this.ammo--;
            return `Laser cannon fired: ${this.ammo} shots left\n \tZooooom Zooooom!`;
        }
    }
    reload() {
        this.ammo = 2;
        return `Weapon reloaded, ammo: ${this.ammo}`;
    }
}
exports.LaserCannon = LaserCannon;
class PlasmerCannom {
    constructor() {
        this.ammo = 2;
    }
    fireCannon() {
        if (this.ammo === 0) {
            return `Click Click Click \n \t Reload, ammo: ${this.ammo}!`;
        }
        else {
            this.ammo--;
            return `Plasmer cannon fired: ${this.ammo} shots left\n \tBweeeahhm Bweeeahhm!`;
        }
    }
    reload() {
        this.ammo = 2;
        return `Weapon reloaded, ammo: ${this.ammo}`;
    }
}
exports.PlasmerCannom = PlasmerCannom;
class SpaceShip {
    constructor(icannon) {
        // console.log(icannon.fireCannon());
        this.icannon = icannon;
    }
    setCannon(icannon) {
        this.icannon = icannon;
    }
    shoot() {
        return this.icannon.fireCannon();
    }
    reload() {
        this.icannon.ammo = 2;
        return `Weapon reloaded, ammo: ${this.icannon.ammo}`;
    }
    checkAmmo() {
        return this.icannon.ammo;
    }
}
class MartianSpaceship extends SpaceShip {
    constructor() {
        super(new LaserCannon());
    }
}
exports.MartianSpaceship = MartianSpaceship;
class NeptunianShip extends SpaceShip {
    constructor() {
        super(new PlasmerCannom());
    }
}
exports.NeptunianShip = NeptunianShip;
let martianShip = new MartianSpaceship();
let neptunianShip = new NeptunianShip();
// predatorSpaceship.setCannon(new PlasmerCannom())
// predatorSpaceship.shoot()
neptunianShip.shoot();
neptunianShip.shoot();
neptunianShip.shoot();
neptunianShip.shoot();
neptunianShip.reload();
neptunianShip.shoot();
console.log(neptunianShip.shoot());
