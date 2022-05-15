import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
// import About from "../AboutUs";

function Footer() {
  return (
    <div className="FooterMain">
      <section className="FooterSubMain">
        <p className="SubMain-heading">
          Join Us to receive great fun and Adrenaline
        </p>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="About">About</Link>
            <Link to="/">Destinations</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>

            <Link to="Events">Events</Link>
          </div>

          <div class="footer-link-items">
            <h2>Services</h2>
            <Link to="Adventures">Adventures</Link>
            <Link to="Activities">Activities</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              TRAVELO
              <i class="fab fa-typo3" />
            </Link>
          </div>
          <small class="website-rights">TRAVELO © 2022</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
