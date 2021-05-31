import React from 'react';
import '../App.css';
import Header from './Header';
import Balance from './Balance';
import IncomeExpense from './IncomeExpense';
import AddTransaction from './AddTransaction';
import TransactionList from './TransactionList';
import TransactionGraph from './TransactionGraph';
import { TransactionProvider } from '../context/TransactionContext';


const Container=()=>{
    
    return(
        <div className='container'>
            <Header/>
            <TransactionProvider>
                <Balance/>
                <IncomeExpense/>
                <TransactionList/>
                <TransactionGraph/>
                <AddTransaction/>
            </TransactionProvider>
        </div>
    );
}

export default Container;