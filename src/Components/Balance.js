import React, {useContext} from 'react'
import {GlobalContext} from '../Context/GlobalState';

export const Balance = () => {

  const {transactions} = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
       
            <div className="balance">
      <h2>YOUR BALANCE</h2>
      <h3 className="Rs">Rs { total }</h3></div>
     
    )
}
