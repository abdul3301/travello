import React, {useState} from "react";
import { IconButton } from "@material-ui/core";
import styled from 'styled-components';
import SearchIcon from "@material-ui/icons/Search";

const SearchBox = (props) => {
  
  const[input,setInput] = useState("");
  
const onSearchSubmit = (e)=>{
  e.preventDefault();
  props.onSubmit(input);

  }

  return (
  <Wrapper>
   <SearchWrapper>
     <SearchBarWrapper>
        <IconButton>
          <SearchIcon/>
        </IconButton>
        <form>
          <input type="text" onChange={(e)=> setInput(e.target.value)}/>
          <button type= 'submit' onClick={onSearchSubmit}></button>
        </form>
     </SearchBarWrapper>
   </SearchWrapper>
  </Wrapper>
  );
};

export default SearchBox;

const Wrapper = styled.div`
display: flex;
align-items: center;
height: 56px;
padding: 12px 4px 4px 16px;
color: black;
`
const SearchWrapper = styled.div`
flex: 1;

`
const SearchBarWrapper = styled.div`
background-color: #efefef;
display: flex;
height:48px;
width:100%;
border-radius:50px;
border: none;
padding-left: 10px;


form{
  display:flex;
  flex:1;
}

form > input{
  background-color: transparent;
  border: none;
  width: 100%;
  margin-left: 5px;
  font-size: 16px;
}

form > button{
  display:none;
}

input:focus{
  outline:none;
}
`
