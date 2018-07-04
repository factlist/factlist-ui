import React, { Fragment } from 'react'
import Container from './Container'
import Choice from './Choice'
import Error from '../Error'

const Conclusions = ({
  input: { onChange, value },
  meta: { touched, error },
}) => (
  <Fragment>
    {touched && error && <Error>{error}</Error>}
    <Container>
      <Choice
        active={value === 'true'}
        color='true'
        onClick={() => onChange('true')}>
        True
      </Choice>

      <Choice
        active={value === 'inconclusive'}
        color='inconclusive'
        onClick={() => onChange('inconclusive')}>
        Inconclusive
      </Choice>

      <Choice
        active={value === 'false'}
        color='false'
        onClick={() => onChange('false')}>
        False
      </Choice>
    </Container>
  </Fragment>
)

export default Conclusions
