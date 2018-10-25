import React, { Component, Fragment } from 'react'
import { Flex, Box } from 'grid-styled'


class RadioList extends Component {
  
  render() {
    const {options, title} = this.props;
    return (
  <div style={{fontSize: '13px', marginBottom:'20px'}}>
    <div style={{fontSize: '13px',opacity: '0.5'}}>{title}</div>
    <ul style={{
      listStyle:"none",
        margin:"10px 0px",
        padding:"0px"
    }}>
    {options.map(option =>
    <li style={{padding:'3px 0px'}}>
      <input style={{marginRight:'5px'}} name="zaa" type="radio" />
      <label >{option}</label>
    </li>
    )}
    </ul>
  </div>
  )
}
}
export default RadioList
