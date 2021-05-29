import React from 'react';
import '../App.css';
import Header from './Header';
import Balance from './Balance';
import IncomeExpense from './IncomeExpense';
import AddTransaction from './AddTransaction';
import TransactionList from './TransactionList';
import TransactionGraph from './TransactionGraph';


const Container=()=>{
    
    return(
        <div className='container'>
            <Header/>
            <Balance/>
            <IncomeExpense/>
            <TransactionList/>
            <TransactionGraph/>
            <AddTransaction/>
        </div>
    );
}

export default Container;