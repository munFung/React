import React, { useState } from 'react';
import './App.css';
import Expense from './components/Expenses/Expense';
import NewExpense from './components/NewExpense/NewExpense';
 

const INITIAL_EXPENSES = [
    { id: 'e1', title: 'Car Insurance', amount: 123, date: new Date(2021, 12, 28) },
    { id: 'e2', title: 'Toilet Paper', amount: 453, date: new Date(2021, 3, 21) },
    { id: 'e3', title: 'Toothbrush', amount: 333, date: new Date(2021, 4, 20) },
  ];
function App() {
  /*const word = document.createElement('p');
  word.textContent = 'This is also visible';
  document.getElementById('root').append(word);
  */
 
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  
  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };
  
    /* without JSX
    return React.createElement(
      'div',
      {},
      React.createElement('h2', {},"Let's get started!"),
      React.createElement(Expense, {items:expense})

    );*/

     
     return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expense items={expenses}></Expense>

    </div>
  );
  
}

export default App;
