import React, { Component } from "react";
import PropTypes from "prop-types";

import strips from "../strips";

class Dropdown extends Component {
  state = {
    open: false
  };

  toggleOpen = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  handleClick = (type, subtype) => {
    const { addStrip } = this.props;
    this.toggleOpen();
    addStrip(type, subtype);
  };

  render = () => {
    const { open } = this.state;

    return (
      <div className="dropdown">
        <button
          type="button"
          className="p-button--positive u-no-margin"
          onClick={() => this.toggleOpen()}
        >
          <span>Add strip</span>
          <i
            className={`p-icon--chevron is-light ${open ? "u-mirror--y" : ""}`}
            style={{ marginLeft: "1rem" }}
          />
        </button>
        {open && (
          <div className="dropdown__menu">
            <ul className="p-list u-no-margin--bottom">
              {strips.map(strip => (
                <li key={strip.name} className="p-list__item">
                  <button
                    type="button"
                    className="p-button--list"
                    onClick={() =>
                      this.handleClick(strip.type, strip.subtypes[0].name)
                    }
                  >
                    {strip.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };
}

Dropdown.propTypes = {
  addStrip: PropTypes.func.isRequired
};

export default Dropdown;
