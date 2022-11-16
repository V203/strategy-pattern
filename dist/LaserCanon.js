"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaserCanon = void 0;
class LaserCanon {
    constructor() {
        this.ammo = 2;
    }
    fireCanon() {
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
exports.LaserCanon = LaserCanon;
