import styled from 'styled-components'

const Count = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 11px;

  padding: 0 3px;
  padding-right: 8px;

  color: ${props => props.color };
`

export default Count
