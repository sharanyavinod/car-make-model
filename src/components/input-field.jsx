import React from "react";
import PropTypes from 'prop-types';

const InputField = ({ label, values, id, saveSelected, disabled }) => {

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
        <option>{label}</option>
        {options}
      </select>
    </div>
  );
};

InputField.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  key: PropTypes.string
};

export default InputField;
