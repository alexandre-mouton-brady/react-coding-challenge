module.exports = { contents: "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = Header;\n\nvar _react = require('react');\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = require('react-router-dom');\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction Header() {\n  return _react2.default.createElement(\n    'header',\n    { className: 'header' },\n    _react2.default.createElement(\n      _reactRouterDom.Link,\n      { to: '/' },\n      _react2.default.createElement(\n        'h1',\n        { className: 'header__title' },\n        'DEMO Streaming'\n      )\n    ),\n    _react2.default.createElement(\n      'nav',\n      { className: 'header-nav' },\n      _react2.default.createElement(\n        'a',\n        { className: 'header-nav__item', href: '#0' },\n        'Log In'\n      ),\n      _react2.default.createElement(\n        'a',\n        { className: 'header-nav__item header-nav__item--important', href: '#0' },\n        'Start your free trial'\n      )\n    )\n  );\n}",
dependencies: ["react","react-router-dom"],
sourceMap: "{\"version\":3,\"sources\":[\"/partials/Header.jsx\"],\"names\":[\"Header\"],\"mappings\":\";;;;;kBAGwBA,M;;AAHxB;;;;AACA;;;;AAEe,SAASA,MAAT,GAAkB;AAC/B,SACE;AAAA;AAAA,MAAQ,WAAU,QAAlB;AACE;AAAA;AAAA,QAAM,IAAG,GAAT;AACE;AAAA;AAAA,UAAI,WAAU,eAAd;AAAA;AAAA;AADF,KADF;AAIE;AAAA;AAAA,QAAK,WAAU,YAAf;AACE;AAAA;AAAA,UAAG,WAAU,kBAAb,EAAgC,MAAK,IAArC;AAAA;AAAA,OADF;AAIE;AAAA;AAAA,UAAG,WAAU,8CAAb,EAA4D,MAAK,IAAjE;AAAA;AAAA;AAJF;AAJF,GADF;AAeD\",\"file\":\"partials/Header.jsx\",\"sourcesContent\":[\"import React from 'react';\\r\\nimport { Link } from 'react-router-dom';\\r\\n\\r\\nexport default function Header() {\\r\\n  return (\\r\\n    <header className=\\\"header\\\">\\r\\n      <Link to=\\\"/\\\">\\r\\n        <h1 className=\\\"header__title\\\">DEMO Streaming</h1>\\r\\n      </Link>\\r\\n      <nav className=\\\"header-nav\\\">\\r\\n        <a className=\\\"header-nav__item\\\" href=\\\"#0\\\">\\r\\n          Log In\\r\\n        </a>\\r\\n        <a className=\\\"header-nav__item header-nav__item--important\\\" href=\\\"#0\\\">\\r\\n          Start your free trial\\r\\n        </a>\\r\\n      </nav>\\r\\n    </header>\\r\\n  );\\r\\n}\\r\\n\"]}",
headerContent: undefined,
mtime: 1511746542412,
devLibsRequired : undefined,
_ : {}
}
