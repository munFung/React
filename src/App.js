import React from 'react';
import './App.css';
import Expense from './components/Expenses/Expense';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  /*const word = document.createElement('p');
  word.textContent = 'This is also visible';
  document.getElementById('root').append(word);
  */
  const expense = [
    { id: 'e1', title: 'Car Insurance', amount: 123, date: new Date(2021, 12, 28) },
    { id: 'e2', title: 'Toilet Paper', amount: 453, date: new Date(2021, 3, 21) },
    { id: 'e3', title: 'Toothbrush', amount: 333, date: new Date(2021, 4, 20) },
  ];
  
    /* <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <p>
           Edit <code>src/App.js</code> and save to reload.
         </p>
         <a
           className="App-link"
           href="https://reactjs.org"
           target="_blank"
           rel="noopener noreferrer"
         >
           Learn React
         </a>
       </header>
     </div>
     */
    /* without JSX
    return React.createElement(
      'div',
      {},
      React.createElement('h2', {},"Let's get started!"),
      React.createElement(Expense, {items:expense})

    );*/

     
     return (
    <div>
      <NewExpense></NewExpense>
      <p>This is also visible!</p>
      <Expense items={expense}></Expense>

    </div>
  );
  
}

export default App;
