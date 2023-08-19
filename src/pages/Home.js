import React, { useEffect, useState } from 'react'
import './Home.css'
import TransactionForm from './TransactionForm/TransactionForm'
import TransactionRecord from './TransactionRecord/TransactionRecord'

const Home = () => {

    const [transactionRecords, setTransactionRecords] = useState([]);

    useEffect(() => {
        const tempData = JSON.parse(localStorage.getItem('TransactionsData')) || [];
        setTransactionRecords(tempData);
        console.log('tempData', tempData);
    }, [])

    const handleTransactionAdded = () => {
        const updatedTransactionData = JSON.parse(localStorage.getItem('TransactionsData')) || [];
        setTransactionRecords(updatedTransactionData);
    };

    return (
        <>
            <div className='home'>
                <TransactionForm />
                <TransactionRecord transactionRecords={transactionRecords} onTransactionAdded={handleTransactionAdded} />
            </div>
        </>
    )
}

export default Home