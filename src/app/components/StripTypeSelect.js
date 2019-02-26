import React from "react";
import PropTypes from "prop-types";

const StripTypeSelect = ({ selected, onChange, options }) => (
  <select value={selected} onChange={onChange}>
    {options.map(option => (
      <option key={option.value} value={option.value}>
        {option.name}
      </option>
    ))}
  </select>
);

StripTypeSelect.propTypes = {
  selected: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default StripTypeSelect;
