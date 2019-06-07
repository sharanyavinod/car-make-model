import React from "react";

const Summary = ({ show, make, model }) => {
  return (show ? (
    <div className="summary">
      <h4>Keys selected</h4>
      <p>Make:<span>{make}</span></p>
      <p>Model:<span>{model}</span></p>

    </div>
  ) : "");
};

export default Summary;
