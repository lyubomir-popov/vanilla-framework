import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import strips from "../strips";
import StripTypeSelect from "./StripTypeSelect";

class Strip extends Component {
  state = {
    selectedType: undefined
  };

  static getDerivedStateFromProps = (props, state) => {
    if (props.type !== state.selectedType) {
      return { selectedType: props.type };
    }
    return null;
  };

  handleSelect = e => {
    const { id, changeType } = this.props;
    changeType(id, e.target.value);
    this.setState({ selectedType: e.target.value });
  };

  getStripJSX = () => {
    const { type, subtype } = this.props;
    const stripType = strips.find(item => item.type === type);
    const stripSubType = stripType.subtypes.find(item => item.name === subtype);

    return stripSubType.jsx;
  };

  render = () => {
    const { selectedType } = this.state;
    const { id, move, remove, canMoveUp, canMoveDown } = this.props;

    return (
      <section className="strip-container">
        <div className="p-strip">
          {this.getStripJSX()}
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
        </div>
        <div className="strip-controls">
          <StripTypeSelect
            selected={selectedType}
            options={strips.map(strip => ({
              name: strip.name,
              value: strip.type
            }))}
            onChange={this.handleSelect}
          />
        </div>
      </section>
    );
  };
}

Strip.propTypes = {
  canMoveDown: PropTypes.bool.isRequired,
  canMoveUp: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  move: PropTypes.func,
  remove: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  subtype: PropTypes.string.isRequired,
  changeType: PropTypes.func.isRequired
};

Strip.defaultProps = {
  move: undefined
};

export default Strip;
