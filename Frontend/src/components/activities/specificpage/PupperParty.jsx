import React, { useState } from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import {Gi3DGlasses  } from "react-icons/gi";
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from "react-datepicker";
import { toast } from "react-toastify";
import axios from "axios";

export default function PupperParty() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [activity, setActivity] = useState(0);

  //activity Bookings
  const [date, setDate] = React.useState(new Date());

  const handleChange = (newValue) => {
    setDate(newValue);
    // console.log(newValue);
  };

  // Request Object
  const handleSubmit = async (e) => {
    // e.preventDefault();
    const obj = {
      dateAndTime: date,
      ProductType: "PupperParty",
      quantity: activity,
      No_of_people: activity * 3,
      price: activity * 8800,
    };

    // console.log(quantity);
    const res = await axios.post(
      "https://travelo-backend.herokuapp.com/activitiesBooking",
      obj,
    );

    if (res) {
      console.log("Booking Accepted");
    }
  };

  // Toast Notification
  const notify = () => {
    toast.success("Booking Accepted", {
      autoClose: 2000,
    });
  };
  return (
    <Section id="sectionContainer">
      <Carousel infiniteLoop autoPlay>
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1469788700396-33787e74fac5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            alt="pupperparty"
          />
        </div>
        <div className="image">
          <img
            src="https://petfed.org/images/events/1600003473-Bengaluru_Pupper_Pool_Party.jpg"
            alt="pupperparty"
          />
        </div>
        <div className="image">
          <img
            src="https://imgmedia.lbb.in/media/2019/11/5dd65eaa1aa90c5656b397a1_1574330026702.JPG"
            alt="pupperparty"
          />
        </div>
        <div className="image">
          <img
            src="https://petfed.org/images/events/1562676846-FB_Cover_(2).png"
            alt="pupperparty"
          />
        </div>
      </Carousel>
      {/* Content start */}
      <div className="background">
        <div className="content">
          <br></br>
          <br></br>
          <h1 className="title"> Description :-</h1>
          <p className="para">
            “The pupper party is a small scale café event done on a monthly
            basis,” he said. Their main event, a huge Pet Fed festival, is
            organised once a year in any one of the metros, Delhi, Mumbai or
            Bengaluru.
          </p>
        </div>

        <br></br>
        <br></br>
        <div className="content">
          <h1 className="title"> About the activity : - </h1>
          <p className="para">
            The idea was to do something for the pets and help intermingling of
            dog owners who own the same breed. <br></br>
            <br></br>
            Day 1 - Arrive at Exhibition site <br></br>
            <br></br>1. As you arrive at Exhibition site you’ll be required to
            complete-check-in formalities <br></br> 2. Make yourselves
            comfortable at the accommodation provided to you.
            <br></br> 3. Enjoy the attraction places nearby<br></br> 4. The
            first day at the camp will end with light music and dinner
            <br></br>
            <br></br>
            Day 2 - Attending Exhibitions and Return<br></br>
            <br></br>
            1. After breakfast this morning, you will be reaching at the
            gallaries .<br></br>
            2. After safety instructions and gear check, you will begin your
            entry passes and takes about 35 to 45 minutes to complete.<br></br>
            3. You will get the entry<br></br>
            4. Enjoy the exhibition<br></br>
          </p>
        </div>
        <div>
          <br></br>
          <br></br>
          <div className="content">
            <h1 className="title">Advisory</h1>
            <p className="para">
              1. A valid enrty pass is required to enter and participate inthe
              trade fairs/ exhibition.
              <br></br>
              2. Due process for custom clearance should be followed, through
              agencies recommended by the organizers, in order to ensure that
              the products/exhibits reach the venue well in time.<br></br>
              3. Efforts should be made to reach out to potential customers and
              business partners before and during the trade fair/ exhibitions
              through B2B/ B2C platforms. <br></br>
              4. These could be coordinated through the organizers or the
              relevant Industry Association coordinating the Indian
              participation in the event<br></br>
              5. The package is exclusive of any en-route or personal expenses,
              videography and photography of the flight.<br></br>
              6. ID proof is mandatory for each individual guest at the time of
              booking, and also upon arrival. PAN card will not be considered as
              a valid address proof.<br></br>
              7. The number of guests must not exceed the count mentioned at the
              time of booking.<br></br>
              8.Guidelines issued by the State-Government is to be followed.
              Social distancing to be maintained. Frequent hand sanitization and
              use of mask recommended.<br></br>
            </p>
          </div>
          <br></br>
          <br></br>
          <div className="content">
            <h1 className="title">Accommodation</h1>
            <p className="para">
              Hotel
              {/* <Gi3DGlasses /> */}
            </p>
          </div>
        </div>
      </div>
      {/* Content End */}
      <br></br>
      <br></br>
      {/* Booking */}

      <div className="container">
        <br></br>
        <h1>Pupper Party</h1>
        <br></br>
        <div className="date">
          <h4 className="checkIn">Check In </h4>
          <ReactDatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date) && handleChange}
            minDate={new Date()}
            showTimeSelect
            dateFormat="dd/MM/yyyy , p"
            placeholderText="Select Date"
          />
          <br></br>
          <br></br>
        </div>

        <table className="table">
          <tr className="heading">
            <th>Type</th>
            <th> Approx 3 Days</th>
            <th>Quantity</th>
            <th>No of People</th>
            <th>Total Price</th>
          </tr>
          <tr>
            <td>Pupper Party</td>
            <td>8800/3</td>
            <td>
              <h4 className="type">{activity}</h4>
              <div className="btnContainer">
                <button
                  className="btn"
                  onClick={() => setActivity(activity - (activity > 0 ? 1 : 0))}
                >
                  -
                </button>
                <button
                  className="btn"
                  onClick={() =>
                    setActivity(activity + (activity < 10 ? 1 : 0))
                  }
                >
                  +
                </button>
              </div>
            </td>
            <td> {activity * 3}</td>
            <td> {activity * 8800}</td>
          </tr>
        </table>
        <br></br>

        <button
          className="booking"
          onClick={(event) => {
            handleSubmit(event);
            notify();
          }}
        >
          Book Now
        </button>
        <br></br>
        <br></br>
      </div>
      {/* Booking End */}
    </Section>
  );
}

