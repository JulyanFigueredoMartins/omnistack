//quais campos vai ter no usuario

const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    thumbnail : String,
    company : String,
    price : Number,
    techs : [String],
    user : {
        type:mongoose.Schema.Types.ObjectId, //referencia para o usuário qeu criou o spot
        ref: 'User' 
    }
},{
    toJSON: {
        virtuals: true,
    },
});//quais campos, quais tipos de campo, é o 'esquema'

SpotSchema.virtual('thumbnail_url').get(function(){
    return `http://192.168.56.1:3333/files/${this.thumbnail}`
})

module.exports = mongoose.model('Spot', SpotSchema); //mongoose.model(model, schema)