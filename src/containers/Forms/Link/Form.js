import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import Input from 'components/Link/Input';
import { ADD_LINK_FORM } from 'modules/link/constant';

const LinkForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field
      id="link"
      name="link"
      placeholder="Add a link to your topic"
      component={Input}
    />
  </form>
);

LinkForm.propTypes = {
  onSave: PropTypes.func,
  title: PropTypes.string
};

LinkForm.defaultProps = {
  title: ''
};

export default reduxForm({
  form: ADD_LINK_FORM
})(LinkForm);
