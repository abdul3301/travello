import React,{useState, useEffect} from "react";
import styled from "styled-components";
import "./gallery.css";
import MainContiner from "./MainContiner";
import SearchBox from "./SearchBox";
import unsplash from "../../api/unsplash";

export default function Gallery() {

  const [images, setNewImages] = useState([])
  const getImages = (term) =>{
    return unsplash.get("https://api.unsplash.com/search/photos", { 
      params: {
      query:term
    }
    });
  };

  const onSearchSubmit = (term) =>{
    getImages(term).then((res)=>{
      let results = res.data.results;
      
      let newImages = [
        ...results,
        ...images
      ]

      newImages.sort(function(a,b){
        return 0.5 - Math.random();
      });
   setNewImages(newImages);
});
}

const getNewImages = ()=>{
let promises = [];
let imageData = [];
let images = ['camping', 'hiking', 'events', 'partyevents', 'advantures'];
images.forEach((imageTerm)=>{
  promises.push(
    getImages(imageTerm).then((res)=>{
      let results = res.data.results;
      imageData = imageData.concat(results);
      imageData.sort(function(a,b){
        return 0.5 - Math.random();
      })
    })
  )
})
Promise.all(promises).then(()=>{
  setNewImages(imageData);
})
}

useEffect(()=>{
getNewImages();
},[]);
  

  return (
    <Section id="landing" style={{ paddingTop: "7rem" }}>
      <div>
       <SearchBox onSubmit={onSearchSubmit}/>
       <MainContiner images={images}/>
      </div>
    </Section>
  );
}

const Section = styled.section``;
