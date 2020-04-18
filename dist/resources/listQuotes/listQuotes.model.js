"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListQuotes = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var listQuotesSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 15
  }
});

var ListQuotes = _mongoose["default"].model('listQuotes', listQuotesSchema, 'listQuotes');

exports.ListQuotes = ListQuotes;