export const createDummyRecord = () => {

    const dummyRecord = {
        date: new Date(new Date().getFullYear(), new Date().getMonth(), Math.floor(Math.random() * 30) + 1).toISOString().split('T')[0],
        transactionType: Math.random() < 0.5 ? 'Credit' : 'Debit',
        credit: 0,
        debit: 0
    };

    dummyRecord.transactionType === 'Credit'
        ? dummyRecord.credit = Math.floor(Math.random() * 9 + 1) * 1000
        : dummyRecord.debit = Math.floor(Math.random() * 9 + 1) * 1000

    return dummyRecord;
}

export const createTransactionObj = (date, transactionType, amount) => {

    const newTransaction = {
        debit: 0,
        credit: 0,
        date: date,
        transactionType: transactionType,
    };

    newTransaction.transactionType === 'Credit'
        ? newTransaction.credit = amount
        : newTransaction.debit = amount

    return newTransaction;
}

export const insertNewRecord = (newRecord) => {

    const existingRecordsJSON = localStorage.getItem('TransactionsData');
    const existingRecords = existingRecordsJSON ? JSON.parse(existingRecordsJSON) : [];

    const updatedRecord = [...existingRecords, newRecord];

    const sortedRecord =  sortedRecordsByDate(updatedRecord);

    localStorage.setItem('TransactionsData', JSON.stringify(sortedRecord));

    return sortedRecord;
}

export const calculateBalance = (records) => {
    if (!records || records.length === 0) {
        return [];
    }

    let runningBalance = 0;
    const updatedRecords = records.map((record, index) => {
        let balance = 0;

        if (index === 0) {
            balance = record.transactionType === 'Credit' ? record.credit : -record.debit;
        } else {
            balance = runningBalance + (record.credit - record.debit);
        }

        runningBalance = balance;

        return {
            ...record,
            balance: balance
        };
    });

    return updatedRecords;
}

export const sortedRecordsByDate = (transactionRecords) => {
    let sortedRecords = [];

    if (transactionRecords && transactionRecords.length > 0) {
        sortedRecords = transactionRecords.slice().sort((a, b) => {
            return new Date(a.date) - new Date(b.date);
        });
    }

    return sortedRecords;
}

export const monthlyAverageBalance = (transactionRecords) => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;

    const getLastDayOfMonth = (year, month) => {
        const date = new Date(year, month, 0);
        return date.getDate();
    };

    const daysInMonth = month === 2 ? 28 : getLastDayOfMonth(year, month);

    const closingBalances = new Array(daysInMonth).fill(null);

    transactionRecords.forEach((transaction) => {

        const date = new Date(transaction.date);
        const dayOfMonth = date.getDate() - 1;
        const amount = transaction.transactionType === "Credit" ? transaction.amount : -transaction.amount;

        closingBalances[dayOfMonth] = amount;
    });

    for (let i = 1; i < daysInMonth; i++) {
        if (closingBalances[i] === null) closingBalances[i] = closingBalances[i - 1];
    }

    const totalClosingBalance = closingBalances.reduce((sum, balance) => sum + balance, 0);
    const mab = totalClosingBalance / daysInMonth;

    return mab;
}