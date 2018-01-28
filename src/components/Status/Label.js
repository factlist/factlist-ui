import styled from 'styled-components'

const Container = styled.label`
  color: #FFF;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 12px;

  background-color: ${props => props.color};
  border-radius: 2px;
  padding: 6px 11px;

  margin-right: 10px;
`

export default Container
