const mongoose = require('mongoose')
const User = require('../models/usuario')
const service = require('../services')

function SignUp(req, res) {
    const user = new User({
        email: req.body.email,
        dispalyName: req.body.dispalyName
    })
    console.log(user)
    user.save((err) => {
        if (err) res.status(500).send({ messge: `Error al crear el usuario :${err}` })
        res.status(200).send({ token: service.createToken(user) })
    })

}

function signIn() {
    User.find({email:req.body.email}, (err, user)=>{
        if(err) return res.status(500).send({messge:err})
        if(!user) return res.status(404).send({message:'No existe el usuario'})

        req.user = user
        res.status(200).send({
            message:'Te has logeado correctamente',
            token:service.createToken(user)
        })
    })

}

module.exports = {
    signIn,
    SignUp
}