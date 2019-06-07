import React from "react";
import PropTypes from 'prop-types';

import InputField from "./input-field";

const ModelForm = (props) => {
  const {
    carMakes,
    carModels,
    saveMake,
    saveModel,
    makeSelected,
    modelSelected,
    showSummary
  } = props;

  return (
    <div className="formContainer">
      <InputField
        id="make"
        label="Select a make"
        saveSelected={saveMake}
        values={carMakes} />
      <InputField
        disabled={!carModels.length}
        id="model"
        label="Select a model"
        saveSelected={saveModel}
        values={carModels} />
      <button
       className="primaryBtn"
       onClick={showSummary}
       disabled={!(makeSelected && modelSelected)}>Continue</button>
    </div>
  );
};

ModelForm.propTypes = {
  carMakes: PropTypes.array, 
  carModels: PropTypes.array,
  saveMake: PropTypes.func,
  saveModel: PropTypes.func,
  makeSelected: PropTypes.string,
  modelSelected: PropTypes.string,
  showSummary: PropTypes.func
};

export default ModelForm;
