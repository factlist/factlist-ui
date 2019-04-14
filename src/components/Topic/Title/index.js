import React, { Fragment } from 'react'
import H1 from './H1'
import Textarea from './Textarea'


const Title = ({ isEdit, title, setTitle }) => (
  <Fragment>
    {isEdit === false
      ? <H1>{title}</H1>
      : <Textarea
          placeholder="Enter your topic title."
          value={title}
          onInput={event => setTitle(event.target.value)} />}
  </Fragment>
)

export default Title
