import React, { Fragment } from 'react'
import Links from './Links'
import Files from './Files'

const Attachments = ({ links, files }) => (
  <Fragment>
    <Links links={links} />
    <Files files={files} />
  </Fragment>
)

export default Attachments
