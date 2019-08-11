import React from 'react'
import {compose} from 'recompose'
import {Signin} from '/scenes'
import {withModal, withNotification} from '/containers'
import {withFormik, makeFormState, makeValidatorFromAPI, Form} from '/lib/form'
import {withFetch} from '/lib/request'
import {InputField, Button} from '/lib/ui'
import twitterIcon from '/static/icons/twitter.svg'


const SignupDumb = ({signupFetch = {}, signinTwitter, modal}) =>
  <>
    <h2>Hello, Factchecker!</h2>

    <h4>Sign up to add suspicious claims or submit evidences.</h4>

    <a onClick={signinTwitter} href='#nogo'>
      <img src={twitterIcon} width='25' />
      Login with Twitter
    </a>

    <span>or</span>

    <Form>
      <InputField name='username' />
      <InputField name='email' />
      <InputField name='name' />
      <InputField name='password' type='password' />

      <Button
        type='submit'
        disabled={signupFetch.pending}
        children='Sign Up'
      />
    </Form>

    <p>
      Already have an account?&nbsp;
      <a
        onClick={() => modal.open(Signin)}
        href='#nogo'
        children='Sign In.'
      />
    </p>
  </>

export default compose(
  withModal,
  withNotification,

  withFetch(({modal, notification}) => ({
    signup: values => ({
      signupFetch: {
        url: '/users',
        method: 'post',
        body: values,
        then: () => {
          modal.open(Signin)
          notification.show('Registration complete')
        },
      },
    }),

    signinTwitter: () => ({
      signinTwitterFetch: {
        url: '/get-twitter-request-token',
        then: ({reqToken}) =>
          window.top.location =
            'https://api.twitter.com/oauth/authenticate?oauth_token='+ reqToken,
        catch: () =>
          notification.show(
            'We can\'t authenticate you with Twitter right now, ' +
            'please try again later.'
          ),
      },
    }),
  })),

  withFormik({
    mapPropsToValues: () =>
      makeFormState(['username', 'name', 'email', 'password']),

    validate: makeValidatorFromAPI('/users', 'post'),

    handleSubmit: (values, formikBag) =>
      formikBag.props.signup(values),
  })
)(
  SignupDumb
)
