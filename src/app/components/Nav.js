import React from "react";

const Nav = () => (
  <header id="navigation" className="p-navigation">
    <div className="row">
      <div className="p-navigation__banner">
        <div className="p-navigation__logo">
          <a className="p-navigation__link" href="#a">
            <img
              className="p-navigation__image"
              src="https://assets.ubuntu.com/v1/d96d86b5-vanilla_black-orange_hex.svg"
              alt=""
              width="95"
            />
          </a>
        </div>
        <a
          href="#navigation"
          className="p-navigation__toggle--open"
          title="menu"
        >
          Menu
        </a>
        <a
          href="#navigation-closed"
          className="p-navigation__toggle--close"
          title="close menu"
        >
          Close menu
        </a>
      </div>
      <nav className="p-navigation__nav">
        <form className="p-search-box" action="/search">
          <input
            type="search"
            className="p-search-box__input"
            name="q"
            placeholder="Search"
            required=""
          />
          <button type="button" className="p-search-box__button" alt="search">
            <i className="p-icon--search" />
          </button>
        </form>
        <span className="u-off-screen">
          <a href="#main-content">Jump to main content</a>
        </span>
        <ul className="p-navigation__links" role="menu">
          <li className="p-navigation__link is-selected" role="menuitem">
            <a href="#a">Link1</a>
          </li>
          <li className="p-navigation__link" role="menuitem">
            <a href="#a">Link2</a>
          </li>
          <li className="p-navigation__link" role="menuitem">
            <a href="#a">Link3</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Nav;
