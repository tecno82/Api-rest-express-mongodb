const Producto = require('../models/productos')

function getProducto(req, res) {
    let productId = req.params.productId

    Producto.findById(productId, (err, producto) => {
        if (err) return res.status(500).send({ message: `Error al realizar la consulta:${err}` })
        if (!producto) return res.status(404).send({ message: 'El producto no Existe' })

        res.status(200).send({ producto })

    })

}
function getProductos(req, res) {
    // Lista todos pruductos de la bd.
    Producto.find({}, (err, producto) => {
        if (err) return res.status(500).send({ message: `Error al realizar la consulta:${err}` })
        if (!producto) return res.status(404).send({ message: 'No existen Productos' })

        res.status(200).send({ producto })
    })
}
function updateProducto(req, res) {
    //Actualiza un producto especifico.
    let productId = req.params.productId
    let nuevo = req.body

    Producto.findByIdAndUpdate(productId, nuevo, (err, producto) => {
        if (err) res.status(500).send({ messge: `Error al actualizar el producto:${err}` })

        res.status(200).send({ producto })
    })

}
function nuevoProducto(req, res) {
    // Agrega nuevos productos
    console.log(req.body)

    let producto = new Producto()
    producto.nombre = req.body.nombre
    producto.imagen = req.body.imagen
    producto.precio = req.body.precio
    producto.categoria = req.body.categoria
    producto.descripcion = req.body.descripcion

    producto.save((err, productoGuardado) => {
        if (err) res.status(500).send({ messge: `Error al guardar en la base de datos:${err}` })
        res.status(200).send({ producto: productoGuardado })
    })

}
function deleteProducto(req, res) {
    //Elimina un producto.
    let productId = req.params.productId
    Producto.findById(productId, (err, producto) => {
        if (err) res.status(500).send({ messge: `Error al eliminar el producto:${err}` })
        producto.remove(err => {
            if (err) res.status(500).send({ messge: `Error al eliminar el producto:${err}` })
            res.status(200).send({ message: 'El producto a sido eliminado' })
        })

    })

}

module.exports = {
    getProducto,
    getProductos,
    updateProducto,
    nuevoProducto,
    deleteProducto
}