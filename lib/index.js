"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("./style.css");

var _ContentBlock = require("./components/ContentBlock");

var _Carousel = require("./components/Carousel");

var _kiddClockXxsmPnk = _interopRequireDefault(require("./assets/kidd-clock-xxsm-pnk.png"));

var _kiddClockSmPnk = _interopRequireDefault(require("./assets/kidd-clock-sm-pnk.png"));

var _kiddClockXxsmOrange = _interopRequireDefault(require("./assets/kidd-clock-xxsm-orange.png"));

var _kiddClockSmOrange = _interopRequireDefault(require("./assets/kidd-clock-sm-orange.png"));

var _kiddClockXxsmBlu = _interopRequireDefault(require("./assets/kidd-clock-xxsm-blu.png"));

var _kiddClockSmBlu = _interopRequireDefault(require("./assets/kidd-clock-sm-blu.png"));

var _kiddClockXxsmLime = _interopRequireDefault(require("./assets/kidd-clock-xxsm-lime.png"));

var _kiddClockSmLime = _interopRequireDefault(require("./assets/kidd-clock-sm-lime.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var pinkBlock = {
  name: 'pinkBlock',
  vrbs: 'Pink Block',
  text: 'Pink block for da cuties!',
  imgList: [_kiddClockXxsmPnk["default"], _kiddClockSmPnk["default"]]
};
var orangeBlock = {
  name: 'orangeBlock',
  vrbs: 'Orange Block',
  text: 'Orange block for da hotties!',
  imgList: [_kiddClockXxsmOrange["default"], _kiddClockSmOrange["default"]]
};
var blueBlock = {
  name: 'blueBlock',
  vrbs: 'Blue Block',
  text: 'Blue block for da baddies!',
  imgList: [_kiddClockXxsmBlu["default"], _kiddClockSmBlu["default"]]
};
var limeBlock = {
  name: 'limeBlock',
  vrbs: 'Lime Block',
  text: 'Lime block for da lil ones!',
  imgList: [_kiddClockXxsmLime["default"], _kiddClockSmLime["default"]]
};
var pb = (0, _ContentBlock.ContentBlock)(pinkBlock['name'], pinkBlock['vrbs'], pinkBlock['text'], pinkBlock['imgList']);
var ob = (0, _ContentBlock.ContentBlock)(orangeBlock['name'], orangeBlock['vrbs'], orangeBlock['text'], orangeBlock['imgList']);
var bb = (0, _ContentBlock.ContentBlock)(blueBlock['name'], blueBlock['vrbs'], blueBlock['text'], blueBlock['imgList']);
var lb = (0, _ContentBlock.ContentBlock)(limeBlock['name'], limeBlock['vrbs'], limeBlock['text'], limeBlock['imgList']);
var contentGroup = {
  0: pb,
  1: ob,
  2: bb,
  3: lb
};
var carouselName = 'colors';
console.log('cg: ', contentGroup);
var blurbStyle = {
  color: 'yellowgreen'
};

var Blurb = function Blurb() {
  console.log('getting intro...');
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: blurbStyle,
    className: "test-introduction"
  }, /*#__PURE__*/_react["default"].createElement("p", null, "howdy, i'm kidd AM."), /*#__PURE__*/_react["default"].createElement("p", null, "i'm a writer, rapper, n producer."), /*#__PURE__*/_react["default"].createElement("p", null, "fwm."));
};

var App = function App() {
  console.log('rendering - here we go...');

  try {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "app"
    }, /*#__PURE__*/_react["default"].createElement(Blurb, null), /*#__PURE__*/_react["default"].createElement(_Carousel.Carousel, {
      name: carouselName,
      contentBlockGroup: contentGroup
    }));
  } catch (error) {
    console.log('Error: ', error);
  }
};

_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(App, null), document.getElementById('root'));