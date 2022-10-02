const express = require('express');
const useragent = require('express-useragent');
const path = require('path');
const message = require('./routes/message')
let hola = 1;
const ENV = process.env.NODE_ENV;
const PORT = process.env.NODE_PORT;

const app = express();
/* Middleware a nivel de aplicacion */

app.use((req, res, next) => {
    console.log("hola", hola)
    hola++
    next();
})

/* Middleware incorporados */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/* Middleware de manejo de errores */
app.use(function (err, req, res, next) {
    console.log(err.stack)
    res.status(500).send('Algo salio mal!')
})
app.get('/', (err, req, res, next) => {
    console.log("estoy conectado a react")
    res.status(200).send('Algo salio mal!')
})
/* Middleware de terceros */
app.use(useragent.express())

app.use('/api', message)

/* Escuchamos server */
const server = app.listen(PORT, () => {
    console.log(`servidor express escuchando en el puerto ${server.address().port}`)
})
server.on("error", (error) => console.log(`Error en el servidor: ${error}`));
