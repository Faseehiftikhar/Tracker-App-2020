import React , { createContext, useReducer } from 'react'
import AppReducer from './AppReducer';

// Initial State 
const initialState= {
    transactions: [ 
           
         ]
}

// create context

export const GlobalContext= createContext(initialState);

// provider Component

export const GlobalProvider = ({children}) =>{


 const [state, dispatch] = useReducer(AppReducer, initialState);


//  Actions

function deleteTransactions(id){
    dispatch({
        type: 'DELETE_TRANSACTIONS',
        payload: id 
    });}

    function addTransactions(transactions){
        dispatch({
            type: 'ADD_TRANSACTIONS',
            payload: transactions 
        });}


return (<GlobalContext.Provider value={ { transactions: state.transactions,
deleteTransactions,
addTransactions } }>

    {children}
</GlobalContext.Provider>);

}