import { connect } from '../database'


class modeloCategoria
{
    constructor() {  }

    public async buscarCategoria() {
        const conn = await connect()
        return new Promise(async (resolve, reject) => {
            conn.query(`SELECT * FROM categorias`,(error: any,result :any)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(result)
                }
            })
        })
    }

}
const categoriamodelo: modeloCategoria = new modeloCategoria()
export default categoriamodelo