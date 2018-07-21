import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Flex, Box } from 'grid-styled'
import { required, email } from 'core/validationRules'
import { SIGN_UP_FORM_NAME } from 'modules/user/constants'
import { TextField } from 'components/Form'
import Container from '../SignIn/Form/Container'
import Button from 'components/Button'
import A from '../SignIn/Form/A'
import P from '../SignIn/Form/P'

const Form = ({
  handleSubmit, requesting, invalid, pristine, onSignInClick
}) => (
  <Container>
    <form onSubmit={handleSubmit}>
      <Flex flexDirection="column">
        <Box>
          <Field
            type="text"
            id="sign_up_username"
            name="username"
            label="Username"
            autoComplete="username"
            validate={[ required ]}
            component={TextField} />
        </Box>

        <Box mt={15}>
          <Field
            type="text"
            id="sign_up_email"
            name="email"
            label="Email"
            autoComplete="email"
            validate={[ required, email ]}
            component={TextField} />
        </Box>

        <Box mt={15}>
          <Field
            type="name"
            id="sign_up_name"
            name="name"
            label="Name"
            autoComplete="name"
            validate={[ required ]}
            component={TextField} />
        </Box>

        <Box mt={15}>
          <Field
            type="password"
            id="sign_up_password"
            name="password"
            label="Password"
            autoComplete="current-password"
            validate={[ required ]}
            component={TextField} />
        </Box>
      </Flex>

      <Flex mt={15} flexDirection="column" alignItems="flex-end">
        <Box>
          <Button
            type="submit"
            disabled={requesting || invalid || pristine}>
            Sign Up
          </Button>
        </Box>

        <Box mt={12}>
          <P>
            Already have an account? <A onClick={onSignInClick}>Sign In.</A>
          </P>
        </Box>
      </Flex>
    </form>
  </Container>
)

export default reduxForm({
  form: SIGN_UP_FORM_NAME
})(Form)
