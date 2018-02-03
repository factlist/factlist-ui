import React from 'react'
import Choice from './Choice'

const Status = () => (
  <div>
    <Choice
      id="true"
      name="status"
      label="True"
      color="#4CAF50"
    />

    <Choice
      id="in_conclusive"
      name="status"
      label="Inconclusive"
      color="#FFB747"
    />

    <Choice
      id="false"
      name="status"
      label="False"
      color="#FF6947"
    />
  </div>
)

export default Status
