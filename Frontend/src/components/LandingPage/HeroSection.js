import React from "react";
import "../../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import Login from "../Login";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1 style={{ textAlign: "center" }}>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          href="/Login"
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
