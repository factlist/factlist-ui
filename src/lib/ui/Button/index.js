import React from 'react'
import pt from 'prop-types'
import cc from 'classcat'
import cm from './button.css'


const Button = ({
  primary = false,
  disabled = false,
  ...props
}) =>
  <button
    {...props}
    className={cc([cm.btn, {
      [cm.primary]: primary,
      [cm.disabled]: disabled,
    }])}
  />

Button.propTypes = {
  disabled: pt.bool,
  primary: pt.bool,
}

export default Button
