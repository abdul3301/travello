import React from "react";
import styled from "styled-components";
import avatarImage1 from "../images/avatarImage1.jpeg";
import avatarImage2 from "../images/avatarImage1.jpeg";
import avatarImage3 from "../images/avatarImage1.jpeg";
export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Testimonials</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            asperiores eaque.
          </p>
          <div className="info">
            <img src={avatarImage1} alt="" />
            <div className="details">
              <h4>John</h4>
              <span>CEO - Shashaan Web Solutions</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            asperiores eaque.
          </p>
          <div className="info">
            <img src={avatarImage2} alt="" />
            <div className="details">
              <h4>Christine Barger</h4>
              <span>CEO - Shashaan Web Solutions</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            asperiores eaque.
          </p>
          <div className="info">
            <img src={avatarImage3} alt="" />
            <div className="details">
              <h4>Steve</h4>
              <span>CEO - Shashaan Web Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
          width: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;











// import { Card } from "antd";
// import { Carousel } from 'antd'
// import React from "react";
// import ReactDOM from "react-dom";
// import bonfire from "../images/bonfire.jpg"
// import camping from "../images/camping.jpg"
// import rafting from "../images/rafting.jpg"
// // import skydiving from "../images/skydiving.jpg"
// // import treking from "../images/treking.jpg"
// import img-1 from "./images/img-1.jpg"
// // import "./Testimonials.css";

// export default function Testimonials() {
//   return (


//     <div className="testimonials">
//       <br />


//       <h1 className="text" style={{ fontFamily: "initial" }}>Testimonials</h1>
//       <Carousel style={{ paddingLeft: "30%", border:"2px solid black"}} autoplay autoplaySpeed={1000} useCSS={true} pauseOnHover={true}>
//         <div ><img style={{
//           width: "600px", height: "400px",
//           objectFit: "contain",
//           marginLeft: "125px",
//           marginTop: "20px",
//           width: "200px",
//           height: "200px",
//           borderRadius: "100%",
//           border:"2px solid black",
//           justifyContent:"center",
//           textAlign:"center"
//         }} src={bonfire}></img> hello</div>
//         <div><img style={{ width: "600px", height: "400px", objectFit: "contain", borderRadius: "5px" }} src={camping}></img></div>
//         <div><img style={{ width: "600px", height: "400px", objectFit: "contain", borderRadius: "5px" }} src={rafting}></img></div>
//         <div><img style={{ width: "600px", height: "400px", objectFit: "contain", borderRadius: "5px" }} src={skydiving}></img></div>
//         <div><img style={{ width: "600px", height: "400px", objectFit: "contain", borderRadius: "5px" }} src={treking}></img></div>


//       </Carousel>


//     </div>

//   );
// }