const Section = styled.section`
padding-top:4rem;

  .carousel {
    display: flex;
    justify-content: center;
    
  }
  .carousel .control-arrow,
  .carousel.carousel-slider .control-arrow {
    // background: #595f5f;
  }
  
  .slider-wrapper {
    transition-duration:600ms;
  }
  .carousel .carousel-status{
    display:none;
  }

  .carousel .thumb {
    display: none;
  }

  .carousel .slider {
    background-size: cover;
    height: 80vh;
    border-radius: 25px;
  }
  .carousel .slide img {
    max-height: 100%;
    // width: auto;
  }
  .image {
    // height: 100%;
    // width: auto;
  }
  .background {
    background-color:;
    border-radius: 15px;
  }

  .content {
    display: grid;
    gap: 3rem;
    padding: 0 3rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    background-color: #8338ec14;
    // background-color: #f2f2f2;
    // background-image: url("https://t4.ftcdn.net/jpg/03/10/16/27/360_F_310162798_6hWbaSFgDtWp4AhhaKPlTgAZUDL1c4UY.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    border-radius: 1rem;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.85) 0px 5px 15px;
    }
    .title {
      text-transform: uppercase;
      justify-content: center;
      color: black;
      font-family:'Lato',sans-serif;
      font-weight:bold;
    }
    .para {
      margin: 30px;
      // text-indent: 50px;
      text-align: justify;
      letter-spacing: 0.7px;
      color: black;
      font-family: 'Lato', sans-serif;
      line-height:1.5rem;
    }
  }


  //Bookings start
 .container{
  font-family: 'Lato', sans-serif;
  line-height:1.5rem;
   text-align:center;
  float:center;
  background-color: #e6ffff;
  border-radius: 1rem;
  transition: 0.3s ease-in-out;
  &:hover {
    transform: translateX(0.4rem) translateY(-1rem);
    box-shadow: rgba(0, 0, 0, 0.85) 0px 5px 15px;
    
  }

 }
   .table {
     padding:15px 15px;
     margin:auto;
     table-layout:fixed;
     width: fit-content;
 }

 .heading {
   background-color:#ffff66;
   border:none;
   border-radius:15px;
  
  }
  td, th {
    border: 1px solid #dddddd;
    text-align: center;
    padding: 8px;
    border:none;
  }

  .btn{
    margin:3px;
    padding:5px;
 
  
  }
  //date start

  input {
    padding:4px;
    margin-top:13px;
    text-align:center;
  }

  .react-datepicker-wrapper {
   width:35%;
  }
  //date end
  
  .booking {
      padding: 10px 15px;
      font-size: 14px;
      cursor: pointer;
      text-align: center;
      text-decoration: none;
      outline: none;
      color: #fff;
      background-color: #4caf50;
      border: none;
      border-radius: 15px;
      box-shadow: 0 9px #99;
      
  }
  //Bookings End

  //Responsive

  @media all and (max-width: 1024px) {
    padding-top:4rem;

    .carousel .slide img {
     width:auto;
    }
    @media all and (max-width:425px) {
      padding-top:4rem;

      .carousel .slider {
    height: 35vh;
      
      }
      .carousel .slide img {
        max-height: 100%;
        width: 100%;
      }
      .content .para{
        // letter-spacing: 1px;

      }
      @media all and (max-width:375px) {
        .carousel .slider {
      height: 30vh;
        
        }
        .carousel .slide img {
          max-height: 100%;
          width: 100%;
        }
        @media all and (max-width:320px) {
          .carousel .slider {
        height: 25vh;
          
          }
          .carousel .slide img {
            max-height: 100%;
            width: 100%;
          }
         
`;
