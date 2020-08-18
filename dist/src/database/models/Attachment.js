"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.number.constructor");

var _mongoose = require("mongoose");

var attachmentSchema = new _mongoose.Schema({
  originalName: {
    type: String,
    required: true
  },
  contentType: {
    type: String,
    required: true
  },
  filename: {
    type: String,
    required: true
  },
  size: Number,
  _version: {
    type: Number,
    "default": 1.0
  }
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

var _default = (0, _mongoose.model)('Attachment', attachmentSchema);

exports["default"] = _default;