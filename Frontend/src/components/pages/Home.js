import React from "react";
import "../../App.css";
import Cards from "../LandingComp/Cards";
import Footer from "../LandingComp/Footer";
import HeroSection from "../LandingComp/HeroSection";
import Testimonials from "../Testimonials/Testimonials";

function Home({ history }) {
  console.log(history);
  return (
    <>
      <HeroSection />
      <Cards />
      <Testimonials />
      <br/>
      <Footer />
    </>
  );
}

export default Home;