import React from "react";

import InputField from "./input-field";

const ModelForm = (props) => {
  const {
    carMakes, carModels, saveMake, saveModel, makeSelected, modelSelected, showSummary
  } = props;
  return (
    <div className="formContainer">
      <h2 className="font-bold text-2xl text-grey-500">
        Make & Model
      </h2>
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

export default ModelForm;
