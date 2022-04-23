import React from "react";
import "./Cards.css";
import CardItem from "./CardItems";
import bonfire from "../images/bonfire.jpg";
import camping from "../images/camping.jpg";
import rafting from "../images/rafting.jpg";
import skydiving from "../images/skydiving.jpg";
import treking from "../images/treking.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={bonfire}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Bon-Fire"
              path="/"
            />
            <CardItem
              src={skydiving}
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Sky-Diving"
              path="/"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={camping}
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Camping"
              path="/"
            />
            <CardItem
              src={rafting}
              text="Experience Football on Top of the Himilayan Mountains"
              label="Rafting"
              path="/"
            />
            <CardItem
              src={treking}
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Trekking"
              path="/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
