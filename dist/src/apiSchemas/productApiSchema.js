"use strict";

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports.createProductApiSchema = _joi["default"].object().keys({
  name: _joi["default"].string().required()
});
exports.getAllProductsApiSchema = _joi["default"].object().keys({
  skip: _joi["default"].string(),
  limit: _joi["default"].string()
});
exports.getProductByIdApiSchema = _joi["default"].object().keys({
  id: _joi["default"].string()
});