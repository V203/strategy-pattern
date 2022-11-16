"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MartianSpaceship = void 0;
const LaserCanon_1 = require("./LaserCanon");
const Spaceship_1 = __importDefault(require("./Spaceship"));
class MartianSpaceship extends Spaceship_1.default {
    constructor() {
        super(new LaserCanon_1.LaserCanon());
    }
}
exports.MartianSpaceship = MartianSpaceship;
