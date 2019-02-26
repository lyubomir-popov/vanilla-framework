import React, { Component } from "react";
import PropTypes from "prop-types";

import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Strip from "../components/Strip";
import GhostStrip from "../components/GhostStrip";

class Container extends Component {
  generateStrips = () => {
    const { strips, removeStrip, moveStrip, changeStripType } = this.props;
    return strips.map((strip, index) => (
      <Strip
        key={strip.id}
        id={strip.id}
        type={strip.type}
        subtype={strip.subtype}
        remove={removeStrip}
        changeType={changeStripType}
        move={strips.length >= 2 ? moveStrip : undefined}
        canMoveUp={index !== 0}
        canMoveDown={index !== strips.length - 1}
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
          <GhostStrip addStrip={addStrip} />
          <Footer />
        </div>
      </div>
    );
  };
}

Container.propTypes = {
  addStrip: PropTypes.func.isRequired,
  moveStrip: PropTypes.func.isRequired,
  removeStrip: PropTypes.func.isRequired,
  changeStripType: PropTypes.func.isRequired,
  strips: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Container;
