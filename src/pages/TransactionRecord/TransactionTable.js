import moment from 'moment';
import React from 'react';

const TransactionTable = ({ transactionRecords }) => {

    let sortedRecords = [];
    let reminingBalance = 0;

    if (transactionRecords && transactionRecords.length > 0) {
        sortedRecords = transactionRecords?.slice().sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });

        reminingBalance = transactionRecords.reduce((sum, record) => {
            record.creditDebit === 'Debit' && record.amount ? sum -= record.amount : sum += record.amount
            return sum;
        }, 0);
    }

    return (
        <table>
            <thead>
                <tr className='table-head'>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                {sortedRecords.map((record, index) => (
                    <tr key={index} className='table-column'>
                        <td>{moment(record.date).format('DD MMM YYYY')}</td>
                        <td>{record.creditDebit}</td>
                        <td>{record.amount}</td>
                    </tr>
                ))}
                <tr className='table-column'>
                    <td></td>
                    <td style={{ fontWeight: '700' }}> Balance</td>
                    <td>{reminingBalance}</td>
                </tr>
            </tbody>
        </table>
    );
};

export default TransactionTable;
