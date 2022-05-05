import React from "react";
import "./Cards.css";
import CardItem from "./CardItems";
import bonfire from "../images/bonfire.jpg";
import wildlife from "../images/wildlife.jpg";
import artfair from "../images/artfair.jpg";
import skydiving from "../images/skydiving.jpg";
import treking from "../images/treking.jpg";
import gallery from "../images/gallery.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1 className="h1">Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem 
              src={bonfire}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Bon-Fire"
              path="/Adventure/Camping"
            />
            <CardItem
              src={skydiving}
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Sky-Diving"
              path="/Adventure/SkyDiving"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={wildlife}
              text="Golden Triangle Tour with Ranthambore"
              label="WildLife Tour"
              path="/Activity/WildLifeTour"
            />
            <CardItem
              src={artfair}
              text="India Art Fair 2022 at NSIC Exhibition Grounds, Okhla."
              label="Indian Art Fair"
              path="/Activity/IndiaArtFair"
            />
            <CardItem
              src={treking}
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Trekking"
              path="/Adventure/Hiking"
            />
          </ul>
        </div>{" "}
        <ul className="gallery">
          <CardItem
            src={gallery}
            text="Oh, The Places You'll Go!, On the Coast of Somewhere Beautiful.
            "
            label="Gallery"
            path="/Galleries"
          />
        </ul>
      </div>
    </div>
  );
}

export default Cards;
