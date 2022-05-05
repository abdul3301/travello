import React from "react";
import "../../App.css";
import Cards from "../LandingPage/Cards";
import Footer from "../LandingPage/Footer";
import HeroSection from "../LandingPage/HeroSection";
import Testimonials from "../Testimonials";

function Home({ history }) {
  console.log(history);
  return (
    <>
      <HeroSection />
      <Cards />
      <Testimonials />
      <br />
      <Footer />
    </>
  );
}

export default Home;
