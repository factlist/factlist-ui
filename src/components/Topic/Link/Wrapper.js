import styled from 'styled-components';

const Wrapper = styled.div`
  padding-left: ${props => (props.editable ? '20px;' : '0px')};
`

export default Wrapper;
