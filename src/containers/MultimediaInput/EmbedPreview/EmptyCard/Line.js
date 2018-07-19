import styled, { keyframes } from 'styled-components'

const animation = keyframes`
  0% {
    background: #E1E8ED;
  }
  70% {
    background: #CDD4D8;
  }
  100% {
    background: #E1E8ED;
  }
`

const Line = styled.span`
  height: ${props => props.height || 9}px;
  width: ${props => props.width || 100}%;
  display: block;
  opacity: 0.8;
  background: rgb(225,232,237);
  margin: 0;
  margin-top: ${props => props.mt || 0}px;
  animation: ${animation} ${props => props.animation};
`

export default Line
