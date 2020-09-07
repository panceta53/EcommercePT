import compracontrol from "../controladores/controlCompra";
import Routes from 'express';


class Compra{
    constructor(private routes = Routes()) {
        this.registrarVenta()
    }

    public registrarVenta() {
        this.routes.route('/compra').post(compracontrol.registrarCompra)
    }
    
    public getRoutes()
    {
        return this.routes
    }
}

const comprarut : Compra = new Compra()
const compraR = comprarut.getRoutes()
export default compraR