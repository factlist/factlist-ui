import React from 'react'
import {RefinementList} from 'react-instantsearch-dom'
import cm from './refinementList.module.css'


export default props =>
  <RefinementList {...props} className={cm.rlist} />
