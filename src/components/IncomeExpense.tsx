import React,{useContext} from 'react';
import '../App.css';  
import {TransactionContext} from '../context/TransactionContext';

const IncomeExpense=()=>{
    const {income,expense,animateNumber}=useContext<InitialState2>(TransactionContext);
   
    return(
        <div className='income-expense'>
            <div className='income'>
                <h3>Income</h3>
                <p>  
                   {animateNumber(income)}
                </p>
            </div>
            <div className='expense'>
                <h3>Expense</h3>
                <p>
                   {animateNumber(expense)}
                </p>
            </div>
        </div>
    );
}

export default IncomeExpense;