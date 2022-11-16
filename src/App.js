//import logo from './logo.svg';
import './App.css';
//import ExpenseItem from './components/ExpenseItem';
import Expense from './components/Expense';

function App() {
  /*const word = document.createElement('p');
  word.textContent = 'This is also visible';
  document.getElementById('root').append(word);
  */
  const expense = [
    { id: 'e1', title: 'Car Insurance', amount: 123, date: new Date(2021, 12, 28) },
    { id: 'e2', title: 'Toilet Paper', amount: 453, date: new Date(2021, 3, 21) },
    { id: 'e3', title: 'Toothbrush', amount: 783, date: new Date(2021, 4, 20) },
  ];
  
  return (
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
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible!</p>
      <Expense items={expense}></Expense>

    </div>
  );
}

export default App;
