import React from 'react';
import "./expensetraker.css"
import { AppProvider } from '../../context/AppContext';
import Budget from "./Budget"
import ExpenseTotal from './ExpenseTotal';
import ExpenseList from './ExpenseList';
import AddExpenseForm from './AddExpenseForm';
import RemainingBudget from './Remaining';

const ExpenseTraker = () => {
	return (
		<AppProvider>
			<div className='container' style={{ paddingTop: "7rem"}} >
				<h1 >Your Budget Planner</h1>
				<div className="status">
					<div className="budget">
						<Budget/>
					</div>
					<div className="remaining">
						<RemainingBudget/>
					</div>
					<div className="total">
						<ExpenseTotal/>
					</div>
				</div>
				<h1>Expenses</h1>
				<div className='list'>
					<ExpenseList/>
				</div>
				<div className="addexpense">
					<AddExpenseForm/>
				</div>
				</div>
		</AppProvider>
	);
};

export default ExpenseTraker;
