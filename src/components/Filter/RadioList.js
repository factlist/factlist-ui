import React from 'react'
import cm from './radiolist.module.css'


const RadioList = ({options, title}) =>
  <div className={cm.root}>
    <div className={cm.title}>{title}</div>

    <ul>{options.map((opt, idx) =>
      <li key={idx}>
        <input
          name="{title}"
          id={'radiolist-opt-' + opt}
          type="radio"
        />

        <label htmlFor={opt}>{opt}</label>
      </li>
    )}</ul>
  </div>

export default RadioList
