const app = require('./app')
const mongoose = require('mongoose')
const { db, port } = require('./config')

mongoose.set('useCreateIndex', true)
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {

    if (err) {
        return console.log(`Error al conectarce a la base de datos :${err}`)
    }
    console.log('Conexion con la base de datos Exitosa!!')
    app.listen(port, () => {
        console.log(`Servidor corriendo en http://localhost:${port}`)
    });

})

