import React, { Fragment } from 'react'
import {connect} from 'react-redux'
import {withUnstated} from 'utils/unstated'
import {compose} from 'recompose'
import pick from 'lodash/pick'
import ModalContainer from 'modules/modal/container'
import Header from 'components/Header'
import { Container, Left, Right, Center } from 'components/Layout'
import Form from 'containers/Forms/ChangePassword'

const ChangePassword = ({match, user, token, authenticating, modal}) => {
  const changeKey = match.params.key

  return (
    <Fragment>
      <Header
        user={user}
        token={token}
        authenticating={authenticating}
        onClickSignInButton={() => modal.show('SignIn')}
      />

      <Container>
        <Left></Left>
        <Center>
          <Form changeKey={changeKey} />
        </Center>
        <Right></Right>
      </Container>
    </Fragment>
  )
}

export default compose(
  connect(state => pick(state.auth, ['user', 'token', 'authenticating'])),
  withUnstated({modal: ModalContainer})
)(
  ChangePassword
)
