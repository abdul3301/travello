import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import eventsdata from "./eventsdata";
import ModalData from "./specificpage/ModalData";

import axios from "axios";

export default function Events() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [eventData, setEventData] = useState([{}]);
  const [modalData, setModalData] = useState([{}]);

  const buttonClick = (destination) => {
    localStorage.setItem("venue", JSON.stringify(destination));
    setIsModalVisible(true);
    setModalData(destination);
  };

  // Fetch Event Data From Backend
  const fetchEventData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/events/getEvents",
      );

      // First Result of the response
      const firstResult = response.data.data.eventData;
      console.log(firstResult);
      setEventData(firstResult);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEventData();
  }, []);

  return (
    <Section id="recommend">
      <div className="destinations">
        {/* Use the fetchEventData */}

        {eventData.map((destination) => {
          return (
            <div className="destination">
              <img src={destination.image} alt="" />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="info">
                <h4>{destination.cost}</h4>
              </div>
              <div className="distance">
                <span>{destination.location}</span>

                <button
                  className="button"
                  onClick={() => buttonClick(destination)}
                >
                  Check Availability
                </button>
              </div>
            </div>
          );
        })}
        <ModalData
          data={modalData}
          open={isModalVisible}
          handleClose={() => setIsModalVisible(false)}
        />
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 10rem 0;
  .title {
    text-align: center;
    font-size: 1rem;
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
        height:300px;
        border-radius:5px;
      }
      
      .info {
        display: flex;
        align-items: center;
       
       }
        display: flex;
        justify-content: space-between;
  }
      .distance {
        display: flex;
        justify-content: space-between;
      }
      .button {
        display: inline-block;
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
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    padding: 5rem 0;
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
