"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.number.constructor");

var _mongoose = require("mongoose");

// External Dependancies
var brandSchema = new _mongoose.Schema({
  name: String,
  countryOfBrand: String,
  quantity: Number,
  //netQuantity: Number,
  logo: String
}, {
  timestamps: true
});

var _default = (0, _mongoose.model)('Brand', brandSchema);

exports["default"] = _default;