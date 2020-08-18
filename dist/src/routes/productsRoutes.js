"use strict";

require("core-js/modules/es6.date.to-iso-string");

require("core-js/modules/es6.regexp.replace");

var _express = _interopRequireDefault(require("express"));

var _joiSchemaValidation = _interopRequireDefault(require("../middleware/joiSchemaValidation"));

var _productControllers = _interopRequireDefault(require("../controllers/productControllers"));

var _productApiSchema = _interopRequireDefault(require("../apiSchemas/productApiSchema"));

var _multer = _interopRequireDefault(require("multer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

var storage = _multer["default"].diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, './images/');
  },
  filename: function filename(req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
  }
});

var fileFilter = function fileFilter(req, file, cb) {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

var upload = (0, _multer["default"])({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
}); // add product

router.post('/', //joiSchemaValidation.validateBody(productApiSchema.createProductApiSchema),
upload.single('productImage'), _productControllers["default"].addProduct); // add Multiple product

router.post('/multiple', //joiSchemaValidation.validateBody(productApiSchema.createProductApiSchema),
_productControllers["default"].addMultipleProduct); // Get all products

router.get('/', _joiSchemaValidation["default"].validateQueryParams(_productApiSchema["default"].getAllProductsApiSchema), _productControllers["default"].getProducts); // Get product by id

router.get('/find/:id', // joiSchemaValidation.validateQueryParams(productApiSchema.getProductByIdApiSchema),
_productControllers["default"].getProductById); // Get product by slug

router.get('/:slug', // joiSchemaValidation.validateQueryParams(productApiSchema.getProductByIdApiSchema),
_productControllers["default"].getProductBySlug); // Get product by code

router.get('/barcode/:barcode', // joiSchemaValidation.validateQueryParams(productApiSchema.getProductByIdApiSchema),
_productControllers["default"].getProductByBarcode); // update product  

router.put('/:id', // joiSchemaValidation.validateQueryParams(productApiSchema.getProductByIdApiSchema),
_productControllers["default"].updateProduct); // delete product

router["delete"]('/:id', // joiSchemaValidation.validateQueryParams(productApiSchema.getProductByIdApiSchema),
_productControllers["default"].deleteProduct);
module.exports = router;