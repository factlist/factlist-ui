import React from 'react'
import propTypes from 'prop-types'
import Container from './Container'
import Input from './Input'
import Label from './Label'
import P from './P'

const TextField = ({
  id,
  type = 'text',
  input,
  label,
  meta: { touched, error, warning },
  ...rest,
}) => (
  <Container>
    <Label htmlFor={id}>{label}</Label>

    <Input id={id} type={type} {...input} {...rest} error={touched && (error || warning)} />

    {touched && ((error && <P>{error}</P>) || (warning && <P>{warning}</P>))}
  </Container>
)

TextField.defaultProps = {
  meta: {
    touched: false,
    error: null,
    warning: null,
  }
}

TextField.propTypes = {
  id: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
}

export default TextField
