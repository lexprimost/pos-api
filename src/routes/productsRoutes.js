import express from 'express'
const router = express.Router();
 
import joiSchemaValidation from "../middleware/joiSchemaValidation"
import productControllers from "../controllers/productControllers"
import productApiSchema from "../apiSchemas/productApiSchema"
import fs from 'fs'

import multer from 'multer'

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    const path = `./images/`
    fs.mkdirSync(path, { recursive: true });
    return cb(null, path);
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});


// add product
router.post('/',
    //joiSchemaValidation.validateBody(productApiSchema.createProductApiSchema),
    upload.single('productImage'),
    productControllers.addProduct
);

// add Multiple product
router.post('/multiple',
    //joiSchemaValidation.validateBody(productApiSchema.createProductApiSchema),
    productControllers.addMultipleProduct
);

// Get all products
router.get('/',
    joiSchemaValidation.validateQueryParams(productApiSchema.getAllProductsApiSchema),
    productControllers.getProducts,
);

// Get product by id
router.get('/find/:id',
   // joiSchemaValidation.validateQueryParams(productApiSchema.getProductByIdApiSchema),
    productControllers.getProductById,
);

// Get product by slug
router.get('/:slug',
   // joiSchemaValidation.validateQueryParams(productApiSchema.getProductByIdApiSchema),
    productControllers.getProductBySlug,
);

// Get product by code
router.get('/barcode/:barcode',
   // joiSchemaValidation.validateQueryParams(productApiSchema.getProductByIdApiSchema),
    productControllers.getProductByBarcode,
);

// update product  
router.put('/:id',
   // joiSchemaValidation.validateQueryParams(productApiSchema.getProductByIdApiSchema),
    productControllers.updateProduct,
);

// delete product
router.delete('/:id',
   // joiSchemaValidation.validateQueryParams(productApiSchema.getProductByIdApiSchema),
    productControllers.deleteProduct,
);

module.exports = router;