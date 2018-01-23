import styled from 'styled-components'

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  &:after {
    content: '';
    display: block;
    clear: both;
  }
`

export default List
