import React from 'react'
import propTypes from 'prop-types'
import Span from './Span'
import Img from './Img'

const RemoveButton = ({ onClick }) => (
  <Span onClick={onClick}>
    <Img src="/images/icons/cross.svg" />
  </Span>
)

RemoveButton.propTypes = {
  onClick: propTypes.func.isRequired,
}

export default RemoveButton
