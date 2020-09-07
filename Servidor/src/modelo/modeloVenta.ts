import { connect } from '../database'

class ventaModelo {
    constructor() {  }

    public async registrarVenta(datos:any) {
        const conn = await connect()
        return new Promise(async (resolve,reject)=>{
            conn.query('INSERT INTO venta set ?',[datos]).then((result:object)=>{
                resolve ({
                    resultado:true,
                    respuesta:result
                })
            }, (error: any)=>{
                reject({
                    resultado:false,
                    respuesta:error
                })
            })
        })
    }
}

const modeloventa :ventaModelo = new ventaModelo();
export default modeloventa