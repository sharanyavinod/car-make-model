import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as Actions from '../actions';

import ModelForm from "./model-form";
import Summary from "./summary";

class Container extends Component {
  componentDidMount() {
    const { fetchMake } = this.props;
    fetchMake();
  }

  render() {
    const {
      makeSelected, modelSelected, isSummaryAvailable
    } = this.props;

    return (
      <div>
        <h1 className="title">Manual listing</h1>
        <ModelForm {...this.props }/>
        <Summary
          show={isSummaryAvailable}
          make={makeSelected}
          model={modelSelected} />
      </div>
    );
  }
}

Container.propTypes = {
  makeSelected: PropTypes.string,
  modelSelected: PropTypes.string, 
  isSummaryAvailable: PropTypes.bool

};

const mapStateToProps = (data) => ({
  carMakes: data.carMakes,
  carModels: data.carModels,
  makeSelected: data.makeSelected,
  modelSelected: data.modelSelected,
  errorMsg: data.error,
  isSummaryAvailable: data.isSummaryAvailable
});

const mapDispatchToProps = (dispatch)  => ({
  fetchMake: () => dispatch(Actions.fetchMake()),
  saveMake: (value) => dispatch(Actions.saveMake(value)),
  saveModel: (value) => dispatch(Actions.saveModel(value)),
  showSummary: () => dispatch(Actions.showSummary())
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
