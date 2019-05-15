import React from 'react'
import { Flex, Box } from '@rebass/grid'
import {object, string} from 'yup'
import {withForm, Form} from 'utils/form'
import { TextField } from 'components/Form'
import Button from 'components/Button'
import cm from 'scenes/SignIn/signinForm.module.css'


const validationSchema = object({
  username: string().required(),
  email: string().email().required(),
  name: string().required(),
  password: string().required(),
})

const SignupForm = ({onSignInClick, isSubmitting, isValidating}) => <Form>
  <div className={cm.container}>
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
        <p className={cm.text}>
          Already have an account?&nbsp;
          <a
            className={cm.link}
            onClick={onSignInClick}
            href='#nogo'
            children='Sign In.'
          />
        </p>
      </Box>
    </Flex>
  </div>
</Form>

export default withForm({validationSchema})(SignupForm)
