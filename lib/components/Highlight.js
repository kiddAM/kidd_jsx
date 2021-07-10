"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Highlight = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Highlight = function Highlight(props) {
  var highlightStyle = {
    backgroundImage: 'url(' + props.imageList[1] + ')',
    display: 'block',
    height: '300px',
    width: '300px',
    color: 'rgb(17, 12, 22)'
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: highlightStyle,
    className: "content-block highlight",
    id: props.shortname
  }, /*#__PURE__*/_react["default"].createElement("h3", null, props.verbosename), /*#__PURE__*/_react["default"].createElement("p", null, props.text));
};

exports.Highlight = Highlight;