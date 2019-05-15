import React from 'react'
import {withFetch, formFetch} from 'utils/request'
import Form from './Form'
import cm from './passReset.module.css'


const PasswordResetScene = ({
  success,
  createPasswordChangeKey, passwordChangeFetch = {},
}) =>
  <div className={cm.container}>
    <h2 className={cm.title}>Reset your password</h2>

    {passwordChangeFetch.fulfilled &&
      <p className={cm.success}>
        Check your email for a link to reset your password.
        If it doesn’t appear within a few minutes, check your spam folder.
      </p>}

    <Form onSubmit={createPasswordChangeKey} />
  </div>

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
