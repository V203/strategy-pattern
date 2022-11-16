import assert from 'assert';

import  {MartianSpaceship} from "../MartianSpaceship";
import { NeptunianShip } from "../NeptunianShip";
import {  LaserCanon  } from "../LaserCanon"
import  { PlasmerCanon }  from '../PlasmerCanon'; 

describe('Space firing simulation', function () {
    it('The martian space ship should default to a laser cannon', function () {

        let theMartians = new MartianSpaceship();

        let actual = theMartians.shoot();
        let expected = "Laser cannon fired: 1 shots left\n \tZooooom Zooooom!";

        assert.equal(actual, expected);

    });


    it('The Neptunian spaceship should default to a plasma cannon', function () {

        let neptunianShip = new NeptunianShip();

        let actual = neptunianShip.shoot();
        let expected = "Plasmer cannon fired: 1 shots left\n \tBweeeahhm Bweeeahhm!";

        assert.equal(actual, expected);
    });

    it("Neptunian spaceship should switch cannons from plasmer to laser and fire with laser cannon.", () => {

        let neptunianShip = new NeptunianShip()

        neptunianShip.setCannon(new LaserCanon())
        let actual = neptunianShip.shoot();

        let expected = "Laser cannon fired: 1 shots left\n \tZooooom Zooooom!"
        assert.equal(actual, expected);


    });

    it("Martian spaceship should switch cannons from laser to plasmer and fire with laser cannon.", () => {
        let neptunianShip = new NeptunianShip();

        neptunianShip.setCannon(new PlasmerCanon());

        let actual = neptunianShip.shoot();    
        let expected = "Plasmer cannon fired: 1 shots left\n \tBweeeahhm Bweeeahhm!";

        assert.equal(actual, expected);
    });

    it("Three firing attempts should be made by the spacecraft, with a warning to the space commander to reload after the third attempt.",()=>{
        let neptunianShip = new NeptunianShip();

        neptunianShip.shoot();
        neptunianShip.shoot();

        let actual = neptunianShip.shoot();
        let expected = `Click Click Click \n \t Reload, ammo: ${0}!`

        assert.equal(actual, expected);
        

    });

    it("The spaceship should fire twice and reload and the method check amm should return the value of 2 .",()=>{
        let neptunianShip = new NeptunianShip();

        neptunianShip.shoot();
        neptunianShip.shoot();
        neptunianShip.reload();

        let actual = neptunianShip.checkAmmo();
        let expected = 2;

        assert.equal(actual, expected);
        
    });

    it('The martian space ship fire once and checkAmmo method return 1', function () {
        let theMartians = new MartianSpaceship()

        theMartians.shoot();

        let actual = theMartians.checkAmmo();
        let expected = 1;

        assert.equal(actual, expected);
    });
});
