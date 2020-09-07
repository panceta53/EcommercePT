"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controlCategorias_1 = __importDefault(require("../controladores/controlCategorias"));
class Categorias {
    constructor(router = express_1.default()) {
        this.router = router;
        this.verCategorias();
    }
    verCategorias() {
        return this.router.route('/categorias').get(controlCategorias_1.default.Categorias);
    }
    getRoutes() {
        return this.router;
    }
}
const categoriaruta = new Categorias();
const categorias = categoriaruta.getRoutes();
exports.default = categorias;
