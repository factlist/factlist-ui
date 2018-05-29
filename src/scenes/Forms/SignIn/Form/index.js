import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Flex, Box } from 'grid-styled'
import { required, email } from 'utils/validationRules'
import { TextField } from 'components/Form'
import Container from './Container'
import CreateAccountLink from './CreateAccountLink'
import PasswordResetLink from './PasswordResetLink'
import Button from './Button'

const Form = ({
  handleSubmit, authenticating, invalid, pristine
}) => (
  <Container>
    <form onSubmit={handleSubmit}>
      <Flex column>
        <Box>
          <Field
            type="text"
            id="sign_in_email"
            name="email"
            label="Email"
            autoComplete="email"
            validate={[ required, email ]}
            component={TextField} />
        </Box>

        <Box mt={20}>
          <Field
            type="password"
            id="sign_in_password"
            name="password"
            label="Password"
            autoComplete="current-password"
            validate={[ required ]}
            component={TextField} />
        </Box>
      </Flex>

      <PasswordResetLink />

      <Flex column align="flex-end">
        <Box>
          <Button
            type="submit"
            disabled={authenticating || invalid || pristine}>
            {authenticating ? 'Loading...' : 'Sign In'}
          </Button>
        </Box>
        <Box mt={12}>
          <CreateAccountLink />
        </Box>
      </Flex>
    </form>
  </Container>
)

export default reduxForm({
  form: 'SignInForm'
})(Form)
