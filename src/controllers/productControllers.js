const productService = require('../services/productServices');
const constants = require('../constants');

module.exports.createProduct = async (req, res) => {
    let response = {...constants.defaultServerResponse};
    try {
        const responseFromService = await productService.createProduct(req.body)
        response.status = 200;
        response.message = constants.productMessage.PRODUCT_CREATED;
        response.body = responseFromService;
         console.log('rr', responseFromService);
    } catch (error) {
        console.log('something went wrong: Controller: createProduct ', error);
        response.message = error.message;
       

    }
   return res.status(response.status).send(response);
}

// Get all products
module.exports.getproducts = async (req, res) => {
    let response = {};
    try {
        const responseFromService = await productService.getproducts()
        response.status = 200;
        response.message = 'Product showed successfully';
        response.body = responseFromService;
         console.log('rr', responseFromService);
    } catch (error) {
        console.log('something went wrong: Controller: createProduct ', error);
        response.status = 400;
        response.message = error.message;
        response.body = {};

    }
   return res.status(response.status).send(response);
}