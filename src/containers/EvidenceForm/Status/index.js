import React, { Component } from 'react'
import Choice from './Choice'

class Status extends Component {
  onChange = this.onChange.bind(this)

  onChange(event) {
    const { value } = event.target
    const { onSelect } = this.props

    onSelect(value)
  }

  render() {
    return (
      <div>
        <Choice
          id="true"
          name="status"
          value="true"
          label="True"
          color="#4CAF50"
          onChange={this.onChange}
        />

        <Choice
          id="inconclusive"
          name="status"
          value="inconclusive"
          label="Inconclusive"
          color="#FFB747"
          onChange={this.onChange}
        />

        <Choice
          id="false"
          name="status"
          value="false"
          label="False"
          color="#FF6947"
          onChange={this.onChange}
        />
      </div>
    )
  }
}

export default Status
