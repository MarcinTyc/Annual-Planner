import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import Chart from './components/Chart/Chart';

const INITIAL_EXPENSES = [
	{
		id: 'e1',
		title: 'Holiday',
		amount: 94.12,
		date: new Date(2023, 7, 14),
	},
	{ id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2022, 2, 12) },
	{
		id: 'e3',
		title: 'Car Insurance',
		amount: 294.67,
		date: new Date(2024, 2, 28),
	},
	{
		id: 'e4',
		title: 'New Desk',
		amount: 450,
		date: new Date(2022, 5, 12),
	},
	{
		id: 'e5',
		title: 'Weeding',
		amount: 800,
		date: new Date(2022, 6, 21),
	},
	{
		id: 'e6',
		title: 'Christmas',
		amount: 250,
		date: new Date(2022, 12, 24),
	},
];

const App = () => {
	const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

	const addExpenseHandler = expense => {
		setExpenses(prevExpenses => {
			return [expense, ...prevExpenses];
		});
	};

	return (
		<>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</>
	);
};

export default App;
