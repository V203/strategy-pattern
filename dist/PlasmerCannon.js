"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlasmerCanon = void 0;
class PlasmerCanon {
    constructor() {
        this.ammo = 2;
    }
    fireCanon() {
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
exports.PlasmerCanon = PlasmerCanon;
