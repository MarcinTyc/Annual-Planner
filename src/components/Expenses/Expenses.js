import { React, useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = props => {
	const [filteredYear, setFilteredYear] = useState('2022');

	const filterChangeHandler = selectedYear => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = props.items.filter(expense => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>

				<ExpensesChart expenses={filteredExpenses} />

				{filteredExpenses.length === 0 && (
					<h2 className='empty-list'>No expenses found.</h2>
				)}

				{filteredExpenses.length > 0 &&
					filteredExpenses.map(expense => (
						<ExpenseItem
							key={expense.id}
							title={expense.title}
							amount={expense.amount}
							date={expense.date}
						/>
					))}
			</Card>
		</div>
	);
};

export default Expenses;
