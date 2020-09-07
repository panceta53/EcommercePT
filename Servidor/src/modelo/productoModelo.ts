import { connect } from '../database'

class productoModelo
{
    constructor() {}

    public async Productos() {
        const conn = await connect()
        return new Promise(async (resolve, reject) => {
            conn.query(`SELECT * FROM productos`,(error: any,result :any)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(result)
                }
            })
        })
    }

}

const productoModel: productoModelo = new productoModelo()
export default productoModel