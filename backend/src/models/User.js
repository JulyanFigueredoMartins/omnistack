//quais campos vai ter no usuario

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: String,
});//quais campos, quais tipos de campo, é o 'esquema'

module.exports = mongoose.model('User', UserSchema); //mongoose.model(model, schema)