// External Dependancies
import { model, Schema, Types } from "mongoose"

const brandSchema = new Schema({

    name: String,
    countryOfBrand: String,
    quantity: Number, //netQuantity: Number,
    logo: String,
},{
    timestamps:true
})

export default model('Brand', brandSchema)