import styled from 'styled-components'

const Container = styled.div`

  width: 100%;
  height: 100%;
  

  background-color: #FFF;

  z-index: 2;
  cursor: pointer;

  display: ${props => props.show ? 'block' : 'none'};
`

export default Container
