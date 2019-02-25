import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Strip = ({ id, type, remove, move, canMoveUp, canMoveDown }) => (
  <section className="p-strip">
    {type === "normal" && (
      <div className="row">
        <h1>Lorem ipsum</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
          dolore tempore vero cumque quibusdam nobis vel mollitia repellendus
          expedita sit, deserunt explicabo aspernatur ipsa at est sed
          perferendis fugiat porro officia? Libero consectetur incidunt ad
          inventore, ut exercitationem, reprehenderit cupiditate laboriosam
          veritatis, laudantium minus velit unde perferendis ipsam earum quis!
        </p>
      </div>
    )}
    {type === "image" && (
      <Fragment>
        <div className="row">
          <h1>Lorem ipsum</h1>
        </div>
        <div className="row">
          <div className="col-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
          <div className="col-6">
            <img
              src="http://suplugins.com/podium/images/placeholder-05.jpg"
              alt=""
            />
          </div>
        </div>
      </Fragment>
    )}
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
