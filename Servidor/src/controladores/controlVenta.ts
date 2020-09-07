import mventa from "../modelo/modeloVenta";
import {Request,Response,NextFunction} from 'express';

class ventaControl {
    constructor() {    }

    public async registrarVenta(req: Request, res: Response, fun: Function) {
        let datos = req.body
        let result = null
        try {
            result = await mventa.registrarVenta(datos)
            res.status(200).json({
                respuesta: true,
                resultado : result
            });
        } catch (error) {
            res.json({
                respuesta: false,
                resultado: error
            })
        }
    }
}

const ventac : ventaControl = new ventaControl();
export default ventac