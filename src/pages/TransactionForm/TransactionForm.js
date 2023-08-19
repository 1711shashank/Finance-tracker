import React, { useState } from 'react';
import './TransactionForm.css';
import moment from 'moment/moment';
import { AmountField, TransactionTypeField, DatePicker, AddTransactionButton } from './FormField';
import AddDummyData from '../helperFuncrion/AddDummyData';

const TransactionForm = () => {

    const [amount, setAmount] = useState();
    const [creditDebit, setCreditDebit] = useState('Credit');
    const [date, setDate] = useState(moment(new Date()).format('YYYY-MM-DD'));


    const claerField = () => {
        setAmount('');
        setCreditDebit('Credit');
        setDate(moment(new Date()).format('YYYY-MM-DD'));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(amount, creditDebit, date);

        const newTransaction = { amount, creditDebit, date }

        const existingTransactions = JSON.parse(localStorage.getItem('TransactionsData')) || [];
        const updatedTransactions = [...existingTransactions, newTransaction];
        localStorage.setItem('TransactionsData', JSON.stringify(updatedTransactions));

        claerField();
    };


    return (
        <>
            <div className='TransactionForm'>
                <div className="form-container">

                    <h2 className="form-title"> Add Transaction</h2>

                    <form onSubmit={handleSubmit} className="form">

                        <AmountField label="Amount" name="Amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                        <TransactionTypeField label="Credit / Debit" name="creditDebit" value={creditDebit} onChange={(e) => setCreditDebit(e.target.value)} />
                        <DatePicker label="Date" name="Date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />

                        <AddTransactionButton onSubmit={handleSubmit} />

                    </form>

                    <AddDummyData />
                </div>
            </div>

        </>
    );
};

export default TransactionForm;
