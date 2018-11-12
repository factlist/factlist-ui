import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { TextField } from 'components/Form'
import { Flex, Box } from '@rebass/grid'
import { FORGOT_PASSWORD_FORM } from 'modules/user/constants'
import { required, email } from 'core/validationRules'
import Button from 'components/Button'

const PasswordResetForm = ({
  handleSubmit,
  submitting,
}) => (
    <form onSubmit={handleSubmit}>
      <Flex flexDirection="column">
        <Box>
          <Field
            type="text"
            id="password_reset_email"
            name="email"
            label="Email"
            autoComplete="email"
            validate={[required, email]}
            component={TextField} />
        </Box>
        <Box alignSelf="flex-end" mt={10}>
          <Button
            type='submit'
            disabled={submitting}>
            {submitting ? 'Submitting...' : 'Submit'}
          </Button>
        </Box>
      </Flex>
    </form>
  )

export default reduxForm({
  form: FORGOT_PASSWORD_FORM,
})(PasswordResetForm)
