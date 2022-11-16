"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const MartianSpaceship_1 = require("../MartianSpaceship");
const NeptunianShip_1 = require("../NeptunianShip");
const LaserCanon_1 = require("../LaserCanon");
const PlasmerCanon_1 = require("../PlasmerCanon");
describe('Space firing simulation', function () {
    it('The martian space ship should default to a laser cannon', function () {
        let theMartians = new MartianSpaceship_1.MartianSpaceship();
        let actual = theMartians.shoot();
        let expected = "Laser cannon fired: 1 shots left\n \tZooooom Zooooom!";
        assert_1.default.equal(actual, expected);
    });
    it('The Neptunian spaceship should default to a plasma cannon', function () {
        let neptunianShip = new NeptunianShip_1.NeptunianShip();
        let actual = neptunianShip.shoot();
        let expected = "Plasmer cannon fired: 1 shots left\n \tBweeeahhm Bweeeahhm!";
        assert_1.default.equal(actual, expected);
    });
    it("Neptunian spaceship should switch cannons from plasmer to laser and fire with laser cannon.", () => {
        let neptunianShip = new NeptunianShip_1.NeptunianShip();
        neptunianShip.setCannon(new LaserCanon_1.LaserCanon());
        let actual = neptunianShip.shoot();
        let expected = "Laser cannon fired: 1 shots left\n \tZooooom Zooooom!";
        assert_1.default.equal(actual, expected);
    });
    it("Martian spaceship should switch cannons from laser to plasmer and fire with laser cannon.", () => {
        let neptunianShip = new NeptunianShip_1.NeptunianShip();
        neptunianShip.setCannon(new PlasmerCanon_1.PlasmerCanon());
        let actual = neptunianShip.shoot();
        let expected = "Plasmer cannon fired: 1 shots left\n \tBweeeahhm Bweeeahhm!";
        assert_1.default.equal(actual, expected);
    });
    it("Three firing attempts should be made by the spacecraft, with a warning to the space commander to reload after the third attempt.", () => {
        let neptunianShip = new NeptunianShip_1.NeptunianShip();
        neptunianShip.shoot();
        neptunianShip.shoot();
        let actual = neptunianShip.shoot();
        let expected = `Click Click Click \n \t Reload, ammo: ${0}!`;
        assert_1.default.equal(actual, expected);
    });
    it("The spaceship should fire twice and reload and the method check amm should return the value of 2 .", () => {
        let neptunianShip = new NeptunianShip_1.NeptunianShip();
        neptunianShip.shoot();
        neptunianShip.shoot();
        neptunianShip.reload();
        let actual = neptunianShip.checkAmmo();
        let expected = 2;
        assert_1.default.equal(actual, expected);
    });
    it('The martian space ship fire once and checkAmmo method return 1', function () {
        let theMartians = new MartianSpaceship_1.MartianSpaceship();
        theMartians.shoot();
        let actual = theMartians.checkAmmo();
        let expected = 1;
        assert_1.default.equal(actual, expected);
    });
});
