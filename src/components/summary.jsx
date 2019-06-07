import React from "react";
import PropTypes from 'prop-types';

/* Display the keys fetched and saved, which can be used for further steps, if required*/
const Summary = ({ show, make, model }) => {
  return show && (
    <div className="summary">
      <h4>Keys selected</h4>
      <p>Make:<span>{make}</span></p>
      <p>Model:<span>{model}</span></p>

    </div>
  );
};

Summary.propTypes = {
  show: PropTypes.bool,
  make: PropTypes.string,
  model: PropTypes.string
};

export default Summary;
