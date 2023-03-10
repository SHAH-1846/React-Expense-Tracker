import { useReducer } from "react";
// import { Context } from "react";
import { createContext } from "react";

const AppReducer=(state,action)=>{
    switch(action.type){
        case 'AddExpense':
            return{
                ...state,
                expenses:[...state.expenses,...action.payload],
            };
            case 'DELETE_EXPENSE':
                return{
                    ...state,
                    expenses:state.expenses.filter((expense)=>expense.id!==action.payload
                    ),
                };
            default:
                return state;
    }
}

const initialState={
    budget:5000,
    expenses:[{id:12,name:"Shopping",cost:40},{id:13,name:"Holiday",cost:400},{id:14,name:"Car Service",cost:50}]
};

export const AppContext=createContext();



export const AppProvider=(props)=>{
    const [state,dispatch]=useReducer(AppReducer,initialState);

    return(
        <AppContext.Provider value={{budget:state.budget,expenses:state.expenses,dispatch}}>{props.children}</AppContext.Provider>
    )
}

export default AppContext;