"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MartianSpaceship_1 = require("./MartianSpaceship");
const NeptunianShip_1 = require("./NeptunianShip");
const PlasmerCanon_1 = require("./PlasmerCanon");
const LaserCanon_1 = require("./LaserCanon");
let martianShip = new MartianSpaceship_1.MartianSpaceship();
let neptunianShip = new NeptunianShip_1.NeptunianShip();
console.log(neptunianShip.shoot()); // The NeptunianShip shoots and is left with round of ammo Plasma cannon.
console.log(martianShip.shoot()); //The martianShip shoots and is left with round of Laser cannon ammo.
neptunianShip.shoot();
console.log(neptunianShip.shoot()); //The NeptunianShip shoots and click click no ammo for fire
console.log(neptunianShip.reload()); //NeptunianShip reloaded;
neptunianShip.setCannon(new LaserCanon_1.LaserCanon()); //Neptunianship now fires with a laser canon
martianShip.setCannon(new PlasmerCanon_1.PlasmerCanon()); ////MartianShip now fires with a laser canon
neptunianShip.shoot();
