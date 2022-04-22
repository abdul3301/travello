import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = (props) => {
	const { dispatch } = useContext(AppContext);

	const [name, setName] = useState('');
	const [cost, setCost] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();
		const expense = {
			id: uuidv4(),
			name,
			cost: parseInt(cost),
		};

		dispatch({
			type: 'ADD_EXPENSE',
			payload: expense,
		});

		setName('');
		setCost('');
	};

	return (
		<form onSubmit={onSubmit}>
			<div className="addexpense" >
				<div className='name'>
					<label for='name'>Name</label>
					<input className='searchbar'
						required='required'
						type='text'
						id='name'
						value={name}
						onChange={(event) => setName(event.target.value)}
					/>
				</div>
				<div className='cost'>
					<label for='cost'>Cost</label>
					<input className='searchbar'
						required='required'
						type='number'
						id='cost'
						value={cost}
						onChange={(event) => setCost(event.target.value)}
					/>
				</div>
			</div>
			<div >
				<div >
					<button type='submit' >
						Save
					</button>
				</div>
			</div>
		</form>
	);
};

export default AddExpenseForm;