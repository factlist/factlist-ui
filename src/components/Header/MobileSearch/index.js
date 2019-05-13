import React, { Component } from 'react'
import StyledIcon from './StyledIcon'
import Container from './Container'
import Search from './Search'

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
      <Container show={this.state.show}>
        <Search type="text" placeholder="Search | Explosion in Cairo..." />
      </Container>
    )
  }
}
