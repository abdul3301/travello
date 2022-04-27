import React from 'react'
import styled from 'styled-components';
import Image from './Image';

function MainContiner(props) {
   let {images} = props;
  return (
    <Wrapper>
        <Container>
          {images.map((image)=>{
            let {urls} = image;
          return  <Image key={'id'} urls={urls}/>
          })}
        
        </Container>
    </Wrapper>
  )
}

export default MainContiner;

const Wrapper = styled.div`
background-color: white;
display: flex;
justify-content: center;
width:100%;
height: 100%;
margin-top: 15px;
`
const Container = styled.div`
width: 80%;
column-count : 5;
column-gap: 5px;
margin: 0 auto;
background-color: white;
`