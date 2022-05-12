import React from "react";
import "../../App.css";
import Cards from "./Cards";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Testimonials from "./Testimonials";

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
