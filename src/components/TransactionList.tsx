import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faPen,faArrowAltCircleDown,faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import '../App.css';



const TransactionList=()=>{
    const [arrow,setArrow]=useState(faArrowAltCircleDown);
    const [toggleList,setToggleList]=useState({display:'none'});

    const changeArrow=()=>{
        if(toggleList.display==='none')
        setToggleList({display:'flex'});
        else
        setToggleList({display:'none'});

       arrow===faArrowAltCircleUp? setArrow(faArrowAltCircleDown):setArrow(faArrowAltCircleUp);
    }

    return(
        <div className="transaction">
            <div className='transaction-menu'>
                <div>
                    <h3>Transaction List</h3>
                </div>
                <div onClick={changeArrow}>
                    <FontAwesomeIcon icon={arrow}/>
                </div>
            </div>
            <div className="transaction-list">
                <ul className="list" style={toggleList} >
                    <li className="list-item-history" >
                        <span className="description">Mobile</span>
                        <span className="amount">
                            $0.00
                        </span>
                    </li>
                    <li className="list-item-actions">
                        <span  className="delete"><FontAwesomeIcon icon={faTrash}/></span>
                        <span  className="update"><FontAwesomeIcon icon={faPen}/></span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default TransactionList;