import React, { useState } from 'react';
import './TransactionForm.css';
import moment from 'moment/moment';
import { InputField, SelectField, DatePicker, AddTransactionButton } from '../helperFuncrion/FormField';
import { createDummyRecord, createTransactionObj, insertNewRecord } from '../helperFuncrion/helperFunction';

const TransactionForm = ({ onTransactionAdded, setShowChartModal }) => {

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

    const handleAddDummyData = () => {
        const dummyRecord = createDummyRecord();
        insertNewRecord(dummyRecord);

        onTransactionAdded();
    }


    return (
        <>
            <div className="card transaction-form" >

                <div style={{display:'flex', justifyContent:'space-between', marginBottom:'1rem'}}>
                    <h2 className="card-title"> Add Transaction</h2>
                    <button type="submit" className='addDummyRecordBtn' onClick={handleAddDummyData}>
                        Add Dummy Record
                    </button>

                </div>


                <form onSubmit={handleSubmit} className="form">

                    <DatePicker label="Date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                    <SelectField label="Credit / Debit" options={["Credit", "Debit"]} onChange={(e) => setTransactionType(e.target.value)} />
                    <InputField label="Amount" type="number" value={amount} onChange={(e) => setAmount(parseInt(e.target.value))} />

                    <AddTransactionButton onSubmit={handleSubmit} isFormValid={!amount} />

                </form>
                
            </div>
        </>
    );
};

export default TransactionForm;
