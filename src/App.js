import React from 'react';
import './App.css';


// Importing Our Componets

import {HeaderTag} from './Components/HeaderTag';
import {Balance} from'./Components/Balance';
import {AccountSummary} from './Components/AccountSummary';
import {TransactionHistory} from './Components/TransactionHistory';
import {AddNewTransaction} from './Components/AddNewTransaction';
import {GlobalProvider} from './Context/GlobalState';



function App() {
  return (
   <GlobalProvider>
   <div>  <div className="made"> Made by Faseeh Iftikhar</div></div>
    

     <div className="ContainerNew"> <HeaderTag/>
   <Balance/>
 <AccountSummary/>
 <TransactionHistory/>
 <AddNewTransaction/></div>
    
  
 
 </GlobalProvider>
     
    
   
    
  );
}

export default App;
