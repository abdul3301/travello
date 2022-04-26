import React, { useState } from "react";

const EditBudget = (props) => {
  const [value, setValue] = useState(props.budget);
  return (
    <>
      <input
        required="required"
        type="number"
        id="name"
        value={value}
        style={{ padding: "5px 15px", borderRadius: "2px", fontSize: "0.9rem" }}
        onChange={(event) => setValue(event.target.value)}
      />
      <button
        type="button"
        style={{
          backgroundColor: "#4CAF50",
          marginLeft: "1rem",
          border: "none",
          color: "white",
          padding: "4px 12px",
          textAlign: "center",
          textDecoration: "none",
          display: "inline-block",
          fontSize: "15px",
          borderRadius: "5px",
        }}
        onClick={() => props.handleSaveClick(value)}
      >
        Save
      </button>
    </>
  );
};

export default EditBudget;
