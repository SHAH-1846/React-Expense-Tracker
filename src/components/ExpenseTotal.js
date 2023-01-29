import React from "react";
import AppContext from "../context/AppContext";
import { useContext } from "react";


const ExpenseTotal=()=>{
    const {expenses}=useContext(AppContext);
    const totalExpenses=expenses.reduce((total,item)=>{
        return (total+=item.const);

    },0);
    return(
        <div className="alert alert-primary">
            <span>Spent so far: Rs.{totalExpenses}</span>
        </div>
    )
};

export default ExpenseTotal;