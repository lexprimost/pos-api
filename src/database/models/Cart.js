// External Dependancies
import { model, Schema, Types } from "mongoose"

const cartSchema = new Schema({
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

export default model('Cart', carSchema)