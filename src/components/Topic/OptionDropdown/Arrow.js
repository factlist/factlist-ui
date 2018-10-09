import styled from 'styled-components'

const Arrow = styled.div`
  position: absolute;
  background-color: #FFF;
  transform: rotate(45deg);

  &[data-placement*='bottom'] {
    top: 0;
    left: 0;
    box-shadow: -1px -1px 1px -1px rgba(0,0,0,.54);
    margin-top: -6px;
  }

  &[data-placement*='top'] {
    bottom: 0;
    left: 0;
    margin-bottom: -6px;
    box-shadow: 1px 1px 1px -1px rgba(0,0,0,.54);
  }

  &[data-placement*='right'] {
    left: 0;
    margin-left: -6px;
    box-shadow: -1px 1px 1px -1px rgba(0,0,0,.54);
  }

  &[data-placement*='left'] {
    right: 0;
    margin-right: -6px;
    box-shadow: 1px -1px 1px -1px rgba(0,0,0,.54);
  }

  &::after {
    content: '';
    display: block;
    width: 14px;
    height: 14px;
    background: #FFF;
  }
`

export default Arrow
