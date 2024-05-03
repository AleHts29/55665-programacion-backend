import winston from 'winston'
import config from './config.js'




// Seteo de opciones
const customLevelsOptions = {
    levels: {
        fatal: 0,
        error: 1,
        warning: 2,
        http: 3,
        info: 4,
        debug: 5,
    },
    colors: {
        fatal: 'red',
        error: 'yellow',
        warning: 'magenta',
        http: 'cyan',
        info: 'blue',
        debug: 'grey',
    }
}


winston.addColors(customLevelsOptions.colors)

// *orange no existe, estos son los disponibles: Font foreground colors: `black`, `red`, `green`, `yellow`, `blue`, `magenta`,`cyan`, `white`, `gray`, `grey`.
// configuracion 
const devLogger = winston.createLogger({
    levels: customLevelsOptions.levels,
    // Declaramos el transport
    transports: [
        new winston.transports.Console(
            {
                level: "info",
                format: winston.format.combine(
                    winston.format.colorize({ colors: customLevelsOptions.colors }),
                    winston.format.simple()
                )
            }
        ),
        new winston.transports.File(
            {
                filename: './erros.log',
                level: "warning",
                format: winston.format.simple()
            }
        )
    ]
})




const prodLogger = winston.createLogger({
    levels: customLevelsOptions.levels,
    // Declaramos el transport
    transports: [
        new winston.transports.Console({ level: "warning" }),
        new winston.transports.File({ filename: './erros.log', level: "http" })
    ]
})


// creamos el middlware
export const addLogger = (req, res, next) => {


    if (config.environment === "production") {
        req.logger = prodLogger;

        req.logger.http(`${req.method} en ${req.url} - at ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`)
        req.logger.warning(`${req.method} en ${req.url} - at ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`)
        req.logger.debug(`${req.method} en ${req.url} - at ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`)


    } else {
        req.logger = devLogger;

        req.logger.http(`${req.method} en ${req.url} - at ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`)
        req.logger.warning(`${req.method} en ${req.url} - at ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`)
        req.logger.debug(`${req.method} en ${req.url} - at ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`)
    }
    next();
}

