module.exports = { contents: "'use strict';\n\nvar _react = require('react');\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = require('react-dom');\n\nrequire('./styles/index.css');\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar h1 = _react2.default.createElement(\n  'h1',\n  null,\n  'Hello world'\n);\n\n(0, _reactDom.render)(h1, document.getElementById('root'));",
dependencies: ["react","react-dom","./styles/index.css"],
sourceMap: "{\"version\":3,\"sources\":[\"/index.js\"],\"names\":[\"h1\",\"document\",\"getElementById\"],\"mappings\":\";;AAAA;;;;AACA;;AAEA;;;;AAEA,IAAMA,KAAK;AAAA;AAAA;AAAA;AAAA,CAAX;;AAEA,sBAAOA,EAAP,EAAWC,SAASC,cAAT,CAAwB,MAAxB,CAAX\",\"file\":\"index.js\",\"sourcesContent\":[\"import React from 'react';\\r\\nimport { render } from 'react-dom';\\r\\n\\r\\nimport './styles/index.css';\\r\\n\\r\\nconst h1 = <h1>Hello world</h1>;\\r\\n\\r\\nrender(h1, document.getElementById('root'));\\r\\n\"]}",
headerContent: undefined,
mtime: 1511735162851,
devLibsRequired : undefined,
_ : {}
}
