import React, {useContext} from 'react'
import {GlobalContext} from '../Context/GlobalState';

export const AccountSummary = () => {

  const {transactions} = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);


  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);


    return (
        

      <div className="inc-exp-container">
        <div>
          <h3>Income</h3>
            <p className="money plus">Rs {income}</p>
        </div>
        <div>
          <h3>Expense</h3>
          <p id="money-minus" className="money minus">Rs {expense}</p>
        </div>
      </div>
        
    )
}
