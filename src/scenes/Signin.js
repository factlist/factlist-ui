import React from 'react'
import {compose} from 'recompose'
import {withRouter} from 'react-router5'
import {PasswordReset, Signup} from '/scenes'
import {withUser, withModal, withNotification} from '/containers'
import {withFetch} from '/lib/request'
import {withFormik, makeValidatorFromAPI, Form} from '/lib/form'
import {saveJWT} from '/lib/storage'
import {InputField, Button} from '/lib/ui'
import twitterIcon from '/static/icons/twitter.svg'


const SigninDumb = ({signinFetch = {}, signinTwitter, modal}) =>
  <>
    <h2>Welcome back, Fact Checker!</h2>

    <h4>Login to add suspicious claims or submit evidences.</h4>

    <a onClick={signinTwitter} href='#nogo'>
      <img
        src={twitterIcon}
        width='25'
        alt='twitter login'
      />
      Login with Twitter
    </a>

    <span>or</span>

    <Form>
      <InputField name='email' />
      <InputField name='password' type='password' />

      <a
        onClick={() => modal.open(PasswordReset)}
        href='#nogo'
        children='Forgot password?'
      />

      <Button
        type='submit'
        disabled={signinFetch.pending}
        children={signinFetch.pending ? 'Loading' : 'Sign In'}
      />

      <p>
        No account?&nbsp;
        <a
          onClick={() => modal.open(Signup)}
          href='#nogo'
          children='Create one.'
        />
      </p>
    </Form>
  </>

export default compose(
  withUser,
  withModal,
  withNotification,
  withRouter,

  withFetch(({user, modal, notification, router}) => ({
    signin: values => ({
      signinFetch: {
        url: '/access-tokens',
        method: 'post',
        body: values,
        then: ({token}) => {
          saveJWT(token)

          return {
            url: '/me',
            then: userData => {
              user.set(userData)
                .then(() => {
                  modal.close()
                  router.navigate('home', {}, {force: true})
                })
            },
          }
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
    mapPropsToValues: () => ({
      email: '',
      password: '',
    }),

    validate: makeValidatorFromAPI('/access-tokens', 'post'),

    handleSubmit: (values, formikBag) =>
      formikBag.props.signin(values),
  })
)(
  SigninDumb
)
