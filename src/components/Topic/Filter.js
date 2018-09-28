import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  border: 0;
  padding: 2px;
  margin-right: 5px;
`

const OptionIcon = props => (
  <svg viewBox="0 0 38 12" width="1em" height="1em" {...props}>
    <path
      d="M6 .666A5.34 5.34 0 0 0 .667 6 5.34 5.34 0 0 0 6 11.334 5.34 5.34 0 0 0 11.333 6 5.34 5.34 0 0 0 6 .666zm0 8.668A3.338 3.338 0 0 1 2.667 6 3.338 3.338 0 0 1 6 2.666 3.337 3.337 0 0 1 9.333 6 3.337 3.337 0 0 1 6 9.334zM19 .666A5.34 5.34 0 0 0 13.667 6 5.34 5.34 0 0 0 19 11.334 5.34 5.34 0 0 0 24.334 6 5.34 5.34 0 0 0 19 .666zm0 8.668A3.338 3.338 0 0 1 15.667 6 3.338 3.338 0 0 1 19 2.666 3.338 3.338 0 0 1 22.334 6 3.338 3.338 0 0 1 19 9.334zM31.999.666A5.339 5.339 0 0 0 26.667 6a5.339 5.339 0 0 0 5.332 5.334A5.34 5.34 0 0 0 37.333 6 5.34 5.34 0 0 0 31.999.666zm0 8.668A3.337 3.337 0 0 1 28.667 6a3.337 3.337 0 0 1 3.332-3.334A3.338 3.338 0 0 1 35.333 6a3.338 3.338 0 0 1-3.334 3.334z"
      fill="#000"
      fillRule="nonzero"
    />
  </svg>
)

const StyledOptionIcon = styled(OptionIcon)`
  width: 20px;
  opacity: 0.60;
`

const Filter = () => (
  <div>
    <Button>
      <StyledOptionIcon />
    </Button>
  </div>
)

export default Filter
