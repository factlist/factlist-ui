import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { TextField } from 'components/Form'
import { FORGOT_PASSWORD_FORM } from 'modules/user/constants'
import { required, email } from 'core/validationRules'
import SubmitButton from './SubmitButton'

const PasswordResetForm = ({
  handleSubmit,
  submitting,
}) => (
  <form onSubmit={handleSubmit}>
    <Field
      type="text"
      id="password_reset_email"
      name="email"
      label="Email"
      autoComplete="email"
      validate={[ required, email ]}
      component={TextField} />

    <SubmitButton disabled={submitting}>
      {submitting ? 'Submitting...' : 'Submit'}
    </SubmitButton>
  </form>
)

export default reduxForm({
  form: FORGOT_PASSWORD_FORM,
})(PasswordResetForm)
