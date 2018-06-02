import styled from 'styled-components'

const Textarea = styled.textarea`
  border: 1px solid #E0E0E0;

  font-weight: 500;
  font-size: 12px;
  color: #7F7F7F;

  width: 100%;
  height: 100px;
  resize: none;
  outline: none;

  padding: 20px;

  &:focus {
    border: 1px solid #B2B2B2;
  }
`

export default Textarea
