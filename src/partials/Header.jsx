import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="header__title">DEMO Streaming</h1>
      </Link>
      <nav className="header-nav">
        <a className="header-nav__item" href="#0">
          Log In
        </a>
        <a className="header-nav__item header-nav__item--important" href="#0">
          Start your free trial
        </a>
      </nav>
    </header>
  );
}
