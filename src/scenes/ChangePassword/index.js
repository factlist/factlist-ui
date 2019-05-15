import React from 'react'
import {compose} from 'recompose'
import {withUser, withNotification, withFetch, formFetch} from 'adapters'
import {Layout} from 'components'
import Form from './Form'
import cm from './changePass.module.css'


const ChangePasswordScene = ({user, changeFetch = {}, changePassword}) =>
  <Layout>
    {changeFetch.resolved &&
      <p className={cm.success}>Your password change successfully.</p>}

    <Form onSubmit={changePassword} />
  </Layout>

export default compose(
  withUser,

  withNotification,

  withFetch(({match, notification}) => ({
    changePassword: formFetch((params, form) => ({
      changeFetch: {
        url: '/auth/change_password',
        method: 'post',
        body: {...params, key: match.params.key},
        then: () => { form.resetForm() },
        catch: () => {
          notification.show(
            'We can\'t complete your request. Please try again later.'
          )
        }
      },
    })),
  })),
)(
  ChangePasswordScene
)
