// External Dependancies
const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    status: String,
    brand: String,
    price: String,
    age: Number,
    services: {
        type: Map,
        of: String
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Cart', carSchema)