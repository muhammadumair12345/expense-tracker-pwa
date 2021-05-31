import React,{createContext,useEffect,useState,useReducer} from 'react';
import TransactionReducer from './TransactionReducer';
import AnimatedNumber from "animated-number-react";
import numeral from 'numeral';

const initialState1:InitialState1={
    transactions:localStorage.getItem('transactions')
    ? JSON.parse(localStorage.getItem('transactions')||'')
    : [{id:-1,description:"",amount:0}],
}


enum ActionType {
    AddTransaction = 'ADD_TRANSACTION',
    DeleteTransaction = 'DELETE_TRANSACTION',
    UpdateTransaction = 'UPDATE_TRANSACTION',
}

export const TransactionContext=createContext<State>(initialState1);

export const TransactionProvider:React.FC=({children})=>{
    const [state,dispatch]=useReducer(TransactionReducer,initialState1);
    const [updater,setUpdater]=useState<Transaction[]>([{id:-1,description:"",amount:0}]); 
    const [boolUpdater,setBoolUpdater]=useState<boolean>(false);
    
    const amounts:number[]=state.transactions.map((transaction:Transaction)=>transaction.amount);
    const income:number=amounts.filter(amount=>amount>0).reduce((total,amount)=>(total+=amount),0);
    const expense:number=(amounts.filter(amount=>amount<0).reduce((total,amount)=>(total+=amount),0)*-1);
    const totalBalance:number=amounts.reduce((total,amount)=>(total+=amount),0);

    function addTransaction(transaction:Transaction){
        setBoolUpdater(false);
        dispatch(
            {
                type:ActionType.AddTransaction,
                payload:transaction
            }
        );
    }

    function deleteTransaction(id:number){
        setBoolUpdater(false);
        dispatch(
            {
                type:ActionType.DeleteTransaction,
                payload:id,
            }
        );
    }

    function updateTransaction(updatedTransaction:Transaction){
        setBoolUpdater(false);
        dispatch(
            {
                type:ActionType.UpdateTransaction,
                payload:updatedTransaction
            }
        );
    }
    
    function update(id:number){
        setUpdater(state.transactions.filter((transaction:Transaction)=>transaction.id===id));
        setBoolUpdater(true);
    }

    useEffect(() => {
        localStorage.setItem('transactions',JSON.stringify(state.transactions))
    }, [state.transactions])

    const animateNumber=(number:number)=>{
        return <AnimatedNumber value={number} formatValue={(n:Number)=>numeral(n).format("$0,0.00")}/>
    }

    const initialState2:InitialState2={   
        transactions:state.transactions,
        income,expense,totalBalance,
        updater,boolUpdater,
        addTransaction,deleteTransaction,
        updateTransaction,update,animateNumber,
    }

    return(
        <TransactionContext.Provider value={initialState2}>
            {children}
        </TransactionContext.Provider>
    ); 
}   