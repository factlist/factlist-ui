import React from 'react'
import {compose} from 'recompose'
import {withFetch} from '/lib/request'
import {withFormik, makeValidatorFromAPI, Form} from '/lib/form'
import {Alert, Button, InputField} from '/lib/ui'


const PasswordResetDumb = ({resetFetch = {}}) =>
  <>
    <h2>Reset your password</h2>

    {resetFetch.fulfilled &&
      <Alert type='success'>
        Check your email for a link to reset your password.
        If it doesn’t appear within a few minutes, check your spam folder.
      </Alert>
    }

    <Form>
      <InputField name='email' />

      <Button
        type='submit'
        disabled={resetFetch.pending}>
        {resetFetch.pending ? 'Submitting...' : 'Submit'}
      </Button>
    </Form>
  </>

export default compose(
  withFetch(() => ({
    submit: values => ({
      resetFetch: {
        url: '/reset-password',
        method: 'POST',
        body: values,
      },
    }),
  })),

  withFormik({
    mapPropsToValues: () => ({
      email: '',
    }),

    validate: makeValidatorFromAPI('/reset-password', 'post'),

    handleSubmit: (values, formikBag) =>
      formikBag.props.submit(values),
  })
)(
  PasswordResetDumb
)
