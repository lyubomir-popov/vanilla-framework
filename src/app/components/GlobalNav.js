import React from "react";

const GlobalNav = () => (
  <header className="global-nav">
    <div className="global-nav__row">
      <div className="global-nav__logo">Madagascar</div>
      <div className="global-nav__buttons">
        <button
          type="button"
          onClick={() => null}
          className="p-button--positive"
        >
          Export
        </button>
      </div>
    </div>
  </header>
);

export default GlobalNav;
