import productService from "../services/productServices"
import constants from "../constants"
//Add product controller
exports.addProduct = async (req, res) => {
    console.log("priint ",req.file.path);
    
    let response = { ...constants.defaultServerResponse };
    const product = {...req.body, ...req.file.path}
    console.log("======= ",product);
    try {
        //const responseFromService = await productService.addProduct(product);
        const responseFromService = await productService.addProduct(req.body, req.file.path);
        //server response
        response.status = 200;
        response.message = constants.productMessage.PRODUCT_CREATED;
        response.body = responseFromService;

    } catch (error) {
        console.log('something went wrong: Controller: createProduct ', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}

exports.addProduct = async (req, res) => {
    console.log("priint ",req.file.path);
    
    let response = { ...constants.defaultServerResponse };
    const product = {...req.body, productImageUrl:req.file.path}
    console.log("======= ", product);
    try {
        const responseFromService = await productService.addProduct(product);
        //const responseFromService = await productService.addProduct(req.body, req.file.path);
        //server response
        response.status = 200;
        response.message = constants.productMessage.PRODUCT_CREATED;
        response.body = responseFromService;

    } catch (error) {
        console.log('something went wrong: Controller: createProduct ', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}

//Add Multiple product controller
exports.addMultipleProduct = async (req, res) => {
    let response = { ...constants.defaultServerResponse };
    try {
        const responseFromService = await productService.addMultipleProduct(req.body);
        //server response
        response.status = 200;
        response.message = constants.productMessage.PRODUCT_CREATED;
        response.body = responseFromService;

    } catch (error) {
        console.log('something went wrong: Controller: createProduct ', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}

// Get all products
exports.getProducts = async (req, res) => {
    let response = { ...constants.defaultServerResponse };
    try {
        const responseFromService = await productService.getProducts(req.query);

        //server response
        response.status = 200;
        response.count = responseFromService.length;
        response.message = responseFromService.length > 1 ? constants.productMessage.PRODUCTS_FETCHED : constants.productMessage.PRODUCT_FETCHED;
        response.body = responseFromService;

    } catch (error) {
        console.log('something went wrong: Controller: getProducts ', error);
        response.message = error.message;

    }
    return res.status(response.status).send(response);
}

// Get product by id
exports.getProductById = async (req, res) => {
    let response = { ...constants.defaultServerResponse };
    try {
        const responseFromService = await productService.getProductById(req.params);

        //server response
        response.status = 200;
        response.message = constants.productMessage.PRODUCTS_FETCHED;
        response.body = responseFromService;

    } catch (error) {
        console.log('something went wrong: Controller: getProductById ', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}

// Get product by code
exports.getProductBySlug = async (req, res) => {
    let response = { ...constants.defaultServerResponse };
    try {
        const responseFromService = await productService.getProductBySlug(req.params);

        //server response
        response.status = 200;
        response.message = constants.productMessage.PRODUCTS_FETCHED;
        response.body = responseFromService;

    } catch (error) {
        console.log('something went wrong: Controller: getProductByBarcode ', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}

// Get product by code
exports.getProductByBarcode = async (req, res) => {
    let response = { ...constants.defaultServerResponse };
    try {
        const responseFromService = await productService.getProductByBarcode(req.params);

        //server response
        response.status = 200;
        response.message = constants.productMessage.PRODUCTS_FETCHED;
        response.body = responseFromService;

    } catch (error) {
        console.log('something went wrong: Controller: getProductByBarcode ', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}

// update product
module.exports.updateProduct = async (req, res) => {
    let response = { ...constants.defaultServerResponse };
    try {
        const responseFromService = await productService.updateProduct(req.params, req.body);

        //server response
        response.status = 200;
        response.message = constants.productMessage.PRODUCT_UPDATED;
        response.body = responseFromService;

    } catch (error) {
        console.log('something went wrong: Controller: updateProduct ', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}

// delete product
module.exports.deleteProduct = async (req, res) => {
    let response = { ...constants.defaultServerResponse };
    try {
        const responseFromService = await productService.deleteProduct(req.params);

        //server response
        response.status = 200;
        response.message = constants.productMessage.PRODUCT_DELETED;
        response.body = responseFromService;

    } catch (error) {
        console.log('something went wrong: Controller: updateProduct ', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}