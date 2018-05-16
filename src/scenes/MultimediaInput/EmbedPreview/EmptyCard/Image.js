import styled, { keyframes } from 'styled-components'
import CardImage from '../Card/Image'

const animation = keyframes`
  0% {
    background: #E1E8ED;
  }
  70% {
    background: #DCE3E8;
  }
  100% {
    background: #E1E8ED;
  }
`

const EmptyCardImage = styled(CardImage)`
  animation: ${animation} 1.25s linear infinite;
`

export default EmptyCardImage
