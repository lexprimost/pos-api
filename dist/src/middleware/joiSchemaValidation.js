"use strict";

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es7.object.get-own-property-descriptors");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.map");

var _constants = _interopRequireDefault(require("../constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var validateObjectSchema = function validateObjectSchema(data, schema) {
  var result = schema.validate(data, {
    convert: false
  });

  if (result.error) {
    var errorDetails = result.error.details.map(function (value) {
      return {
        error: value.message,
        path: value.path
      };
    });
    console.log('joi validation=== ', errorDetails);
    return errorDetails;
  }

  return null;
};

exports.validateBody = function (schema) {
  return function (req, res, next) {
    var error = validateObjectSchema(req.body, schema); //null or error

    var response = _objectSpread({}, _constants["default"].defaultServerResponse); //if error exist , its mean there is error otherwise error is null


    if (error) {
      response.body = error;
      response.message = _constants["default"].requestValidationMessage.BAD_REQUEST;
      return res.status(response.status).send(response);
    }

    return next();
  };
};

exports.validateQueryParams = function (schema) {
  return function (req, res, next) {
    var error = validateObjectSchema(req.query, schema); //null or error

    var response = _objectSpread({}, _constants["default"].defaultServerResponse); //if error exist , its mean there is error otherwise error is null


    if (error) {
      response.body = error;
      response.message = _constants["default"].requestValidationMessage.BAD_REQUEST;
      return res.status(response.status).send(response);
    }

    return next();
  };
};