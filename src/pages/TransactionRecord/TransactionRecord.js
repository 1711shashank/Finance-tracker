import React, { useEffect } from 'react'
import './TransactionRecord.css'

const TransactionRecord = () => {

    useEffect(() => {
        const transactionRecords = JSON.parse(localStorage.getItem('transactions')) || [];

        console.log(transactionRecords);
    })

    return (
        <>
            <div className='transactionRecord'>
                

            </div>
        </>
    )
}

export default TransactionRecord