import './Expense.css';
import ExpenseItem from './ExpenseItem.js';
import Card from './Card';

function Expense(props) {
    /*const expense = [
        { id: 'e1', title: 'Car Insurance', amount: 123, date: new Date(2021, 12, 28) },
        { id: 'e2', title: 'Toilet Paper', amount: 453, date: new Date(2021, 3, 21) },
        { id: 'e3', title: 'Toothbrush', amount: 783, date: new Date(2021, 4, 20) },
      ];
      */
      
    return (
        <Card className="expenses">
      <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></ExpenseItem>
      <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}></ExpenseItem>
      <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenseItem>

        </Card>

    );
}

export default Expense;