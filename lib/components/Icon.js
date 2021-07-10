"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Icon = function Icon(props) {
  var handleIconClick = function handleIconClick(event) {
    event.preventDefault();
    clicked = event.target.className;
    console.log('icon clicked: ', clicked);
  };

  var handleIconHover = function handleIconHover(event) {
    event.preventDefault();
    hovered = event.target.className;
    console.log('icon hover: ', hovered);
  };

  var iconStyle = {
    backgroundImage: 'url(' + props.imageList[0] + ')',
    display: 'block',
    height: '100px',
    width: '100px',
    color: 'rgb(17, 12, 22)'
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    onClick: handleIconClick,
    onMouseOver: handleIconHover,
    style: iconStyle,
    className: "content-block icon",
    id: props.shortname
  }, /*#__PURE__*/_react["default"].createElement("h4", null, props.verbosename));
};

exports.Icon = Icon;