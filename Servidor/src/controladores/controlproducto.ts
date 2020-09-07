import productomodelo from '../modelo/productoModelo';
import {Request,Response,NextFunction} from 'express';
import fileControl from '../fileControl';

class productoControl {
    constructor() { }

    public async visualizarProducto(req : Request, res : Response, fun : Function) {
        let result = null;
        try {
            result = await productomodelo.Productos()
            res.status(200).json({
                res : result
            })
        } catch (error) {
            res.status(200).json(error)
        }
    }

    public async verproductoFto(req : any, res : Response, fun : Function) {
        const usId = req.params.usuId
        const usIm = req.params.img

        console.log(usId)
        console.log(usIm)

        const fyleSystem : fileControl = new fileControl();
        const pathFoto = fyleSystem.getFotoUrl(usId, usIm)

        res.sendFile(pathFoto)
    }
}

const productocontrol: productoControl = new productoControl()
export default productocontrol