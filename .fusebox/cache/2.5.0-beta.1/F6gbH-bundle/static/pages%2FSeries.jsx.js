module.exports = { contents: "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _components = require('../components');\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Series = function (_React$Component) {\n  _inherits(Series, _React$Component);\n\n  function Series() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, Series);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Series.__proto__ || Object.getPrototypeOf(Series)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      series: null,\n      error: false,\n      percentage: 0,\n      imgLoaded: 0,\n      totalImg: 26,\n      loadingFinished: false\n    }, _this.setPercentage = function () {\n      var imgLoaded = _this.state.imgLoaded + 1;\n      var percentage = Math.round(imgLoaded / _this.state.totalImg * 100);\n      var loadingFinished = false;\n      if (imgLoaded === _this.state.totalImg) loadingFinished = true;\n\n      _this.setState({ imgLoaded: imgLoaded, percentage: percentage, loadingFinished: loadingFinished });\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(Series, [{\n    key: 'componentWillMount',\n    value: function componentWillMount() {\n      this.props.setTitle('Popular Series');\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function () {\n      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var totalImg, promise, _ref3, entries, series;\n\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                totalImg = this.state.totalImg;\n                _context.prev = 1;\n                _context.next = 4;\n                return fetch('/feed/sample.json');\n\n              case 4:\n                promise = _context.sent;\n                _context.next = 7;\n                return promise.json();\n\n              case 7:\n                _ref3 = _context.sent;\n                entries = _ref3.entries;\n                series = entries.filter(function (mov) {\n                  return mov.releaseYear >= 2010 && mov.programType === 'series';\n                }).sort(function (a, b) {\n                  return a.title > b.title;\n                }).slice(0, totalImg);\n\n\n                this.setState({ series: series });\n                _context.next = 16;\n                break;\n\n              case 13:\n                _context.prev = 13;\n                _context.t0 = _context['catch'](1);\n\n                this.setState({ error: true });\n\n              case 16:\n              case 'end':\n                return _context.stop();\n            }\n          }\n        }, _callee, this, [[1, 13]]);\n      }));\n\n      function componentDidMount() {\n        return _ref2.apply(this, arguments);\n      }\n\n      return componentDidMount;\n    }()\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var _state = this.state,\n          series = _state.series,\n          error = _state.error,\n          loadingFinished = _state.loadingFinished,\n          percentage = _state.percentage;\n\n\n      if (!series && error) {\n        return _react2.default.createElement(\n          'div',\n          { className: 'grid content' },\n          'Oops, something went wrong...'\n        );\n      }\n\n      return _react2.default.createElement(\n        'div',\n        { className: 'grid content' },\n        _react2.default.createElement(\n          'div',\n          {\n            className: !series || !loadingFinished ? 'loading' : 'loading hidden'\n          },\n          'Loading ',\n          percentage,\n          '%'\n        ),\n        series && series.map(function (serie, i) {\n          return _react2.default.createElement(_components.Card, {\n            title: serie.title,\n            img: serie.images['Poster Art'].url,\n            key: 'serie-' + i,\n            setPercentage: _this2.setPercentage,\n            isLoaded: loadingFinished\n          });\n        })\n      );\n    }\n  }]);\n\n  return Series;\n}(_react2.default.Component);\n\nexports.default = Series;",
dependencies: ["react","../components"],
sourceMap: "{\"version\":3,\"sources\":[\"/pages/Series.jsx\"],\"names\":[\"Series\",\"state\",\"series\",\"error\",\"percentage\",\"imgLoaded\",\"totalImg\",\"loadingFinished\",\"setPercentage\",\"Math\",\"round\",\"setState\",\"props\",\"setTitle\",\"fetch\",\"promise\",\"json\",\"entries\",\"filter\",\"mov\",\"releaseYear\",\"programType\",\"sort\",\"a\",\"b\",\"title\",\"slice\",\"map\",\"serie\",\"i\",\"images\",\"url\",\"Component\"],\"mappings\":\";;;;;;;;AAAA;;;;AACA;;;;;;;;;;;;IAEqBA,M;;;;;;;;;;;;;;sLACnBC,K,GAAQ;AACNC,cAAQ,IADF;AAENC,aAAO,KAFD;AAGNC,kBAAY,CAHN;AAINC,iBAAW,CAJL;AAKNC,gBAAU,EALJ;AAMNC,uBAAiB;AANX,K,QAaRC,a,GAAgB,YAAM;AACpB,UAAMH,YAAY,MAAKJ,KAAL,CAAWI,SAAX,GAAuB,CAAzC;AACA,UAAMD,aAAaK,KAAKC,KAAL,CAAWL,YAAY,MAAKJ,KAAL,CAAWK,QAAvB,GAAkC,GAA7C,CAAnB;AACA,UAAIC,kBAAkB,KAAtB;AACA,UAAIF,cAAc,MAAKJ,KAAL,CAAWK,QAA7B,EAAuCC,kBAAkB,IAAlB;;AAEvC,YAAKI,QAAL,CAAc,EAAEN,oBAAF,EAAaD,sBAAb,EAAyBG,gCAAzB,EAAd;AACD,K;;;;;yCAXoB;AACnB,WAAKK,KAAL,CAAWC,QAAX,CAAoB,gBAApB;AACD;;;;;;;;;;;AAYSP,wB,GAAa,KAAKL,K,CAAlBK,Q;;;uBAGgBQ,MAAM,mBAAN,C;;;AAAhBC,uB;;uBACoBA,QAAQC,IAAR,E;;;;AAAlBC,uB,SAAAA,O;AAEFf,sB,GAASe,QACZC,MADY,CACL;AAAA,yBAAOC,IAAIC,WAAJ,IAAmB,IAAnB,IAA2BD,IAAIE,WAAJ,KAAoB,QAAtD;AAAA,iBADK,EAEZC,IAFY,CAEP,UAACC,CAAD,EAAIC,CAAJ;AAAA,yBAAUD,EAAEE,KAAF,GAAUD,EAAEC,KAAtB;AAAA,iBAFO,EAGZC,KAHY,CAGN,CAHM,EAGHpB,QAHG,C;;;AAKf,qBAAKK,QAAL,CAAc,EAAET,cAAF,EAAd;;;;;;;;AAEA,qBAAKS,QAAL,CAAc,EAAER,OAAO,IAAT,EAAd;;;;;;;;;;;;;;;;;;6BAIK;AAAA;;AAAA,mBACgD,KAAKF,KADrD;AAAA,UACCC,MADD,UACCA,MADD;AAAA,UACSC,KADT,UACSA,KADT;AAAA,UACgBI,eADhB,UACgBA,eADhB;AAAA,UACiCH,UADjC,UACiCA,UADjC;;;AAGP,UAAI,CAACF,MAAD,IAAWC,KAAf,EAAsB;AACpB,eAAO;AAAA;AAAA,YAAK,WAAU,cAAf;AAAA;AAAA,SAAP;AACD;;AAED,aACE;AAAA;AAAA,UAAK,WAAU,cAAf;AACE;AAAA;AAAA;AACE,uBAAW,CAACD,MAAD,IAAW,CAACK,eAAZ,GAA8B,SAA9B,GAA0C;AADvD;AAAA;AAGWH,oBAHX;AAAA;AAAA,SADF;AAMGF,kBACCA,OAAOyB,GAAP,CAAW,UAACC,KAAD,EAAQC,CAAR;AAAA,iBACT;AACE,mBAAOD,MAAMH,KADf;AAEE,iBAAKG,MAAME,MAAN,CAAa,YAAb,EAA2BC,GAFlC;AAGE,4BAAcF,CAHhB;AAIE,2BAAe,OAAKrB,aAJtB;AAKE,sBAAUD;AALZ,YADS;AAAA,SAAX;AAPJ,OADF;AAmBD;;;;EAnEiC,gBAAMyB,S;;kBAArBhC,M\",\"file\":\"pages/Series.jsx\",\"sourcesContent\":[\"import React from 'react';\\r\\nimport { Card } from '../components';\\r\\n\\r\\nexport default class Series extends React.Component {\\r\\n  state = {\\r\\n    series: null,\\r\\n    error: false,\\r\\n    percentage: 0,\\r\\n    imgLoaded: 0,\\r\\n    totalImg: 26,\\r\\n    loadingFinished: false,\\r\\n  };\\r\\n\\r\\n  componentWillMount() {\\r\\n    this.props.setTitle('Popular Series');\\r\\n  }\\r\\n\\r\\n  setPercentage = () => {\\r\\n    const imgLoaded = this.state.imgLoaded + 1;\\r\\n    const percentage = Math.round(imgLoaded / this.state.totalImg * 100);\\r\\n    let loadingFinished = false;\\r\\n    if (imgLoaded === this.state.totalImg) loadingFinished = true;\\r\\n\\r\\n    this.setState({ imgLoaded, percentage, loadingFinished });\\r\\n  };\\r\\n\\r\\n  async componentDidMount() {\\r\\n    const { totalImg } = this.state;\\r\\n\\r\\n    try {\\r\\n      const promise = await fetch('/feed/sample.json');\\r\\n      const { entries } = await promise.json();\\r\\n\\r\\n      const series = entries\\r\\n        .filter(mov => mov.releaseYear >= 2010 && mov.programType === 'series')\\r\\n        .sort((a, b) => a.title > b.title)\\r\\n        .slice(0, totalImg);\\r\\n\\r\\n      this.setState({ series });\\r\\n    } catch (err) {\\r\\n      this.setState({ error: true });\\r\\n    }\\r\\n  }\\r\\n\\r\\n  render() {\\r\\n    const { series, error, loadingFinished, percentage } = this.state;\\r\\n\\r\\n    if (!series && error) {\\r\\n      return <div className=\\\"grid content\\\">Oops, something went wrong...</div>;\\r\\n    }\\r\\n\\r\\n    return (\\r\\n      <div className=\\\"grid content\\\">\\r\\n        <div\\r\\n          className={!series || !loadingFinished ? 'loading' : 'loading hidden'}\\r\\n        >\\r\\n          Loading {percentage}%\\r\\n        </div>\\r\\n        {series &&\\r\\n          series.map((serie, i) => (\\r\\n            <Card\\r\\n              title={serie.title}\\r\\n              img={serie.images['Poster Art'].url}\\r\\n              key={`serie-${i}`}\\r\\n              setPercentage={this.setPercentage}\\r\\n              isLoaded={loadingFinished}\\r\\n            />\\r\\n          ))}\\r\\n      </div>\\r\\n    );\\r\\n  }\\r\\n}\\r\\n\"]}",
headerContent: undefined,
mtime: 1511749191346,
devLibsRequired : undefined,
_ : {}
}