import React, { Fragment } from 'react'
import Header from 'scenes/Header'
import { Container, Left, Right, Center } from 'components/Layout'
import Form from 'containers/Forms/ChangePassword'

const ChangePassword = ({ match }) => {
  const changeKey = match.params.key

  return (
    <Fragment>
      <Header />

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

export default ChangePassword
