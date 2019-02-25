import React, { Fragment } from 'react';
import PropTypes from "prop-types";

const Strip = ({ id, type, remove }) => (
  <section className="p-strip">
    <div className="row">
      {type === "normal" && (
        <Fragment>
          <h1>Lorem ipsum</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem dolore tempore vero cumque quibusdam nobis vel mollitia repellendus expedita sit, deserunt explicabo aspernatur ipsa at est sed perferendis fugiat porro officia? Libero consectetur incidunt ad inventore, ut exercitationem, reprehenderit cupiditate laboriosam veritatis, laudantium minus velit unde perferendis ipsam earum quis!</p>
        </Fragment>
      )}
      {type === "image" && (
        <Fragment>
          <div className="col-6">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          </div>
          <div className="col-6">
            <img src="http://suplugins.com/podium/images/placeholder-05.jpg" alt="" />
          </div>
        </Fragment>
      )}
    </div>
    <button type="button" className="p-button--base remove-button u-no-margin" onClick={() => remove(id)}>
      <i className="p-icon--close" />
    </button>
  </section>
);

Strip.propTypes = {
  id: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
}

export default Strip;
