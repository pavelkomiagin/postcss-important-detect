# postcss-important-detect [![Build Status](https://secure.travis-ci.org/pavelkomiagin/postcss-important-detect.png?branch=master)](https://travis-ci.org/pavelkomiagin/postcss-important-detect) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

PostCSS plugin for searching **!important** in rule declarations

## Installation

```bash
npm install --save postcss-important-detect
```

## Usage

```javascript
postcss([postcss-important-detect]).process(css).then(function(result) {
  result.warnings().forEach(function (message) {
    console.log(message.toString());
  });
});
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
