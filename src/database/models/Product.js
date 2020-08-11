// External Dependancies
const mongoose = require('mongoose')
const variant = new mongoose.Schema({
    code: String,
    width: String,
    length: String,
    size: {
        sizeCode: Map,
        name: String
    }
});
const productSchema = new mongoose.Schema({
    sku: String,
    barcode: Number,
    name: String,
    description: String,
    brand_id: mongoose.Schema.Types.ObjectId,
    productTypeName: String, //T-shirt
    descriptiveLenght: [String],
    customerGroup: [String], //"Men, "Women","Boys"
    imgGallery: [String],
    imgUrl: String,
    tags: [String],
    ageGender: String, //"Younger childBoy"
    countryOfProduction: String,
    price: Number,
    pricing: {
        type: Map,
        of: String
    },
    quantity: Number, //netQuantity: Number,
    categories: [mongoose.Schema.Types.ObjectId],
    mainCategory: String,
    color: String,
    colorDescription: String,
    inStock: Boolean,
    productUrl: String,
    styles: [String],
    newProduct: {
        type: Boolean,
        default: false
    },
    newArrival: {
        type: Boolean,
        default: false
    }, //newArrival: true,
    variantsList: [{
        code: String,
        width: String,
        length: String,
        size: {
            sizeCode: String,
            name: String,
            sizeScaleCode: String,
            sizeScaleDescription: String,
            sizeOrder: Number,
            sizeFilter: String,
            market: String
        }
    }], //taille
    selectedColor: String,
    articleList: [mongoose.Schema.Types.ObjectId]

},{
    timestamps:true,
    toObject:{
        transform: (doc, ret, options)=>{
            ret.id=ret._id;
            delete ret._id;
            delete ret.__v;
            return ret;
        }
    }
})

module.exports = mongoose.model('Product', productSchema)