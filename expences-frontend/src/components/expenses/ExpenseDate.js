import React from "react";
import './ExpenseDate.css'

const ExpenseDate = props => {
    const day = props.date.toLocaleString('en-US',{day: '2-digit'});
    const month = props.date.toLocaleString('en-US',{month: 'long'});
    const year = props.date.getFullYear();

    return(
        <div className="expense-date">
            <div className="exp-date-day">{day}</div>
            <div className="exp-date-month">{month}</div>
            <div className="exp-date-year">{year}</div>
        </div>
    )
}

export default ExpenseDate;