import React from 'react'
import { Flex, Box } from '@rebass/grid'
import { reduxForm, Field } from 'redux-form'
import { TextField } from 'components/Form'
import { required } from 'utils/validationRules'
import { CHANGE_PASSWORD_FORM } from 'modules/user/constants'
import Button from 'components/Button'

const ChangePasswordForm = ({
  handleSubmit,
  submitting,
}) => (
    <form onSubmit={handleSubmit}>
      <Flex flexDirection="column" width={420}>
        <Box>
          <Field
            type="password"
            id="password_change_password"
            name="password"
            label="Password"
            autoComplete="password"
            validate={[required]}
            component={TextField} />
        </Box>
        <Box mt={10} alignSelf="flex-end">
          <Button
            type="submit"
            disabled={submitting}>
            {submitting ? 'Submitting...' : 'Submit'}
          </Button>
        </Box>
      </Flex>
    </form>
  )

export default reduxForm({
  form: CHANGE_PASSWORD_FORM,
})(ChangePasswordForm)
