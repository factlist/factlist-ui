import React, { Component } from 'react'
import StyledIcon from './StyledIcon'
import Container from './Container'
import Search from './Search'
import StyledTopics from './StyledTopics'

export default class MobileSearch extends Component {
  state = { show: false }

  onClick = this.onClick.bind(this)

  onClick() {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <div>
        <StyledIcon onClick={this.onClick} />

        <Container show={this.state.show}>
          <Search type="text" placeholder="Search | Explosion in Cairo..." />

          <StyledTopics title="POPULAR TOPICS" />
        </Container>
      </div>
    )
  }
}
