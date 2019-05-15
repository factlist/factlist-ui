import React from 'react'
import {string, object} from 'yup'
import {Flex, Box} from '@rebass/grid'
import {withForm, Form} from 'adapters'
import {TextField, Button} from 'components'
import cm from './signinForm.module.css'


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
    <div className={cm.container}>
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
          <a
            className={cm.link}
            onClick={onPasswordResetClick}
            href='#nogo'
            children='Forgot password?'
          />
        </Box>
      </Flex>

      <Flex flexDirection='column' alignItems='flex-end'>
        <Box>
          <Button
            type='submit'
            disabled={isSubmitting || isValidating}
            children={(isSubmitting || isValidating) ? 'Loading' : 'Sign In'}
          />
        </Box>

        <Box mt={12}>
          <p className={cm.text}>
            No account?&nbsp;
            <a
              className={cm.link}
              onClick={onSignUpClick}
              href='#nogo'
              children='Create one.'
            />
          </p>
        </Box>
      </Flex>
    </div>
  </Form>

export default withForm({validationSchema})(SignInForm)
