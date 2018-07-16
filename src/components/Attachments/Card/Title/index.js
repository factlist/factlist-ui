import React from 'react'
import Span from './Span'

const MAX_TITLE_CHAR = 28

export default ({ title }) => (
  <Span>
    {title.substr(0, MAX_TITLE_CHAR)}
    {title.length > MAX_TITLE_CHAR && '...'}
  </Span>
)
