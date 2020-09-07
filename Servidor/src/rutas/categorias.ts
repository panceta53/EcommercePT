import Routes from 'express';
import categoriacontrol from '../controladores/controlCategorias';

class Categorias{
    constructor(private router = Routes()) {
        this.verCategorias()
    }

    public verCategorias() {
        return this.router.route('/categorias').get(categoriacontrol.Categorias)
    }

    public getRoutes()
    {
        return this.router
    }
}

const categoriaruta : Categorias = new Categorias();
const categorias = categoriaruta.getRoutes()
export default categorias