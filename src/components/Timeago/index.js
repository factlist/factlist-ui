import React from 'react'
import moment from 'moment'
import StyledTimeago from './StyledTimeago'
import formatter from './formatter'

export default ({ date }) => {
  const localDateTime = moment.utc(date).local().format('L LT')
  const formattedDateTime = moment(date).format('DD MMM YYYY, kk:mm')

  return <StyledTimeago
    formatter={formatter}
    date={localDateTime}
    title={formattedDateTime} />
}
