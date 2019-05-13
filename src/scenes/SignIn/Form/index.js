import React from 'react'
import {string, object} from 'yup'
import {Flex, Box} from '@rebass/grid'
import {withForm, Form} from 'utils/form'
import {TextField} from 'components/Form'
import Container from './Container'
import Button from 'components/Button'
import P from './P'
import A from './A'


const validationSchema = object({
  email: string().email().required(),
  password: string().required(),
})

const SignInForm = ({
  onSignUpClick,
  onPasswordResetClick,
  isSubmitting,
  isValidating,
}) =>
  <Form>
    <Container>
      <Flex flexDirection='column'>
        <Box>
          <TextField
            name='email'
            autoComplete='email'
          />
        </Box>

        <Box mt={20}>
          <TextField
            type='password'
            name='password'
            autocomplete='current-password'
          />
        </Box>

        <Box>
          <A onClick={onPasswordResetClick}>
            Forgot password?
          </A>
        </Box>
      </Flex>

      <Flex flexDirection='column' alignItems='flex-end'>
        <Box>
          <Button
            type='submit'
            disabled={isSubmitting || isValidating}
            title={(isSubmitting || isValidating) ? 'Loading' : 'Sign In'}
          />
        </Box>

        <Box mt={12}>
          <P>
            No account? <A onClick={onSignUpClick}>Create one.</A>
          </P>
        </Box>
      </Flex>
    </Container>
  </Form>

export default withForm({validationSchema})(SignInForm)
