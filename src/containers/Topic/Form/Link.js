import React, { useContext, useRef } from 'react';
import Link from 'components/Topic/Link';

import TopicFormContext from 'containers/Topic/Form/TopicFormContext'

const LinkContainer = ({ url }) => {
  const { getLink, getTags, deleteLink, deleteTag, addTag } = useContext(TopicFormContext);

  const link = getLink(url);

  const tags = getTags(url)

  const onDelete = () => {
    deleteLink(url);
  }
  const onTagDelete = (url, tag) => {
    console.log('onTagDelete', url, tag)
    deleteTag(url, tag)
  }
  const onTagAdd = (url, tag) => {
    console.log('onTagAdd', url, tag)
    addTag(url, tag)
  }

  return (
    <Link
      isEdit={true}
      title={link.title}
      url={link.url}
      onDelete={onDelete}
      tags={tags}
      onTagDelete={onTagDelete}
      onTagAdd={onTagAdd}  />
  )
}

export default LinkContainer;
