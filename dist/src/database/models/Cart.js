"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.map");

require("core-js/modules/es6.number.constructor");

var _mongoose = require("mongoose");

// External Dependancies
var cartSchema = new _mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  status: String,
  brand: String,
  price: String,
  age: Number,
  services: {
    type: Map,
    of: String
  }
}, {
  timestamps: true
});

var _default = (0, _mongoose.model)('Cart', carSchema);

exports["default"] = _default;