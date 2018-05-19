import React, { Component } from 'react'
import PropTypes from 'prop-types'
import colors from 'core/colors'
import Container from './Container'
import Choice from './Choice'

export default class Status extends Component {
  static propTypes = {
    onSelect: PropTypes.func.isRequired,
  }

  select = this.select.bind(this)

  select(value) {
    const { onSelect } = this.props

    onSelect(value)
  }

  render() {
    const { value } = this.props

    return (
      <Container>
        <Choice
          active={value === 'true'}
          onClick={() => this.select('true')}
          color={colors.conclusions['true']}>
          True
        </Choice>

        <Choice
          active={value === 'inconclusive'}
          onClick={() => this.select('inconclusive')}
          color={colors.conclusions['inconclusive']}>
          Inconclusive
        </Choice>

        <Choice
          active={value === 'false'}
          onClick={() => this.select('false')}
          color={colors.conclusions['false']}>
          False
        </Choice>
      </Container>
    )
  }
}
