import React from "react";
import styled from "styled-components";
import background from "../assets/background.jpg";
import Testimonials from "./Testimonials";
export default function Landing() {
  return (
    <Section id="landing" style={{ paddingTop: "" }}>
      <section className="showcase">
        <header>
          <div className="toggle"></div>
        </header>
        <img src={background} muted loop autoPlay />
        <div className="overlay"></div>
        <div className="text">
          <h3>Explore The World</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic magnam
            <br></br>
            omnis enim in similique recusandae facilis modi laborum dolor quasi.
          </p>
          <a href="#"> Explore</a>
        </div>
      </section>

      <Testimonials />
    </Section>
  );
}

const Section = styled.section`
  .showcase {
    position: relative;
    right: 0;
    width: 100%;
    min-height: 100vh;
    padding: 100px;
    display: flex;
    align-items: center;
    background: #111;
    color: #fff;
    z-index: 2;
  }

  .showcase header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 40px 100px;
    z-index: 1000;
  }

  .showcase img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #03a9f4;
    mix-blend-mode: overlay;
  }

  .text {
    position: relative;
    z-index: 10;
  }
  .text h3 {
    font-size: 4em;
    font-weight: 800;
    line-height: 1em;
    text-transform: uppercase;
  }
  .text p {
    font-size: 1.1em;
    margin: 20px 0;
    font-weight: 400;
    max-width: 700px;
  }
  .text a {
    display: inline-block;
    font-size: 1em;
    background: #fff;
    padding: 10px 30px;
    text-decoration: none;
    color: #111;
    margin-top: 10px;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: 0.2s;
  }

  .text a:hover {
    letter-spacing: 6px;
  }
  .menu {
    display: none;
  }
`;
