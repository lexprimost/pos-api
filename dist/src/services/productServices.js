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

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.array.find");

require("regenerator-runtime/runtime");

var _Product = _interopRequireDefault(require("../database/models/Product"));

var _dbHelper = require("../helpers/dbHelper");

var _constants = _interopRequireDefault(require("../constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Add products
exports.addProduct = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(serviceData, imgPath) {
    var product, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            product = new _Product["default"](_objectSpread(_objectSpread({}, serviceData), {}, {
              "productImageUrl": imgPath
            }));
            console.log('what ', _objectSpread({}, serviceData));
            _context.next = 5;
            return product.save();

          case 5:
            result = _context.sent;
            return _context.abrupt("return", (0, _dbHelper.formatMongoData)(result));

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.log('something went wrong: Service: CreateProduct ', _context.t0);
            throw new Error(_context.t0);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // Add product without image


exports.addProductWithoutImage = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(serviceData, imgPath) {
    var product, result;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            product = new _Product["default"](_objectSpread({}, serviceData));
            console.log('what ', _objectSpread({}, serviceData));
            _context2.next = 5;
            return product.save();

          case 5:
            result = _context2.sent;
            return _context2.abrupt("return", (0, _dbHelper.formatMongoData)(result));

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            console.log('something went wrong: Service: CreateProduct ', _context2.t0);
            throw new Error(_context2.t0);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); // Add Multiple products


exports.addMultipleProduct = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(serviceData) {
    var result;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _Product["default"].insertMany(serviceData);

          case 3:
            result = _context3.sent;
            return _context3.abrupt("return", (0, _dbHelper.formatMongoData)(result));

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.log('something went wrong: Service: addMultipleProduct ', _context3.t0);
            throw new Error(_context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function (_x5) {
    return _ref3.apply(this, arguments);
  };
}(); // Get all products


exports.getProducts = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref4) {
    var _ref4$skip, skip, _ref4$limit, limit, products;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _ref4$skip = _ref4.skip, skip = _ref4$skip === void 0 ? 0 : _ref4$skip, _ref4$limit = _ref4.limit, limit = _ref4$limit === void 0 ? 10 : _ref4$limit;
            _context4.prev = 1;
            _context4.next = 4;
            return _Product["default"].find().skip(parseInt(skip)).limit(parseInt(limit));

          case 4:
            products = _context4.sent;
            return _context4.abrupt("return", (0, _dbHelper.formatMongoData)(products));

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            console.log('something went wrong: Service: getProducts ', _context4.t0);
            throw new Error(_context4.t0);

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 8]]);
  }));

  return function (_x6) {
    return _ref5.apply(this, arguments);
  };
}(); // Get product by id


exports.getProductById = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(_ref6) {
    var id, product;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = _ref6.id;
            _context5.prev = 1;
            (0, _dbHelper.checkObjectId)(id); //check if id is valid 

            _context5.next = 5;
            return _Product["default"].findById(id);

          case 5:
            product = _context5.sent;

            if (product) {
              _context5.next = 9;
              break;
            }

            console.log('Product not found');
            throw new Error(_constants["default"].databaseMessage.PRODUCT_NOT_FOUND);

          case 9:
            return _context5.abrupt("return", (0, _dbHelper.formatMongoData)(product));

          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](1);
            console.log('something went wrong: Service: getProductById ', _context5.t0);
            throw new Error(_context5.t0);

          case 16:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 12]]);
  }));

  return function (_x7) {
    return _ref7.apply(this, arguments);
  };
}(); // Get Product by barcode


exports.getProductByBarcode = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(_ref8) {
    var barcode, product;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            barcode = _ref8.barcode;
            _context6.prev = 1;
            _context6.next = 4;
            return _Product["default"].findOne({
              barcode: barcode
            });

          case 4:
            product = _context6.sent;

            if (product) {
              _context6.next = 8;
              break;
            }

            console.log('Product not found');
            throw new Error(_constants["default"].databaseMessage.PRODUCT_NOT_FOUND);

          case 8:
            return _context6.abrupt("return", (0, _dbHelper.formatMongoData)(product));

          case 11:
            _context6.prev = 11;
            _context6.t0 = _context6["catch"](1);
            console.log('something went wrong: Service: getProductByBarcode ', _context6.t0);
            throw new Error(_context6.t0);

          case 15:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 11]]);
  }));

  return function (_x8) {
    return _ref9.apply(this, arguments);
  };
}(); // Get Product by barcode


exports.getProductBySlug = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(_ref10) {
    var slug, product;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            slug = _ref10.slug;
            _context7.prev = 1;
            _context7.next = 4;
            return _Product["default"].findOne({
              slug: slug
            });

          case 4:
            product = _context7.sent;

            if (product) {
              _context7.next = 8;
              break;
            }

            console.log('Product not found');
            throw new Error(_constants["default"].databaseMessage.PRODUCT_NOT_FOUND);

          case 8:
            return _context7.abrupt("return", (0, _dbHelper.formatMongoData)(product));

          case 11:
            _context7.prev = 11;
            _context7.t0 = _context7["catch"](1);
            console.log('something went wrong: Service: getProductByBarcode ', _context7.t0);
            throw new Error(_context7.t0);

          case 15:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[1, 11]]);
  }));

  return function (_x9) {
    return _ref11.apply(this, arguments);
  };
}(); //update product


exports.updateProduct = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(_ref12, body) {
    var id, newData, result;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            id = _ref12.id;
            _context8.prev = 1;
            (0, _dbHelper.checkObjectId)(id); //check if id is valid 

            newData = Object.assign({}, body);
            _context8.next = 6;
            return _Product["default"].findByIdAndUpdate(id, newData, {
              "new": true,
              useFindAndModify: false
            });

          case 6:
            result = _context8.sent;

            if (result) {
              _context8.next = 10;
              break;
            }

            console.log('Product not found');
            throw new Error(_constants["default"].databaseMessage.PRODUCT_NOT_FOUND);

          case 10:
            return _context8.abrupt("return", (0, _dbHelper.formatMongoData)(result));

          case 13:
            _context8.prev = 13;
            _context8.t0 = _context8["catch"](1);
            console.log('something went wrong: Service: updateProduct ', _context8.t0);
            throw new Error(_context8.t0);

          case 17:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[1, 13]]);
  }));

  return function (_x10, _x11) {
    return _ref13.apply(this, arguments);
  };
}(); //delete product


exports.deleteProduct = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(_ref14) {
    var id, result;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            id = _ref14.id;
            _context9.prev = 1;
            (0, _dbHelper.checkObjectId)(id); //check if id is valid 

            _context9.next = 5;
            return _Product["default"].findByIdAndDelete(id);

          case 5:
            result = _context9.sent;

            if (result) {
              _context9.next = 9;
              break;
            }

            console.log('Product not found');
            throw new Error(_constants["default"].databaseMessage.PRODUCT_NOT_FOUND);

          case 9:
            return _context9.abrupt("return", (0, _dbHelper.formatMongoData)(result));

          case 12:
            _context9.prev = 12;
            _context9.t0 = _context9["catch"](1);
            console.log('something went wrong: Service: deleteProduct ', _context9.t0);
            throw new Error(_context9.t0);

          case 16:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[1, 12]]);
  }));

  return function (_x12) {
    return _ref15.apply(this, arguments);
  };
}();