import './ExpenseItem.css';
//import DateObject from "react-date-object";
import ExpenseDate from './ExpenseDate';
import Card from './Card';

function ExpenseItem(props) {
  /*  var $date = new DateObject("2019/09/20");
    var date = new DateObject($date);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.67;
    const datess =  new Date("2019/09/30");
    const dates =  new Date(2021, 2, 10);
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();
    */
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
    );
}
export default ExpenseItem;