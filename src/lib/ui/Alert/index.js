import React from 'react'
import cm from './alert.css'


const typeToClassName = {
  info: cm.info,
  success: cm.success,
  error: cm.error,
}

export default ({type, children}) =>
  <p
    className={typeToClassName[type]}
    children={children}
  />
