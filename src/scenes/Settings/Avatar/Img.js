import styled from 'styled-components'

const Img = styled.div`
  width: 100px;
  height: 100px;
  background: url(${props => props.src}) center no-repeat;
  background-size: cover;
`

export default Img
