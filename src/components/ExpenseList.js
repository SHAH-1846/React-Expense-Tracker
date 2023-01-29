import React from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseItem from './ExpenseItem';
import { useContext } from 'react';


const ExpenseList=()=>{
    const {expenses}=useContext(AppContext);

    return(
        <ul className="list-group">
            {expenses.map((expense)=>{
                return <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost}/>
            })}
        </ul>
    )
};

export default ExpenseList;