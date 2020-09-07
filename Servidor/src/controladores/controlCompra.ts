import modeloCompra from "../modelo/modeloCompra";
import {Request,Response,NextFunction} from 'express';

class controlCompra {
    constructor() {  }

    public async registrarCompra(req: Request, res: Response, fun:Function) {
        let datos = req.body
        let result = null
        try {
            result = await modeloCompra.rCompra(datos)
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

const compracontrol : controlCompra = new controlCompra()
export default compracontrol