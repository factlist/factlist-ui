import React from 'react'
import { Flex, Box } from '@rebass/grid'
import {object, string} from 'yup'
import {withForm, Form} from 'utils/form'
import { TextField } from 'components/Form'
import Container from '../SignIn/Form/Container'
import Button from 'components/Button'
import A from '../SignIn/Form/A'
import P from '../SignIn/Form/P'


const validationSchema = object({
  username: string().required(),
  email: string().email().required(),
  name: string().required(),
  password: string().required(),
})

const SignupForm = ({onSignInClick, isSubmitting, isValidating}) => <Form>
  <Container>
    <Flex flexDirection="column">
      <Box>
        <TextField
          name="username"
          autoComplete="username"
        />
      </Box>

      <Box mt={15}>
        <TextField
          name="email"
          autocomplete="email"
        />
      </Box>

      <Box mt={15}>
        <TextField
          type="name"
          name="name"
          autocomplete="name"
        />
      </Box>

      <Box mt={15}>
        <TextField
          type="password"
          name="password"
          autocomplete="current-password"
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
  </Container>
</Form>

export default withForm({validationSchema})(SignupForm)
