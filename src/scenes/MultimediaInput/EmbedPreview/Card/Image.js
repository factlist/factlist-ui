import styled from 'styled-components'

const Image = styled.div`
  width: 50px;
  height: 50px;
  background: url(${props => props.src}) center center / cover no-repeat rgb(225, 232, 237);
`

export default Image
