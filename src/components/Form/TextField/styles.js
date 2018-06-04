import { css } from 'styled-components'

const styles = css`
  width: 100%;
  background: #FFF;
  outline: 0;
  color: #14171A;
  line-height: 36px;
  font-size: 14px;
  padding: 0 10px;
  margin-top: 3px;


  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.error ? '#FF6947' : '#DDD'};

  &:focus {
    ${props => !props.error
      ? 'border: 1px solid #B2B2B2;'
      : ''}
  }
`

export default styles
