import React, {useState} from "react";
import Cart from "./Cart";
import styled from "styled-components";
import activitiesdata from "../activities/activitiesdata";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (id) =>{
    const exist = cartItems.find((x) => x.id === activitiesdata.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === activitiesdata.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...activitiesdata, qty: 1 }]);
    }
  };
  return (
    <Section id="landing" style={{ paddingTop: "7rem" }}>
      <div>
        <Cart onAdd={onAdd} cartItems={cartItems}/>
      </div>
    </Section>
  );
}

const Section = styled.section``;
