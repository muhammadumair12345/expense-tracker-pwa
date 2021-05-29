import React from 'react';
import '../App.css'

const AddTransaction=()=>{

    return(
        <div className='add-transaction'>
            <h3>Add New Transaction</h3>
            <form >
                <input type="text"  placeholder="Description" required/>
                <input type="number" placeholder="Amount (+income & -expense)" required/>
                <input type="submit" value="Add Transaction"/>
            </form>
        </div>
    );
}

export default AddTransaction;