import { fileURLToPath } from 'url';
import { dirname } from 'path';

import multer from 'multer';

/**
*
* fileURLToPath: Esta función garantiza la decodificación correcta de los caracteres codificados en porcentaje, así como una cadena de ruta absoluta válida multiplataforma.
*
*/

/**
*
* dirname: Devuelve el nombre de directorio de una ruta. Similar al comando dirname de Unix.
*
*/


// confi Ruta absoluta
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;


// TODO: Configuracion MULTER
const storage = multer.diskStorage(
    {
        // Ubicacion del directorio donde voy a guardar los archivos
        destination: function (req, file, cb) {
            cb(null, `${__dirname}/public/img`)
        },

        // Seteamos el nombre del archivo
        filename: function (req, file, cb) {
            cb(null, `${Date.now()}_${file.originalname}`)
        }
    }
)


export const uploader = multer({
    storage,
    // si se genera algun error, lo pcapturamos
    onError: function (err, next) {
        console.log(err);
        next()
    }
})

