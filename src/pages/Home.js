import React from 'react'
import './Home.css'
import TransactionForm from './TransactionForm/TransactionForm'
import TransactionRecord from './TransactionRecord/TransactionRecord'

const Home = () => {
    return (
        <>
            <div className='home'>
                <TransactionForm/>
                <TransactionRecord/>
            </div>
        </>
    )
}

export default Home