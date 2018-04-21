import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { toggleTimeago } from 'modules/global/actions'
import moment from 'moment'
import StyledTimeago from './StyledTimeago'
import DateTime from './DateTime'
import formatter from './formatter'

class FormattedTimeago extends Component {
  onClick = this.onClick.bind(this)

  onClick() {
    const { toggleTimeago } = this.props

    toggleTimeago()
  }

  render() {
    const { timeago, date } = this.props

    return (
      <Fragment>
        {timeago
          ? <StyledTimeago
              onClick={this.onClick}
              formatter={formatter}
              date={date} />
          : <DateTime onClick={this.onClick}>
              {moment(this.props.date).format('DD MMM YYYY, kk:mm')}
            </DateTime>}
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  timeago: state.global.timeago
})

const mapDispatchToProps = (dispatch) => ({
  toggleTimeago: () => dispatch(toggleTimeago()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormattedTimeago)
