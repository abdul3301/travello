import React from "react";
import styled from "styled-components";

export default function Cart(props) {
  const {cartItems} = props;
  return (
    <Section id="landing" style={{ paddingTop: "7rem" }}>
      <div>
        <h1>Cart Items</h1>
        <div>
          {cartItems?.length === 0 && <div>Your Cart Is Empty</div>}
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section``;
