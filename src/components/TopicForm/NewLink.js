import React, { useContext, useRef } from 'react';
import NewLink from 'components/Topic/NewLink';

import TopicFormContext from './TopicFormContext'

const PASTE_DETECT_THRESHOLD = 10;

const NewLinkContainer = () => {
  const { addLink } = useContext(TopicFormContext)
  const inputEl = useRef(null);

  const checkAndAddLink = (link) => {
   if (link === '') { return; }
   addLink(link);
   inputEl.current.value = "";
  }

  const handleOnBlur = (e) => {
    checkAndAddLink(e.target.value);
  }

  const handleOnChange = (e, currVal, prevVal) => {
    const prevLen = (prevVal || '').length
    const currLen = (currVal || '').length
    if (currLen - prevLen > PASTE_DETECT_THRESHOLD) {
      checkAndAddLink(e.target.value);
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      checkAndAddLink(e.target.value);
    }
  }

  return (
    <NewLink onBlur={handleOnBlur}
             onKeyPress={handleKeyPress}
             onChange={handleOnChange}
             innerRef={inputEl}
             id="link"
             name="link"
             placeholder="Add a link to your topic" />
  )
}

export default NewLinkContainer;
