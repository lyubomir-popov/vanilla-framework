import React from "react";

const Footer = () => (
  <footer className="p-footer">
    <nav className="p-footer__nav row">
      <ul className="p-footer__links">
        <li className="p-footer__item">
          <a className="p-footer__link" href="#a">
            Footer link 1
          </a>
        </li>
        <li className="p-footer__item">
          <a className="p-footer__link" href="#a">
            Footer link 2
          </a>
        </li>
        <li className="p-footer__item">
          <a className="p-footer__link" href="#a">
            Footer link 3
          </a>
        </li>
        <li className="p-footer__item">
          <a className="p-footer__link" href="#a">
            Footer link 4
          </a>
        </li>
      </ul>
      <span className="u-off-screen">
        <a href="#a">Go to the top of the page</a>
      </span>
    </nav>
  </footer>
);

export default Footer;
