import React from 'react'
import {compose, withStateHandlers} from 'recompose'
import {withUnstated} from 'utils/unstated'
import pickBy from 'lodash/pickBy'
import { Flex, Box } from '@rebass/grid'
import {withFetch, formFetch} from 'utils/request'
import UserContainer from 'modules/auth/container'
import ModalContainer from 'modules/modal/container'
import NotificationContainer from 'modules/notification/container'
import Header from 'components/Header'
import { Container, Left, Right, Center } from 'components/Layout'
import Form from './Form'
import H1 from './H1'
import Avatar from './Avatar'


const SettingsScene = ({
  updateFetch = {},
  setAvatar,
  handleSubmit,
  user,
  modal
}) => <>
  <Header
    user={user.state.user}
    token={user.state.token}
    onClickSignInButton={() => modal.show('SignIn')}
  />

  <Container>
    <Left></Left>
    <Center>
      <H1>Settings</H1>

      <Flex mt={50}>
        <Box mr={40}>
          {user.state.user && <Avatar
            src={user.state.user.avatar}
            onSelect={setAvatar}
          />}
        </Box>
        <Box width={370}>
          <Form
            initialValues={user.state.user}
            onSubmit={handleSubmit}
          />
        </Box>
      </Flex>
    </Center>
    <Right></Right>
  </Container>
</>

export default compose(
  withUnstated({
    user: UserContainer,
    modal: ModalContainer,
    notification: NotificationContainer,
  }),

  withFetch(({notification}) => ({
    updateUser: formFetch(params => ({
      updateFetch: ({
        url: '/auth/me',
        method: 'patch',
        body: pickBy(params, Boolean), // remove nulls
        then: () => { notification.show('User updated successfully.') },
        catch: () => {
          notification.show(
            'We couldn\'t update your settings. Please try again later.'
          )
        },
      }),
    })),
  })),

  withStateHandlers({
    avatar: null,
  }, {
    setAvatar: () => avatar => ({avatar}),

    handleSubmit: (state, props) => (values, ...rest) =>
      props.updateUser(
        {
          ...values,
          avatar: state.avatar,
        },
        ...rest
      )
  }),
)(
  SettingsScene
)
