"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Carousel = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ContentBlock = require("./ContentBlock");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var setGenericBlock = function setGenericBlock() {
  var cb = /*#__PURE__*/_react["default"].createElement(_ContentBlock.ContentBlock, {
    name: "test",
    vrbs: "Test Content Block",
    text: "This is a test."
  });

  return cb;
};

var setGenericGroup = function setGenericGroup(contentBlockNumber) {
  console.log('building generic content group...');
  var number = contentBlockNumber ? contentBlockNumber : 4;
  console.log('blocks in group: ', number);
  var genericBlockGroup = {};

  for (var i = 0; i < number; i++) {
    var newBlock = setGenericBlock();
    genericBlockGroup[i] = newBlock;
    console.log('generic block made: ', i, newBlock);
  }

  return genericBlockGroup;
}; // object: Carousel
// descript: 
// related: Content Block


var Carousel = function Carousel(props) {
  console.log('building new carousel...', props.name);
  var genName = 'test-carousel';
  var carouselName = !props.name ? genName : props.name;
  console.log('carousel name: ', carouselName);
  var contentGroup = !props.contentBlockGroup ? setGenericGroup() : props.contentBlockGroup;
  console.log('content block group: ', contentGroup);

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      highlight = _useState2[0],
      setHighlight = _useState2[1];

  console.log('highlight idx: ', highlight >= 0 ? highlight : 'none');

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      iconList = _useState4[0],
      setIconList = _useState4[1];

  console.log('icon list len: ', iconList ? iconList.length : 'none');
  var iconStyle = {
    display: 'inline-block',
    verticalAlign: 'top'
  };
  console.log('content group: ', contentGroup);

  var handleIconList = function handleIconList(contentGroup) {
    console.log('handling icon list...');

    try {
      var newList = [];

      for (var i = 0; i < Object.keys(contentGroup).length; i++) {
        console.log('i: ', i);

        var listElement = /*#__PURE__*/_react["default"].createElement("li", {
          style: iconStyle,
          key: i,
          className: "icon-list-item"
        }, contentGroup[i].icon);

        console.log('list element: ', listElement);
        console.log('key: ', listElement.key);
        newList.push(listElement);
      }

      return newList;
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  var handleHighlightIdx = function handleHighlightIdx() {
    console.log('handling highlight index...');

    try {
      var next = 0;
      console.log('default next: ', next);

      if (highlight >= 0) {
        console.log('something to highlight: ', true);
        var current = highlight;
        console.log('current hlt: ', current);
        next = current + 1 < Object.keys(contentGroup).length ? current + 1 : 0;
      } else {
        console.log('something to highlight: ', false);
      }

      console.log('next hlt: ', next);
      return next;
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  var handleHighlightUpdate = function handleHighlightUpdate(idx) {
    console.log('handling highlight view update...');

    try {
      if (idx >= 0) {
        console.log('retrieving highlight div...');
        var highlightElement = contentGroup[idx].highlight;
        console.log('highlight element: ', highlightElement);
        return highlightElement;
      } else {
        console.log('no index available');
      }
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  console.log('should enter highlight effect...');
  (0, _react.useEffect)(function () {
    try {
      var timer = setInterval(function () {
        setHighlight(handleHighlightIdx());
      }, 5000);
      console.log('new highlight: ', highlight);
      return function () {
        return clearInterval(timer);
      };
    } catch (error) {
      console.log('Error: ', error);
    }
  }, [highlight]);
  console.log('...end carousel build');
  var carouselStyle = {
    border: '1.5px solid silver',
    position: 'relative',
    display: 'block',
    height: '403px',
    width: '403px',
    margin: '12px 0 0',
    color: 'yellowgreen'
  };
  var iconStripStyle = {
    border: '1px solid blue',
    position: 'relative',
    display: 'block',
    height: '100px',
    width: '400px',
    padding: 0
  };
  var iconStripListStyle = {
    listStyleType: 'none',
    padding: 0
  };
  var highlightStyle = {
    border: '1px solid gold',
    position: 'relative',
    display: 'block',
    height: '300px',
    width: '300px',
    margin: '0 auto'
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: carouselStyle,
    className: "carousel",
    id: carouselName
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: iconStripStyle,
    className: "icon-strip"
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    style: iconStripListStyle,
    className: "icon-strip-list"
  }, handleIconList(contentGroup))), /*#__PURE__*/_react["default"].createElement("div", {
    style: highlightStyle,
    className: "highlight-area"
  }, handleHighlightUpdate(highlight), /*#__PURE__*/_react["default"].createElement("p", null, highlight)));
};

exports.Carousel = Carousel;