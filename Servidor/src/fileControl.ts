
import path from 'path'
import fs from 'fs'

export default class FileSystem {
    constructor() {}

    public getFotoUrl(usId: string, usIm: string) {
        const foto = path.resolve(__dirname,'../trans/fotos',usId,usIm)
        console.log(foto)
        const existe = fs.existsSync(foto)

        if(!existe) {
            return path.resolve(__dirname,'../trans/fotos/default/default.png')
        }
        
        return foto
    }

}