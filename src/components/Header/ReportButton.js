import styled from 'styled-components'

const ReportButton = styled.a`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 12px;
  background-color: #000;
  color: #FFF;
  border: 0;
  cursor: pointer;
  display: inline-block;
  user-select: none;

  padding: 13px 30px;

  border-radius: 2px;

  @media (max-width: 730px) {
    padding: 8px 13px;
  }
`

export default ReportButton
