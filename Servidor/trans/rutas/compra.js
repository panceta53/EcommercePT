"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controlCompra_1 = __importDefault(require("../controladores/controlCompra"));
const express_1 = __importDefault(require("express"));
class Compra {
    constructor(routes = express_1.default()) {
        this.routes = routes;
        this.registrarVenta();
    }
    registrarVenta() {
        this.routes.route('/compra').post(controlCompra_1.default.registrarCompra);
    }
    getRoutes() {
        return this.routes;
    }
}
const comprarut = new Compra();
const compraR = comprarut.getRoutes();
exports.default = compraR;
