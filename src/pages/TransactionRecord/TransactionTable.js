import moment from 'moment';
import React from 'react';
import { calculateBalance } from '../helperFuncrion/helperFunction';

const TransactionTable = ({ transactionRecords }) => {

    const updatedRecords = calculateBalance(transactionRecords);

    return (
        <table>
            <thead>
                <tr className='table-head'>
                    <th>Date</th>
                    <th>Transaction Type</th>
                    <th>Credit </th>
                    <th>Debit </th>
                    <th>Balance </th>
                </tr>
            </thead>

            <tbody>
                {
                    updatedRecords.map((record, index) => (
                        <tr key={index} className='table-column'>
                            <td>{moment(record.date).format('DD MMM YYYY')}</td>
                            <td>{record.transactionType}</td>
                            <td>{record.credit !== 0 && record.credit}</td>
                            <td>{record.debit !== 0 && record.debit}</td>
                            <td>{record.balance}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
};

export default TransactionTable;
