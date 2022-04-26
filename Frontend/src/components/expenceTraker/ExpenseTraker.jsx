import React from "react";
import "./expensetraker.css";
import { AppProvider } from "../../context/AppContext";
import Budget from "./Budget";
import ExpenseTotal from "./ExpenseTotal";
import ExpenseList from "./ExpenseList";
import AddExpenseForm from "./AddExpenseForm";
import RemainingBudget from "./Remaining";

const ExpenseTraker = () => {
  return (
    <AppProvider>
      <div className="container" style={{ paddingTop: "6rem" }}>
        <h1
          style={{
            textAlign: "center",
            margin: "1rem 0",
          }}
        >
          Your Budget Planner
        </h1>
        <div className="status">
          <div className="budget">
            <Budget />
          </div>
          <div className="remaining">
            <RemainingBudget />
          </div>
          <div className="total">
            <ExpenseTotal />
          </div>
        </div>
        <h1 style={{ marginLeft: "5rem", marginBottom: "1rem" }}>Expenses</h1>
        <div className="list">
          <ExpenseList />
        </div>
        <div className="addexpense">
          <AddExpenseForm />
        </div>
      </div>
    </AppProvider>
  );
};

export default ExpenseTraker;
