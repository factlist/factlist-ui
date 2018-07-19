import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Flex, Box } from 'grid-styled'
import { required, email } from 'core/validationRules'
import { SIGN_IN_FORM_NAME } from 'modules/auth/constants'
import { TextField } from 'components/Form'
import Container from './Container'
import Button from './Button'
import P from './P'
import A from './A'

const Form = ({
  handleSubmit,
  authenticating,
  invalid,
  pristine,
  onSignUpClick,
  onPasswordResetClick,
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

        <Box>
          <A onClick={onPasswordResetClick}>Forgot password?</A>
        </Box>
      </Flex>

      <Flex column align="flex-end">
        <Box>
          <Button
            type="submit"
            disabled={authenticating || invalid || pristine}>
            {authenticating ? 'Loading...' : 'Sign In'}
          </Button>
        </Box>
        <Box mt={12}>
          <P>
            No account? <A onClick={onSignUpClick}>Create one.</A>
          </P>
        </Box>
      </Flex>
    </form>
  </Container>
)

export default reduxForm({
  form: SIGN_IN_FORM_NAME
})(Form)
