import styled from 'styled-components'
import { SearchBox } from 'react-instantsearch-dom';
const SearchInput = styled(SearchBox)`
  input{
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    font-size: 14px;
  
    background: url(images/icons/search.png);
    background-repeat: no-repeat;
    background-position: 98% 50%;
  
    border: 1px solid #DDDDDD;

    padding: 11px 18px;
    outline: none;
  
    &::placeholder {
      color: #B2B2B2;
    }
  
    &:focus {
      border: 1px solid #B2B2B2;
    }
    width:100%;
    max-width:670px;
    display:block;
    margin:auto;
    

    
  }
  .ais-SearchBox-submit, .ais-SearchBox-reset{
    display:none;
  }

`

export default SearchInput
