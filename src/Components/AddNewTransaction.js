import React, {useState, useContext }from 'react';
import {GlobalContext} from '../Context/GlobalState';

export const AddNewTransaction = () => {

const [text, setText]=useState('');
const [amount,setAmount]=useState('');
const{addTransactions} = useContext(GlobalContext);
const onSumbit = e => {

  e.preventDefault();

  const newTransactions= {
    id: Math.floor(Math.random() * 100000000),
    text,
    amount: +amount
  }

  addTransactions(newTransactions);
}



    return (
        <div>
             <h3>Add New Transaction</h3>
      <form onSubmit={onSumbit}>
        <div className="form-control">
          <label htmlfor="text"><h4>Description</h4></label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text here" required />
        </div>
        <div className="form-control">
          <label htmlfor="amount"
            ><h4>Amount</h4> 
            (Negative - Expense, Positive - Income)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount here" required/>
        </div>
        <button className="btn">Add Your Transaction</button>
      </form>
        </div>
    )
}
