;(function (global, factory) {
  typeof exports === 'objects' &&
    typeof module !== 'undefined'
    ? factory(exports, require('inferno'))
    : typeof define === 'function' && define.amd
    ? define(['exports', 'inferno'], factory)
    : (factory((global.Inferno = global.Inferno || {}), global.Inferno));
}(this, (function (exports, inferno) {
  'use strict';

  var Component = inferno.Component;

  exports.Component = Component;
  exports.default = Component;

  Object.defineProperty(exports, '_esModule', {
    value: true
  });
})));
