import React, { Component } from 'react'
import PropTypes from 'prop-types'
import colors from 'core/colors'
import Container from './Container'
import Choice from './Choice'

export default class Status extends Component {
  static propTypes = {
    onSelect: PropTypes.func.isRequired,
  }

  state = {
    status: null
  }

  select = this.select.bind(this)

  select(status) {
    const { onSelect } = this.props

    this.setState({ status })

    onSelect(status)
  }

  render() {
    const { status } = this.state

    return (
      <Container>
        <Choice
          active={status === 'true'}
          onClick={() => this.select('true')}
          color={colors.status['true']}>
          True
        </Choice>

        <Choice
          active={status === 'inconclusive'}
          onClick={() => this.select('inconclusive')}
          color={colors.status['inconclusive']}>
          Inconclusive
        </Choice>

        <Choice
          active={status === 'false'}
          onClick={() => this.select('false')}
          color={colors.status['false']}>
          False
        </Choice>
      </Container>
    )
  }
}
