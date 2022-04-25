import React from "react";

const ViewBudget = (props) => {
  return (
    <>
      <span>Budget: ₹{props.budget}</span>
      <button
        type="button"
        style={{
          backgroundColor: "#99ffff",
          marginLeft: "1rem",
          border: "none",
          color: "black",
          padding: "4px 12px",
          textAlign: "center",
          textDecoration: "none",
          display: "inline-block",
          fontSize: "15px",
          borderRadius: "5px",
        }}
        onClick={props.handleEditClick}
      >
        Edit
      </button>
    </>
  );
};

export default ViewBudget;
