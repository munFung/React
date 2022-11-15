import './ExpenseItem.css';
import DateObject from "react-date-object";


function ExpenseItem() {
    var $date = new DateObject("2019/09/20");
    var date = new DateObject($date);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.67;
    const datess =  new Date("2019/09/30");
    const dates =  new Date(2021, 2, 10);

    return (
        <div className="expense-item">
        <div>{date.toString()}</div>
        <div>{dates.toString()}</div>
        <div>{datess.toString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
        </div>
    );
}
export default ExpenseItem;