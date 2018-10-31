import React, { Fragment } from 'react'
import { withStateHandlers } from 'recompose'
import H1 from './H1'
import Textarea from './Textarea'

const enhance = withStateHandlers(
  props => ({
    title: props.title,
  }),
  {
    // Disable `enter` key press.
    setTitle: () => value => ({
      title: value.replace(/\n|\r/g, ''),
    })
  }
)

const Title = ({ title, setTitle, editable = false }) => (
  <Fragment>
    {editable === false
      ? <H1>{title}</H1>
      : <Textarea
          value={title}
          onInput={event => setTitle(event.target.value)} />}
  </Fragment>
)

export default enhance(Title)
