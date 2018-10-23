import styled from 'styled-components'
import { RefinementList} from 'react-instantsearch-dom';

const StyledRefinementList = styled(RefinementList)`
  
  ul{
    list-style: none;
    padding: 0px;
    margin: 10px 0px;
  }
  ul li {
    padding: 3px 0px;
    font-size:14px;
  }
  .ais-RefinementList-checkbox{
    margin-right:5px;
  }
  .ais-RefinementList-labelText{
    font-size:13px;
    opacity:0.8;
  }  
  .ais-RefinementList-count{
    opacity:0.4;
  }
  
  .ais-SearchBox{
    button {
      display:none;
    }
    input{
      border: 1px solid #41414141;
      padding: 4px 8px;
      font-size: 12px;
      margin: 15px 0px 0px 0px;
      border-radius: 3px;
      width: 100%;
    }
  }
`

export default StyledRefinementList
