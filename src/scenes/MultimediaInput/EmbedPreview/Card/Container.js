import styled from 'styled-components'

const Container = styled.div`
  max-width: 500px;
  position: relative;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(225, 232, 237);
  background-color: rgb(255, 255, 255);
  cursor: pointer;
  display: flex;

  &:hover {
    background: rgb(245, 248, 250);
    border-color: rgba(136, 153, 166, 0.5);
  }
`

export default Container
