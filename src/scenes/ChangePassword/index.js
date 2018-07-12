import React, { Component, Fragment } from 'react'
import Header from 'scenes/Header'
import { Container, Left, Right, Center } from 'components/Layout'
import Form from 'scenes/Forms/ChangePassword'

class ChangePassword extends Component {
  state = {
    changeKey: null,
  }

  componentWillMount() {
    const { match } = this.props
    const changeKey = match.params.key

    this.setState({ changeKey })
  }

  render() {
    const { changeKey } = this.state

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
}

export default ChangePassword
