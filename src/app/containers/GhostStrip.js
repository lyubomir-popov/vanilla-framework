import React, { Component } from "react";
import PropTypes from "prop-types";

import strips from "../strips";

class GhostStrip extends Component {
  handleSelect = e => {
    const { addStrip } = this.props;
    const strip = strips.find(strip => strip.type === e.target.value);

    addStrip(strip.type, strip.subtypes[0].name);
  };

  render = () => {
    return (
      <section className="strip-container">
        <div className="p-strip is-shallow" />
        <div className="strip-controls">
          <select value="" onChange={e => this.handleSelect(e)}>
            <option value="" disabled>
              Add a new strip
            </option>
            {strips.map(option => (
              <option key={option.type} value={option.type}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      </section>
    );
  };
}

GhostStrip.propTypes = {
  addStrip: PropTypes.func.isRequired
};

export default GhostStrip;
