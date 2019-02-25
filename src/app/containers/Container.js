import React, { Component } from "react";
import PropTypes from "prop-types";

import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Strip from "../components/Strip";

class Container extends Component {
  generateStrips = () => {
    const { strips, removeStrip } = this.props;
    return strips.map(strip => (
      <Strip
        key={strip.id}
        id={strip.id}
        type={strip.type}
        remove={removeStrip}
      />
    ));
  };

  render = () => {
    const { addStrip } = this.props;
    return (
      <div>
        <div className="container">
          <Nav />
          {this.generateStrips()}
          <Footer />
        </div>
        <div className="p-strip is-shallow">
          <div className="row">
            <button
              className="p-button--positive"
              type="button"
              onClick={() => addStrip("normal")}
            >
              Add normal strip
            </button>
            <button
              className="p-button--positive"
              type="button"
              onClick={() => addStrip("image")}
            >
              Add image strip
            </button>
          </div>
        </div>
      </div>
    );
  };
}

Container.propTypes = {
  addStrip: PropTypes.func.isRequired,
  removeStrip: PropTypes.func.isRequired,
  strips: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Container;
