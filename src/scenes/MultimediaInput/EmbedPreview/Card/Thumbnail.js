import styled from 'styled-components'

const Thumbnail = styled.div`
  height: auto;
  position: relative;
  background: url(${props => props.src}) center center / cover no-repeat rgb(225, 232, 237);
  flex: 0 0 80px;
  overflow: hidden;
  transition: flex-basis 0.25s ease-in-out;

  &:before {
    content: "";
    padding-bottom: 100%;
    display: block;
  }

  &:after {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    opacity: 0;
    z-index: 1;
    background: rgb(225, 232, 237);
    transition: opacity 0.3s ease-out;
  }
`

export default Thumbnail
