import React, { Fragment } from 'react'
import { withState } from 'recompose'
import Title from './Title'
import Input from './Input'
import Tags from './Tags'
import MaskedURL from './MaskedURL'

const enhance = withState('title', 'setTitle', props => props.title)

const Link = ({
  title,
  setTitle,
  url,
  tags,
  editable = true
}) => (
  <Fragment>
    {editable === false && <Title title={title} url={url} />}

    {editable && (
      <Fragment>
        <Input
          type='text'
          value={title}
          onChange={event => setTitle(event.target.value)} />

        <MaskedURL url={url} />
      </Fragment>
    )}



    <Tags tags={tags} />
  </Fragment>
)

export default enhance(Link)
