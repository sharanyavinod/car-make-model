import React from "react";
import PropTypes from 'prop-types';

/* Custom component for select field */
const SelectField = ({ label, values, id, saveSelected, disabled }) => {

  const options = values.map(value => {
    const {id, key, name } = value;
    return (
      <option key={id} value={key}>{name}</option>
    );
  });

  return (
    <div className="dropdownContainer">
      <label htmlFor={id} hidden>{label} ariaHidden={false}</label>
      <select
        className="dropdown"
        id={id}
        onChange={(e) => saveSelected(e.target.value)}
        disabled={disabled}>
        <option value="">{label}</option>
        {options}
      </select>
    </div>
  );
};

SelectField.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  key: PropTypes.string
};

export default SelectField;
