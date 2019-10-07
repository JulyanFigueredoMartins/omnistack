const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    date : String,
    approved : Boolean,

    user : {
        type:mongoose.Schema.Types.ObjectId, //referencia para o usuário qeu criou o Booking
        ref: 'User' 
    },
    spot : {
        type:mongoose.Schema.Types.ObjectId, //referencia para o usuário qeu criou o Booking
        ref: 'Spot' 
    }

});//quais campos, quais tipos de campo, é o 'esquema'

module.exports = mongoose.model('Booking', BookingSchema); //mongoose.model(model, schema)