import React from 'react'
import {Formik, Form} from 'formik'
import { Flex, Box } from '@rebass/grid'
import {object, string} from 'yup'
import { TextField } from 'components/Form'
import Container from '../SignIn/Form/Container'
import Button from 'components/Button'
import A from '../SignIn/Form/A'
import P from '../SignIn/Form/P'


const initialValues = {
  username: '',
  email: '',
  name: '',
  password: '',
}

const validationSchema = object({
  username: string().required(),
  email: string().email().required(),
  name: string().required(),
  password: string().required(),
})

const SignupForm = ({onSubmit, onSignInClick}) =>
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {({isSubmitting, isValidating}) =>
      <Container>
        <Form>
          <Flex flexDirection="column">
            <Box>
              <TextField
                name="username"
                label="Username"
                autoComplete="username"
              />
            </Box>

            <Box mt={15}>
              <TextField
                name="email"
                label="Email"
                autoComplete="email"
              />
            </Box>

            <Box mt={15}>
              <TextField
                type="name"
                name="name"
                label="Name"
                autoComplete="name"
              />
            </Box>

            <Box mt={15}>
              <TextField
                type="password"
                name="password"
                label="Password"
                autoComplete="current-password"
              />
            </Box>
          </Flex>

          <Flex mt={15} flexDirection="column" alignItems="flex-end">
            <Box>
              <Button
                type="submit"
                disabled={isSubmitting || isValidating}
              >
                Sign Up
              </Button>
            </Box>

            <Box mt={12}>
              <P>
                Already have an account? <A onClick={onSignInClick}>Sign In.</A>
              </P>
            </Box>
          </Flex>
        </Form>
      </Container>
    }
  </Formik>

export default SignupForm
