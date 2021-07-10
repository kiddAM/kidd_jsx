"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContentBlock = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Icon = require("./Icon");

var _Highlight = require("./Highlight");

var _kiddClockSm = _interopRequireDefault(require("../assets/kidd-clock-sm.png"));

var _kiddClockXxsm = _interopRequireDefault(require("../assets/kidd-clock-xxsm.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// object: Content Block.
// descript: Blocks of text over bg image found in Carousel
// related: Carousel
var ContentBlock = function ContentBlock(name, vrbs, text, imgList) {
  console.log('building content block:', name);

  var _short = name ? name : 'test-cb'; // short name


  var verbose = vrbs ? vrbs : 'test content block'; // verbose name

  var imageList = imgList ? imgList : [_kiddClockXxsm["default"], _kiddClockSm["default"]]; // background image src location

  var blockText = text ? text : 'this is sample text in a sample content block.'; // text data
  // console.log('highlight: ', highlight.type);

  var stateManager = {
    'shortname': _short,
    'verbosename': verbose,
    'imageList': imageList,
    'text': blockText,
    'icon': /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
      shortname: _short,
      verbosename: verbose,
      imageList: imageList
    }),
    'highlight': /*#__PURE__*/_react["default"].createElement(_Highlight.Highlight, {
      shortname: _short,
      verbosename: verbose,
      text: blockText,
      imageList: imageList
    })
  };
  return stateManager;
};

exports.ContentBlock = ContentBlock;