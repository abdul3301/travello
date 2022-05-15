import React, { useState } from "react";
import { Card } from "antd";
import { Carousel } from "antd";
import bonfire from "./images/bonfire.jpg";
// import camping from "./images/camping.jpg";
// import rafting from "./images/rafting.jpg";
import skydiving from "./images/skydiving.jpg";
import treking from "./images/treking.jpg";
import FormLayoutDemo from "./LandingPage/contact";
import "./aboutUs.css";
import { FormItemStatusContext } from "antd/lib/form/context";
import Footer from "./LandingPage/Footer";

const { Meta } = Card;

const About = ({ history }) => {
  return (
    <div>
      <div className="vacant"></div>
      <div className="aboutMain">
        <h1 style={{ fontFamily: "initial" }} className="text">
          ABOUT US
        </h1>
      </div>
      <div className="midPart">
        <div className="about-sub-main1">
          <h2
            style={{
              fontFamily: "initial",
              textAlign: "center",
              justifyContent: "center",
            }}
            className="text"
          >
            Welcome!!
            <br />
            We are the designers of this application.
          </h2>
        </div>
        <div className="about-sub-main2">
          <h1 style={{ fontFamily: "initial" }}>CONTACT US</h1>
          <FormLayoutDemo />
        </div>
      </div>

      <div className="aboutCheck">
        <h1 className="text" style={{ fontFamily: "initial" }}>
          CHECK OUT OUR SERVICES
        </h1>
        <Carousel
          style={{ paddingLeft: "30%" }}
          autoplay
          autoplaySpeed={1000}
          useCSS={true}
          pauseOnHover={true}
        >
          <div onClick={() => history.push("/Adventure/Camping")}>
            <img
              style={{
                width: "600px",
                height: "400px",
                objectFit: "contain",
                borderRadius: "5px",
              }}
              src={bonfire}
            ></img>
          </div>
          <div onClick={() => history.push("/Adventure/Camping")}>
            <img
              style={{
                width: "600px",
                height: "400px",
                objectFit: "contain",
                borderRadius: "5px",
              }}
              // src={camping}
            ></img>
          </div>
          <div onClick={() => history.push("/Adventure/CliffJumping")}>
            <img
              style={{
                width: "600px",
                height: "400px",
                objectFit: "contain",
                borderRadius: "5px",
              }}
              // src={rafting}
            ></img>
          </div>
          <div onClick={() => history.push("/Adventure/SkyDiving")}>
            <img
              style={{
                width: "600px",
                height: "400px",
                objectFit: "contain",
                borderRadius: "5px",
              }}
              src={skydiving}
            ></img>
          </div>
          <div onClick={() => history.push("/Adventure/Hiking")}>
            <img
              style={{
                width: "600px",
                height: "400px",
                objectFit: "contain",
                borderRadius: "5px",
              }}
              src={treking}
            ></img>
          </div>
        </Carousel>
      </div>

      <Footer />

      {/* <div className="header">
        <h1 className="aboutUs">About Us</h1>

        <br />
        <h2>Hello we are the maker of this app!!</h2>
      </div>
      <br />
      <div className="subMain">
        <div className="subMainHolder">
          <h3>Services we provide</h3>
          <br />
          <br />
          <br />
          <div className="services">
            1. Hiking.
            <br />
            2. camping.
            <br />
            3. Trekking.
            <br />
            4. LakeSide Adventures.
            <br />
            5. Pet camping.
          </div>
        </div>
        <br />
        <div className="makers">
          <Card
            className="abdul"
            hoverable
            cover={
              <img
                className="image"
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Abdul" description="www.instagram.com" />
          </Card>
          <Card
            className="abdul"
            hoverable
            cover={
              <img
                className="image"
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Vaishnavi" description="www.instagram.com" />
          </Card>
          <Card
            className="abdul"
            hoverable
            cover={
              <img
                className="image"
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Sai Kumar" description="www.instagram.com" />
          </Card>
          <Card
            className="abdul"
            hoverable
            cover={
              <img
                className="image"
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Manan" description="www.instagram.com" />
          </Card>
          <Card
            className="abdul"
            hoverable
            cover={
              <img
                className="image"
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Jahangir" description="www.instagram.com" />
          </Card>
          <Card
            className="abdul"
            hoverable
            cover={
              <img
                className="image"
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta
              title="Bhavyashree"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
          </Card>
        </div>
        <br />
      </div> */}
    </div>
  );
};
export default About;
