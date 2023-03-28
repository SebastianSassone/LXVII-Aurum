const mongoose = require('mongoose')

const Usuario = mongoose.Schema({
    nombre:{
        type: String,
        require: true,
    },  
    apellido:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    contraseña1:{
        type: String,
        require: true,
    },
    contraseña2:{
        type: String,
        require: true,
    },
    usuario_id:{
        type:Number,
        require: true
    }
})

module.exports = mongoose.model('Cuenta', Usuario)