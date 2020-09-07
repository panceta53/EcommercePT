"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
class FileSystem {
    constructor() { }
    getFotoUrl(usId, usIm) {
        const foto = path_1.default.resolve(__dirname, '../trans/fotos', usId, usIm);
        console.log(foto);
        const existe = fs_1.default.existsSync(foto);
        if (!existe) {
            return path_1.default.resolve(__dirname, '../trans/fotos/default/default.png');
        }
        return foto;
    }
}
exports.default = FileSystem;
