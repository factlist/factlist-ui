import styled from 'styled-components'

const Container = styled.div`
  background-color: #F9F9F9;
  padding: 30px 20px;
  border: 1px solid #E0E0E0;
  border-bottom: 0;

  &:first-child {
    border-top: 0;
  }

  &:last-child {
    border-bottom: 1px solid #E0E0E0;
  }
`

export default Container
