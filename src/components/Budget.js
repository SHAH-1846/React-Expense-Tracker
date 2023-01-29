import React from 'react';
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';


const Budget=()=>{
    const {budget}=useContext(AppContext);
    return(
    <div className="alert alert-secondary">
        <span>Budget: Rs.{budget}</span>
    </div>
    )
};

export default Budget;