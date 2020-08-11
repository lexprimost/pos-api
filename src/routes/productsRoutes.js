const express = require('express');
const router = express.Router();

const productControllers = require('../controllers/productControllers');
const joiSchemaValidation = require('../middleware/joiSchemaValidation');
const productApiSchema = require('../apiSchemas/productApiSchema');

//create product
router.post('/', 
    joiSchemaValidation.validateBody(),
    productControllers.createProduct
);
router.get('/', productControllers.getproducts);

module.exports = router;