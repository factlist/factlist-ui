import React from 'react'
import {withUnstated} from 'utils/unstated'
import {compose} from 'recompose'
import {withFetch, formFetch} from 'utils/request'
import UserContainer from 'modules/auth/container'
import NotificationContainer from 'modules/notification/container'
import Layout from 'components/Layout'
import Form from './Form'
import cm from './changePass.module.css'


const ChangePasswordScene = ({user, changeFetch = {}, changePassword}) =>
  <Layout>
    {changeFetch.resolved &&
      <p className={cm.success}>Your password change successfully.</p>}

    <Form onSubmit={changePassword} />
  </Layout>

export default compose(
  withUnstated({
    user: UserContainer,
    notification: NotificationContainer,
  }),

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
