import Routes from 'express';
import productocontrol from '../controladores/controlproducto';

class prodRuta
{
    constructor(private routes = Routes()) {
        this.verProducto()
        this.verProductoFto()
    }

    public verProducto(){
        this.routes.route('/obtenerproducto').get(productocontrol.visualizarProducto)
    }

    public verProductoFto() 
    {
        this.routes.get('/producto/:usuId/:img',productocontrol.verproductoFto)
    }

    public getRoutes()
    {
        return this.routes
    }
}

const producto : prodRuta = new prodRuta()
const productoc = producto.getRoutes()
export default productoc