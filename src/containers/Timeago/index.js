import React, { Component } from 'react'
import StyledTimeago from './StyledTimeago'
import formatter from './formatter'
import DateTime from './DateTime'
import moment from 'moment'
import { connect } from 'react-redux'
import { TOGGLE_TIMEAGO_FORMAT } from './constants'

class FormattedTimeago extends Component {
  onClick = this.onClick.bind(this)

  onClick() {
    if (this.props.timeago) {
      localStorage.removeItem('timeago')
    } else {
      localStorage.setItem('timeago', true)
    }

    this.props.toggleTimeago()
  }

  render() {
    const { timeago, date } = this.props

    return (
      <div>
        {timeago
          ? <StyledTimeago
              onClick={this.onClick}
              formatter={formatter}
              date={date} />
          : <DateTime onClick={this.onClick}>
              {moment(this.props.date).format('DD MMM YYYY, kk:mm')}
            </DateTime>}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  timeago: state.global.timeago
})

const mapDispatchToProps = (dispatch) => ({
  toggleTimeago: () => dispatch({ type: TOGGLE_TIMEAGO_FORMAT }),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormattedTimeago)
