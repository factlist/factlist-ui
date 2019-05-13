import React from 'react'
import {withFetch, formFetch} from 'utils/request'
import Form from './Form'
import Container from './Container'
import P from './P'
import H2 from './H2'


const PasswordResetScene = ({
  success,
  createPasswordChangeKey, passwordChangeFetch = {},
}) =>
  <Container>
    <H2>Reset your password</H2>

    {passwordChangeFetch.fulfilled && <P>
      Check your email for a link to reset your password.
      If it doesn’t appear within a few minutes, check your spam folder.
    </P>}

    <Form onSubmit={createPasswordChangeKey} />
  </Container>

export default withFetch(() => ({
  createPasswordChangeKey: formFetch(params => ({
    passwordChangeFetch: ({
      url: '/auth/reset-password',
      method: 'POST',
      body: params,
    }),
  })),
}))(
  PasswordResetScene
)
