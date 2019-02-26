import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import strips from "../strips";
import StripTypeSelect from "../components/StripTypeSelect";

class Strip extends Component {
  state = {
    selectedType: undefined,
    selectedSubtype: undefined,
    border: false
  };

  static getDerivedStateFromProps = (props, state) => {
    if (props.type !== state.selectedType) {
      if (props.subtype !== state.selectedSubtype) {
        return { selectedType: props.type, selectedSubtype: props.subtype };
      }
      return { selectedType: props.type };
    }
    return null;
  };

  selectType = e => {
    const { id, changeType } = this.props;
    changeType(id, e.target.value);
    this.setState({ selectedType: e.target.value });
  };

  selectSubtype = e => {
    const { id, changeSubtype } = this.props;
    changeSubtype(id, e.target.value);
    this.setState({ selectedSubtype: e.target.value });
  };

  getStripJSX = () => {
    const { type, subtype } = this.props;
    const stripType = strips.find(item => item.type === type);
    const stripSubType = stripType.subtypes.find(item => item.name === subtype);

    return stripSubType.jsx;
  };

  toggleBorder = () => {
    const { border } = this.state;
    this.setState({ border: !border });
  };

  render = () => {
    const { selectedType, selectedSubtype, border } = this.state;
    const {
      id,
      move,
      remove,
      canMoveUp,
      canMoveDown,
      type,
      editing
    } = this.props;
    const stripType = strips.find(item => item.type === type);

    return (
      <section className="strip-container">
        <div className={`p-strip ${border ? "pseudo-border" : ""}`}>
          {this.getStripJSX()}
        </div>
        {editing && (
          <div className="strip-controls">
            <StripTypeSelect
              selected={selectedType}
              options={strips.map(strip => ({
                name: strip.name,
                value: strip.type
              }))}
              onChange={this.selectType}
            />
            <StripTypeSelect
              selected={selectedSubtype}
              options={stripType.subtypes.map(subtype => ({
                name: subtype.name,
                value: subtype.name
              }))}
              onChange={this.selectSubtype}
            />
            <div>
              <label className="p-checkbox">
                <span className="p-checkbox__text">Border</span>
                <input
                  className="p-checkbox__input"
                  type="checkbox"
                  onChange={this.toggleBorder}
                  checked={border}
                />
                <span className="p-checkbox__box" />
              </label>
            </div>
            <div>
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
          </div>
        )}
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
  changeType: PropTypes.func.isRequired,
  changeSubtype: PropTypes.func.isRequired,
  editing: PropTypes.bool.isRequired
};

Strip.defaultProps = {
  move: undefined
};

export default Strip;
