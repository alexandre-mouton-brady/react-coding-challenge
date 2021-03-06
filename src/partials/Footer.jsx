import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear;
  const isProd = process.env.node === 'production';
  const infix = isProd ? '/react-coding-challenge/' : '/';

  return (
    <footer className="footer">
      <nav className="footer-nav">
        <Link className="footer-nav__item" to="/">
          Home
        </Link>
        <a className="footer-nav__item" href="#0">
          Termes and Conditions
        </a>
        <a className="footer-nav__item" href="#0">
          Privacy Policy
        </a>
        <a className="footer-nav__item" href="#0">
          Collection Statement
        </a>
        <a className="footer-nav__item" href="#0">
          Help
        </a>
        <a className="footer-nav__item" href="#0">
          Manage Account
        </a>
      </nav>
      <span className="copyright">
        Copyright &copy; {year} DEMO Streaming. All Rights Reserved.
      </span>

      <div className="footer-links">
        <nav className="footer-links__social">
          <img
            className="social"
            src={infix + 'assets/social/facebook-white.svg'}
            alt="facebook"
          />
          <img
            className="social"
            src={infix + 'assets/social/twitter-white.svg'}
            alt="twitter"
          />
          <img
            className="social"
            src={infix + 'assets/social/instagram-white.svg'}
            alt="instagram"
          />
        </nav>

        <nav className="footer-links__store">
          <img
            className="store"
            src={infix + 'assets/store/app-store.svg'}
            alt="Apple Store"
          />
          <img
            className="store"
            src={infix + 'assets/store/play-store.svg'}
            alt="Play Store"
          />
          <img
            className="store"
            src={infix + 'assets/store/windows-store.svg'}
            alt="Windows Store"
          />
        </nav>
      </div>
    </footer>
  );
}
