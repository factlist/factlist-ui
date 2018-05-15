import styled from 'styled-components'

const Container = styled.div`
  display: ${props => props.show ? 'block' : 'none'};
`

export default Container
