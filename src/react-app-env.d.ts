/// <reference types="react-scripts" />
declare module '*.jpg';
declare module "animated-number-react";


interface Transaction{
    id:number,
    description:string,
    amount:number,
}

interface InitialState1{
    transactions:Transaction[],
}

interface InitialState2{
    transactions:Transaction[],
    income:number,
    expense:number,
    totalBalance:number,
    updater:Transaction[],
    boolUpdater:boolean,
    addTransaction:(transaction:Transaction)=>void,
    deleteTransaction:(id:number)=>void,
    updateTransaction:(updatedTransaction:Transaction)=>void,
    update:(id:number)=>void,
    animateNumber:(number:number)=>any,
}

type State=InitialState|InitialState2;

enum ActionType {
    AddTransaction = 'ADD_TRANSACTION',
    DeleteTransaction = 'DELETE_TRANSACTION',
    UpdateTransaction = 'UPDATE_TRANSACTION',
}

interface AddTransaction{
    type:ActionType.AddTransaction,
    payload:Transaction,
}

interface DeleteTransaction{
    type:ActionType.DeleteTransaction,
    payload:number,
}

interface UpdateTransaction{
    type:ActionType.UpdateTransaction,
    payload:Transaction,
}

type TransactionActions=AddTransaction|DeleteTransaction|UpdateTransaction;


