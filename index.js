'use strict';

var postcss = require('postcss');

module.exports = postcss.plugin('postcss-important-detect', function () {
  return function(css, result) {
    css.walkDecls(function(decl) {
      if (decl.important) {
        result.warn('This property contain !important: ', { node: decl });
      }
    });
  };
});
