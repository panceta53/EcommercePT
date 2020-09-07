import { connect } from '../database'

class compraModel {
    constructor() {  }

    public async rCompra(datos: any) {
        const conn = await connect()
        return new Promise(async (resolve,reject)=>{
            conn.query('INSERT INTO compra set ?',[datos]).then((result:object)=>{
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
const compramodel: compraModel = new compraModel();
export default compramodel