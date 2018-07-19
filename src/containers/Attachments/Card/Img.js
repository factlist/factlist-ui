import styled from 'styled-components'

const Img = styled.div`
  width: 36px;
  height: 36px;
  background: url(${props => props.src}) center center / cover no-repeat rgb(225, 232, 237);
  border-radius: 3px;
`

export default Img
