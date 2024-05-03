import winston from 'winston'

// configuracion 
const logger = winston.createLogger({
    // Declaramos el transport
    transports: [
        new winston.transports.Console({ level: "warn" }),
        new winston.transports.File({ filename: './erros.log', level: "http" })
    ]
})


// creamos el middlware
export const addLogger = (req, res, next) => {
    req.logger = logger

    req.logger.http(`${req.method} en ${req.url} - at ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`)

    req.logger.warn(`${req.method} en ${req.url} - at ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`)

    req.logger.debug(`${req.method} en ${req.url} - at ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`)

    next();
}

