const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    usuario: {
        type: String,
        required: true,
        max: 100,
        unique:true
    },
    pass: {
        type: String,
        required: true,
        max: 128
    },
})

module.exports = mongoose.model('Usuarios', UsuarioSchema);