const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ProductShema = Schema({
    nombre: String,
    imagen: String,
    precio: { type: Number, default: 0 },
    categoria: { type: String, enum: ['computacion', 'telefonia', 'accesorios'] },
    descripcion: String
})

module.exports = mongoose.model('Producto', ProductShema)