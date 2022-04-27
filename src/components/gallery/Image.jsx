import React from 'react';
import styled from 'styled-components';

function Image(props) {
  let {urls} = props;
  return (
    <Wrapper>
<Container>
<img src = {urls?.regular} alt="image"/>
</Container>
    </Wrapper>
  )
}

export default Image;

const Wrapper = styled.div`
display: inline-flex;
padding: 8px;
`
const Container = styled.div`
display: flex;
align-item: center;
box-sizing: border-box;
cursor: pointer;
width: 236px;

img{
    display:flex;
    width:100%;
    cursor: zoom-in;
    border-radius: 16px;
    object-fit: cover;
}
`