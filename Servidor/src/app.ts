import express from "express"
import {Request,Response,NextFunction,Application} from 'express'
import morgan from 'morgan'
import cors from 'cors'
import producto from './rutas/producto';
import venta from "./rutas/venta";
import compra from "./rutas/compra";
import categoria from "./rutas/categorias";



export class App
{
    private app : Application
    constructor(
        private port?: number | string
    ){
        this.app = express()
        this.middlewares()
        this.routes()
        this.settings()
    }

    public middlewares(){
        this.app.use(morgan('dev'))
        this.app.use(cors())
        this.app.use(express.json())
    }

    settings()
    {
        this.app.set('port', this.port || process.env.PORT || 5000)
    }

    routes(){
        this.app.use(producto)
        this.app.use(venta)
        this.app.use(compra)
        this.app.use(categoria)
    }
    
    async listen()
    {
       await this.app.listen(this.app.get('port'))
       console.log('servidor conectado en el puerto', this.app.get('port'))
    }
}

