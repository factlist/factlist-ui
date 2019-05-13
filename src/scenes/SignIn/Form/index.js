import React from 'react'
import {Formik, Form} from 'formik'
import {string, object} from 'yup'
import {Flex, Box} from '@rebass/grid'
import {TextField} from 'components/Form'
import Container from './Container'
import Button from 'components/Button'
import P from './P'
import A from './A'


const initialValues = {
  email: '',
  password: '',
}

const validationSchema = object({
  email: string().email().required(),
  password: string().required(),
})

const SignInForm = ({
  onSubmit,
  onSignUpClick,
  onPasswordResetClick,
}) =>
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {({isSubmitting, isValidating}) =>
      <Container>
        <Form>
          <Flex flexDirection='column'>
            <Box>
              <TextField
                name='email'
                label='Email'
                autoComplete='email'
              />
            </Box>

            <Box mt={20}>
              <TextField
                type='password'
                name='password'
                label='Password'
                autoComplete='current-password'
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
        </Form>
      </Container>
    }
  </Formik>

export default SignInForm
