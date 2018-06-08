//SurveyFormReview, shows users their form inputs for review.
import _ from 'lodash';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import formFields from './formFields';

import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formsValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formsValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5> Please confirm your entries</h5>
      <div />
      {reviewFields}
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        onClick={() => submitSurvey(formsValues, history)}
        className="green btn-flat right white-text"
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

//This function pulls down our state from redux store and change them to props so we can pass the props to our component using the connect function below.
//The name we call this function doesn't matter, but by convention it is called mapStateToProps and takes state as args.
function mapStateToProps(state) {
  return { formsValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
