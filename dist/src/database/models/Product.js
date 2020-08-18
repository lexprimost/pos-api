"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.number.constructor");

var _mongoose = require("mongoose");

var _mongooseSlugGenerator = _interopRequireDefault(require("mongoose-slug-generator"));

var _Attachment = require("./Attachment");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// External Dependancies
(0, _mongoose.plugin)(_mongooseSlugGenerator["default"]);
var attributes = new _mongoose.Schema({
  slug: String,
  name: String,
  //color //size
  value: [String] //blue, red, black- xl , xs

});
var variant = new _mongoose.Schema({
  sku: String,
  //shirt_red_xl
  productId: {
    type: _mongoose.Types.ObjectId,
    //references the main product
    ref: 'Product'
  },
  attributes: [attributes],
  // [{color:'red"},{size:'xl'}]
  thumbnail: String,
  description: String,
  price: Number
});
var productSchema = new _mongoose.Schema({
  sku: String,
  barcode: Number,
  slug: {
    type: String,
    slug: ["name"],
    unique: true
  },
  name: String,
  description: String,
  brand_id: {
    type: _mongoose.Types.ObjectId,
    ref: 'Brand'
  },
  productTypeName: String,
  //T-shirt
  descriptiveLenght: [String],
  customerGroup: [String],
  //"Men, "Women","Boys"
  gallery: [{
    type: _mongoose.Types.ObjectId,
    ref: 'Attachment'
  }],
  imgGallery: [String],
  productImageUrl: String,
  tags: [String],
  ageGender: String,
  //"Younger childBoy"
  countryOfProduction: String,
  price: Number,
  quantity: Number,
  //netQuantity: Number,
  categories: [{
    type: _mongoose.Types.ObjectId,
    ref: 'Category'
  }],
  mainCategory: String,
  color: String,
  colorDescription: String,
  inStock: Boolean,
  productUrl: String,
  styles: [String],
  //designer, casual
  newProduct: {
    type: Boolean,
    "default": false
  },
  newArrival: {
    type: Boolean,
    "default": false
  },
  //newArrival: true,
  variantsList: [variant],
  //taille
  selectedColor: String
}, {
  timestamps: true,
  toObject: {
    transform: function transform(doc, ret, options) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  }
});

var _default = (0, _mongoose.model)('Product', productSchema);

exports["default"] = _default;