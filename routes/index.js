const { Router } = require('express')
const api = Router()
const auth = require('../middlewares/auth')
const ProductoCtrl = require('../controllers/productos')
const userCtrl = require('../controllers/user')


api.get('/product', ProductoCtrl.getProductos)
api.get('/product/:productId', ProductoCtrl.nuevoProducto)
api.post('/product', ProductoCtrl.nuevoProducto)
api.put('/product/:productId', ProductoCtrl.updateProducto)
api.delete('/product/:productId', ProductoCtrl.deleteProducto)
api.post('/signup', userCtrl.SignUp)
api.post('/signin', userCtrl.signIn)
api.get('/private', auth, (req, res) => {
    res.status(200).send({ message: 'Tienes Acceso' })

})

module.exports = api