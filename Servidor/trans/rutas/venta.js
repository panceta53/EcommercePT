"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controlVenta_1 = __importDefault(require("../controladores/controlVenta"));
class ventaRuta {
    constructor(router = express_1.default()) {
        this.router = router;
        this.registrarVenta();
    }
    registrarVenta() {
        this.router.route('/venta').post(controlVenta_1.default.registrarVenta);
    }
    getRoutes() {
        return this.router;
    }
}
const venta = new ventaRuta();
const ventaRes = venta.getRoutes();
exports.default = ventaRes;
