import React, { Fragment } from 'react'
import Links from './Links'
import Files from './Files'

const Attachments = ({ links, files }) => (
  <Fragment>
    {links.length > 0 && <Links links={links} />}
    {files.length > 0 && <Files files={files} />}
  </Fragment>
)

export default Attachments
