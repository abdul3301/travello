import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../../context/AppContext";
import "./expensetraker.css";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  return (
    <li className="grouplist">
      {props.name}
      <div> ₹ {props.cost} </div>
      <div>
        <TiDelete size="1.5em" onClick={handleDeleteExpense} />
      </div>
    </li>
  );
};

export default ExpenseItem;
