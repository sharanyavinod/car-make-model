import React from "react";

const InputField = ({ label, values, id, saveSelected, disabled }) => {

  const options = values.map(value => {
    const {id, key, name } = value;
    return (
      <option id={id} value={key}>{name}</option>
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

export default InputField;
