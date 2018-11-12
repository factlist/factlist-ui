import React, { Component } from 'react'
class RadioList extends Component {

  render() {
    const { options, title } = this.props;
    return (
      <div style={{ fontSize: '13px', marginBottom: '20px' }}>
        <div style={{ fontSize: '13px', opacity: '0.5' }}>{title}</div>
        <ul style={{
          listStyle: "none",
          margin: "10px 0px",
          padding: "0px"
        }}>
          {options.map((option, index) =>
            <li style={{ padding: '3px 0px' }} key={index}>
              <input name="{title}" id={option} style={{ marginRight: '5px' }} type="radio" />
              <label htmlFor={option}>{option}</label>
            </li>
          )}
        </ul>
      </div>
    )
  }
}
export default RadioList
