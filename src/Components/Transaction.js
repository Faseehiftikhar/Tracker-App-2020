import React, {useContext} from 'react'
import {GlobalContext} from '../Context/GlobalState';


export const Transaction = ({transactions}) => {


  const{deleteTransactions} = useContext(GlobalContext);

    const sign = transactions.amount < 0 ? '-' : '+';
    return (
            <li className={transactions.amount < 0 ? 'minus' : 'plus'}>
          {transactions.text} <span>{sign} Rs {Math.abs(transactions.amount)}</span><button onClick={()=> deleteTransactions(transactions.id)} class="delete-btn">x</button>
        </li>
    )
}
