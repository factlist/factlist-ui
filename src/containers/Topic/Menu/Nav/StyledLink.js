import { Link } from 'react-router-dom';
import styled from 'styled-components'

const StyledLink = styled(Link)`
  cursor: pointer;
  padding: 8px 15px;
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  color: #000000;
  &:hover {
    background-color: rgba(67, 90, 111, 0.04);
  }
`;

export default StyledLink;
