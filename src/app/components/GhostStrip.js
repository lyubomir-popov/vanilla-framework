import React from "react";
import PropTypes from "prop-types";

import Dropdown from "./Dropdown";

const GhostStrip = ({ addStrip }) => (
  <div className="p-strip">
    <div className="row">
      <div className="ghost-strip">
        <Dropdown addStrip={addStrip} />
      </div>
    </div>
  </div>
);

GhostStrip.propTypes = {
  addStrip: PropTypes.func.isRequired
};

export default GhostStrip;
