"use strict";

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es7.object.get-own-property-descriptors");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.promise");

require("core-js/modules/es6.object.to-string");

require("regenerator-runtime/runtime");

var _productServices = _interopRequireDefault(require("../services/productServices"));

var _constants = _interopRequireDefault(require("../constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//Add product controller
exports.addProduct = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var response, product, responseFromService;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("priint ", req.file.path);
            response = _objectSpread({}, _constants["default"].defaultServerResponse);
            product = _objectSpread(_objectSpread({}, req.body), req.file.path);
            console.log("======= ", product);
            _context.prev = 4;
            _context.next = 7;
            return _productServices["default"].addProduct(req.body, req.file.path);

          case 7:
            responseFromService = _context.sent;
            //server response
            response.status = 200;
            response.message = _constants["default"].productMessage.PRODUCT_CREATED;
            response.body = responseFromService;
            _context.next = 17;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](4);
            console.log('something went wrong: Controller: createProduct ', _context.t0);
            response.message = _context.t0.message;

          case 17:
            return _context.abrupt("return", res.status(response.status).send(response));

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 13]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.addProduct = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var response, product, responseFromService;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log("priint ", req.file.path);
            response = _objectSpread({}, _constants["default"].defaultServerResponse);
            product = _objectSpread(_objectSpread({}, req.body), {}, {
              productImageUrl: req.file.path
            });
            console.log("======= ", product);
            _context2.prev = 4;
            _context2.next = 7;
            return _productServices["default"].addProduct(product);

          case 7:
            responseFromService = _context2.sent;
            //const responseFromService = await productService.addProduct(req.body, req.file.path);
            //server response
            response.status = 200;
            response.message = _constants["default"].productMessage.PRODUCT_CREATED;
            response.body = responseFromService;
            _context2.next = 17;
            break;

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](4);
            console.log('something went wrong: Controller: createProduct ', _context2.t0);
            response.message = _context2.t0.message;

          case 17:
            return _context2.abrupt("return", res.status(response.status).send(response));

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[4, 13]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); //Add Multiple product controller


exports.addMultipleProduct = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var response, responseFromService;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            response = _objectSpread({}, _constants["default"].defaultServerResponse);
            _context3.prev = 1;
            _context3.next = 4;
            return _productServices["default"].addMultipleProduct(req.body);

          case 4:
            responseFromService = _context3.sent;
            //server response
            response.status = 200;
            response.message = _constants["default"].productMessage.PRODUCT_CREATED;
            response.body = responseFromService;
            _context3.next = 14;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](1);
            console.log('something went wrong: Controller: createProduct ', _context3.t0);
            response.message = _context3.t0.message;

          case 14:
            return _context3.abrupt("return", res.status(response.status).send(response));

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 10]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); // Get all products


exports.getProducts = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var response, responseFromService;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            response = _objectSpread({}, _constants["default"].defaultServerResponse);
            _context4.prev = 1;
            _context4.next = 4;
            return _productServices["default"].getProducts(req.query);

          case 4:
            responseFromService = _context4.sent;
            //server response
            response.status = 200;
            response.count = responseFromService.length;
            response.message = responseFromService.length > 1 ? _constants["default"].productMessage.PRODUCTS_FETCHED : _constants["default"].productMessage.PRODUCT_FETCHED;
            response.body = responseFromService;
            _context4.next = 15;
            break;

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](1);
            console.log('something went wrong: Controller: getProducts ', _context4.t0);
            response.message = _context4.t0.message;

          case 15:
            return _context4.abrupt("return", res.status(response.status).send(response));

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 11]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}(); // Get product by id


exports.getProductById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var response, responseFromService;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            response = _objectSpread({}, _constants["default"].defaultServerResponse);
            _context5.prev = 1;
            _context5.next = 4;
            return _productServices["default"].getProductById(req.params);

          case 4:
            responseFromService = _context5.sent;
            //server response
            response.status = 200;
            response.message = _constants["default"].productMessage.PRODUCTS_FETCHED;
            response.body = responseFromService;
            _context5.next = 14;
            break;

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](1);
            console.log('something went wrong: Controller: getProductById ', _context5.t0);
            response.message = _context5.t0.message;

          case 14:
            return _context5.abrupt("return", res.status(response.status).send(response));

          case 15:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 10]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}(); // Get product by code


exports.getProductBySlug = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var response, responseFromService;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            response = _objectSpread({}, _constants["default"].defaultServerResponse);
            _context6.prev = 1;
            _context6.next = 4;
            return _productServices["default"].getProductBySlug(req.params);

          case 4:
            responseFromService = _context6.sent;
            //server response
            response.status = 200;
            response.message = _constants["default"].productMessage.PRODUCTS_FETCHED;
            response.body = responseFromService;
            _context6.next = 14;
            break;

          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](1);
            console.log('something went wrong: Controller: getProductByBarcode ', _context6.t0);
            response.message = _context6.t0.message;

          case 14:
            return _context6.abrupt("return", res.status(response.status).send(response));

          case 15:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 10]]);
  }));

  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}(); // Get product by code


exports.getProductByBarcode = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var response, responseFromService;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            response = _objectSpread({}, _constants["default"].defaultServerResponse);
            _context7.prev = 1;
            _context7.next = 4;
            return _productServices["default"].getProductByBarcode(req.params);

          case 4:
            responseFromService = _context7.sent;
            //server response
            response.status = 200;
            response.message = _constants["default"].productMessage.PRODUCTS_FETCHED;
            response.body = responseFromService;
            _context7.next = 14;
            break;

          case 10:
            _context7.prev = 10;
            _context7.t0 = _context7["catch"](1);
            console.log('something went wrong: Controller: getProductByBarcode ', _context7.t0);
            response.message = _context7.t0.message;

          case 14:
            return _context7.abrupt("return", res.status(response.status).send(response));

          case 15:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[1, 10]]);
  }));

  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}(); // update product


module.exports.updateProduct = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
    var response, responseFromService;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            response = _objectSpread({}, _constants["default"].defaultServerResponse);
            _context8.prev = 1;
            _context8.next = 4;
            return _productServices["default"].updateProduct(req.params, req.body);

          case 4:
            responseFromService = _context8.sent;
            //server response
            response.status = 200;
            response.message = _constants["default"].productMessage.PRODUCT_UPDATED;
            response.body = responseFromService;
            _context8.next = 14;
            break;

          case 10:
            _context8.prev = 10;
            _context8.t0 = _context8["catch"](1);
            console.log('something went wrong: Controller: updateProduct ', _context8.t0);
            response.message = _context8.t0.message;

          case 14:
            return _context8.abrupt("return", res.status(response.status).send(response));

          case 15:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[1, 10]]);
  }));

  return function (_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}(); // delete product


module.exports.deleteProduct = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(req, res) {
    var response, responseFromService;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            response = _objectSpread({}, _constants["default"].defaultServerResponse);
            _context9.prev = 1;
            _context9.next = 4;
            return _productServices["default"].deleteProduct(req.params);

          case 4:
            responseFromService = _context9.sent;
            //server response
            response.status = 200;
            response.message = _constants["default"].productMessage.PRODUCT_DELETED;
            response.body = responseFromService;
            _context9.next = 14;
            break;

          case 10:
            _context9.prev = 10;
            _context9.t0 = _context9["catch"](1);
            console.log('something went wrong: Controller: updateProduct ', _context9.t0);
            response.message = _context9.t0.message;

          case 14:
            return _context9.abrupt("return", res.status(response.status).send(response));

          case 15:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[1, 10]]);
  }));

  return function (_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();