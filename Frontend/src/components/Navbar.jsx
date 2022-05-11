import React, { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import location from "../assets/location.png";

export default function Navbar({ loginUser, handleLogout }) {
  const [showHamburger, setShowHamburger] = useState(false);
  return (
    <Section id="navbar">
      <>
        <nav className="main-nav">
          <img src={location} alt="" />

          <div className="logo">
            <h2>
              <span>T</span>ravelo
            </h2>
          </div>

          <div
            className={
              showHamburger ? "menu-link mobile-menu-link " : "menu-link"
            }
          >
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/Adventures">Adventures</a>
              </li>
              <li>
                <a href="/Activities">Activities</a>
              </li>
              <li>
                <a href="/Events">Events</a>
              </li>
              {/* <li>
                <a href="/Galleries">Gallery</a>
              </li> */}
              <li>
                <a href="/MapPage">Map</a>
              </li>
              <li>
                <a href="/ExpenseTraker">Itinerary</a>
              </li>

              <div class="dropdown">
                <button class="dropbtn">
                  Products <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                  <a href="/Products">Product-List</a>
                  <a href="/WishList">Wish-List</a>
                </div>
              </div>

              {!loginUser ? (
                <li>
                  <a href="/Login">LogIn</a>
                </li>
              ) : (
                <li
                  title="Click to Log-out"
                  onClick={handleLogout}
                  style={{ cursor: "pointer", fontWeight: "bold" }}
                >
                  {loginUser?.email?.split("@")[0]}
                </li>
              )}
            </ul>
          </div>

          {/* hamburger menu */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowHamburger(!showHamburger)}>
              <GiHamburgerMenu />
            </a>
          </div>
          {/* hamburger end */}
        </nav>
      </>
    </Section>
  );
}

const Section = styled.section`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Jost", sans-serif;

  html {
    font-size: 62.5%;
    font-family: "Jost", sans-serif;
  }
  a {
    text-decoration: none;
    font-family: "Jost", sans-serif;
  }
  li {
    list-style: none;
  }
  img {
    height: 2.5rem;
    width: 3.7rem;
    margin-left: 5.8rem;
    margin-bottom: 15px;
  }
  .logo h2 {
    font-size: 2.5rem;
    font-weight: 400;
    text-transform: uppercase;
    background: -webkit-linear-gradient(#eee, rgb(69, 57, 248));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .logo h2 {
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 20px;
    margin-left: 4.5rem;
  }
  .logo h2 span {
    font-size: 2rem;
  }
  .main-nav {
    background-color: #e6e6e6;
    width: 100%;
    height: 4rem;
    display: grid;
    align-items: center;
    grid-template-columns: 5rem 1fr 2fr 0fr 5rem;
    box-shadow: 0px 4px 9px 1px rgba(56, 47, 47, 0.75);
    -webkit-box-shadow: 0px 4px 9px 1px rgba(56, 47, 47, 0.75);
    -moz-box-shadow: 0px 4px 9px 1px rgba(56, 47, 47, 0.75);
    position: fixed;
    z-index: 100;
    top: 0;
  }

  .dropdown {
    float: left;
    overflow: hidden;
    font-size: 18px;
    text-decoration: none;
    font-family: "Jost", sans-serif;
  }
  .dropdown .dropbtn {
    font-size: 18px;
    border: none;
    outline: none;
    color: black;
    padding: 14px 16px;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
  }
  .navbar a:hover,
  .dropdown:hover .dropbtn {
    background-color: #ddd;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  .dropdown-content a {
    float: none;
    color: black;
    padding: 15px 15px;
    text-decoration: none;
    display: block;
    text-align: left;
  }
  .dropdown-content a:hover {
    background-color: #ddd;
  }
  .dropdown:hover .dropdown-content {
    display: block;
  }
  .fa fa-caret-down {
    gap: 5px;
  }

  .logo {
    height: 5rem;
    display: grid;
    grid-column: 2/3;
    justify-content: start;
    align-items: center;
  }

  .menu-link {
    grid-column: 3/4;
    align-items: center;
  }

  .menu-link ul {
    height: 5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 13px;
  }
  .menu-link ul li {
    font-size: 1rem;
  }

  .menu-link ul li a {
    text-transform: capitalize;
    color: rgba(0, 0, 3, 0.8);

    transition: 0.5s;
    font-size: 19px;
  }

  .menu-link ul li:hover > a {
    transform-origin: left;
    color: black;
    text-decoration: none;
    transition: 0.5s;
  }

  .hamburger-menu {
    display: none;
  }

  //Responsive

  @media (max-width: 1024px) {
    .main-nav {
      height: 4rem;
      grid-template-column: 2rem 2fr 3fr 2rem 2rem;
    }
    .menu-link {
      display: none;
    }
    .social-media {
      display: none;
    }
    .logo {
      height: 5rem;
    }
    .hamburger-menu {
      display: block;
      margin-left: 65%;
      padding-left: 25%;
      font-size: 1.8rem;
      position: fixed;
    }

    // mobile view start

    .mobile-menu-link {
      margin-top: -18px;
      grid-column: 2/4;
      position: relative;
      z-index: 99;
    }
    .mobile-menu-link {
      background-color: white;
      height: 20rem;
      display: grid;
      grid-column: 2/5;
      align-items: center;

      padding-left: 3rem;
      transition: all 2s linear;
      transform-origin: top;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0.3) 0px 30px 60px -30px;
    }
    .mobile-menu-link ul {
      height: 20rem;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: start;
    }
    .mobile-menu-link ul li:first-child {
      transition-delay: 0.2s;
    }

    //mobile view end
  }
  @media (max-width: 768px) {
    .main-nav {
      height: 4rem;
      grid-template-column: 1rem 2fr 1fr 1fr 1rem;
    }
    .menu-link {
      display: none;
    }
    .social-media {
      display: none;
    }
    img {
      margin-left: 2.5rem;
      margin-bottom: 15px;
    }
    .logo {
      height: 5rem;
      margin-left: -60px;
    }
    .hamburger-menu {
      display: block;
      margin-left: 65%;
      padding-left: 25%;
      font-size: 1.8rem;
      position: fixed;
    }
    // mobile view start
    .mobile-menu-link {
      margin-top: -17px;

      grid-column: 2/4;
      position: relative;
      z-index: 99;
    }
    .mobile-menu-link {
      background-color: white;
      height: 20rem;
      display: grid;
      grid-column: 2/5;
      align-items: center;
      padding-left: 3rem;
      transition: all 2s linear;
      transform-origin: top;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0.3) 0px 30px 60px -30px;
    }
    .mobile-menu-link ul {
      height: 20rem;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: start;
    }
    .mobile-menu-link ul li:first-child {
      transition-delay: 0.2s;
    }

    //mobile view end
  }

  @media (max-width: 520px) {
    .main-nav {
      height: 4rem;
      grid-template-column: 0.5rem 0.5fr 1fr 0.5rem 0.5rem;
    }
    .menu-link {
      display: none;
    }
    .social-media {
      display: none;
    }
    img {
      margin-left: 1rem;
      margin-bottom: 20px;
    }
    .logo h2 {
      font-size: 1.5rem;
      font-weight: 600;
      text-transform: uppercase;
      margin-bottom: 20px;
      margin-left: 50px;
    }
    .logo h2 span {
      font-size: 3rem;
    }
    .hamburger-menu {
      display: block;
      margin-left: 65%;
      padding-left: 20%;
      font-size: 1.5rem;
      position: fixed;
    }
    // mobile view start
    .mobile-menu-link {
      margin-top: -16px;

      grid-column: 2/4;
      position: relative;
      z-index: 99;
    }
    .mobile-menu-link {
      background-color: white;
      height: 20rem;
      display: grid;
      grid-column: 2/5;
      align-items: center;
      padding-left: 3rem;
      transition: all 2s linear;
      transform-origin: top;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0.3) 0px 30px 60px -30px;
    }
    .mobile-menu-link ul {
      height: 20rem;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: start;
    }
    .mobile-menu-link ul li:first-child {
      transition-delay: 0.2s;
    }

    //mobile view end
  }
`;
