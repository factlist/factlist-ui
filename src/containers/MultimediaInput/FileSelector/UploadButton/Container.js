import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  padding: 4px;
  width: 80px;
  height: 80px;
  border: 1px dashed #B2B2B2;
  border-radius: 3px;
  cursor: pointer;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`

export default Container
