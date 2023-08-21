import React, { useEffect, useState } from 'react'
import './Home.css'
import TransactionForm from './TransactionForm/TransactionForm'
import TransactionRecord from './TransactionRecord/TransactionRecord'
import StatementAnalysis from './StatementAnalysis/StatementAnalysis'
import Header from './Header'

const Home = () => {

    const [showChartModal, setShowChartModal] = useState(false);
    const [transactionRecords, setTransactionRecords] = useState([]);

    useEffect(() => {

        showChartModal
            ? document.body.classList.add('modal-open')
            : document.body.classList.remove('modal-open')

    }, [showChartModal]);

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

                <Header onTransactionAdded={handleTransactionAdded} setShowChartModal={setShowChartModal} />

                <div className='body'>
                    <TransactionForm onTransactionAdded={handleTransactionAdded} />
                    <TransactionRecord transactionRecords={transactionRecords} />
                </div>

            </div>

            {
                showChartModal
                && <StatementAnalysis setShowChartModal={setShowChartModal} />
            }
        </>
    )
}

export default Home