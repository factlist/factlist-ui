import styled from 'styled-components'

const A = styled.a`
  display: flex;
  position: relative;
  width: 100%;
  text-decoration: none;
  cursor: pointer;

  color: #000;
  border: 1px solid #E1E8ED;
  background-color: #FFF;

  &:hover {
    background: rgb(245, 248, 250, 0.8);
    border-color: rgba(136, 153, 166, 0.2);
  }
`

export default A
