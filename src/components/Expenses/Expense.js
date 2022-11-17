import './Expense.css';
import ExpenseItem from './ExpenseItem.js';
import Card from '../UI/Card';
import ExpenseFilter from './ExpensesFilter.js';
import React, { useState } from 'react';

function Expense(props) {
    /*const expense = [
        { id: 'e1', title: 'Car Insurance', amount: 123, date: new Date(2021, 12, 28) },
        { id: 'e2', title: 'Toilet Paper', amount: 453, date: new Date(2021, 3, 21) },
        { id: 'e3', title: 'Toothbrush', amount: 783, date: new Date(2021, 4, 20) },
      ];
      */
     const [filterYear, setFilterYear] = useState('2020');
      const filterHandler = (selectedYear) => {
        setFilterYear(selectedYear);
      };
    return (
      <div>
        <Card className="expenses">
        <ExpenseFilter selected={filterYear} onSaveSelectedYear={filterHandler}></ExpenseFilter>
      {props.items.map((expense) => (
      <ExpenseItem 
        title={expense.title} 
        amount={expense.amount} 
        date={expense.date}>

      </ExpenseItem>
      ))}
        </Card>
</div>
    );
}

export default Expense;