import React, { useEffect, useState } from 'react'
import './Home.css'
import TransactionForm from './TransactionForm/TransactionForm'
import TransactionRecord from './TransactionRecord/TransactionRecord'
import StatementAnalysis from './StatementAnalysis/StatementAnalysis'

const Home = () => {

    const [transactionRecords, setTransactionRecords] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('TransactionsData')) || [];
        setTransactionRecords(data);
    }, [])

    const handleTransactionAdded = () => {
        const updatedTransactionData = JSON.parse(localStorage.getItem('TransactionsData')) || [];
        setTransactionRecords(updatedTransactionData);
    };

    return (
        <>
            <div className='home'>
                {/* <TransactionForm onTransactionAdded={handleTransactionAdded} /> */}
                <TransactionRecord transactionRecords={transactionRecords} onTransactionAdded={handleTransactionAdded} />
                <StatementAnalysis transactionRecords={transactionRecords} />
            </div>
        </>
    )
}

export default Home