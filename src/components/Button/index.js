import React from 'react'
import pt from 'prop-types'
import { Link } from "react-router-dom"
import cn from 'utils/classname'
import cm from './button.module.css'


const Button = ({to, primary, disabled, ...props}) => {
  const className = cn(cm, 'btn', {primary, disabled})

  return to
    ? <Link {...{to, className, ...props}} />
    : <button {...{className, ...props}} />
}

Button.propTypes = {
  disabled: pt.bool,
  primary: pt.bool,
}

Button.defaultProps = {
  primary: true,
  disabled: false,
}

export default Button
