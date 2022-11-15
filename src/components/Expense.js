import './Expense.css';
import ExpenseItem from './ExpenseItem.js';
function Expense(props) {
    const expense = [
        { id: 'e1', title: 'Car Insurance', amount: 123, date: new Date(2021, 12, 28) },
        { id: 'e2', title: 'Toilet Paper', amount: 453, date: new Date(2021, 3, 21) },
        { id: 'e3', title: 'Toothbrush', amount: 783, date: new Date(2021, 4, 20) },
      ];
      
    return (
        <div className="expenses">
      <ExpenseItem title={expense[0].title} amount={expense[0].amount} date={expense[0].date}></ExpenseItem>
      <ExpenseItem title={expense[1].title} amount={expense[1].amount} date={expense[1].date}></ExpenseItem>
      <ExpenseItem title={expense[2].title} amount={expense[2].amount} date={expense[2].date}></ExpenseItem>

        </div>

    );
}

export default Expense;