import React from 'react'
import {withUnstated} from 'utils/unstated'
import {compose} from 'recompose'
import {withFetch, formFetch} from 'utils/request'
import UserContainer from 'modules/auth/container'
import ModalContainer from 'modules/modal/container'
import NotificationContainer from 'modules/notification/container'
import Header from 'components/Header'
import {Container, Left, Right, Center} from 'components/Layout'
import FormContainer from './Container'
import P from './P'
import Form from './Form'


const ChangePasswordScene = ({user, modal, changeFetch = {}, changePassword}) =>
  <>
    <Header
      user={user.state.user}
      token={user.state.token}
      onClickSignInButton={() => modal.show('SignIn')}
    />

    <Container>
      <Left />

      <Center>
        <FormContainer>
          {changeFetch.resolved && <P>Your password change successfully.</P>}

          <Form onSubmit={changePassword} />
        </FormContainer>
      </Center>

      <Right />
    </Container>
  </>

export default compose(
  withUnstated({
    user: UserContainer,
    modal: ModalContainer,
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
