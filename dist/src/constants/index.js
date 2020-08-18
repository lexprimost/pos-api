"use strict";

module.exports = {
  defaultServerResponse: {
    status: 400,
    message: '',
    body: {}
  },
  productMessage: {
    PRODUCT_CREATED: 'Product created successfully',
    PRODUCT_FETCHED: 'Product fetched successfully',
    PRODUCTS_FETCHED: 'Products fetched successfully',
    PRODUCT_UPDATED: 'Product updated successfully',
    PRODUCT_DELETED: 'Product Deleted successfully'
  },
  requestValidationMessage: {
    BAD_REQUEST: "Invalid Field"
  },
  databaseMessage: {
    INVALID_ID: 'Invalid ID',
    PRODUCT_NOT_FOUND: 'Product Not Found'
  }
};