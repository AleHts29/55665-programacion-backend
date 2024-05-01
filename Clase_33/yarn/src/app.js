import express from 'express';
import config from './config/config.js';

import usersRouter from './routers/users.router.js'

const app = express();

//JSON settings:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Declaramos router
app.use("/api/users", usersRouter)

const SERVER_PORT = config.port
app.listen(SERVER_PORT, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
})
