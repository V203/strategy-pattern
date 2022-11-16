import { MartianSpaceship } from "./MartianSpaceship";

import { NeptunianShip } from "./NeptunianShip";

import { PlasmerCanon } from "./PlasmerCanon";
import { LaserCanon } from "./LaserCanon";






let martianShip = new MartianSpaceship();
let neptunianShip = new NeptunianShip()

console.log(neptunianShip.shoot());// The NeptunianShip shoots and is left with round of ammo Plasma cannon.

console.log(martianShip.shoot());//The martianShip shoots and is left with round of Laser cannon ammo.

neptunianShip.shoot();
console.log(neptunianShip.shoot());//The NeptunianShip shoots and click click no ammo for fire

console.log(neptunianShip.reload()) //NeptunianShip reloaded;
neptunianShip.setCannon(new LaserCanon());//Neptunianship now fires with a laser canon
martianShip.setCannon(new PlasmerCanon());////MartianShip now fires with a laser canon

neptunianShip.shoot();

