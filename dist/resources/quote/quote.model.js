"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Quote = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var quoteSchema = new _mongoose["default"].Schema({
  author: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: 350
  },
  list: {
    type: _mongoose["default"].SchemaTypes.ObjectId,
    ref: 'listQuotes',
    required: true
  }
});

var Quote = _mongoose["default"].model('quote', quoteSchema, 'quote');

exports.Quote = Quote;