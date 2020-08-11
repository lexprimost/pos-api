const Product = require('../database/models/Product')

module.exports.createProduct = async (serviceData) => {
     
    try {
        let product = new Product({ ...serviceData });
        let result= product.save();
        return (await result).toObject();
    } catch (error) {
        console.log('something went wrong: Service: CreateProduct ', error)
        throw new Error(error);
    }
}

// Get all products
exports.getproducts = async() => {
    try {
        const products = await Product.find()
        const response = {
            count: products.length,
            products: products
        }
        return products
    } catch (err) {
        throw boom.boomify(err)
    }
}