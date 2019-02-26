import React from "react";
import PropTypes from "prop-types";

const GlobalNav = ({ editing, toggleEditing, generateMarkup }) => (
  <header className="global-nav">
    <div className="global-nav__row">
      <div className="global-nav__logo">Madagascar</div>
      <div className="global-nav__buttons">
        <button
          type="button"
          onClick={() => toggleEditing()}
          className="p-button--link u-no-margin--bottom"
        >
          {editing ? "Preview" : "Edit"}
        </button>
        <button
          type="button"
          onClick={() => generateMarkup()}
          className="p-button--positive"
        >
          Export
        </button>
      </div>
    </div>
  </header>
);

GlobalNav.propTypes = {
  editing: PropTypes.bool.isRequired,
  generateMarkup: PropTypes.func.isRequired,
  toggleEditing: PropTypes.func.isRequired
};

export default GlobalNav;
