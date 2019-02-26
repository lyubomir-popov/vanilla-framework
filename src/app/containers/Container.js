import React, { Component } from "react";
import PropTypes from "prop-types";

import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Strip from "./Strip";
import GhostStrip from "./GhostStrip";

class Container extends Component {
  generateStrips = () => {
    const {
      strips,
      removeStrip,
      moveStrip,
      changeStripType,
      changeStripSubtype,
      editing
    } = this.props;
    return strips.map((strip, index) => (
      <Strip
        editing={editing}
        key={strip.id}
        id={strip.id}
        type={strip.type}
        name={strip.name}
        subtype={strip.subtype}
        remove={removeStrip}
        changeType={changeStripType}
        changeSubtype={changeStripSubtype}
        move={strips.length >= 2 ? moveStrip : undefined}
        canMoveUp={index !== 0}
        canMoveDown={index !== strips.length - 1}
      />
    ));
  };

  render = () => {
    const { addStrip, editing } = this.props;
    return (
      <div>
        <div className="container">
          <Nav />
          {this.generateStrips()}
          {editing && <GhostStrip addStrip={addStrip} />}
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
  changeStripSubtype: PropTypes.func.isRequired,
  strips: PropTypes.arrayOf(PropTypes.object).isRequired,
  editing: PropTypes.bool.isRequired
};

export default Container;
