import React from 'react';
import '../App.css';    

const IncomeExpense=()=>{
    
   
    return(
        <div className='income-expense'>
            <div className='income'>
                <h3>Income</h3>
                <p>  
                   $0.00
                </p>
            </div>
            <div className='expense'>
                <h3>Expense</h3>
                <p>
                   $0.00
                </p>
            </div>
        </div>
    );
}

export default IncomeExpense;