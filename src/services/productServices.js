import Product from "../database/models/Product"
import { formatMongoData, checkObjectId }  from "../helpers/dbHelper"
import constants from "../constants"



// Add products
exports.addProduct = async (serviceData) => {

    try {
        let product = new Product({ ...serviceData });
        console.log({ ...serviceData});
        
        const result = await product.save();
        return formatMongoData(result);
    } catch (error) {
        console.log('something went wrong: Service: CreateProduct ', error)
        throw new Error(error);
    }
}

// Add Multiple products
exports.addMultipleProduct = async (serviceData) => {

    try {
        //let product = new Product({ ...serviceData });
        const result = await Product.insertMany(serviceData);
        //console.log('topop', {...serviceData});
        return formatMongoData(result);
    } catch (error) {
        console.log('something went wrong: Service: addMultipleProduct ', error)
        throw new Error(error);
    }
}

// Get all products
exports.getProducts = async ({ skip = 0, limit = 10 }) => {
    try {
        const products = await Product.find().skip(parseInt(skip)).limit(parseInt(limit));
        return formatMongoData(products);
    } catch (error) {
        console.log('something went wrong: Service: getProducts ', error)
        throw new Error(error);
    }
}

// Get product by id
exports.getProductById = async ({ id }) => {
    try {
        checkObjectId(id);//check if id is valid 
        const product = await Product.findById(id);
        if (!product) {
            console.log('Product not found');
            throw new Error(constants.databaseMessage.PRODUCT_NOT_FOUND);
        }
        return formatMongoData(product);
    } catch (error) {
        console.log('something went wrong: Service: getProductById ', error);
        throw new Error(error);
    }
}

// Get Product by barcode
exports.getProductByBarcode = async ({ barcode }) => {
    try {
       // checkObjectId(id);//check if id is valid 
        const product = await Product.findOne({
            barcode: barcode
        });
        if (!product) {
            console.log('Product not found');
            throw new Error(constants.databaseMessage.PRODUCT_NOT_FOUND);
        }
        return formatMongoData(product);
    } catch (error) {
        console.log('something went wrong: Service: getProductByBarcode ', error);
        throw new Error(error);
    }
}

// Get Product by barcode
exports.getProductBySlug = async ({ slug }) => {
    try {
       // checkObjectId(id);//check if id is valid 
        const product = await Product.findOne({
            slug: slug
        });
        if (!product) {
            console.log('Product not found');
            throw new Error(constants.databaseMessage.PRODUCT_NOT_FOUND);
        }
        return formatMongoData(product);
    } catch (error) {
        console.log('something went wrong: Service: getProductByBarcode ', error);
        throw new Error(error);
    }
}

//update product

exports.updateProduct = async ({ id }, body) => {
    try {
        checkObjectId(id);//check if id is valid 
       
        const { ...newData } = body
        const result = await Product.findByIdAndUpdate(id, newData, {
            new: true,
            useFindAndModify: false
        });
        if (!result) {
            console.log('Product not found');
            throw new Error(constants.databaseMessage.PRODUCT_NOT_FOUND);
        }
        return formatMongoData(result);
    } catch (error) {
        console.log('something went wrong: Service: updateProduct ', error);
        throw new Error(error);
    }
}

//delete product
exports.deleteProduct = async ({ id }) => {
    try {
        checkObjectId(id);//check if id is valid 
     
        const result = await Product.findByIdAndDelete(id);
          if (!result) {
            console.log('Product not found');
            throw new Error(constants.databaseMessage.PRODUCT_NOT_FOUND);
        }
        return formatMongoData(result);
    } catch (error) {
        console.log('something went wrong: Service: deleteProduct ', error);
        throw new Error(error);
    }
}