import React from 'react'
import AutosizeTextarea from 'react-textarea-autosize'
import cm from './title.module.css'


const Title = ({ isEdit, title, setTitle }) =>
  isEdit === false
    ? <h1 className={cm.title}>{title}</h1>

    : <AutosizeTextarea
        className={cm.titleEditor}
        placeholder="Enter your topic title."
        value={title}
        onInput={e => setTitle(e.target.value)}
      />

export default Title
