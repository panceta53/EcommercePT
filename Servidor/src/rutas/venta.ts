import Routes from 'express';
import ventac from '../controladores/controlVenta';

class ventaRuta {
    constructor(private router= Routes()) {
        this.registrarVenta()
    }

    public registrarVenta() {
        this.router.route('/venta').post(ventac.registrarVenta)
    }

    public getRoutes()
    {
        return this.router
    }
}

const venta: ventaRuta = new ventaRuta()
const ventaRes = venta.getRoutes()
export default ventaRes