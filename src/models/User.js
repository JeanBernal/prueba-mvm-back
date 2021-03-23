const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    nombre: String,
    apellido: String,
    email: String,
    telefono: Number
})

module.exports = mongoose.model('users', UserSchema)