import React,{useState,useEffect,useContext} from 'react';
import '../App.css'
import {TransactionContext} from '../context/TransactionContext';

const AddTransaction:React.FC=()=>{
    const [description,setDescription] = useState<string>('');
    const [amount,setAmount]=useState<string>('');
    const {updater,boolUpdater,addTransaction,updateTransaction}=useContext<InitialState2>(TransactionContext);
    
    useEffect(() => {
        setDescription(updater[0].description) 
        setAmount(updater[0].amount.toString())
    }, [updater])

    function setDescriptionValue(e:React.ChangeEvent<HTMLInputElement>){
        setDescription(e.target.value) 
    }

    function setAmountValue(e:React.ChangeEvent<HTMLInputElement>){
        setAmount(e.target.value)
    }

    const onSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const newTransaction:Transaction={
            id:boolUpdater?updater[0].id:Math.floor(Math.random()*10000000),
            description,
            amount:+amount
        }
        boolUpdater?updateTransaction(newTransaction):addTransaction(newTransaction);
        setDescription("");
        setAmount("");
    }

    return(
        <div className='add-transaction'>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <input type="text" value={description} onChange={setDescriptionValue} placeholder="Description" required/>
                <input type="number" value={amount}  onChange={setAmountValue} placeholder="Amount (+income & -expense)" required/>
                <input type="submit" value="Add Transaction"/>
            </form>
        </div>
    );
}

export default AddTransaction;