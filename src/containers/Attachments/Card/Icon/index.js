import React from 'react'
import Link from './Link'
import Expand from './Expand'

const ICONS = {
  link: <Link style={{ marginTop: '-2px' }} />,
  file: <Expand />,
}

export default ({ type }) => ICONS[type]
