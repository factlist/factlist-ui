import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { fetchUserProfile } from 'modules/profile/actions'
import { Container, Left, Right, Center } from 'components/Layout'
import UserCard from 'components/UserCard'
import Header from 'scenes/Header'
import StyledClaim from './StyledClaim'

class Profile extends Component {
  componentDidMount() {
    const { fetchUserProfile } = this.props

    const username = this.props.match.params.username
    fetchUserProfile(username)

    window.scrollTo(0, 0)
  }

  render() {
    const { user, claims } = this.props

    return (
      <Fragment>
        <Header />
        <Container>
          <Left>
            {user && <UserCard
              avatar={user.avatar}
              name={user.name}
              username={user.username}
              claims={user.claim_count}
              evidences={user.evidence_count} />}
          </Left>
          <Center>
            {claims.map(claim => <StyledClaim
                key={claim.id}
                claim={claim} />)}
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
  claims: state.profile.claims,
})

const mapDispatchToProps = (dispatch) => ({
  fetchUserProfile: (username) => dispatch(fetchUserProfile(username)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile)
