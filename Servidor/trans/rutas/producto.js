"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controlproducto_1 = __importDefault(require("../controladores/controlproducto"));
class prodRuta {
    constructor(routes = express_1.default()) {
        this.routes = routes;
        this.verProducto();
        this.verProductoFto();
    }
    verProducto() {
        this.routes.route('/obtenerproducto').get(controlproducto_1.default.visualizarProducto);
    }
    verProductoFto() {
        this.routes.get('/producto/:usuId/:img', controlproducto_1.default.verproductoFto);
    }
    getRoutes() {
        return this.routes;
    }
}
const producto = new prodRuta();
const productoc = producto.getRoutes();
exports.default = productoc;
