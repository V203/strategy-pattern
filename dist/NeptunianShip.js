"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NeptunianShip = void 0;
const Spaceship_1 = __importDefault(require("./Spaceship"));
const PlasmerCanon_1 = require("./PlasmerCanon");
class NeptunianShip extends Spaceship_1.default {
    constructor() {
        super(new PlasmerCanon_1.PlasmerCanon());
    }
}
exports.NeptunianShip = NeptunianShip;
