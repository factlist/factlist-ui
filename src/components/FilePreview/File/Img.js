import styled from 'styled-components'

const Img = styled.div`
  display: block;
  margin: 0 auto;
  height: 90px;
  width: 130px;
  background: url(${props => props.src}) center no-repeat;
  background-size: cover;
`

export default Img
