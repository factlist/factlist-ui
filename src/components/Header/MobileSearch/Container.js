import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  top: 70px;
  left: 0;

  width: 100%;
  height: 100%;
  padding: 20px;

  background-color: #FFF;

  z-index: 2;
  cursor: pointer;

  display: ${props => props.show ? 'block' : 'none'};
`

export default Container
