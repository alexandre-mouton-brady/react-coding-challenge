module.exports = { contents: "'use strict';\n\nvar _react = require('react');\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _App = require('./App');\n\nvar _reactDom = require('react-dom');\n\nvar _reactRouterDom = require('react-router-dom');\n\nrequire('./styles/index.css');\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _reactDom.render)(_react2.default.createElement(\n  _reactRouterDom.BrowserRouter,\n  null,\n  _react2.default.createElement(_App.App, null)\n), document.getElementById('root'));",
dependencies: ["react","./App","react-dom","react-router-dom","./styles/index.css"],
sourceMap: "{\"version\":3,\"sources\":[\"/index.js\"],\"names\":[\"document\",\"getElementById\"],\"mappings\":\";;AAAA;;;;AACA;;AACA;;AACA;;AAEA;;;;AAEA,sBACE;AAAA;AAAA;AACE;AADF,CADF,EAIEA,SAASC,cAAT,CAAwB,MAAxB,CAJF\",\"file\":\"index.js\",\"sourcesContent\":[\"import React from 'react';\\r\\nimport { App } from './App';\\r\\nimport { render } from 'react-dom';\\r\\nimport { BrowserRouter as Router, Link, Route } from 'react-router-dom';\\r\\n\\r\\nimport './styles/index.css';\\r\\n\\r\\nrender(\\r\\n  <Router>\\r\\n    <App />\\r\\n  </Router>,\\r\\n  document.getElementById('root'),\\r\\n);\\r\\n\"]}",
headerContent: undefined,
mtime: 1511737213295,
devLibsRequired : undefined,
_ : {}
}
