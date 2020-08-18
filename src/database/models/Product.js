// External Dependancies
import { model, Schema, Types, plugin } from "mongoose"
 
import slug from "mongoose-slug-generator";

 plugin(slug);

import {Attachment} from "./Attachment"


const attributes = new Schema({
    slug: String,
    name: String, //color //size
    value: [String] //blue, red, black- xl , xs
})
const variant = new  Schema({
    sku: String, //shirt_red_xl
    productId: {
        type: Types.ObjectId,//references the main product
        ref: 'Product'
    },
    attributes: [attributes],// [{color:'red"},{size:'xl'}]
    thumbnail: String,
    description: String,
    price: Number
})
const productSchema = new Schema({
    sku: String,
    barcode: Number, 
    slug: { type: String, slug: ["name"], unique: true },
    name: String,
    description: String,
    brand_id: {
        type:  Types.ObjectId,
        ref: 'Brand'
    },
    productTypeName: String, //T-shirt
    descriptiveLenght: [String],
    customerGroup: [String], //"Men, "Women","Boys"
    gallery:[
        {
            type: Types.ObjectId,
            ref: 'Attachment'
        }
    ],
    imgGallery: [String],
    productImageUrl: String,
    tags: [String],
    ageGender: String, //"Younger childBoy"
    countryOfProduction: String,
    price: Number,
    quantity: Number, //netQuantity: Number,
    categories: [{
        type: Types.ObjectId,
        ref: 'Category'
    }],
    mainCategory: String,
    color: String,
    colorDescription: String,
    inStock: Boolean,
    productUrl: String,
    styles: [String],//designer, casual
    newProduct: {
        type: Boolean,
        default: false
    },
    newArrival: {
        type: Boolean,
        default: false
    }, //newArrival: true,
    variantsList: [variant], //taille
    selectedColor: String,

}, {
    timestamps: true,
    toObject: {
        transform: (doc, ret, options) => {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
            return ret;
        }
    }
})

export default model('Product', productSchema)