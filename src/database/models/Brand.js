// External Dependancies
const mongoose = require('mongoose')


const brandSchema = new mongoose.Schema({

    name: String,
    countryOfBrand: String,
    quantity: Number, //netQuantity: Number,
    logo: String,
},{
    timestamps:true
})

module.exports = mongoose.model('Brand', brandSchema)