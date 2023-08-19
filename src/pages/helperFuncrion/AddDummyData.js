import React from 'react';

const AddDummyData = () => {

    const transactionRecords = JSON.parse(localStorage.getItem('Transactions')) || [];

    const addDummyRecords = () => {
        const dummyData = [
            {
                amount: 900,
                creditDebit: 'Credit',
                date: '2023-08-19'
            },
            {
                amount: 200,
                creditDebit: 'Debit',
                date: '2023-08-20'
            },
            {
                amount: 500,
                creditDebit: 'Credit',
                date: '2023-08-19'
            },
            {
                amount: 300,
                creditDebit: 'Debit',
                date: '2023-08-20'
            },
        ];

        const updatedRecords = [...transactionRecords, ...dummyData];
        localStorage.setItem('Transactions', JSON.stringify(updatedRecords));
        window.location.reload();
    };

    return <button onClick={addDummyRecords}>Add Dummy Data</button>

};

export default AddDummyData;
