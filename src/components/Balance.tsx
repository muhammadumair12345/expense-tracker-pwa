import React,{useContext} from 'react';
import '../App.css';
import {TransactionContext} from '../context/TransactionContext';

const Balance=()=>{
    const {totalBalance,animateNumber}=useContext<InitialState2>(TransactionContext);

    return(
        <div className='balance'>
            <h2>Balance</h2>
            <p>
                {animateNumber(totalBalance)}
            </p>
        </div>
    );
}

export default Balance;