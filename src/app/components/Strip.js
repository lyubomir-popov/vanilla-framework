import React, { Fragment } from "react";
import PropTypes from "prop-types";

import strips from "../strips";

const Strip = ({ id, type, remove, move, canMoveUp, canMoveDown }) => (
  <section className="p-strip">
    {strips.find(strip => strip.type === type).jsx}
    <button
      type="button"
      className="p-button--base remove-button u-no-margin"
      onClick={() => remove(id)}
    >
      <i className="p-icon--close" />
    </button>
    {move && (
      <Fragment>
        {canMoveUp && (
          <button
            type="button"
            className="p-button--base move-up-button u-no-margin"
            onClick={() => move(id, "up")}
          >
            <i className="p-icon--chevron u-mirror--y" />
          </button>
        )}
        {canMoveDown && (
          <button
            type="button"
            className="p-button--base move-down-button u-no-margin"
            onClick={() => move(id, "down")}
          >
            <i className="p-icon--chevron" />
          </button>
        )}
      </Fragment>
    )}
  </section>
);

Strip.propTypes = {
  canMoveDown: PropTypes.bool.isRequired,
  canMoveUp: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  move: PropTypes.func,
  remove: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};

Strip.defaultProps = {
  move: undefined
};

export default Strip;
