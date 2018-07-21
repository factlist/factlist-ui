import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { TextField } from 'components/Form'
import { required } from 'core/validationRules'
import { CHANGE_PASSWORD_FORM } from 'modules/user/constants'
import Button from 'components/Button'

const ChangePasswordForm = ({
  handleSubmit,
  submitting,
}) => (
  <form onSubmit={handleSubmit}>
    <Field
      type="password"
      id="password_change_password"
      name="password"
      label="Password"
      autoComplete="password"
      validate={[ required ]}
      component={TextField} />

    <Button
      type="submit"
      disabled={submitting}>
      {submitting ? 'Submitting...' : 'Submit'}
    </Button>
  </form>
)

export default reduxForm({
  form: CHANGE_PASSWORD_FORM,
})(ChangePasswordForm)