import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { fetchUserProfile } from 'modules/profile/actions'
import { Container, Left, Right, Center } from 'components/Layout'
import UserCard from 'components/UserCard'
import Header from 'scenes/Header'

class Profile extends Component {
  componentDidMount() {
    const { fetchUserProfile } = this.props

    const username = this.props.match.params.username
    fetchUserProfile(username)

    window.scrollTo(0, 0)
  }

  render() {
    const { user } = this.props

    return (
      <Fragment>
        <Header />
        <Container>
          <Left>
            {user && <UserCard
              avatar={user.avatar}
              name={user.name}
              username={user.username}
            />}
          </Left>
          <Center>
          </Center>
          <Right></Right>
        </Container>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  requesting: state.profile.requesting,
  user: state.profile.user,
})

const mapDispatchToProps = (dispatch) => ({
  fetchUserProfile: (username) => dispatch(fetchUserProfile(username)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile)
