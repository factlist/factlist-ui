import React from 'react'
import { SignInForm } from 'containers/Forms'
import Header from 'containers/Header'

const SignInPage = () => (
  <div>
    <Header hideSignInButton={true} />
    <SignInForm />
  </div>
)

export default SignInPage
