import React, { useState } from 'react';
import './TransactionForm.css';
import moment from 'moment/moment';
import { AmountField, TransactionTypeField, DatePicker, AddTransactionButton } from './FormField';
import { createTransactionObj, insertNewRecord } from '../helperFuncrion/helperFunction';

const TransactionForm = ({ onTransactionAdded }) => {

    const [amount, setAmount] = useState();
    const [transactionType, setTransactionType] = useState('Credit');
    const [date, setDate] = useState(moment(new Date()).format('YYYY-MM-DD'));


    const claerField = () => {
        setAmount('');
        setTransactionType('Credit');
        setDate(moment(new Date()).format('YYYY-MM-DD'));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTransaction = createTransactionObj(date, transactionType, amount);
        const updatedRecord = insertNewRecord(newTransaction);

        console.log(updatedRecord);


        claerField();
        onTransactionAdded();

    };


    return (
        <>
            <div className='transactionForm'>
                <div className="form-container" style={{ position: 'fixed' }} >

                    <h2 className="form-title"> Add Transaction</h2>

                    <form onSubmit={handleSubmit} className="form">

                        <AmountField label="Amount" name="Amount" type="number" value={amount} onChange={(e) => setAmount(parseInt(e.target.value))} />
                        <TransactionTypeField label="Credit / Debit" name="transactionType" value={transactionType} onChange={(e) => setTransactionType(e.target.value)} />
                        <DatePicker label="Date" name="Date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />

                        <AddTransactionButton onSubmit={handleSubmit} />

                    </form>

                </div>
            </div>

        </>
    );
};

export default TransactionForm;
