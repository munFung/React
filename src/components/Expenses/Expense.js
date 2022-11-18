import './Expense.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpensesFilter.js';
import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpenseChart';
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
  const filterExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear;
  });


  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filterYear} onSaveSelectedYear={filterHandler}></ExpenseFilter>
        <ExpenseChart expenses={filterExpenses}/>
        <ExpensesList items={filterExpenses}/>
      </Card>
    </div>
  );
}
/*  for study purpose
        {filterExpenses.length === 0 && <p>No expense found</p>}
        {filterExpenses.length > 0 &&
          filterExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}>

            </ExpenseItem>
          ))}
*/
export default Expense;