import React from "react";
import NewExpenses from "../NewExpenses/NewExpenses";
import ExpenseDate from "./ExpenseDate";

import './Expenses.css'

function Expenses(props) {
    return (
        <div key={props.id} className="expense-card">
            <ExpenseDate date={props.date} />
            <h2>{props.title}</h2>
            <div className='expense-item__price'>
                {props.amount}
            </div>
        </div>
    )
}

export default Expenses;