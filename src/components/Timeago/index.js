import React, { Component } from 'react'
import StyledTimeago from './StyledTimeago'
import formatter from './formatter'
import DateTime from './DateTime'
import moment from 'moment'
export default class FormattedTimeago extends Component {
  state = { showRaw: false }

  onClick = this.onClick.bind(this)

  onClick() {
    this.setState({ showRaw: !this.state.showRaw })
  }

  render() {
    return (
      <div>
        {this.state.showRaw ? <DateTime onClick={this.onClick}>{moment(this.props.date).format('DD MMM YYYY, kk:mm')}</DateTime> :
                              <StyledTimeago onClick={this.onClick} formatter={formatter} {...this.props} />}

      </div>
    )
  }
}
