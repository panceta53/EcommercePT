import categoriamodelo from '../modelo/modeloCaategoria';
import {Request,Response} from 'express';

class controlCategorias {
    constructor() {     }

    public async Categorias(req: Request, res: Response, fun: Function) {
        let result: any = null;
        try {
           result = await categoriamodelo.buscarCategoria()
           res.status(200).json({
               respuesta: true,
               resultado: result
           }) 
        } catch (error) {
            res.status(200).json({
                respuesta: false,
                resultado: error
            }) 
        }
    }
}

const categoriacontrol : controlCategorias = new controlCategorias()
export default categoriacontrol