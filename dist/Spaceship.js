"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Spaceship {
    constructor(icanon) {
        // console.log(icannon.fireCannon());
        this.icanon = icanon;
    }
    setCannon(icanon) {
        this.icanon = icanon;
    }
    shoot() {
        return this.icanon.fireCanon();
    }
    reload() {
        this.icanon.ammo = 2;
        return `Weapon reloaded, ammo: ${this.icanon.ammo}`;
    }
    checkAmmo() {
        return this.icanon.ammo;
    }
}
exports.default = Spaceship;
