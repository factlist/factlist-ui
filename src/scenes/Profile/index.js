import React, { Component } from 'react'

import { fetchUserProfile } from 'modules/profile/actions'

class Profile extends Component {
  componentDidMount() {
    // console.log(this.props);
    // const { fetchUserProfile } = this.props

    const username = this.props.match.params.username
    fetchUserProfile(username)

    window.scrollTo(0, 0)
  }

  render() {
    // const { user } = this.props

    return (
      <div>profile page</div>
    )

    // return (
    //   <Fragment>
    //     <Header />
    //     <Container>
    //       <Left>
    //         {user && <UserCard
    //           avatar={user.avatar}
    //           name={user.name}
    //           username={user.username}
    //         />}
    //       </Left>
    //       <Center>
    //       </Center>
    //       <Right></Right>
    //     </Container>
    //   </Fragment>
    // )
  }
}

// const mapStateToProps = (state) => ({
//   requesting: state.profile.requesting,
//   user: state.profile.user,
// })

// const mapDispatchToProps = (dispatch) => ({
//   fetchUserProfile: (username) => dispatch(fetchUserProfile(username)),
// })

export default Profile;
